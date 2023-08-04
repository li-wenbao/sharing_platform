<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :permission="permissionList" :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel"
            @row-update="rowUpdate" @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad" @tree-load="treeLoad">
            <template slot="menuLeft">
                <!-- <button type="button" @click="$refs.crud.rowAdd()" 
                  class="el-button el-button--primary el-button--small">
                    <i class="el-icon-plus"></i>
                    <span>
                        新 增
                    </span>
                </button> -->
                <el-button type="button" size="small" icon="el-icon-delete" @click="rowView(row, index)">查 看
                </el-button>
                <el-button type="button" size="small" icon="el-icon-delete" @click="rowEdit(row, index)">修 改
                </el-button>
            </template>
            <!-- <template #menu="{ size, row, index }">
                <button type="button" @click="tip(row, index)" class="el-button el-button--text el-button--small">
                    <i class="el-icon-view"></i>
                    <span>
                        查 看
                    </span>
                </button>
                <button type="button" @click="tip(row, index)" class="el-button el-button--text el-button--small">
                    <i class="el-icon-edit"></i>
                    <span>
                        编 辑
                    </span>
                </button>
                <el-button @click="tip(row, index)" icon="el-icon-check" text type="primary"
                    :size="size">自定义菜单按钮</el-button>
            </template> -->
            <template slot-scope="scope" slot="coverurlForm">
                <imageUpload :disabled="scope.disabled" v-model="form.coverurl"></imageUpload>
            </template>
        </avue-crud>

        <el-dialog :visible.sync="showRowView" append-to-body title="商户信息" width="60%">
            <div style="height: 60px;" class="flex flex-1 align-center fz-20">商户基本信息</div> <!-- 商户基本信息 -->
            <avue-form :option="merchantBaseOption" v-model="merchantBaseForm"></avue-form>
            <div class="flex align-center">
                <div style="height: 60px;" class="flex flex-1 align-center fz-20">商户详情</div>
                <button type="button" @click="this.showRowAdd = true" class="el-button el-button--primary el-button--small">
                    <i class="el-icon-plus"></i>
                    <span>
                        新 增
                    </span>
                </button>
            </div>
            <!-- 商户详情 -->
            <avue-form :option="merchantOption" v-model="merchantForm">
                <template slot-scope="scope" slot="coverurlForm">
                    <imageUpload :disabled="scope.disabled" v-model="form.coverurl"></imageUpload>
                </template>
            </avue-form>
        </el-dialog>
        <el-dialog :visible.sync="showRowEdit" append-to-body title="修改商户详情" width="60%">
            <!-- 商户详情-修改 -->
            <avue-form :option="merchantEditOption" @submit="handleRowEditSave" v-model="merchantEditForm"></avue-form>
        </el-dialog>
        <el-dialog :visible.sync="showRowAdd" append-to-body title="修改商户详情" width="60%">
            <!-- 商户详情-新增 -->
            <avue-form :option="merchantAddOption" @submit="handleRowAddSave" v-model="merchantAddForm"></avue-form>
        </el-dialog>
    </basic-container>
</template>
  
<script>
import { getList, remove, update, add, getDetail, updateMerchantDetails } from "@/api/base/merchant";
import { mainOption, merchantOption, merchantBaseOption, merchantEditOption, merchantAddOption } from "@/const/base/merchant"
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            showRowAdd: false,
            showRowView: false,
            showRowEdit: false,
            form: {},
            merchantForm: {},
            merchantBaseForm: {},
            merchantEditForm: {},
            merchantAddForm: {},
            query: {},
            loading: true,
            selectionList: [],
            parentId: 0,
            page: {
                pageSize: 10,
                currentPage: 1,
                total: 0,
            },
            option: mainOption,
            merchantOption: merchantOption,
            merchantBaseOption: merchantBaseOption,
            merchantEditOption: merchantEditOption,
            merchantAddOption: merchantAddOption,
            data: []
        };
    },
    watch: {

    },
    computed: {
        ...mapGetters(["userInfo", "permission"]),
        permissionList() {
            return {
                addBtn: this.vaildData(this.permission.menu_add, false),
                viewBtn: this.vaildData(this.permission.menu_view, false),
                delBtn: this.vaildData(this.permission.menu_delete, false),
                editBtn: this.vaildData(this.permission.menu_edit, false)
            };
        },
        ids() {
            let ids = [];
            this.selectionList.forEach(ele => {
                ids.push(ele.menuid);
            });
            return ids.join(",");
        }
    },
    methods: {
        initData() {

        },
        rowSave(row, done, loading) {
            add(row).then((res) => {
                // 获取新增数据的相关字段
                const data = res.data;
                row.id = data.code;
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                done(row);
            }, error => {
                window.console.log(error);
                loading();
            });
        },
        rowUpdate(row, index, done, loading) {
            update(row).then(() => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                done(row);
            }, error => {
                window.console.log(error);
                loading();
            });
        },
        rowDel(row, index, done) {
            this.$confirm("确定将选择数据删除?", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    return remove(row.menuid);
                })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "操作成功!"
                    });
                    // 数据回调进行刷新
                    done(row);
                });
        },
        handleDelete() {
            if (this.selectionList.length === 0) {
                this.$message.warning("请选择至少一条数据");
                return;
            }
            this.$confirm("确定将选择数据删除?", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    return remove(this.ids);
                })
                .then(() => {
                    // 刷新表格数据并重载
                    this.data = [];
                    this.parentId = 0;
                    this.$refs.crud.refreshTable();
                    this.$refs.crud.toggleSelection();
                    // 表格数据重载
                    this.onLoad(this.page);
                    this.$message({
                        type: "success",
                        message: "操作成功!"
                    });
                });
        },
        searchReset() {
            this.query = {};
            this.parentId = 0;
            this.onLoad(this.page);
        },
        searchChange(params, done) {
            this.query = params;
            this.parentId = '';
            this.page.currentPage = 1;
            this.onLoad(this.page, params);
            done();
        },
        selectionChange(list) {
            this.selectionList = list;
        },
        selectionClear() {
            this.selectionList = [];
            this.$refs.crud.toggleSelection();
        },
        beforeOpen(done, type) {
            if (["add", "edit"].includes(type)) {
                this.initData();
            }
            if (["edit", "view"].includes(type)) {
                getDetail(this.form.miid).then(res => {
                    console.log("Mr. L 🚀 ~ res:", res)
                })

            }
            done();
        },
        // 商户详情-查看
        rowView(row, index) {
            getDetail("MI1690618070355").then(res => {
                // getDetail(row.miid).then(res => {
                if (res && res.data) {
                    let data = res.data.data;
                    this.merchantForm = data.shareMerchantDetails;
                    this.merchantBaseForm = data.merchant;
                }
            })
            this.showRowView = true;
        },
        // 商户详情-新增 handleRowAddSave
        // addMerchantInfo() {
        //     this.showRowAdd = true;
        // },
        // 商户详情-修改 保存
        handleRowAddSave(item, done) {
            console.log("213412423453", item)
            let params = {
                mdid: item.mdid,
                coverurl: item.coverurl,
                address: item.address,
                location: item.location,
                coordinate: item.coordinate
            }
            // if (item.name) {
            updateMerchantDetails(params).then((res) => {
                this.$message({
                    type: "success",
                    message: "保存成功!",
                });
                this.showRowEdit = false;
                done();
            }, (error) => {
                window.console.log(error);
                done();
            }
            );
        },
        // 商户详情-修改
        rowEdit(row, index) {
            getDetail("MI1690618070355").then(res => {
                // getDetail(row.miid).then(res => {
                if (res && res.data) {
                    let data = res.data.data;
                    this.merchantEditForm = data.shareMerchantDetails;
                }
            })
            this.showRowEdit = true;
        },
        // 商户详情-修改 保存
        handleRowEditSave(item, done) {
            console.log("213412423453", item)
            let params = {
                mdid: item.mdid,
                coverurl: item.coverurl,
                address: item.address,
                location: item.location,
                coordinate: item.coordinate
            }
            // if (item.name) {
            updateMerchantDetails(params).then((res) => {
                this.$message({
                    type: "success",
                    message: "保存成功!",
                });
                this.showRowEdit = false;
                done();
            }, (error) => {
                window.console.log(error);
                done();
            }
            );
        },
        beforeClose(done) {
            // this.$refs.crud.tableForm = {};
            // this.$refs.crud.value.parentid = "";
            // this.$refs.crud.value.addDisabled = false;
            // this.$refs.crud.option.column.filter((item) => {
            //     if (item.prop === "parentid") {
            //         item.value = "";
            //         item.addDisabled = false;
            //     }
            // });
            done();
        },
        currentChange(currentPage) {
            this.page.currentPage = currentPage;
        },
        sizeChange(pageSize) {
            this.page.pageSize = pageSize;
        },
        refreshChange() {
            this.onLoad(this.page, this.query);
        },
        onLoad(page, params = {}) {
            this.loading = true;
            getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
                this.data = res.data.data.merchantInfoList;
                this.loading = false;
                this.selectionClear();
            });
        },
    }
};
</script>
  
<style></style>
  
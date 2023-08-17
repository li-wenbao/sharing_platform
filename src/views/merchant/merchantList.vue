<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
            @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad">
            <template #menu="{ size, row, index }">
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click="openDetail(row, index, 1)">
                    <i class="iconfont iconicon_doc"></i>
                    详情
                </el-button>
                <el-button type="button" class="el-button el-button--text el-button--small" @click="openDetail(row, index)">
                    <i class="iconfont iconicon_photo"></i>
                    轮播图
                </el-button>
            </template>
        </avue-crud>
        <el-drawer :title="`商户详情`" :visible.sync="showShDetail" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="80%">
            <merchantDetail :tranceferData="tranceferDataForm"></merchantDetail>
        </el-drawer>
        <el-drawer :title="`商户轮播图`" :visible.sync="showShCarousel" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="80%">
            <merchantCarousel :tranceferData="tranceferDataForm"></merchantCarousel>
        </el-drawer>
    </basic-container>
</template>

<script>
import { getList, remove, update, add } from "@/api/base/merchant";
import { getMerchantTypeList } from "@/api/merchant/merchantList"
import { getList as getRoleList } from "@/api/user/role";
import { getList as accountList } from "@/api/user/account";
import { mainOption } from "@/const/merchant/merchantList"
import { randomLenNum } from "@/util/util"
import merchantDetail from "./merchantDetail";
import merchantCarousel from "./merchantCarousel";
export default {
    components: {
        merchantDetail, merchantCarousel
    },
    data() {
        return {
            showShDetail: false,
            showShCarousel: false,
            tranceferDataForm: {
                randomKey: randomLenNum(4, true),
            },
            form: {},
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
            data: []
        };
    },
    watch: {

    },
    computed: {
        ids() {
            let ids = [];
            this.selectionList.forEach(ele => {
                ids.push(ele.miid);
            });
            return ids.join(",");
        }
    },
    mounted() {
        this.initData()
    },
    methods: {
        initData() {
            let params = {}
            getMerchantTypeList(this.page.currentPage, this.page.pageSize, Object.assign(params, this.query)).then(res => {
                const column = this.findObject(this.option.column, "mtName");
                column.dicData = res.data.data.merchantTypeList;
            })

            if (this.form.status == '1') {
                const status = this.findObject(this.option.column, "status");
                status.editDisplay = false
            }
            else if (this.form.status == '2') {
                getRoleList(this.page.currentPage, this.page.pageSize, Object.assign(params, this.query)).then(res => {
                    const column = this.findObject(this.option.column, "roleid");
                    column.dicData = res.data.data.roleList;
                })
                const status = this.findObject(this.option.column, "status");
                status.dicData = [
                    {
                        label: "正常",
                        value: "2",
                    },
                    {
                        label: "注销",
                        value: "4",
                    },
                ]
            } else if (this.form.status == '4') {
                accountList(this.page.currentPage, this.page.pageSize, Object.assign(params, this.query)).then(res => {
                    const column = this.findObject(this.option.column, "roleid");
                    column.dicData = res.data.data.roleList;
                })
            }
        },
        openDetail(row, index, type) {
            this.tranceferDataForm.id = row.miid
            if (type == 1) {
                this.showShDetail = true
            } else {
                this.tranceferDataForm.status = row.status
                this.showShCarousel = true
            }
            this.tranceferDataForm.randomKey = randomLenNum(4, true)
        },
        rowSave(row, done, loading) {
            row.mtid = row.mtName  //重新给mtid赋值
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
                this.refreshChange()
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
            this.onLoad(this.page);
        },
        searchChange(params, done) {
            this.query = params;
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
            }
            done();
        },

        beforeClose(done) {
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

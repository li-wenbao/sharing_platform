<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
            @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad">
            <template slot="status" slot-scope="scope">
                <enable :data="scope.row.status" type="7"></enable>
            </template>
            <template slot="payStatus" slot-scope="scope">
                <enable :data="scope.row.payStatus" type="8"></enable>
            </template>
            <template slot="appStatus" slot-scope="scope">
                <enable :data="scope.row.appStatus" type="9"></enable>
            </template>
            <template #menu="{ size, row, index }">
                <el-button v-if="row.status == '1'" type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="openConfirm(row)">
                    <i class="iconfont iconicon_doc"></i>
                    审核
                </el-button>
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
            :before-close="handleCloseDetail" size="60%">
            <merchantDetail :tranceferData="tranceferDataForm"></merchantDetail>
        </el-drawer>
        <el-drawer :title="`商户轮播图`" :visible.sync="showShCarousel" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="60%">
            <merchantCarousel :tranceferData="tranceferDataForm"></merchantCarousel>
        </el-drawer>
        <WbPopups title="商户审核" :visible.sync="showConfirm" width="50%" height="58%">
            <avue-form ref="crud2" v-model="processFrom" :option="processOption" @change="selectChange" @submit="examine">
            </avue-form>
        </WbPopups>
    </basic-container>
</template>

<script>
import { getList, remove, update,editUpdate, add } from "@/api/base/merchant";
import { getMerchantTypeList } from "@/api/merchant/merchantList"
import { getList as getRoleList } from "@/api/user/role";
import { getList as accountList } from "@/api/user/account";
import { mainOption, processOption } from "@/const/merchant/merchantList"
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
            showConfirm: false,
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
            processOption: processOption,
            processFrom: {
                account: "",
                password: "",
                roleid: "",
                uid: "",
            },
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
                const column2 = this.findObject(this.option.column, "mtid");
                column2.dicData = res.data.data.merchantTypeList;
                const column12 = this.findObject(this.processOption.column, "mtid");
                column12.dicData = res.data.data.merchantTypeList;
            })
            getRoleList(this.page.currentPage, this.page.pageSize, Object.assign(params, this.query)).then(res => {
                const column = this.findObject(this.option.column, "roleid");
                column.dicData = res.data.data.roleList;
                const column1 = this.findObject(this.processOption.column, "roleid");
                column1.dicData = res.data.data.roleList;
            })

            accountList(this.page.currentPage, this.page.pageSize, Object.assign(params, this.query)).then(res => {
                const column = this.findObject(this.option.column, "uid");
                column.dicData = res.data.data.userList;
                const column1 = this.findObject(this.processOption.column, "uid");
                column1.dicData = res.data.data.userList;
            })

            if (this.form.status == '2') {
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
            }
        },
        openConfirm(row) {
            this.processFrom = row
            if (this.processFrom.status == '2') {
                const status2 = this.findObject(this.processOption.column, "status");
                status2.dicData = [
                    {
                        label: "正常",
                        value: "2",
                    },
                    {
                        label: "注销",
                        value: "4",
                    },
                ]
            }
            this.processFrom.account = row.phone;
            this.processFrom.password = "123456";
            this.showConfirm = true
        },
        selectChange(column) {
            let status = column.status
            let account = this.findObject(this.processOption.column, "account");
            let password = this.findObject(this.processOption.column, "password");
            let roleid = this.findObject(this.processOption.column, "roleid");
            let uid = this.findObject(this.processOption.column, "uid");
            account.display = false;
            password.display = false;
            roleid.display = false;
            uid.display = false;
            if (status == '2') {
                account.display = true;
                password.display = true;
                roleid.display = true;
                uid.display = false
            }
            if (status == '4') {
                account.display = false;
               password.display = false;
               roleid.display = false;
               uid.display = true
            }
        },
        openDetail(row, index, type) {
            this.tranceferDataForm.id = row.miid
            if (type == 1) {
                this.showShDetail = true
            } else {
                this.showShCarousel = true
            }
            this.tranceferDataForm.randomKey = randomLenNum(4, true)
        },
        rowSave(row, done, loading) {
            row.mtid = row.mtid  //重新给mtid赋值
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

        examine(row, index, done, loading) { //做审核
            row.mtid = row.mtid  //重新给mtid赋值
            update(row.miid,row.mtid,row.name,row.phone,row.contacts,row.sex,row.status,row.account,row.password,row.roleid,row.uid).then(() => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                this.refreshChange()
                done(row);
                this.showConfirm =false
            }, error => {
                window.console.log(error);
                loading();
            });
        },

        rowUpdate(row, index, done, loading) { //做修改
            row.mtid = row.mtid  //重新给mtid赋值
            editUpdate(row.miid,row.mtid,row.name,row.phone,row.contacts,row.sex).then(() => {
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

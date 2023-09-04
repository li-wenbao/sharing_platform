<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
            @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad">
            <template slot="status" slot-scope="scope">
                <enable :data="scope.row.status"></enable>
            </template>
            <template slot="paystatus" slot-scope="scope">
                <enable :data="scope.row.paystatus" type="8"></enable>
            </template>
            <template slot="appstatus" slot-scope="scope">
                <enable :data="scope.row.appstatus" type="9"></enable>
            </template>
            <template slot-scope="scope" slot="payurl">
                <el-image :src="scope.row.payurl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
            </template>
            <template slot-scope="scope" slot="payurlForm">
                <imageUpload :disabled="scope.disabled" :list="form.payurl" v-model="form.payurl" @on-change="onImgChange">
                </imageUpload>
            </template>
            <template #menu="{ size, row, index }">
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="openConfirm(row)">
                    <i class="iconfont iconicon_coinpurse_line"></i>
                    确认收款
                </el-button>
            </template>
        </avue-crud>
        <WbPopups title="" :visible.sync="showConfirm" width="50%" height="40%">
            <avue-form ref="crud" v-model="form" :option="payConfirmOption" @change="onSelectionChange"
                @submit="handleRowEditSave">
                <template slot-scope="scope" slot="payurl">
                    <imageUpload :disabled="scope.disabled" :list="form.payurl" v-model="form.payurl"
                        @on-change="onImgChange">
                    </imageUpload>
                </template>
            </avue-form>
        </WbPopups>
    </basic-container>
</template>
  
<script>
import { getList, update, add, confirmReceipt } from "@/api/signing/signingOrderList";
import { getList as signingList, } from "@/api/signing/signingList";
import { mainOption, payConfirmOption } from "@/const/signing/signingOrderList"
export default {
    data() {
        return {
            form: {},
            imgUrl: "",
            joid: "",
            swid: "",
            ways: "",
            showConfirm: false,
            selectionList: [],
            srcList: [],
            query: {},
            loading: true,
            parentId: 0,
            status: 1,
            page: {
                pageSize: 10,
                currentPage: 1,
                total: 0,
            },
            option: mainOption,
            payConfirmOption: payConfirmOption,
            data: []
        };
    },
    computed: {
        ids() {
            let ids = [];
            this.selectionList.forEach(ele => {
                ids.push(ele.id);
            });
            return ids.join(",");
        },
    },
    mounted() {
    },
    methods: {
        onSelectionChange(data) {
            this.wayList.forEach(ele => {
                if (data.swid == ele.swid) {
                    this.ways = ele.name;
                }
            });
        },
        handleAdd(row) {
            this.$refs.crud.rowAdd();
        },
        onImgChange(data) {
            this.imgUrl = data
        },
        openConfirm(row) {
            this.joid = row.joid
            this.showConfirm = true
        },
        handleRowEditSave(row, index, loading) {
            row.payurl = this.imgUrl
            row.joid = this.joid
            confirmReceipt(row).then((res) => {
                // 获取新增数据的相关字段
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                this.refreshChange()
                // done(row);
                this.showConfirm = false
            }, error => {
                window.console.log(error);
                loading();
            });
        },

        rowSave(row, done, loading) {
            add(row).then((res) => {
                // 获取新增数据的相关字段
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
        rowUpdate(row, index, done, loading) {
            row.payurl = this.imgUrl
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
        searchReset() {
            this.query = {};
            this.parentId = 0;
            this.onLoad(this.page, this.query);
        },
        searchChange(params, done) {
            this.query = params;
            this.page.currentPage = 1;
            this.onLoad(this.page, this.query);
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
            this.parentId = 0
            this.onLoad(this.page, this.query);
        },
        onLoad(page, params = {}) {
            this.loading = true;
            getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
                if (res && res.data) {
                    let data = res.data.data
                    if (data.orderList) {
                        this.data = data.orderList
                    }
                    this.page.total = data.count;
                }
                this.loading = false;
                if (this.showConfirm) {
                    this.selectionClear();
                }
            });
        },
    }
};
</script>
  
<style></style>
  
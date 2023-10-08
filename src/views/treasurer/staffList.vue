<!-- 员工列表 -->
<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
            @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad">
            <template slot-scope="scope" slot="codeurl">
                <el-image :src="scope.row.codeurl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
            </template>
            <template slot-scope="scope" slot="codeurlForm">
                <imageUpload :disabled="scope.disabled" :list="form.codeurl" v-model="form.codeurl"
                    @on-change="onImgChange">
                </imageUpload>
            </template>
            <template #menu="{ size, row, index }">
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click="openDetail(row, index, 1)">
                    <i class="iconfont iconicon_doc"></i>
                    提成明细
                </el-button>
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click="openDetail(row, index, 2)">
                    <i class="iconfont iconicon_doc"></i>
                    分佣明细
                </el-button>
            </template>
        </avue-crud>
        <el-drawer :title="`提成明细`" :visible.sync="showDetail" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="60%">
            <commissionList :tranceferData="tranceferDataForm" :kay='tranceferDataForm.randomKey'></commissionList>
        </el-drawer>
        <el-drawer :title="`分佣明细`" :visible.sync="showDividDetail" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="60%">
            <comDivideList :tranceferData="tranceferDataForm" :kay='tranceferDataForm.randomKey'></comDivideList>
        </el-drawer>
    </basic-container>
</template>
  
<script>
import { randomLenNum } from "@/util/util";
import { getList, update, add } from "@/api/treasurer/staffList";
import { mainOption } from "@/const/treasurer/staffList"
import commissionList from "./commissionList";
import comDivideList from "./comDivideList";
export default {
    components: {
        commissionList, comDivideList
    },
    data() {
        return {
            showDetail: false,
            showDividDetail: false,
            form: {},
            imgUrl: "",
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
            data: [],
            tranceferDataForm: {
                id:"",
                randomKey: randomLenNum(4, true),
            },
        };
    },
    computed: {
        ids() {
            let ids = [];
            this.selectionList.forEach(ele => {
                ids.push(ele.id);
            });
            return ids.join(",");
        }
    },
    mounted() {
    },
    methods: {
        handleAdd(row) {
            this.$refs.crud.rowAdd();
        },
        onImgChange(data) {
            this.imgUrl = data
        },
        openDetail(row, index, type) {
            this.tranceferDataForm.randomKey = randomLenNum(4, true)
            if (type == 1) {
                this.showDetail = true
            } else {
                this.showDividDetail = true
            }
            this.tranceferDataForm.id = row.uid
           
        },
        rowSave(row, done, loading) {
            row.iconurl = this.imgUrl
            add(row).then((res) => {
                // 获取新增数据的相关字段
                // const data = res.data.data;
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
            row.iconurl = this.imgUrl
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
                    if (data.returnList) {
                        this.data = data.returnList
                    }
                    this.page.total = data.count;
                }
                this.loading = false;
                this.selectionClear();
            });
        },
    }
};
</script>
  
<style></style>
  
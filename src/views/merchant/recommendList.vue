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
            <template slot-scope="scope" slot="coverurl">
                <el-image :src="scope.row.coverurl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
            </template>
            <template slot-scope="scope" slot="coverurlForm">
                <imageUpload :disabled="scope.disabled" :list="form.coverurl" v-model="form.coverurl"
                    @on-change="onImgChange">
                </imageUpload>
            </template>
            <template slot-scope="scope" slot="coveurlForm">
                <imageUpload :disabled="scope.disabled" :list="form.coveurl" v-model="form.coveurl"
                    @on-change="onImgChange">
                </imageUpload>
            </template>
            <template #menu="{ size, row, index }">
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click="openDetail(row, index, 1)">
                    <i class="iconfont iconicon_doc"></i>
                    详情
                </el-button>
            </template>
        </avue-crud>
        <el-drawer :title="`推荐位详情`" :visible.sync="showShDetail" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="60%">
            <recommendDetail :tranceferData="tranceferDataForm"></recommendDetail>
        </el-drawer>
    </basic-container>
</template>

<script>
import { getList, remove, update, add } from "@/api/merchant/recommendList";
import { mainOption } from "@/const/merchant/recommendList"
import { randomLenNum } from "@/util/util"
import recommendDetail from "./recommendDetail";
import recommendCarousel from "./recommendCarousel";
export default {
    components: {
        recommendDetail,
        recommendCarousel
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
            imgUrl: "",
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

        },
        onImgChange(data) {
            this.imgUrl = data
        },
        openConfirm(row) {
            this.joid = row.joid
            this.showConfirm = true
        },
        openDetail(row, index, type) {
            this.tranceferDataForm.id = row.rlid
            this.showShDetail = true
            this.tranceferDataForm.randomKey = randomLenNum(4, true)
        },
        rowSave(row, done, loading) {
            row.coveurl = this.imgUrl
            add(row.name, row.sort, row.coveurl).then((res) => {
                // 获取新增数据的相关字段
                const data = res.data;
                row.id = data.code;
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
        rowUpdate(row, index, done, loading) { //做审核
            row.coveurl = this.imgUrl
            update(row.rlid, row.name, row.sort, row.coveurl, row.status).then(() => {
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
                if (res && res.data) {
                    let data = res.data.data
                    if (data.recommendList) {
                        this.data = data.recommendList
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

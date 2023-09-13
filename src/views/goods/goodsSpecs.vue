<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
            @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset" @change="onChange"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange">
            <template slot="status" slot-scope="scope">
                <enable :data="scope.row.status"></enable>
            </template>
            <template slot-scope="scope" slot="surl">
                <el-image :src="scope.row.surl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
            </template>
            <template slot-scope="scope" slot="surlForm">
                <imageUpload :disabled="scope.disabled" :list="form.surl" v-model="form.surl" @on-change="onImgChange">
                </imageUpload>
            </template>
        </avue-crud>
    </basic-container>
</template>
  
<script>
import { getList, update, add } from "@/api/goods/goodsSpecs";
import { mainOption } from "@/const/goods/goodsSpecs"

export default {
    data() {
        return {
            form: {},
            imgUrl: "",
            cid: "",
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
            data: []
        };
    },
    props: {
        tranceferData: {
            type: Object,
        },
    },
    watch: {
        tranceferData: {
            handler(nowValue) {
                if (nowValue) {
                    this.cid = nowValue.id
                    this.onLoad(this.cid);
                }
            },
            deep: true,
        },
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
        this.cid = this.tranceferData.id
        this.onLoad(this.cid);
    },
    methods: {
        onChange(data) {
            let nowprice = data.discount / 100 * data.price
            data.nowprice = nowprice.toFixed(2)
        },
        handleAdd(row) {
            this.parentId = row.id;
            this.$refs.crud.rowAdd();
        },
        onImgChange(data) {
            this.imgUrl = data
        },

        rowSave(row, done, loading) {
            row.cid = this.tranceferData.id
            row.surl = this.imgUrl
            // cid,name,price,discount,stock,surl
            add(row.cid, row.name, row.price, row.discount, row.stock, row.surl).then((res) => {
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
            // row.cid = this.tranceferData.id
            row.surl = this.imgUrl
            update(row.sid, row.name, row.price, row.discount, row.stock, row.surl, row.status).then(() => {
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
            this.onLoad(this.cid);
        },
        searchChange(params, done) {
            this.query = params;
            this.page.currentPage = 1;
            this.onLoad(this.cid);
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
            this.onLoad(this.cid);
        },
        onLoad(cid) {
            this.loading = true;
            getList(cid).then(res => {
                if (res && res.data) {
                    let data = res.data.data
                    if (data.specList) {
                        data.specList.forEach((item, index) => {
                            this.srcList.push(item.surl)
                        })
                        this.data = data.specList
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
  
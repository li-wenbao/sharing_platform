<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
            @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange">
            <!-- <template slot="menuLeft">
                <el-button type="danger" size="small" icon="el-icon-delete" v-if="permission.dept_delete" plain
                    @click="handleDelete">删 除
                </el-button>
            </template> -->
            <template #menu="{ size, row, index }">
                <el-button style="color:#E6A23C" v-if="row.status=='1'" type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="onChangeStatus(row, index, 1)">
                    <i class="iconfont iconicon_roundclose"></i>
                    禁用
                </el-button>
                <el-button v-if="row.status=='2'" type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="onChangeStatus(row, index, 2)">
                    <i class="iconfont iconicon_roundadd"></i>
                    启用
                </el-button>
            </template>
            <template slot-scope="scope" slot="purl">
                <el-image :src="scope.row.purl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
            </template>
            <template slot-scope="scope" slot="purlListForm">
                <imageUpload :disabled="scope.disabled" :list="form.purlList" v-model="form.purlList"
                    @on-change="onImgChange"></imageUpload>
            </template>
            <template slot-scope="scope" slot="purlForm">
                <imageUpload :disabled="scope.disabled" :list="form.purl" v-model="form.purl" @on-change="onImgChange">
                </imageUpload>
            </template>
        </avue-crud>
    </basic-container>
</template>
  
<script>
import { getList, update, add } from "@/api/goods/goodsCarousel";
import { mainOption } from "@/const/goods/goodsCarousel"

export default {
    data() {
        return {
            imgUrl: "",
            cid: "",
            status: '',
            form: {},
            srcList: [],
            selectionList: [],
            query: {},
            loading: true,
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
                    this.status = nowValue.status
                    this.onLoad(this.cid);
                }
            },
            deep: true,
        },
    },
    mounted() {
        this.cid = this.tranceferData.id
        this.onLoad(this.cid);
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
    methods: {
        handleAdd(row) {
            this.$refs.crud.rowAdd();
        },
        onImgChange(data) {
            this.imgUrl = data
        },
        rowSave(row, done, loading) {
            row.cid = this.cid
            row.purlList = this.imgUrl
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
        onChangeStatus(row, index,type){
            if(type=='1'){
                row.status = '2'   
            }else{
                row.status = '1'    
            }
            update(row).then(() => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                this.refreshChange()
            }, error => {
                if(type=='1'){
                   row.status = '1'   
                }else{
                   row.status = '2'    
                }
                window.console.log(error);
            });
        },
        rowUpdate(row, index, done, loading) {
            update(row.ctid, row.name, row.sort, row.status).then(() => {
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
            this.onLoad(this.cid, this.query.status);
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
                if (["view"].includes(type)) {
                    this.disabled = false
                }
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
            this.onLoad(this.cid, this.status);
        },
        onLoad(cid, status) {
            this.loading = true;
            getList(cid, status).then(res => {
                if (res && res.data) {
                    let data = res.data.data
                    if (data.pictureList) {
                        data.pictureList.forEach((item, index) => {
                            this.srcList.push(item.purl)
                        })
                        this.data = data.pictureList
                    }
                }
                this.loading = false;
                this.selectionClear();
            });
        },
    }
};
</script>
  
<style></style>
  
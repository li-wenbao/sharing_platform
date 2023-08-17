<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :permission="permissionList" :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel"
            @row-update="rowUpdate" @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad">
            <template slot-scope="scope" slot="curl">
                <el-image :src="scope.row.curl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
            </template>
            <template slot-scope="scope" slot="curlForm">
                <imageUpload :disabled="scope.disabled" :list="form.curl" v-model="form.curl" @on-change="onImgChange">
                </imageUpload>
            </template>
            <template slot="status" slot-scope="scope">
                <el-switch v-model="scope.row.status" @change="handleChangeStatus($event, scope.row, scope.$index)"
                    active-value='1' inactive-value='2' active-color="#13ce66" inactive-color="#ff4949" active-text="正常"
                    inactive-text="禁用">
                </el-switch>
            </template>
            <template #menu="{ size, row, index }">
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="openDetail(row, index, 1)">
                    <i class="iconfont iconicon_doc"></i>
                    详情
                </el-button>
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="openDetail(row, index, 2)">
                    <i class="iconfont iconicon_photo"></i>
                    轮播图
                </el-button>
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="openDetail(row, index, 3)">
                    <i class="iconfont iconicon_study"></i>
                    规格
                </el-button>
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="toRelease(row, index)">
                    <i class="iconfont iconicon_share"></i>
                    发布
                </el-button>
            </template>
        </avue-crud>
        <el-drawer :title="`商品详情`" :visible.sync="showShDetail" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="80%">
            <goodsDetail :tranceferData="tranceferDataForm"></goodsDetail>
        </el-drawer>
        <el-drawer :title="`商品轮播图`" :visible.sync="showShCarousel" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="80%">
            <goodsCarousel :tranceferData="tranceferDataForm"></goodsCarousel>
        </el-drawer>
        <el-drawer :title="`商品规格`" :visible.sync="showShSpecs" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="80%">
            <goodsSpecs :tranceferData="tranceferDataForm"></goodsSpecs>
        </el-drawer>
    </basic-container>
</template>
  
<script>
import { randomLenNum } from "@/util/util"
import { getList, update, add,release} from "@/api/goods/goodsList";
import { getList as getListCtidType } from "@/api/goods/goodsCategory";
import { mainOption } from "@/const/goods/goodsList"
import goodsDetail from "./goodsDetail";
import goodsCarousel from "./goodsCarousel";
import goodsSpecs from "./goodsSpecs";
export default {
    components: {
        goodsDetail, goodsCarousel, goodsSpecs
    },
    data() {
        return {
            showShDetail: false,
            showShCarousel: false,
            showShSpecs: false,
            tranceferDataForm: {
                randomKey: randomLenNum(4, true),
            },
            imgUrl: "",
            form: {},
            selectionList: [],
            srcList: [],
            query: {},
            loading: true,
            status: "1",
            page: {
                pageSize: 10,
                currentPage: 1,
                total: 0,
            },
            option: mainOption,
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
        }
    },
    mounted() {
        this.initData()
    },
    methods: {
        initData() {
            let params = {}
            getListCtidType(this.page.currentPage, this.page.pageSize, Object.assign(params, this.query)).then(res => {
                const column = this.findObject(this.option.column, "ctidName");
                column.dicData = res.data.data.commodityTypeList;
            })
        },
        onImgChange(data) {
            this.imgUrl = data
        },

        openDetail(row, index, type) {
            this.tranceferDataForm.randomKey = randomLenNum(4, true)
            this.tranceferDataForm.id = row.cid
            if (type == 1) {
                this.showShDetail = true
            } else if (type == 2) {
                this.showShCarousel = true
            } else {
                this.showShSpecs = true
            }
        },
        handleAdd(row) {
            this.$refs.crud.rowAdd();
        },
        rowSave(row, done, loading) {
            row.ctid = row.ctidName
            row.curl = this.imgUrl
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
        handleChangeStatus(event,row){
            if(row.status=='1'){
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
                if(row.status=='1'){
                   row.status = '1'   
                }else{
                   row.status = '2'    
                }
                window.console.log(error);
            });
        },
        rowUpdate(row, index, done, loading) {
            row.curl = this.imgUrl
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
                if (row.status === '2') {
                    row.status = "2";
                }else{
                    row.status = "1";
                }
                loading();
            });
        },
        // 发布商品
        toRelease(row, index) {
            release(row).then(() => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                this.refreshChange()
            }, error => {
                window.console.log(error);
                loading();
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
                this.form.ctidName = this.form.typeName
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
                    if (data.returnList) {
                        data.returnList.forEach((item, index) => {
                            this.srcList.push(item.curl)
                        })
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
  
<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :permission="permissionList" :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel"
            @row-update="rowUpdate" @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad">
            <!-- <template #menu="{ size, row, index }">
                <button type="button" @click="rowView(row, index)" class="el-button el-button--text el-button--small">
                    <i class="el-icon-view"></i>
                    <span>
                        查看商品详情
                    </span>
                </button>
                <button type="button" @click="rowEdit(row, index)" class="el-button el-button--text el-button--small">
                    <i class="el-icon-edit"></i>
                    <span>
                        修改商品详情
                    </span>
                </button>
                <button type="button" @click="showRowAdd = true" class="el-button el-button--text el-button--small">
                    <i class="el-icon-plus"></i>
                    <span>
                        新增商品详情
                    </span>
                </button>
            </template> -->
            <template slot-scope="scope" slot="curl">
                <el-image :src="scope.row.curl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
            </template>
            <template slot-scope="scope" slot="curlForm">
                <imageUpload :disabled="scope.disabled" :list="form.curl" v-model="form.curl"></imageUpload>
            </template>
            <template #menu="{ size, row, index }">
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click="openDetail(row, index, 1)">
                    <i class="el-icon-view"></i>
                    商户详情
                </el-button>
                <el-button type="button" class="el-button el-button--text el-button--small" @click="openDetail(row, index)">
                    <i class="el-icon-view"></i>
                    商户轮播图
                </el-button>
            </template>
        </avue-crud>
        <el-drawer :title="`商品详情`" :visible.sync="showShDetail" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="80%">
            <!-- <avue-form :option="goodsDtailsOption" v-model="goodsDtailsForm"></avue-form> -->
            <goodsDetail :tranceferData="tranceferDataForm"></goodsDetail>
        </el-drawer>
        <el-drawer :title="`商品轮播图`" :visible.sync="showShCarousel" direction="rtl" :append-to-body="true"
            :before-close="handleCloseDetail" size="80%">
            <goodsCarousel :tranceferData="tranceferDataForm"></goodsCarousel>
        </el-drawer>

        <!-- <WbPopups :visible.sync="showRowView" title="查看商品详情" width="60%" height="80%">
            <div class="avueForm-content">
                <avue-form :option="goodsDtailsOption" v-model="goodsDtailsForm"></avue-form>
            </div>
        </WbPopups> -->
        <WbPopups :visible.sync="showRowEdit" title="修改商品详情" width="60%" height="80%">
            <div class="avueForm-content">
                <avue-form :option="goodsEditOption" v-model="goodsEditForm" @submit="handleRowEditSave"></avue-form>
            </div>
        </WbPopups>
        <WbPopups :visible.sync="showRowAdd" title="新增商品详情" width="60%" height="80%">
            <div class="avueForm-content">
                <avue-form :option="goodsEditOption" v-model="goodsEditForm" @submit="handleRowAddSave"></avue-form>
            </div>
        </WbPopups>
    </basic-container>
</template>
  
<script>
import { randomLenNum } from "@/util/util"
import { getList, update, add } from "@/api/goods/goodsList";
import { getDetail, update as updateDtails } from "@/api/goods/goodsDtails";
import { goodsDtailsOption, goodsEditOption } from "@/const/goods/goodsDtails";
import { mainOption } from "@/const/goods/goodsList"
import { mapGetters } from "vuex";
import goodsDetail from "./goodsDetail";
import goodsCarousel from "./goodsCarousel";
import website from '@/config/website';

export default {
    components:{
        goodsDetail,goodsCarousel
    },
    data() {
        return {
            showShDetail: false,
            showShCarousel: false,
            tranceferDataForm: {
                randomKey: randomLenNum(4, true),
            },
            showRowView: false,
            goodsDtailsOption: goodsDtailsOption,
            goodsDtailsForm: {},
            showRowEdit: false,
            goodsEditOption: goodsEditOption,
            goodsEditForm: {},
            showRowAdd: false,
            form: {},
            selectionList: [],
            srcList:[],
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
        openDetail(row, index, type) {
            this.tranceferDataForm.randomKey = randomLenNum(4, true)
            this.tranceferDataForm.id = row.cid
            if (type == 1) {
                this.showShDetail = true
            } else {
                this.tranceferDataForm.status = row.status
                this.showShCarousel = true
            }
        },
        handleAdd(row) {
            this.$refs.crud.rowAdd();
        },
        // 商品详情-查看
        rowView(row, index) {
            getDetail(row.cid).then(res => {
                if (res && res.data) {
                    let data = res.data.data;
                    this.goodsDtailsForm = data.commodityDesc;
                }
            })
            this.showRowView = true;
        },
        // 商品详情-修改
        rowEdit(row, index) {
            getDetail(row.cid).then(res => {
                if (res && res.data) {
                    let data = res.data.data;
                    this.goodsEditForm = data.commodityDesc;
                }
            })
            this.showRowEdit = true;
        },
        // 商户详情-修改 保存
        handleRowEditSave(item, done) {
            updateDtails(item.sid, item.intr, item.desc, item.terms).then((res) => {
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
        // 商户详情-新增 保存
        handleRowAddSave(item, done) {
            updateDtails(item.sid, item.intr, item.desc, item.terms).then((res) => {
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
        rowSave(row, done, loading) {
            add(row.ctid, row.name, row.curl, row.type).then((res) => {
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
            update(row.ctid, row.cid, row.name, row.curl, row.type, row.status).then(() => {
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
                    data.returnList.forEach((item,index)=>{
                        this.srcList.push(item.curl)
                    })
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
  
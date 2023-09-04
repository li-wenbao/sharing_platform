<template>
   <div class="flex-1 p-1">
      <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
         :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
         @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset" @selection-change="selectionChange"
         @current-change="currentChange" @size-change="sizeChange" @refresh-change="refreshChange">
         <!-- <template slot="status" slot-scope="scope">
            <enable :data="scope.row.status"></enable>
         </template> -->
         <template slot-scope="scope" slot="purl">
            <el-image :src="scope.row.purl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
         </template>
         <template slot-scope="scope" slot="purlForm">
            <imageUpload :disabled="scope.disabled" :list="form.purl" v-model="form.purl" @on-change="onImgChange">
            </imageUpload>
         </template>
         <template slot="status" slot-scope="scope">
            <el-switch v-model="scope.row.status" @change="handleChangeStatus($event, scope.row, scope.$index)"
               active-value='1' inactive-value='2' active-color="#13ce66" inactive-color="#ff4949" active-text="正常"
               inactive-text="禁用">
            </el-switch>
         </template>
      </avue-crud>
   </div>
</template>
 
<script>
import { getRecommendPictureList, saveRecommendPicture, updateRecommendPicture } from "@/api/merchant/recommendList";
import { carouselOption } from "@/const/merchant/recommendList"
import { mapGetters } from "vuex";
export default {
   data() {
      return {
         form: {},
         selectionList: [],
         srcList: [],
         imgUrl: "",
         imgUrl2: "",
         query: {},
         loading: true,
         parentId: 0,
         page: {
            pageSize: 10,
            currentPage: 1,
            total: 0,
         },
         option: carouselOption,
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
               this.rdid = nowValue.id,
                  this.onLoad(this.rdid);
            }
         },
         deep: true,
      },
   },
   mounted() {
      if (this.tranceferData.id) {
         this.rdid = this.tranceferData.id,
         this.onLoad(this.rdid);
      }
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
         row.rdid = this.tranceferData.id
         row.purl = this.imgUrl
         saveRecommendPicture(row).then((res) => {
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
      handleChangeStatus(event, row) {
         updateRecommendPicture(row).then(() => {
            this.$message({
               type: "success",
               message: "操作成功!"
            });
            // 数据回调进行刷新
            this.refreshChange()
         }, error => {
            if (row.status == '1') {
               row.status = '1'
            } else {
               row.status = '2'
            }
            window.console.log(error);
         });
      },
      rowUpdate(row, index, done, loading) {
         // row.rpid = this.imgUrl
         updateRecommendPicture(row).then(() => {
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
         this.onLoad(this.rdid);
      },
      searchChange(params, done) {
         this.query = params;
         this.page.currentPage = 1;
         this.onLoad(this.rdid);
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
         this.onLoad(this.rdid);
      },
      onLoad(rdid) {
         this.loading = true;
         getRecommendPictureList(rdid).then(res => {
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
 
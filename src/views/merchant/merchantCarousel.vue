<template>
   <div class="flex-1 p-1">
      <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
         :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
         @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset" @selection-change="selectionChange"
         @current-change="currentChange" @size-change="sizeChange" @refresh-change="refreshChange">
         <template slot="status" slot-scope="scope">
            <enable :data="scope.row.status"></enable>
         </template>
         <template slot-scope="scope" slot="purl">
            <el-image :src="scope.row.purl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
         </template>
         <template slot-scope="scope" slot="purlList">
            <el-image :src="scope.row.purlList" class="list-images-box-1" :preview-src-list="srcList"></el-image>
         </template>
         <template slot-scope="scope" slot="purlListForm">
            <imageUpload :disabled="scope.disabled" :list="form.purlList" v-model="form.purlList"></imageUpload>
         </template>
         <template slot-scope="scope" slot="purlForm">
            <imageUpload :disabled="scope.disabled" :list="form.purl" v-model="form.purl"></imageUpload>
         </template>
      </avue-crud>
   </div>
</template>
 
<script>
import { getList, update, add } from "@/api/merchant/merchantCarousel";
import { mainOption } from "@/const/merchant/merchantCarousel"
import { mapGetters } from "vuex";
export default {
   data() {
      return {
         form: {},
         selectionList: [],
         srcList: [],
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
               this.query = {
                  miid: nowValue.id,
                  status: nowValue.status
               }
               this.onLoad(this.page, this.query);
            }
         },
         deep: true,
      },
   },
   mounted() {
      if (this.tranceferData.id) {
         this.query = {
            miid: this.tranceferData.id,
            status: this.tranceferData.status
         }
         this.onLoad(this.page, this.query);
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
      rowSave(row, done, loading) {
         row.miid = this.query.miid
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
               if (data.pictureList) {
                  data.pictureList.forEach((item, index) => {
                     this.srcList.push(item.purl)
                  })
                  this.data = data.pictureList
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
 
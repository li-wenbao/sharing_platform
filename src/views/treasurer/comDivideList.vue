<template>
   <div class="p-2 pt-0">
      <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
         :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
         @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset" @selection-change="selectionChange"
         @current-change="currentChange" @size-change="sizeChange" @refresh-change="refreshChange">
      </avue-crud>
   </div>
</template>

<script>
import { commissionOption } from "@/const/treasurer/staffList"
import { getCommission } from "@/api/treasurer/staffList";
export default {
   data() {
      return {
         uid: "",
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
         option: commissionOption,
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
               this.uid = nowValue.id;
               this.onLoad(this.uid);
            }
         },
         deep: true,
      },
   },
   mounted() {
      if (this.tranceferData.id) {
         this.uid = this.tranceferData.id
         this.onLoad(this.uid);
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
      searchReset() {
         this.query = {};
         this.parentId = 0;
         this.onLoad(this.uid);
      },
      searchChange(params, done) {
         this.query = params;
         this.page.currentPage = 1;
         this.onLoad(this.uid);
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
         this.onLoad(this.uid);
      },
      onLoad(uid) {
         this.loading = true;
         getCommission(uid).then(res => {
            if (res && res.data) {
               let data = res.data.data
               if (data.returnList) {
                  this.data = data.returnList
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
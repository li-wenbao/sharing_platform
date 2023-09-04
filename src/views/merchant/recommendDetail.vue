<template>
   <div class="p-2 pt-0" :key="tranceferDetail.randomKey">
      <div v-show="!showAdd">
         <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
               <div class="avueForm-content">
                  <avue-form :option="viewOption" v-model="viewForm">
                  </avue-form>
               </div>
            </el-tab-pane>
            <el-tab-pane label="修改详情" name="edit">
               <div class="avueForm-content">
                  <avue-form :option="editOption" v-model="viewForm" @submit="handleRowEditSave">
                  </avue-form>
               </div>
            </el-tab-pane>
            <el-tab-pane label="轮播图" name="list">
               <div class="avueForm-content">
                  <recommendCarousel :tranceferData="tranceferDetail"></recommendCarousel>
               </div>
            </el-tab-pane>
         </el-tabs>
      </div>
      <div v-show="showAdd">
         <div class="flex-all-center comWidth100 text-blue">新增详情</div>
         <avue-form :option="addOption" v-model="viewForm" @submit="handleRowAddSave">
         </avue-form>
      </div>
   </div>
</template>

<script>
import { randomLenNum } from "@/util/util";
import { getRecommendDesc, saveRecommendDesc, updateRecommendDesc } from "@/api/merchant/recommendList";
import { viewOption, editOption, addOption } from "@/const/merchant/recommendList"
import recommendCarousel from "./recommendCarousel";
export default {
   components: {
      recommendCarousel
   },
   data() {
      return {
         showAdd: false,
         rlid: "",
         rdid: "",
         activeName: "first",
         tranceferDetail: {
            pageType: "",
            randomKey: randomLenNum(4, true),
         },
         srcList: [],
         viewOption: viewOption,
         viewForm: {},
         editOption: editOption,
         editForm: {},
         addOption: addOption,
         editForm2: {},
      }
   },
   props: {
      tranceferData: {
         type: Object,
      },
   },
   watch: {
      tranceferData: {
         handler(newData) {
            this.rlid = newData.id
            this.onLoadFormData();
         },
         deep: true,
      },
   },
   mounted() {
      this.rlid = this.tranceferData.id
      this.onLoadFormData();
   },
   methods: {
      handleClick(tab, event) {
         switch (tab.name) {
            case "first":
               this.tranceferDetail.pageType = "first";
               this.tranceferDetail.randomKey = randomLenNum(4, true)
               break;
            case "edit":
               this.tranceferDetail.pageType = "edit";
               this.onLoadFormData()
               break;
            case "list":
               this.tranceferDetail.pageType = "list";
               this.tranceferDetail.id = this.rdid
               this.tranceferDetail.randomKey = randomLenNum(4, true)
               break;
         }
      },
      onLoadFormData() {
         this.viewForm = {}
         this.tranceferDetail.id = this.tranceferData.id;
         getRecommendDesc(this.rlid).then(res => {
            if (res && res.data) {
               let data = res.data.data;
               if (data.shareRecommendDetails) {
                  this.viewForm = data.shareRecommendDetails;
                  this.rdid = this.viewForm.rdid
                  this.showAdd = false
               } else {
                  this.showAdd = true
               }
               this.tranceferDetail.randomKey = randomLenNum(4, true)
            }
         })
      },
      // 商品详情-新增 保存
      handleRowAddSave(item, done) {
         item.rlid = this.tranceferDetail.id
         saveRecommendDesc(item).then((res) => {
            this.$message({
               type: "success",
               message: "保存成功!",
            });
            this.activeName = "first"
            this.tranceferDetail.randomKey = randomLenNum(4, true)
            this.onLoadFormData()
            done();
         }, (error) => {
            window.console.log(error);
            done();
         });
      },
      // 商品详情-修改 保存
      handleRowEditSave(item, done) {
         item.rlid = this.rlid
         updateRecommendDesc(item.rdid, item.labelone, item.labetwo, item.blurb, item.toneone, item.tonetwo).then((res) => {
            this.$message({
               type: "success",
               message: "保存成功!",
            });
            this.activeName = "first"
            this.showAdd = false
            this.onLoadFormData()
            done();
         }, (error) => {
            window.console.log(error);
            done();
         }
         );
      },
   }
}
</script>

<style></style>
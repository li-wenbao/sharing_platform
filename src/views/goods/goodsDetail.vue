<template>
   <div class="p-2 pt-0" :key="tranceferDetail.randomKey">
      <div v-show="!showAdd">
         <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
               <div class="avueForm-content">
                  <div class="comWidth100 flex align-center fz-18">
                     商品详情
                  </div>
                  <avue-form :option="goodsDetailsOption" v-model="goodsDetailsForm">
                     <template slot-scope="scope" slot="intr">
                        <div v-if="scope.disabled" class="initTinymce" v-html="goodsDetailsForm.intr"></div>
                        <!-- <div v-else>
                           <VueTinymce v-model="goodsDetailsForm.intr" :setting="setting" />
                        </div> -->
                     </template>
                     <template slot-scope="scope" slot="desc">
                        <div v-if="scope.disabled" class="initTinymce" v-html="goodsDetailsForm.desc"></div>
                        <!-- <div v-else>
                           <VueTinymce v-model="goodsDetailsForm.desc" :setting="setting" />
                        </div> -->
                     </template>
                     <template slot-scope="scope" slot="terms">
                        <div v-if="scope.disabled" class="initTinymce" v-html="goodsDetailsForm.terms"></div>
                        <!-- <div v-else>
                           <VueTinymce v-model="goodsDetailsForm.terms" :setting="setting" />
                        </div> -->
                     </template>
                  </avue-form>
               </div>
            </el-tab-pane>
            <el-tab-pane label="修改详情" name="edit">
               <div class="avueForm-content">
                  <avue-form :option="goodsEditOption" v-model="goodsDetailsForm" @submit="handleRowEditSave">
                     <template slot-scope="scope" slot="intr">
                        <VueTinymce v-model="goodsDetailsForm.intr" :setting="setting" />
                     </template>
                     <template slot-scope="scope" slot="desc">
                        <VueTinymce v-model="goodsDetailsForm.desc" :setting="setting" />
                     </template>
                     <template slot-scope="scope" slot="terms">
                        <VueTinymce v-model="goodsDetailsForm.terms" :setting="setting" />
                     </template>
                  </avue-form>
               </div>
            </el-tab-pane>
         </el-tabs>
      </div>
      <div v-show="showAdd">
         <div class="flex-all-center comWidth100 text-blue">新增详情</div>
         <avue-form :option="goodsAddOption" @submit="handleRowAddSave" v-model="goodsAddForm">
            <template slot-scope="scope" slot="coverurl">
               <imageUpload :disabled="scope.disabled" :list="goodsAddForm.coverurl" v-model="goodsAddForm.coverurl">
               </imageUpload>
            </template>
            <template slot-scope="scope" slot="intr">
               <div v-if="scope.disabled" class="initTinymce" v-html="goodsAddForm.intr"></div>
               <div v-else>
                  <VueTinymce v-model="goodsAddForm.intr" :setting="setting" />
               </div>
            </template>
            <template slot-scope="scope" slot="desc">
               <div v-if="scope.disabled" class="initTinymce" v-html="goodsAddForm.desc"></div>
               <div v-else>
                  <VueTinymce v-model="goodsAddForm.desc" :setting="setting" />
               </div>
            </template>
            <template slot-scope="scope" slot="terms">
               <div v-if="scope.disabled" class="initTinymce" v-html="goodsAddForm.terms"></div>
               <div v-else>
                  <VueTinymce v-model="goodsAddForm.terms" :setting="setting" />
               </div>
            </template>
         </avue-form>
      </div>
   </div>
</template>

<script>
import { randomLenNum } from "@/util/util";
import { article_settings } from "@/const/article/articleSetting";
import { getDetail, add, update as updateDetails } from "@/api/goods/goodsDetail";
import { goodsDetailsOption, goodsEditOption, goodsAddOption } from "@/const/goods/goodsDetail";
export default {
   data() {
      return {
         showAdd: false,
         settings: article_settings,
         activeName: "first",
         tranceferDetail: {
            pageType: "",
            randomKey: randomLenNum(4, true),
         },
         srcList: [],
         goodsDetailsOption: goodsDetailsOption,
         goodsDetailsForm: {},
         goodsEditOption: goodsEditOption,
         goodsAddOption: goodsAddOption,
         goodsAddForm: {},
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
            this.onLoadFormData();
         },
         deep: true,
      },
   },
   mounted() {
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
               // this.tranceferDetail.randomKey = randomLenNum(4, true)
               break;
         }
      },
      onLoadFormData() {
         this.goodsDetailsForm = {}
         this.tranceferDetail.id = this.tranceferData.id;
         getDetail(this.tranceferDetail.id).then(res => {
            if (res && res.data) {
               let data = res.data.data;
               if (data.commodityDesc) {
                  this.goodsDetailsForm = data.commodityDesc;
                  this.showAdd = false
               } else {
                  this.showAdd = true
               }
            }
         })
      },
      // 商品详情-修改 保存
      handleRowEditSave(item, done) {
         updateDetails(item).then((res) => {
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
      // 商品详情-新增 保存
      handleRowAddSave(item, done) {
         item.cid = this.tranceferDetail.id
         add(item).then((res) => {
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
   }
}
</script>

<style></style>
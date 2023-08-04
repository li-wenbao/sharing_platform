<template>
   <div class="p-2 pt-0">
      <el-tabs v-model="activeName" @tab-click="handleClick">
         <el-tab-pane label="基本信息" name="first">
            <div class="avueForm-content">
               <div class="comWidth100 flex align-center fz-18">
                  商户基本信息
               </div>
               <avue-form :option="merchantBaseOption" v-model="merchantBaseForm"></avue-form>
               <div class="comWidth100 flex align-center fz-18">
                  商户详情
               </div>
               <avue-form :option="merchantOption" v-model="merchantForm">
                  <template slot-scope="scope" slot="coverurl">
                     <div class="flex comWidth100 p-2 box-sizing">
                        <el-image :src="merchantForm.coverurl" class="list-images-box-1"
                           :preview-src-list="srcList"></el-image>
                     </div>
                  </template>
               </avue-form>
            </div>
         </el-tab-pane>
         <el-tab-pane label="修改详情" name="edit">
            <div class="avueForm-content">
               <avue-form :option="merchantEditOption" @submit="handleRowEditSave" v-model="merchantEditForm">
                  <template slot-scope="scope" slot="coverurl">
                     <imageUpload :disabled="scope.disabled" :list="merchantEditForm.coverurl"
                        v-model="merchantEditForm.coverurl"></imageUpload>
                  </template>
               </avue-form>
            </div>
         </el-tab-pane>
         <el-tab-pane label="新增详情" name="add">
            <div class="avueForm-content">
               <avue-form :option="merchantAddOption" @submit="handleRowAddSave" v-model="merchantAddForm">
                  <template slot-scope="scope" slot="coverurl">
                     <imageUpload :disabled="scope.disabled" :list="merchantEditForm.coverurl"
                        v-model="merchantEditForm.coverurl"></imageUpload>
                  </template>
               </avue-form>
            </div>
         </el-tab-pane>
      </el-tabs>
   </div>
</template>

<script>
import { randomLenNum } from "@/util/util";
import { getDetail,add, updateMerchantDetails } from "@/api/base/merchant";
import { merchantOption, merchantBaseOption, merchantEditOption, merchantAddOption } from "@/const/base/merchant"
export default {
   data() {
      return {
         activeName: "first",
         tranceferDetail: {
            pageType: "",
            randomKey: randomLenNum(4, true),
         },
         srcList: [],
         merchantForm: {},
         merchantBaseForm: {},
         merchantEditForm: {},
         merchantAddForm: {},
         merchantOption: merchantOption,
         merchantBaseOption: merchantBaseOption,
         merchantEditOption: merchantEditOption,
         merchantAddOption: merchantAddOption,
      }
   },
   props: {
      tranceferData: {
         type: Object,
      },
   },
   watch: {
      tranceferData: {
         handler() {
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
               break;
            case "edit":
               this.tranceferDetail.pageType = "edit";
               this.onLoadFormData()
               break;
            case "add":
               this.tranceferDetail.pageType = "add";
               break;
         }
      },
      onLoadFormData() {
         this.tranceferDetail.id = this.tranceferData.id;
         getDetail(this.tranceferDetail.id).then(res => {
            if (res && res.data) {
               let data = res.data.data;
               if (this.activeName === "first") {
                  this.merchantBaseForm = data.merchant;
                  this.merchantForm = data.shareMerchantDetails;
               }
               this.merchantEditForm = data.shareMerchantDetails;
               this.srcList.push(data.shareMerchantDetails.coverurl)
            }
         })
      },
      // 商户详情-修改 保存
      handleRowEditSave(item, done) {
         updateMerchantDetails(item).then((res) => {
            this.$message({
               type: "success",
               message: "保存成功!",
            });
            this.activeName = "first"
            this.onLoadFormData()
            done();
         }, (error) => {
            window.console.log(error);
            done();
         }
         );
      },
      // 商户详情-新增 保存
      handleRowAddSave(item, done) {
         add(item).then((res) => {
            this.$message({
               type: "success",
               message: "保存成功!",
            });
            this.activeName = "first"
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
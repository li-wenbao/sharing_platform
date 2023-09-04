<template>
   <div class="p-2 pt-0">
      <div v-if="!showAdd">
         <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="base">
               <div class="avueForm-content">
                  <avue-form :option="merchantBaseOption" v-model="merchantBaseForm"></avue-form>
               </div>
            </el-tab-pane>
            <el-tab-pane label="商户详情" name="details">
               <div class="avueForm-content">
                  <avue-form :option="merchantOption" v-model="merchantForm">
                     <template slot-scope="scope" slot="coverurl">
                        <div class="flex comWidth100 p-2 box-sizing">
                           <el-image :src="merchantForm.coverurl" class="list-images-box-1"></el-image>
                        </div>
                     </template>
                  </avue-form>
               </div>
            </el-tab-pane>
            <el-tab-pane label="修改详情" name="edit">
               <div class="avueForm-content">
                  <avue-form :option="merchantAddOption" @submit="handleRowEditSave" v-model="merchantEditForm">
                     <template slot-scope="scope" slot="coverurl">
                        <imageUpload :disabled="scope.disabled" :list="merchantEditForm.coverurl" @on-change="onImgChange"
                           v-model="merchantEditForm.coverurl"></imageUpload>
                     </template>
                     <template slot-scope="scope" slot="coordinate">
                        <el-input v-model="merchantAddForm.coordinate" placeholder="选择经纬度">
                           <el-button slot="append" @click="mapShow = true">
                              获取经纬度
                           </el-button>
                        </el-input>
                     </template>
                  </avue-form>
               </div>
            </el-tab-pane>
         </el-tabs>
      </div>
      <div v-if="showAdd">
         <div class="flex-all-center comWidth100 text-blue">新增详情</div>
         <avue-form :option="merchantAddOption" @submit="handleRowAddSave" v-model="merchantAddForm">
            <template slot-scope="scope" slot="coverurl">
               <imageUpload :disabled="scope.disabled" :list="merchantAddForm.coverurl" @on-change="onImgChange"
                  v-model="merchantAddForm.coverurl"></imageUpload>
            </template>
            <template slot-scope="scope" slot="coordinate">
               <el-input v-model="merchantAddForm.coordinate" placeholder="选择经纬度">
                  <el-button slot="append" @click="mapShow = true">
                     获取经纬度
                  </el-button>
               </el-input>
            </template>
         </avue-form>
      </div>
      <WbPopups title="请选择经纬度" :visible.sync="mapShow" width="66%" height="76%">
         <TencentMap @onChangeAddress="onChangeAddress" @initLatLng="initLatLng"></TencentMap>
      </WbPopups>
   </div>
</template>

<script>
import { randomLenNum } from "@/util/util";
import { option } from "@/const/base/city.js"
import TencentMap from "@/components/map/map.vue"
import { getDetail, updateMerchantDetails, saveMerchantDetails } from "@/api/base/merchant";
import { merchantOption, merchantBaseOption, merchantEditOption, merchantAddOption } from "@/const/base/merchant"
export default {
   components: {
      TencentMap
   },
   data() {
      return {
         showAdd: false,
         mapShow: false,
         imgUrl: "",
         activeName: "base",
         tranceferDetail: {
            pageType: "",
            randomKey: randomLenNum(4, true),
         },
         coordinate: "",
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
      'tranceferData': {
         handler() {
            this.onLoadFormData();
         },
         deep: true,
      },
   },
   mounted() {
      this.onLoadFormData();
      this.initData()
   },
   methods: {
      initData() {
         const address = this.findObject(this.merchantAddOption.column, "address");
         address.dicData = option.city;
         const address2 = this.findObject(this.merchantEditOption.column, "address");
         address2.dicData = option.city;
      },
      tMapHandle(params) {
         console.log(params)
      },
      onImgChange(data) {
         this.imgUrl = data
      },
      addCoordinate() {
         this.mapShow = true
      },
      handleClick(tab, event) {
         switch (tab.name) {
            case "base":
               this.tranceferDetail.pageType = "base";
               this.onLoadFormData()
               break;
            case "details":
               this.tranceferDetail.pageType = "details";
               this.onLoadFormData()
               break;
            case "edit":
               this.tranceferDetail.pageType = "edit";
               this.onLoadFormData()
               break;
         }
      },
      onLoadFormData() {
         this.merchantBaseForm = {}
         this.merchantForm = {}
         this.merchantEditForm = {}
         this.tranceferDetail.id = this.tranceferData.id;
         getDetail(this.tranceferDetail.id).then(res => {
            if (res && res.data) {
               let data = res.data.data;
               this.merchantBaseForm = data.merchant;
               if (data.shareMerchantDetails) {
                  if (this.activeName == "base") {
                     this.merchantBaseForm = data.merchant;
                  } else if (this.activeName == "details") {
                     this.merchantForm = data.shareMerchantDetails;
                  } else if (this.activeName == "edit") {
                     this.merchantEditForm = data.shareMerchantDetails;
                  }
                  this.srcList.push(data.shareMerchantDetails.coverurl)
                  this.showAdd = false
               } else {
                  this.showAdd = true
               }
               this.tranceferDetail.randomKey = randomLenNum(4, true)
            }
         })
      },
      // 商户详情-修改 保存
      handleRowEditSave(item, done) {
         item.address = item.address
         item.miid = this.tranceferDetail.id
         item.coordinate = this.merchantAddForm.coordinate
         item.coverurl = this.imgUrl
         updateMerchantDetails(item).then((res) => {
            this.$message({
               type: "success",
               message: "保存成功!",
            });
            this.activeName = "base"
            this.onLoadFormData()
            done();
         }, (error) => {
            window.console.log(error);
            done();
         }
         );
      },
      onChangeAddress(data) {
         this.coordinate = data.location
         this.merchantAddForm.coordinate = data.location.lat + "," + data.location.lng
         this.mapShow = false
      },
      initLatLng(data) {
         this.merchantAddForm.coordinate = data
         this.mapShow = false
      },
      // 商户详情-新增 保存
      handleRowAddSave(item, done) {
         item.address = item.address
         item.miid = this.tranceferDetail.id
         item.coverurl = this.imgUrl
         item.coordinate = this.merchantAddForm.coordinate
         saveMerchantDetails(item).then((res) => {
            this.$message({
               type: "success",
               message: "保存成功!",
            });
            this.activeName = "base"
            this.onLoadFormData()
            this.tranceferDetail.randomKey = randomLenNum(4, true)
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
<template>
   <div class="p-2 pt-0">
      <div v-if="!showAdd">
         <comTitle :data="tabData" :active="aCurrent" @onChange="OnTabChange"></comTitle>
         <div v-if="aCurrent == 0" class="avueForm-content">
            <avue-form :option="merchantBaseOption" v-model="merchantBaseForm"></avue-form>
         </div>
         <div v-if="aCurrent == 1" class="avueForm-content">
            <avue-form :option="merchantOption" v-model="merchantForm">
               <!-- <template slot-scope="scope" slot="coverurl">
                  <div class="flex comWidth100 p-2 box-sizing">
                     <el-image :src="merchantForm.coverurl" :list="merchantEditForm.coverurl" class="list-images-box-1"></el-image>
                  </div>
               </template> -->
               <template slot-scope="scope" slot="coverurl">
                  <imageUpload :disabled="scope.disabled" :list="merchantForm.coverurl" @on-change="onImgChange"
                     v-model="merchantForm.coverurl"></imageUpload>
               </template>
            </avue-form>
         </div>
         <div v-if="aCurrent == 2" class="avueForm-content">
            <avue-form :option="merchantAddOption" @submit="handleRowEditSave" v-model="merchantEditForm">
               <template slot-scope="scope" slot="coverurl">
                  <imageUpload :disabled="scope.disabled" :list="merchantEditForm.coverurl" @on-change="onImgChange"
                     v-model="merchantEditForm.coverurl"></imageUpload>
               </template>
               <template slot-scope="scope" slot="coordinate">
                  <el-input disabled @click="mapShow = true" v-model="merchantEditForm.coordinate" placeholder="选择经纬度">
                     <el-button slot="append" @click="mapShow = true">
                        获取经纬度
                     </el-button>
                  </el-input>
               </template>
            </avue-form>
         </div>
      </div>
      <div v-if="showAdd">
         <div class="flex-all-center comWidth100 text-blue">新增详情</div>
         <avue-form :option="merchantAddOption" @submit="handleRowAddSave" v-model="merchantAddForm">
            <template slot-scope="scope" slot="coverurl">
               <imageUpload :disabled="scope.disabled" :list="merchantAddForm.coverurl" @on-change="onImgChange"
                  v-model="merchantAddForm.coverurl"></imageUpload>
            </template>
            <template slot-scope="scope" slot="coordinate">
               <el-input disabled v-model="merchantAddForm.coordinate" placeholder="选择经纬度">
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
         tabData: [
            { name: "基本信息", id: "1" },
            { name: "商户详情", id: "2" },
            { name: "修改详情", id: "3" },
         ],
         aCurrent: 0,
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
            this.aCurrent = 0
            this.onLoadFormData();
         },
         deep: true,
      },
   },
   mounted() {
      this.aCurrent = 0
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
      OnTabChange(index) {
         this.aCurrent = index
         this.onLoadFormData()
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
                  if (this.aCurrent == 0) {
                     this.merchantBaseForm = data.merchant;
                  } else if (this.aCurrent == 1) {
                     this.merchantForm = data.shareMerchantDetails;
                  } else if (this.aCurrent == 2) {
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
         item.coverurl = this.imgUrl
         item.coordinate = this.merchantAddForm.coordinate
         updateMerchantDetails(item).then((res) => {
            this.$message({
               type: "success",
               message: "保存成功!",
            });
            this.OnTabChange(0)
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
         if (this.showAdd) {
            this.merchantAddForm.coordinate = data.location.lat + "," + data.location.lng
         }
         this.merchantEditForm.coordinate = data.location.lat + "," + data.location.lng
         this.mapShow = false
      },
      initLatLng(data) {
         if (this.showAdd) {
            this.merchantAddForm.coordinate = data
         }
         this.merchantEditForm.coordinate = data
         this.mapShow = false
      },
      // 商户详情-新增 保存
      handleRowAddSave(item, done) {
         item.address = item.address.join(',')
         item.miid = this.tranceferDetail.id
         item.coverurl = this.imgUrl
         item.coordinate = this.merchantAddForm.coordinate
         saveMerchantDetails(item).then((res) => {
            this.$message({
               type: "success",
               message: "保存成功!",
            });
            this.OnTabChange(0)
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
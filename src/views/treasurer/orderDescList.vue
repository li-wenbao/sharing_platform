<template>
   <div class="p-2 pt-0">
      <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
         :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
         @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset" @selection-change="selectionChange"
         @current-change="currentChange" @size-change="sizeChange" @refresh-change="refreshChange">
         <template slot-scope="scope" slot="curl">
            <el-image :src="scope.row.curl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
         </template>
         <template slot-scope="scope" slot="curlForm">
            <imageUpload :disabled="scope.disabled" :list="form.curl" v-model="form.curl" @on-change="onImgChange">
            </imageUpload>
         </template>
         <template #menu="{ size, row, index }">
            <el-button type="button" class="el-button el-button--text el-button--small" @click="openDetail(row, index, 1)">
               <i class="iconfont iconicon_doc"></i>
               详情
            </el-button>
         </template>
      </avue-crud>
      <WbPopups title="详情" :visible.sync="showShDetail" width="66%" height="76%">
         <div class="avueForm-content">
            <avue-form :option="shaSpecOption" v-model="shaSpecFrom">
               <template slot-scope="scope" slot="surl">
                  <imageUpload :disabled="true" :list="shaSpecFrom.surl" v-model="shaSpecFrom.surl"
                     @on-change="onImgChange2">
                  </imageUpload>
               </template>
            </avue-form>
         </div>
      </WbPopups>
   </div>
</template>

<script>
import { randomLenNum } from "@/util/util";
import { retOrdOption, shaSpecOption } from "@/const/order/orderList"
export default {
   components: {
   },
   data() {
      return {
         showShDetail: false,
         imgUrl: "",
         srcList: [],
         form: {},
         shaSpecFrom: {},
         data: [],
         option: retOrdOption,
         shaSpecOption: shaSpecOption,
         tranceferDataForm: {
            form: {},
            randomKey: randomLenNum(4, true),
         },
      }
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
               this.onLoad();
            }
         },
         deep: true,
      },
   },
   mounted() {
      this.onLoad()
   },
   methods: {
      refreshChange() {
         this.onLoad();
      },
      onLoad() {
         this.data = this.tranceferData.list;
         this.tranceferDataForm.randomKey = randomLenNum(4, true)
      },
      openDetail(row, index, type) {
         this.shaSpecFrom = row.shareCommoditySpec
         this.showShDetail = true
      },
   }
}
</script>

<style></style>
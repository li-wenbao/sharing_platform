<template>
  <div class="p-2 pt-0" :key="tranceferDetail.randomKey">
    <div v-show="!showAdd">
      <comTitle
        :data="tabData"
        :active="aCurrent"
        @onChange="OnTabChange"
      ></comTitle>
      <div v-if="aCurrent == 0" class="avueForm-content">
        <avue-form :option="goodsDetailsOption" v-model="goodsDetailsForm">
          <template slot-scope="scope" slot="intr">
            <div
              v-if="scope.disabled"
              class="initTinymce"
              v-html="goodsDetailsForm.intr"
            ></div>
          </template>
          <template slot-scope="scope" slot="desc">
            <div
              v-if="scope.disabled"
              class="initTinymce"
              v-html="goodsDetailsForm.desc"
            ></div>
          </template>
          <template slot-scope="scope" slot="terms">
            <div
              v-if="scope.disabled"
              class="initTinymce"
              v-html="goodsDetailsForm.terms"
            ></div>
          </template>
        </avue-form>
      </div>
      <div v-if="aCurrent == 1" class="avueForm-content">
        <avue-form
          :option="goodsEditOption"
          v-model="goodsDetailsForm"
          @submit="handleRowEditSave"
        >
          <template slot-scope="scope" slot="intr">
            <VueTinymce
              v-model="goodsDetailsForm.intr"
              :editorFlag="tranceferData.randomKey"
              :height="200"
            />
          </template>
          <template slot-scope="scope" slot="desc">
            <VueTinymce
              v-model="goodsDetailsForm.desc"
              :editorFlag="tranceferData.randomKey"
              :height="400"
            />
          </template>
          <template slot-scope="scope" slot="terms">
            <VueTinymce
              v-model="goodsDetailsForm.terms"
              :editorFlag="tranceferData.randomKey"
              :height="200"
            />
          </template>
        </avue-form>
      </div>
    </div>
    <div v-show="showAdd">
      <div class="flex-all-center comWidth100 text-blue">新增详情</div>
      <avue-form
        :option="goodsAddOption"
        @submit="handleRowAddSave"
        v-model="goodsAddForm"
      >
        <template slot-scope="scope" slot="coverurl">
          <imageUpload
            :disabled="scope.disabled"
            :list="goodsAddForm.coverurl"
            v-model="goodsAddForm.coverurl"
          >
          </imageUpload>
        </template>
        <template slot-scope="scope" slot="intr">
          <div
            v-if="scope.disabled"
            class="initTinymce"
            v-html="goodsAddForm.intr"
          ></div>
          <div v-else>
            <VueTinymce
              v-model="goodsAddForm.intr"
              :editorFlag="tranceferData.randomKey"
            />
          </div>
        </template>
        <template slot-scope="scope" slot="desc">
          <div
            v-if="scope.disabled"
            class="initTinymce"
            v-html="goodsAddForm.desc"
          ></div>
          <div v-else>
            <VueTinymce
              v-model="goodsAddForm.desc"
              :editorFlag="tranceferData.randomKey"
            />
          </div>
        </template>
        <template slot-scope="scope" slot="terms">
          <div
            v-if="scope.disabled"
            class="initTinymce"
            v-html="goodsAddForm.terms"
          ></div>
          <div v-else>
            <VueTinymce
              v-model="goodsAddForm.terms"
              :editorFlag="tranceferData.randomKey"
            />
          </div>
        </template>
      </avue-form>
    </div>
  </div>
</template>

<script>
import { randomLenNum } from "@/util/util";
import {
  getDetail,
  add,
  update as updateDetails,
} from "@/api/goods/goodsDetail";
import {
  goodsDetailsOption,
  goodsEditOption,
  goodsAddOption,
} from "@/const/goods/goodsDetail";
export default {
  data() {
    return {
      showAdd: false,
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
      tabData: [
        { name: "商品详情", id: "1" },
        { name: "修改详情", id: "2" },
      ],
      aCurrent: 0,
    };
  },
  props: {
    tranceferData: {
      type: Object,
    },
  },
  watch: {
    tranceferData: {
      handler(newData) {
        this.aCurrent = 0;
        this.onLoadFormData();
      },
      deep: true,
    },
  },
  mounted() {
    this.aCurrent = 0;
    this.onLoadFormData();
  },
  methods: {
    OnTabChange(index) {
      this.aCurrent = index;
      if (this.aCurrent == 0) {
        this.tranceferDetail.randomKey = randomLenNum(4, true);
      } else {
        this.onLoadFormData();
      }
    },
    onLoadFormData() {
      this.goodsDetailsForm = {};
      this.tranceferDetail.id = this.tranceferData.id;
      getDetail(this.tranceferDetail.id).then((res) => {
        if (res && res.data) {
          let data = res.data.data;
          if (data.commodityDesc) {
            this.goodsDetailsForm = data.commodityDesc;
            this.showAdd = false;
          } else {
            this.showAdd = true;
          }
        }
      });
    },
    // 商品详情-修改 保存
    handleRowEditSave(item, done) {
      updateDetails(item).then(
        (res) => {
          this.$message({
            type: "success",
            message: "保存成功!",
          });
          this.OnTabChange(0);
          this.showAdd = false;
          this.onLoadFormData();
          done();
        },
        (error) => {
          window.console.log(error);
          done();
        }
      );
    },
    // 商品详情-新增 保存
    handleRowAddSave(item, done) {
      item.cid = this.tranceferDetail.id;
      add(item).then(
        (res) => {
          this.$message({
            type: "success",
            message: "保存成功!",
          });
          this.OnTabChange(0);
          this.tranceferDetail.randomKey = randomLenNum(4, true);
          this.onLoadFormData();
          done();
        },
        (error) => {
          window.console.log(error);
          done();
        }
      );
    },
  },
};
</script>

<style></style>
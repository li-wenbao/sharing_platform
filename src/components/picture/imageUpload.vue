<template>
  <div
    class="file-upload-boxLine m-2"
    element-loading-text="正在上传,请稍后..."
    v-loading="loading"
  >
    <el-upload
      class="avue-upload"
      ref="showAdd"
      :action="option.actions"
      :limit="option.limit"
      :headers="headers"
      :data="option.data"
      :multiple="option.multiple"
      drag
      :list-type="option.listType"
      :file-list="fileList"
      :on-success="onSuccess"
      :before-upload="beforeUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-error="onError"
      :on-exceed="onExceed"
    >
      <i class="el-icon-plus"></i>
      <div class="fc-red" v-if="!disabled" slot="tip">
        只能上传jpg/png文件,且不超过1Mb
      </div>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import website from "@/config/website";
import { getToken } from "@/util/auth";
export default {
  name: "imageUpload",
  props: {
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
    },
    limit: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      loading: false,
      display: this.disabled ? "none" : "",
      dialogImageUrl: "",
      dialogVisible: false,
      headers: {},
      data: {
        file: "",
      },
      option: {
        prop: "attachFile",
        type: "upload",
        listType: "picture-card",
        data: { file: "" },
        loadText: "文件上传中，请稍等",
        tips: "上传图片大小不能超过 1MB!",
        span: 24,
        limit: 1,
        multiple: true,
        actions: "https://www.raoxiang.vip/share/merchant/materialUpload",
      },
      fileList: [],
      fileUrlList: [],
      imgData: [], //用来传参的数组
    };
  },
  computed: {},
  watch: {
    // list
    list: function () {
      this.initData();
    },
  },
  created() {},
  mounted() {
    this.headers[website.tokenHeader] = getToken();
    // 查找到添加框对应的dom节点 设置显示隐藏 .el-upload--picture-card
    this.$refs.showAdd.$children[1].$el.style.display = this.display;
    this.initData();
  },
  methods: {
    initData() {
      this.fileList = [];
      if (this.list) {
        let list = this.list.split(",");
        list.forEach((item, index) => {
          this.fileList.push({
            url: item,
          });
        });
      }
    },
    handleRemove(file, fileList) {
      this.delData(file.uid);
    },

    delData(data) {
      let index = this.fileList.findIndex((item) => item.uid == data);
      if (index > -1) {
        this.fileList.splice(index, 1);
      }
      let index2 = this.imgData.findIndex((item) => item.uid == data);
      if (index2 > -1) {
        this.imgData.splice(index, 1);
      }
    },
    beforeUpload(file) {
      this.data.file = file.name;
      let types = ["image/jpeg", "image/gif", "image/bmp", "image/png"];
      const isImage = types.includes(file.type);
      const isLtSize = file.size / 1024 / 1024 < 1;
      if (!isImage) {
        this.$message.error("上传图片只能是 JPG、GIF、BMP、PNG 格式!");
        return false;
      }
      if (!isLtSize) {
        this.$message.error("上传图片大小不能超过 1MB!");
        return false;
      }
      return true;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onExceed(res) {
      this.$message.success("最多只能上传" + this.limit + "张图片");
    },
    //上传成功
    onSuccess(res) {
      let data = res.data;
      this.appImg(data.purl);
    },
    onError(res) {
      this.$message.success(res);
    },
    appImg(data) {
      this.imgData.push(data);
      this.fileList.push({
        name: this.data.file,
        url: data,
      });
      const length = this.imgData.length;
      const lastValue = this.imgData[length - 1];
      // let dataValue = this.imgData.join(',')
      // console.log("Mr. L 🚀 ~ dataValue:", dataValue)

      this.$emit("on-change", lastValue);
    },
  },
};
</script>

<style lang="scss" scoped>
// .file-upload-boxLine .el-upload {
  .el-upload-list--picture-card .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    margin: 8px !important;
    display: inline-block;
  }
// }
</style>

<template>
  <div class="file-upload-boxLine" element-loading-text="正在上传,请稍后..." v-loading="loading">
    <el-upload class="avue-upload" :action="actions" limit="1" :headers="headers" :data="data" multiple="true"
      list-type="picture-card" :file-list="fileList" :on-success="onSuccess" :before-upload="beforeUpload"
      :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
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
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array
    }
  },
  data() {
    return {
      loading: false,
      dialogImageUrl: '',
      dialogVisible: false,
      headers: {},
      data: {
        file: ""
      },
      actions: 'https://abc.ijiandai.com/share/merchant/materialUpload',
      fileList: [],
      fileUrlList: [],
    };
  },
  computed: {
  },
  watch: {

  },
  created() {
    // if (this.list) {
    //   this.fileList.push(this.list)
    // }
  },
  mounted() {
    this.headers[website.tokenHeader] = getToken();
    if (this.list) {
      this.fileList.push({
        url:this.list
      })
    }
    this.initData();
  },
  methods: {
    initData() {

    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeUpload(file) {
      this.data.file = file.name
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.data.file = file.url
      this.dialogVisible = true;
    },

    //上传成功
    onSuccess(res) {
      let data = res.data;
      this.appImg(data.purl)
    },
    appImg(data) {
      let initData = [];
      initData.push(data)
      this.fileList.push(
        {
          name: this.data.file,
          url: data
        }
      );
      let dataValue = initData.join(',')
      if (!(this.value != "" && this.value.length > 0)) {
        this.$emit("input", dataValue);
      }
    }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
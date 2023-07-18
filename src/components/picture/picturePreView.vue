<template>
  <!-- 图片预览组件 直接预览 -->
  <div>
    <iframe :src="fileUrl" frameborder="0" width="100%" height="768px"></iframe>
  </div>
</template>

<script>
  import { getList as getListFile } from '@/api/resource/attach'
  import website from '@/config/website'
  import { v1 as uuidv4 } from 'uuid'
  import { getToken } from '@/util/auth'
  import { Base64 } from 'js-base64'
  import {getUrlConfig} from "@/util/store";
  export default {
    name: '',
    data() {
      return {
        headers: {},
        fileUrl: '',
        fileList: [],
        option: {
          isView: 'png, jpg, jpeg,xls,xlsx,doc,docx,ppt,pptx,mp4,zip',
          listType: 'text',
          data: { businessId: '' },
          loadText: '文件上传中，请稍等',
          showFileList: false,
          tips: '',
          span: 24,
          limit: 100,
          multiple: true,
          props: {
            label: 'originalName',
            value: 'link',
          },
          propsHttp: {
            res: 'data',
          },
          action: '/api/zl-resource/oss/endpoint/put-file-attach-by-business',
        },
      }
    },
    props: {
      data: Object,
      businessId: {
        type: String,
        default: '',
      },
    },
    created(){
      this.headers['Authorization'] = `Basic ${Base64.encode(
        `${website.clientId}:${website.clientSecret}`,
      )}`
      this.option = Object.assign(this.option, this.attachOption)
      this.headers[website.tokenHeader] = 'bearer ' + getToken()
      this.initData();
    },
    watch: {
      businessId: {
        handler() {
          this.initData();
        },
      },
    },
    computed: {},
    methods: {
      initData() {
        if (this.businessId && this.businessId.length > 0) {
          getListFile(1, this.option.limit, {
            businessId: this.businessId,
          }).then((res) => {
            const data = res.data.data.records
            this.uploadPreview(data[0]) 
          })
        } else {
          this.businessId = uuidv4()
        }
        this.option.data.businessId = this.businessId
      },
      //
      uploadPreview(file) {
        // let url = file.link //要预览文件的访问地址
        const urlConfig = getUrlConfig();
        this.fileUrl = urlConfig.fileViewUrl +   Base64.encode(file.id);
      },
    },
  }
</script>
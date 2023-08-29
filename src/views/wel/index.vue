<template>
  <div class="maine-index comHeight95 overflow-y">
    <el-row :gutter="20">
      <el-col :span="16">
        <router-link to="/merchant/merchantList/index" class="grid-content bg-blue flex-all-center">
          <div class="flex-direction flex-all-center comHeight100 fz-24 white">
            <i class="iconfont iconicon_group fz-26"></i>
            <div class="mt-2">商户列表</div>
          </div>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link to="/user/account/index" class="grid-content bg-orange flex-all-center">
          <div class="flex-direction flex-all-center comHeight100 fz-24 white">
            <i class="iconfont iconicon_group fz-26"></i>
            <div class="mt-2">账号列表</div>
          </div>
        </router-link>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <router-link to="/user/role/index" class="grid-content bg-olive flex-all-center">
          <div class="flex-direction flex-all-center comHeight100 fz-24 white">
            <i class="iconfont iconicon_group fz-26"></i>
            <div class="mt-2">角色列表</div>
          </div>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link to="/merchant/merchantCategory/index" class="grid-content bg-green flex-all-center">
          <div class="flex-direction flex-all-center comHeight100 fz-24 white">
            <i class="iconfont iconicon_addresslist fz-26"></i>
            <div class="mt-2">商户类型</div>
          </div>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link to="/goods/goodsCategory/index" class="grid-content bg-purple flex-all-center">
          <div class="flex-direction flex-all-center comHeight100 fz-24 white">
            <i class="iconfont iconicon_doc fz-26"></i>
            <div class="mt-2">商品类型</div>
          </div>
        </router-link>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <router-link to="/base/comImages/index" class="grid-content bg-pink flex-all-center">
          <div class="flex-direction flex-all-center comHeight100 fz-24 white">
            <i class="iconfont iconicon_photo fz-26"></i>
            <div class="mt-2">公共图片</div>
          </div>
        </router-link>
      </el-col>
      <el-col :span="12">
        <router-link to="/base/features/index" class="grid-content bg-brown flex-all-center">
          <div class="flex-direction flex-all-center comHeight100 fz-24 white">
            <i class="iconfont iconicon_airplay fz-26"></i>
            <div class="mt-2">特色功能</div>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "wel",
  data() {
    return {
      activeNames: ['1', '2', '3', '5'],
      logActiveNames: ['30']
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    handleChange(val) {
      window.console.log(val);
    }
  },
};
</script>

<style lang="scss">
.maine-index {
  height: 100%;
  width: 100%;

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    // min-height: 36px;
    min-height: 166px;
    cursor: pointer
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}

.el-font-size {
  font-size: 14px;
}
</style>


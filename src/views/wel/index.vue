<template>
  <div class="maine-index comHeight95 overflow-y">
    <div v-for="(item, index) in menu" :key="index">
      <el-row :gutter="10" v-if="item.menuid == 196">
        <el-col :span="8">
          <router-link to="/user/role/index" class="grid-content bg-olive flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_group fz-32"></i>
              <div class="mt-1">角色列表</div>
            </div>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link to="/user/account/index" class="grid-content bg-orange flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_group fz-32"></i>
              <div class="mt-1">账号列表</div>
            </div>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link to="/system/menu/index" class="grid-content bg-brown flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_group fz-32"></i>
              <div class="mt-1">系统菜单</div>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="item.menuid == 200">
        <el-col :span="16">
          <router-link to="/merchant/merchantList/index" class="grid-content bg-blue flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_group fz-32"></i>
              <div class="mt-1">商户列表</div>
            </div>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link to="/merchant/merchantCategory/index" class="grid-content bg-green flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_addresslist fz-32"></i>
              <div class="mt-1">商户类型</div>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="item.menuid == 201">
        <el-col :span="12">
          <router-link to="/goods/goodsList/index" class="grid-content bg-purple flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_doc fz-32"></i>
              <div class="mt-1">商品列表</div>
            </div>
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to="/goods/goodsCategory/index" class="grid-content bg-mauve flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_doc fz-32"></i>
              <div class="mt-1">商品类型</div>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="item.menuid == 202">
        <el-col :span="12">
          <router-link to="/base/comImages/index" class="grid-content bg-pink flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_photo fz-32"></i>
              <div class="mt-1">公共图片</div>
            </div>
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to="/base/features/index" class="grid-content bg-brown flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_airplay fz-32"></i>
              <div class="mt-1">特色功能</div>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="item.menuid == 205">
        <el-col :span="8">
          <router-link to="/signing/signingList/index" class="grid-content bg-olive flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_group fz-32"></i>
              <div class="mt-1">签约方式</div>
            </div>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link to="/signing/signingOrderListAver/index" class="grid-content bg-brown flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_doc fz-32"></i>
              <div class="mt-1">签约确认</div>
            </div>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link to="/signing/signingOrderList/index" class="grid-content bg-orange flex-all-center">
            <div class="flex-direction flex-all-center comHeight100 fz-24 white">
              <i class="iconfont iconicon_doc fz-32"></i>
              <div class="mt-1">签约订单</div>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "wel",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["userInfo", 'menu']),
  },
  mounted() {
    this.menu.forEach(element => {
      element.children.url
    });
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
    margin-bottom: 0px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 126px;
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


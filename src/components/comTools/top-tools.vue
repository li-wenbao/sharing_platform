<template>
  <!-- 功能菜单 -->
  <div class="flex top-tools padding-top-xs" style="margin-top: 18px">
    <div class="flex align-center" @click="goBack()">
      <i class="el-icon-d-arrow-left text-white" style="font-size: 2rem"></i>
    </div>
    <el-tooltip
      class="item"
      effect="light"
      content="返回首页"
      placement="bottom"
    >
      <div class="flex align-center margin-left-sm" @click="goHome()">
        <i class="el-icon-house text-white" style="font-size: 1.8rem"></i>
      </div>
    </el-tooltip>
    <el-tooltip
      class="item"
      v-if="showFullScren"
      effect="light"
      :content="
        isFullScren ? $t('navbar.screenfullF') : $t('navbar.screenfull')
      "
      placement="bottom"
    >
      <div class="flex align-center margin-left-sm text-white">
        <i
          :class="isFullScren ? 'icon-tuichuquanping' : 'icon-quanping'"
          @click="handleScreen"
        ></i>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { fullscreenToggel } from "@/util/util";
export default {
  name: "top-tools",
  components: {},
  data() {
    return {};
  },
  props: {},
  mounted() {},
  watch: {},
  computed: {
    ...mapState({
      showFullScren: (state) => state.common.showFullScren,
      userInfo: (state) => state.user.userInfo,
    }),
    ...mapGetters(["isFullScren", "userInfo"]),
  },
  methods: {
    //全屏
    handleScreen() {
      fullscreenToggel();
    },
    // 返回上一页
    goBack() {
      this.$router.go(-1); //返回上一层
    },
    // 返回首页
    goHome() {
      this.$router.push({
        path: "/wel/index",
      });
    },
  },
};
</script>
<style lang="scss"></style>

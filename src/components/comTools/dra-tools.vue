<template>
  <!-- 功能菜单 -->
  <div class="init-tools">
    <div class="flex-all-center">
      <div
        class="flex align-center cursorhander"
        style="z-index: 1000"
        @click.stop="goBack()"
      >
        <i class="el-icon-d-arrow-left text-white" style="font-size: 2rem"></i>
      </div>
      <div
        class="flex align-center margin-left-sm cursorhander"
        style="z-index: 1000"
        @click.stop="goHome()"
      >
        <i class="el-icon-house text-white" style="font-size: 1.8rem"></i>
      </div>
      <el-tooltip
        class="item"
        v-if="showFullScren"
        effect="light"
        :content="
          isFullScren ? $t('navbar.screenfullF') : $t('navbar.screenfull')
        "
        placement="bottom"
      >
        <div
          class="flex align-center margin-left-sm text-white cursorhander"
          style="z-index: 1000"
        >
          <i
            :class="isFullScren ? 'icon-tuichuquanping' : 'icon-quanping'"
            @click.stop="handleScreen"
          ></i>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { fullscreenToggel } from "@/util/util";
export default {
  name: "top-tools",
  components: {},
  data() {
    return {
    };
  },
  props: {
  },
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
        // path: "/entryHomeScreen",
      });
    },
  },
};
</script>
<style lang="scss">
.init-tools {
  position: absolute;
  bottom: 4rem /* 16/16 */;
  right: 3rem /* 30/16 */;
  width: 9.375rem /* 150/16 */;
  height: 3.75rem /* 60/16 */;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 400;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 40px;
}
</style>

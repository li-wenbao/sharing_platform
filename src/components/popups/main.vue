<template>
  <transition name="fade">
    <div class="el-dialog__wrapper avue-dialog avue-crud__dialog" :style="{ background: maskBg }" v-if="visible">
      <div class="flex-all-center comHeiWid100" style="position: absolute; z-index: 302">
        <div class="flex align-center flex-direction" :style="{ width: width, height: height }">
          <div class="comWidth100 flex align-center justify-between p-1 bg-white" style="height: 40px;box-sizing:border-box">
            <div>{{ title }}</div>
            <i class="el-dialog__close el-icon el-icon-close pointer" @click.stop="close()"></i>
          </div>
          <div class="popUp-content" :style="{ background: bgImage ? `url(${bgImage})` : '#fff' }">
            <div class="popUp-content-box" :class="popUpClass" :style="{ background: boxbg }">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "ZlPopup",
  components: {},
  data() {
    return {};
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "50%",
    },
    height: {
      type: String,
      default: "50%",
    },
    title: {
      type: String,
      default: "标题",
    },
    bgImage: {
      type: String,
      // default: require('../../../public/img/common/jtl-box-bg-1.png'),
    },
    boxbg: {
      type: String,
      default: "#fff",
    },
    maskBg: {
      type: String,
      default: "rgba(0, 0, 0, 0.55)",
    },
    popUpClass: {
      type: String,
      default: "#fff",
    }
  },
  mounted() { },
  watch: {},
  computed: {},
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss">
.mask-smbox {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 300;
}

.popUp-content {
  height: calc(100% - 40px);
  width: 100%;
  background-position: 0 0 !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;

  .popUp-content-box {
    height: calc(100% - 28px);
    width: calc(100% - 28px);
    margin: 14px;
    overflow-y: auto;
  }
}

// 渐变过渡
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
</style>

<template>
  <transition name="fade">
    <div
      class="mask-smbox comHeiWid100"
      :style="{ background: maskBg }"
      v-if="visible"
    >
      <div style="position: absolute; top: 20px; right: 26px; z-index: 303">
        <div>
          <el-button
            type="danger"
            icon="el-icon-close"
            circle
            @click.stop="close()"
          >
          </el-button>
        </div>
      </div>
      <div
        class="flex-all-center comHeiWid100"
        style="position: absolute; z-index: 302"
      >
        <div class="flex-all-center" :style="{ width: width, height: height }">
          <div
            class="popUp-content"
            :style="{ background: bgImage ? `url(${bgImage})` : '#fff' }"
          >
            <div
              class="popUp-content-box"
              :class="popUpClass"
              :style="{ background: boxbg }"
            >
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
    bgImage: {
      type: String,
      // default: require('../../../public/img/common/jtl-box-bg-1.png'),
    },
    boxbg:{
      type: String,
      default: "#fff",
    },
    maskBg:{
      type: String,
      default: "rgba(0, 0, 0, 0.8)",
    },
    popUpClass:{
      type: String,
      default: "#fff",
    }
  },
  mounted() {},
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
  background: rgba(0, 0, 0, 0.8);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 300;
}

.popUp-content {
  height: 100%;
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

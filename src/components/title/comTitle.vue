<template>
  <!-- 作为组件模板 -->
  <div class="comWidth100">
    <div v-if="type==1" class="flex align-center padding-xs box-sizing list-item-height-36 text-xxl">
      <div class="text-quau el-icon-caret-right"></div>
      <div style="background:#00ffff;width:4px;height:100%" class="flex align-center"></div>
      <div class="flex align-center comHeight100 comWidth50 padding-left-xs" 
      style="background: rgba(0, 255, 255, 0.2);">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {
    type:{
      type:Number,
      default:0,
    },
    title:{
      type:String,
      default: '',
    }
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>

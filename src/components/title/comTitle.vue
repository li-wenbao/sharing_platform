<template>
  <!-- 作为组件模板 -->
  <div class="comWidth100">
    <div class="flex align-center padding-xs box-sizing list-item-height-36 text-xxl">
      <div class="mr-4 pointer" style="height: 46px;" v-for="(item, index) in data" :key="index" @click="tabTap(index)">
        <div style="height: 41px;" class="flex align-center" :class="isActive == index ? 'text-blue' : ''">
          <div>{{ item.name }}</div>
        </div>
        <div :class="isActive == index ? 'is-active-line' : ''"></div>
      </div>
    </div>
    <div class="divide-h"></div>
  </div>
</template>

<script>
export default {
  name: "comTitle",
  components: {},
  data() {
    return {
      // isActive: 0
    };
  },
  props: {
    data: {
      type: Array,
    },
    item: {
      type: String,
      default: '',
    },
    active: {
      type: Number
    },
  },
  mounted() { },
  watch: {},
  computed: {
    // 双向绑定计算属性  通过get获取计算结果  通过set传回值，用于修改
    isActive: {
      //get() 用于获取计算结果
      get() {
        return this.active;
      },
      // set() 用于修改计算结果
      set(value) {
        console.log(value);
      }
    }
  },
  methods: {
    tabTap(index) {
      this.$emit('onChange', index)
    }
  }
};
</script>

<style scoped>
.divide-h {
  height: 2px;
  width: 100%;
  background: #efefef;
}

.is-active-line {
  height: 2px;
  width: 100%;
  background: #0081ff;
}
</style>
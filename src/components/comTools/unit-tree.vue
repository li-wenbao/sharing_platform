<template>
  <div class="unit-tree-content">
    <avue-input-tree
      default-expand-all
      v-model="deptform"
      placeholder="请选择单位"
      type="tree"
      :dic="deptTree"
      @change="unitChange"
    ></avue-input-tree>
  </div>
</template>

<style lang="scss">
.unit-tree-content {
}
</style>
<script>
import { mapGetters, mapState } from "vuex";
import website from "@/config/website";
import { getUnitTree } from "@/api/system/dept";
export default {
  name: "unitTree",
  components: {},
  data() {
    return {
      deptform: {},
      deptTree: [],
    };
  },
  props: {},
  mounted() {
    getUnitTree(website.tenantId, this.userInfo.dept_id).then((res) => {
      if (res && res.data && res.data.data) {
        this.deptTree = res.data.data;
        this.deptTree.forEach((item) => {
          (item.label = item.title),
            item.children.forEach((itemsm) => {
              itemsm.label = itemsm.title;
            });
        });
      }
    });
  },
  watch: {},
  computed: {
    ...mapState({
      showFullScren: (state) => state.common.showFullScren,
      userInfo: (state) => state.user.userInfo,
    }),
    ...mapGetters(["permission", "userInfo"]),
  },
  methods: {
    unitChange(e){
      this.$emit("unitChange",e)
    }
  },
};
</script>

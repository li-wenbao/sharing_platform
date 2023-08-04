<template>
  <div class="avue-contail" :class="{'avue--collapse':isCollapse}">
    <div class="avue-header">
      <!-- 顶部导航栏 -->
      <top ref="top"/>
    </div>
    <div class="avue-layout">
      <div class="avue-left">
        <!-- 左侧导航栏 -->
        <sidebar/>
      </div>
      <div class="avue-main">
        <!-- 顶部标签卡 -->
        <tags/>
        <transition name="fade-scale">
          <search class="avue-view" v-show="isSearch"></search>
        </transition>
        <!-- 主体视图层 -->
        <div style="height:100%;overflow-y:auto;overflow-x:hidden;" id="avue-view" v-show="!isSearch">
          <keep-alive>
            <router-view class="avue-view" v-if="$route.meta.keepAlive"/>
          </keep-alive>
          <router-view class="avue-view" v-if="!$route.meta.keepAlive"/>
        </div>
      </div>
    </div>
    <div class="avue-shade" @click="showCollapse"></div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import tags from "./tags";
import search from "./search";
import top from "./top/";
import sidebar from "./sidebar/";
import admin from "@/util/admin";
import {validatenull} from "@/util/validate";
import {calcDate} from "@/util/date.js";
import {getStore} from "@/util/store.js";

export default {
  components: {
    top,
    tags,
    search,
    sidebar,
  },
  name: "index",
  provide() {
    return {
      index: this,
    };
  },
  data() {
    return {
      //搜索控制
      isSearch: false,
      userId: '',
      websocket: undefined,
    };
  },
  created() {
    //实时检测刷新token
  },
  mounted() {
    this.init();
    this.userId = this.userInfo.id;
    console.log("Mr. L 🚀 ~ this.userInfo.id:", this.userInfo.id)
  },
  computed: mapGetters(["isMenu", "isCollapse", "website", "menu", "userInfo"]),
  props: [],
  methods: {
    showCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
    // 初始化
    init() {
      // this.$store.dispatch("GetMenu","U1683250241398").then();
      this.$store.commit("SET_SCREEN", admin.getScreen());
      window.onresize = () => {
        setTimeout(() => {
          this.$store.commit("SET_SCREEN", admin.getScreen());
        }, 0);
      };
    },
    //打开菜单
    openMenu(item = {}) {
      this.$store.dispatch("GetMenu", "U1683250241398").then((data) => {
        if (data.length !== 0) {
          this.$router.$avueRouter.formatRoutes(data, true);
        }
      });
    },
  },
};
</script>

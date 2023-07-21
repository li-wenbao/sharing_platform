<template>
  <div class="login-container" ref="login" @keyup.enter.native="handleLogin">
    <top-color v-show="false"></top-color>
    <div class="flex align-center comWidth100">
      <div class="comWidth100 flex justify-end">
        <img class="comWidth60" src="/img/bg/logoboxs-bg.png" alt="" style="margin-right: 10%;">
      </div>
      <div class="comWidth100 flex justify-center">
        <div class="flex-all-center bg-white p-4 logon-box-bg">
          <div class="login-main">
            <h2 class="login-title fz-36">
              {{ $t('login.title') }}{{ website.title }}
              <top-lang></top-lang>
            </h2>
            <userLogin v-if="activeName === 'user'"></userLogin>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="login-weaper animated bounceInDown">
    </div> -->
  </div>
</template>
<script>
import userLogin from "./userlogin";
import { mapGetters } from "vuex";
import { dateFormat } from "@/util/date";
import { validatenull } from "@/util/validate";
import topLang from "@/page/index/top/top-lang";
import topColor from "@/page/index/top/top-color";
import { getQueryString, getTopUrl } from "@/util/util";

export default {
  name: "login",
  components: {
    userLogin,
    topLang,
    topColor
  },
  data() {
    return {
      time: "",
      activeName: "user",
      socialForm: {
        tenantId: "000000",
        source: "",
        code: "",
        state: "",
      }
    };
  },
  watch: {
    $route() {
      this.handleLogin();
    }
  },
  created() {
    this.handleLogin();
    this.getTime();
  },
  mounted() {
  },
  computed: {
    ...mapGetters(["website", "tagWel"])
  },
  props: [],
  methods: {
    getTime() {
      setInterval(() => {
        this.time = dateFormat(new Date());
      }, 1000);
    },
    handleLogin() {
      const topUrl = getTopUrl();
      const redirectUrl = "/oauth/redirect/";
      const ssoCode = "?code=";
      this.socialForm.source = getQueryString("source");
      this.socialForm.code = getQueryString("code");
      this.socialForm.state = getQueryString("state");
      if (validatenull(this.socialForm.source) && topUrl.includes(redirectUrl)) {
        let source = topUrl.split("?")[0];
        source = source.split(redirectUrl)[1];
        this.socialForm.source = source;
      }
      if (topUrl.includes(redirectUrl) && !validatenull(this.socialForm.source) && !validatenull(this.socialForm.code) && !validatenull(this.socialForm.state)) {
        const loading = this.$loading({
          lock: true,
          text: '第三方系统登录中,请稍后。。。',
          spinner: "el-icon-loading"
        });
        this.$store.dispatch("LoginBySocial", this.socialForm).then(() => {
          window.location.href = topUrl.split(redirectUrl)[0];
          this.$router.push({ path: this.tagWel.value });
          loading.close();
        }).catch(() => {
          loading.close();
        });
      } else if (!topUrl.includes(redirectUrl) && !validatenull(this.socialForm.code) && !validatenull(this.socialForm.state)) {
        const loading = this.$loading({
          lock: true,
          text: '单点系统登录中,请稍后。。。',
          spinner: "el-icon-loading"
        });
        this.$store.dispatch("LoginBySso", this.socialForm).then(() => {
          window.location.href = topUrl.split(ssoCode)[0];
          this.$router.push({ path: this.tagWel.value });
          loading.close();
        }).catch(() => {
          loading.close();
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>

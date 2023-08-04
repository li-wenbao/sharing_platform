<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="account">
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.account" auto-complete="off"
        :placeholder="$t('login.username')">
        <i slot="prefix" class="icon-yonghu" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password"
        auto-complete="off" :placeholder="$t('login.password')">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword" />
        <i slot="prefix" class="icon-mima" />
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">{{
        $t('login.submit') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from "vuex";
// import { info } from "@/api/system/tenant";
// import { getCaptcha } from "@/api/user";
// import { getTopUrl } from "@/util/util";

export default {
  name: "userlogin",
  data() {
    return {
      loginForm: {
        account: "admin",
        //密码
        password: "123456",
      },
      loginRules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, message: "密码长度最少为6位", trigger: "blur" }
        ]
      },
      passwordType: "password",
      userBox: false,
    };
  },
  created() {

  },
  mounted() {
    this.loginForm.account = localStorage.getItem("account");
    console.log("Mr. L 🚀 ~ this.loginForm.account:", this.loginForm.account)
    this.loginForm.password = localStorage.getItem("password");
  },
  watch: {

  },
  computed: {
    ...mapGetters(["tagWel", "userInfo"])
  },
  props: [],
  methods: {
    showPassword() {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "登录中,请稍后。。。",
            spinner: "el-icon-loading",
            background: "rgb(255,255,255)"
          });
          this.$store.dispatch("LoginByUsername", this.loginForm).then(() => {
              this.$router.replace({
                path: "/"
              });

              //本地存储用户名和密码
              localStorage.setItem("account", this.loginForm.account);
              localStorage.setItem("password", this.loginForm.password);
              
              // this.$store.dispatch("GetUrlConfig").then();
              loading.close();
            })
            .catch((error) => {
              loading.close();
            });
        } else {
          this.$message.error('用户名或密码不能为空哦!');
        }
      });
    },
  }
};
</script>

<style></style>

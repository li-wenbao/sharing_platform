<template>
  <div class="comHeight95 overflow-y">
      <el-row>
        <el-col :span="16">
          <basic-container>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="欢迎使用Saber" name="1">
                <div>1.Saber是BladeX前端UI系统</div>
                <div>2.对现有的avue2.0、element-ui库进行二次封装</div>
                <div>3.100%兼容原生element-ui库</div>
                <div>4.基于json驱动的模块配置，打造最好用的vuejs中后台脚手架</div>
                <div>5.使用Saber可以大幅度提升开发效率，不再为重复工作发愁</div>
              </el-collapse-item>
             
             
            </el-collapse>
          </basic-container>
        </el-col>
        <el-col :span="8">
          <el-row>
            <basic-container>
              <el-collapse v-model="logActiveNames" @change="handleChange">
                <el-collapse-item title="2.7.2.RELEASE发布，重构升级常用功能，优化使用体验" name="21">
                  <div>1.[升级]SpringBoot 至 2.2.13.RELEASE</div>
                  <div>2.[升级]AlibabaCloud 至 2.2.5</div>
                  <div>3.[升级]Mybatis-Plus 至 3.4.2</div>
                  <div>4.[升级]Dynamic-Datasource 至3.3.1</div>
                  <div>5.[升级]Avue 至 2.7.8</div>
                  <div>6.[升级]适配 Knife4j 2.0.8</div>
                  <div>7.[重构]Swagger聚合网关迁移至全新的blade-swagger服务</div>
                  <div>8.[重构]Sql日志打印采用druid底层实现展示完整带参SQL</div>
                  <div>9.[新增]LocalFile的domain字段</div>
                  <div>10.[新增]Sign模式鉴权timestamp在10秒内的合法时间段判断</div>
                  <div>11.[新增]开启租户插件后使用@TenantIgnore注解精准关闭租户过滤逻辑</div>
                  <div>12.[新增]Swagger公共信息配置</div>
                  <div>13.[新增]Saber矢量图标离线化</div>
                  <div>14.[新增]菜单管理isOpen字段控制左侧菜单是否可以使用新tab打开外链</div>
                  <div>15.[新增]Mybatis-Plus的Page合并工具类</div>
                  <div>16.[优化]阿里云短信返回成功判断逻辑</div>
                  <div>17.[优化]Token过期时间处理</div>
                  <div>18.[优化]Redis加载逻辑</div>
                  <div>19.[优化]用户登录逻辑</div>
                  <div>20.[优化]多租户角色创建逻辑</div>
                  <div>21.[优化]Dockerfile加速字体构建</div>
                  <div>22.[优化]Nacos Shared Config配置API改为最新版</div>
                  <div>23.[优化]Saber授权类型字段改为checkbox</div>
                  <div>24.[修复]RequestLog遇到MultipartFile.[]类型序列化报错的问题</div>
                  <div>25.[修复]顶级字典更新后未同步更新下属字典的编号</div>
                  <div>26.[修复]Saber退出后未刷新浏览器顶部title路由的问题</div>
                  <div>27.[修复]菜单机构模块关闭编辑界面再打开新增界面数据没有清空的问题</div>
                </el-collapse-item>
                <el-collapse-item title="2.0.0.RELEASE发布，完美定制的微服务开发平台" name="0">
                  <div>1.[新增]Swagger提供list形式配置扫描包</div>
                  <div>2.[新增]DictCache、UserCache、SysCache缓存工具类</div>
                  <div>3.[新增]重新设计EntityWrapper结构，使之更加简单易用</div>
                  <div>4.[新增]强化部分敏感数据的删除校验</div>
                  <div>5.[新增]Condition类的sql条件构造器</div>
                  <div>6.[修复]工作流分页bug</div>
                  <div>7.[优化]docker配置</div>
                  <div>8.[优化]多租户逻辑</div>
                  <div>9.[优化]request打印日志逻辑</div>
                  <div>10.[修复]getIp的bug</div>
                  <div>11.[优化]saber代码生成模板</div>
                  <div>12.[新增]saber更新至element-ui 2.8.2版本</div>
                  <div>13.[修复]saber分页bug</div>
                  <div>14.[新增]crud组件提交报错后恢复按钮状态</div>
                  <div>15.[新增]字典管理表单调整</div>
                  <div>16.[升级]springboot 2.1.5</div>
                </el-collapse-item>
              </el-collapse>
            </basic-container>
          </el-row>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "wel",
  data() {
    return {
      activeNames: ['1', '2', '3', '5'],
      logActiveNames: ['30']
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    handleChange(val) {
      window.console.log(val);
    }
  },
};
</script>

<style>
.el-font-size {
  font-size: 14px;
}
</style>


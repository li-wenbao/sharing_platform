/**
 * 全局配置文件
 */
export default {
  // title: "", //标题
  // logo: "S",
  // key: "saber", //配置主键,目前用于存储
  // indexTitle: "Saber Admin",
  // clientId: "saber", // 客户端id
  // clientSecret: "saber_secret", // 客户端密钥
  // tenantMode: true, // 是否开启租户模式
  // tenantId: "000000", // 管理组租户编号
  // captchaMode: true, // 是否开启验证码模式
  // switchMode: false, // 是否开启部门切换模式
  // lockPage: "/lock",
  // tokenTime: 30000,
  // tokenHeader: 'Zling-Auth', //修改这里
  // //http的status默认放行列表
  // statusWhiteList: [],
  // //配置首页不可关闭
  // isFirstPage: false,

  title: "居宜城社区服务",
  logo: "S",
  key: 'community',//配置主键,目前用于存储
  indexTitle: '居宜城社区服务',
  clientId: 'saber', // 客户端id
  clientSecret: 'saber_secret', // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  tenantId: "000000", // 管理组租户编号
  captchaMode: true, // 是否开启验证码模式
  lockPage: '/lock',
  tokenTime: 30000,
  tokenHeader: 'Zling-Auth',
  env:'innerNet',//innerNet,extraNet
  //http的status默认放行列表
  statusWhiteList: [],
  //配置首页不可关闭
  isFirstPage: false,

  fistPage: {
    label: "首页",
    value: "/wel/index",
    params: {},
    query: {},
    meta: {
      i18n: "dashboard",
    },
    group: [],
    close: false,
  },
  //配置菜单的属性
  menu: {
    iconDefault: "iconfont icon-caidan",
    props: {
      label: "name",
      path: "path",
      icon: "source",
      children: "children",
    },
  },
  // // 第三方系统授权地址
  // authUrl: "http://localhost/blade-auth/oauth/render",
  // // 报表设计器地址(cloud端口为8108,boot端口为80)
  // reportUrl: "http://localhost:8108/ureport",
  // // 单点登录系统认证(blade-auth服务的地)
  // ssoUrl:
  //   "http://localhost:8100/oauth/authorize?client_id=saber&response_type=code&redirect_uri=",
  // // 单点登录回调地址(Saber服务的地址)
  // redirectUri: "http://localhost:1888",

  // 第三方系统授权地址
  authUrl: "http://localhost/zl-auth/oauth/render",

  reportUrl: "http://192.168.100.42:8108/ureport",
};

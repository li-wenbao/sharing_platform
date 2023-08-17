import Layout from "@/page/index/";

export default [
  {
    path: "/wel",
    component: Layout,
    redirect: "/wel/index",
    children: [
      {
        path: "index",
        name: "首页",
        meta: {
          i18n: "dashboard",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/wel/index"),
      },
    ],
  },
  {
    path: "/merchant/merchantList",
    name: "商户列表",
    component: Layout,
    redirect: "/merchant/merchantList/index",
    children: [
      {
        path: "index",
        name: "商户列表",
        meta: {
          i18n: "merchantList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/merchant/merchantList"),
      },
    ],
  },
  {
    path: "/merchant/merchantCategory",
    name: "商户类型",
    component: Layout,
    redirect: "/merchant/merchantCategory/index",
    children: [
      {
        path: "index",
        name: "商户类型",
        meta: {
          i18n: "merchantCategory",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/merchant/merchantCategory"),
      },
    ],
  },
  {
    path: "/system/menu",
    name: "菜单管理",
    component: Layout,
    redirect: "/system/menu/index",
    children: [
      {
        path: "index",
        name: "菜单管理",
        meta: {
          i18n: "menu",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/system/menu"),
      },
    ],
  },
  {
    path: "/user/account",
    name: "账号",
    component: Layout,
    redirect: "/user/account/index",
    children: [
      {
        path: "index",
        name: "账号",
        meta: {
          i18n: "account",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/user/account"),
      },
    ],
  },
  {
    path: "/base/couponList",
    name: "优惠券",
    component: Layout,
    redirect: "/base/couponList/index",
    children: [
      {
        path: "index",
        name: "优惠券",
        meta: {
          i18n: "couponList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/base/couponList"),
      },
    ],
  },
  {
    path: "/base/couponCategory",
    name: "优惠券类型",
    component: Layout,
    redirect: "/base/couponCategory/index",
    children: [
      {
        path: "index",
        name: "优惠券类型",
        meta: {
          i18n: "couponCategory",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/base/couponCategory"),
      },
    ],
  },
  {
    path: "/order/orderList",
    name: "订单管理",
    component: Layout,
    redirect: "/order/orderList/index",
    children: [
      {
        path: "index",
        name: "订单管理",
        meta: {
          i18n: "orderList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/order/orderList"),
      },
    ],
  },
  {
    path: "/base/comImages",
    name: "公共图片",
    component: Layout,
    redirect: "/base/comImages/index",
    children: [
      {
        path: "index",
        name: "公共图片",
        meta: {
          i18n: "comImages",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/base/comImages"),
      },
    ],
  },
  {
    path: "/base/comText",
    name: "公共文本",
    component: Layout,
    redirect: "/base/comText/index",
    children: [
      {
        path: "index",
        name: "公共文本",
        meta: {
          i18n: "comText",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/base/comText"),
      },
    ],
  },
  {
    path: "/base/features",
    name: "特色功能",
    component: Layout,
    redirect: "/base/features/index",
    children: [
      {
        path: "index",
        name: "特色功能",
        meta: {
          i18n: "features",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/base/features"),
      },
    ],
  },
  {
    path: "/user/role",
    name: "角色管理",
    component: Layout,
    redirect: "/user/role/index",
    children: [
      {
        path: "index",
        name: "角色管理",
        meta: {
          i18n: "role",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/user/role"),
      },
    ],
  },
  {
    path: "/goods/goodsList",
    name: "商品列表",
    component: Layout,
    redirect: "/goods/goodsList/index",
    children: [
      {
        path: "index",
        name: "商品列表",
        meta: {
          i18n: "goodsList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/goods/goodsList"),
      },
    ],
  },
  {
    path: "/goods/goodsCategory",
    name: "商品类型",
    component: Layout,
    redirect: "/goods/goodsCategory/index",
    children: [
      {
        path: "index",
        name: "商品类型",
        meta: {
          i18n: "goodsCategory",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/goods/goodsCategory"),
      },
    ],
  },
  {
    path: "/goods/goodsCarousel",
    name: "商品轮播图",
    component: Layout,
    redirect: "/goods/goodsCarousel/index",
    children: [
      {
        path: "index",
        name: "商品轮播图",
        meta: {
          i18n: "goodsCarousel",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/goods/goodsCarousel"),
      },
    ],
  },
  {
    path: "/goods/goodsSpecs",
    name: "商品规格",
    component: Layout,
    redirect: "/goods/goodsSpecs/index",
    children: [
      {
        path: "index",
        name: "商品规格",
        meta: {
          i18n: "goodsSpecs",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/goods/goodsSpecs"),
      },
    ],
  },
  {
    path: "/info",
    component: Layout,
    redirect: "/info/index",
    children: [
      {
        path: "index",
        name: "个人信息",
        meta: {
          i18n: "info",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/system/userinfo"),
      },
    ],
  },
];

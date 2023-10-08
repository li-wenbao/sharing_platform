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
  // 权限管理
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
    name: "账号列表",
    component: Layout,
    redirect: "/user/account/index",
    children: [
      {
        path: "index",
        name: "账号列表",
        meta: {
          i18n: "account",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/user/account"),
      },
    ],
  },
  {
    path: "/user/role",
    name: "角色列表",
    component: Layout,
    redirect: "/user/role/index",
    children: [
      {
        path: "index",
        name: "角色列表",
        meta: {
          i18n: "role",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/user/role"),
      },
    ],
  },
  // 商户管理
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
          import(
            /* webpackChunkName: "views" */ "@/views/merchant/merchantList"
          ),
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
          import(
            /* webpackChunkName: "views" */ "@/views/merchant/merchantCategory"
          ),
      },
    ],
  },
  {
    path: "/merchant/recommendList",
    name: "推荐位列表",
    component: Layout,
    redirect: "/merchant/recommendList/index",
    children: [
      {
        path: "index",
        name: "推荐位列表",
        meta: {
          i18n: "recommendList",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/merchant/recommendList"
          ),
      },
    ],
  },
  // 商品管理
  {
    path: "/goods/goodsAllList",
    name: "商品总表",
    component: Layout,
    redirect: "/goods/goodsAllList/index",
    children: [
      {
        path: "index",
        name: "商品总表",
        meta: {
          i18n: "goodsAllList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/goods/goodsAllList"),
      },
    ],
  },
  {
    path: "/goods/goodsExaList",
    name: "审核列表",
    component: Layout,
    redirect: "/goods/goodsExaList/index",
    children: [
      {
        path: "index",
        name: "审核列表",
        meta: {
          i18n: "goodsExaList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/goods/goodsExaList"),
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
  // 签约管理
  {
    path: "/signing/signingOrderList",
    name: "签约订单",
    component: Layout,
    redirect: "/signing/signingOrderList/index",
    children: [
      {
        path: "index",
        name: "签约订单",
        meta: {
          i18n: "signingOrderList",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/signing/signingOrderList"
          ),
      },
    ],
  },
  {
    path: "/signing/signingOrderListAver",
    name: "签约订单",
    component: Layout,
    redirect: "/signing/signingOrderListAver/index",
    children: [
      {
        path: "index",
        name: "签约订单",
        meta: {
          i18n: "signingOrderListAver",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/signing/signingOrderListAver"
          ),
      },
    ],
  },
  {
    path: "/signing/signingList",
    name: "签约方式",
    component: Layout,
    redirect: "/signing/signingList/index",
    children: [
      {
        path: "index",
        name: "签约方式",
        meta: {
          i18n: "signingList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/signing/signingList"),
      },
    ],
  },
  // 订单管理
  {
    path: "/order/orderList",
    name: "订单列表",
    component: Layout,
    redirect: "/order/orderList/index",
    children: [
      {
        path: "index",
        name: "订单列表",
        meta: {
          i18n: "orderList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/order/orderList"),
      },
    ],
  },
  // 素材管理
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
  // 财务管理
  {
    path: "/treasurer/franchiseOrders",
    name: "加盟订单",
    component: Layout,
    redirect: "/treasurer/franchiseOrders/index",
    children: [
      {
        path: "index",
        name: "加盟订单",
        meta: {
          i18n: "franchiseOrders",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/treasurer/franchiseOrders"
          ),
      },
    ],
  },
  {
    path: "/treasurer/mallOrdersList",
    name: "商城订单(总览)",
    component: Layout,
    redirect: "/treasurer/mallOrdersList/index",
    children: [
      {
        path: "index",
        name: "商城订单(总览)",
        meta: {
          i18n: "mallOrdersList",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/treasurer/mallOrdersList"
          ),
      },
    ],
  },
  {
    path: "/treasurer/mallOrdersMerList",
    name: "商城订单(商户)",
    component: Layout,
    redirect: "/treasurer/mallOrdersMerList/index",
    children: [
      {
        path: "index",
        name: "商城订单(商户)",
        meta: {
          i18n: "mallOrdersMerList",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/treasurer/mallOrdersMerList"
          ),
      },
    ],
  },
  {
    path: "/treasurer/staffList",
    name: "员工列表",
    component: Layout,
    redirect: "/treasurer/staffList/index",
    children: [
      {
        path: "index",
        name: "员工列表",
        meta: {
          i18n: "staffList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/treasurer/staffList"),
      },
    ],
  },
  {
    path: "/treasurer/writeOffRecord",
    name: "核销记录",
    component: Layout,
    redirect: "/treasurer/writeOffRecord/index",
    children: [
      {
        path: "index",
        name: "核销记录",
        meta: {
          i18n: "writeOffRecord",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/treasurer/writeOffRecord"
          ),
      },
    ],
  },
  // 评论管理
  {
    path: "/comment/commentList",
    name: "评论列表",
    component: Layout,
    redirect: "/comment/commentList/index",
    children: [
      {
        path: "index",
        name: "评论列表",
        meta: {
          i18n: "commentList",
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/comment/commentList"),
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

import request from "@/router/axios";
// 订单列表
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/order/getOrderList",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};
export const add = (params) => {
  return request({
    url: "/share/material/saveFeaturedFeatures",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/material/updateFeaturedFeatures",
    method: "post",
    params: {
      ...params,
    },
  });
};

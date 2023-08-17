import request from "@/router/axios";
// 优惠券列表
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/material/getCouponTypeList",
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
    url: "/share/material/updateCouponType",
    method: "post",
    params: {
      ...params,
    },
  });
};

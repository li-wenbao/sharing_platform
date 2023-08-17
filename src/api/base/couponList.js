import request from "@/router/axios";
// 优惠券列表
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/material/getCouponList",
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
    url: "/share/material/saveCouponInfo",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/material/updateCouponInfo",
    method: "post",
    params: {
      ...params,
    },
  });
};

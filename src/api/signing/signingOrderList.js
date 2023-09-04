import request from "@/router/axios";
// 签约订单
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/signing/getJoinOrderList",
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
    url: "/share/signing/updategetJoinOrder",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/signing/updategetJoinOrder",
    method: "post",
    params: {
      ...params,
    },
  });
};

//订单确认收款
export const confirmReceipt = (params) => {
  return request({
    url: "/share/signing/confirmReceipt",
    method: "post",
    params: {
      ...params,
    },
  });
};

//签约审核
export const joinOrderConfirm = (params) => {
  return request({
    url: "/share/signing/joinOrderConfirm",
    method: "post",
    params: {
      ...params,
    },
  });
};



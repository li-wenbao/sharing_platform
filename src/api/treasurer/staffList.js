import request from "@/router/axios";
// 员工列表
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/finance/myEmployees",
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
    url: "/share/finance/saveMyEmployees",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/finance/updateMyEmployees",
    method: "post",
    params: {
      ...params,
    },
  });
};

// 提成明细
export const getCommissionDetails = (uid) => {
  return request({
    url: "/share/finance/getCommissionDetails",
    method: "post",
    params: {
      uid,
    },
  });
};
// 分佣明细
export const getCommission = (uid) => {
  return request({
    url: "/share/finance/getCommission",
    method: "post",
    params: {
      uid,
    },
  });
};

// 核销记录
export const getWriteOffRecord = (uid) => {
  return request({
    url: "/share/finance/getWriteOffRecord",
    method: "post",
    params: {
      uid,
    },
  });
};

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
export const getCommissionDetails = (params) => {
  return request({
    url: "/share/finance/getCommissionDetails",
    method: "post",
    params: {
      ...params,
    },
  });
};
// 分佣明细
export const getCommission = (params) => {
  return request({
    url: "/share/finance/getCommission",
    method: "post",
    params: {
      ...params,
    },
  });
};

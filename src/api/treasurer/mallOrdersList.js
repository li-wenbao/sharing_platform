import request from "@/router/axios";
// 商城订单（总览）
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/finance/getFinanceSummaryTable",
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
    url: "/share/finance/saveFinanceSummaryTable",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/finance/updateFinanceSummaryTable",
    method: "post",
    params: {
      ...params,
    },
  });
};

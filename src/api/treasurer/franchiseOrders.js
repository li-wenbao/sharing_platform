import request from "@/router/axios";
// 加盟订单
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/finance/getFinanceSummaryJoin",
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
    url: "/share/finance/saveFinanceSummaryJoin",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/finance/updateFinanceSummaryJoin",
    method: "post",
    params: {
      ...params,
    },
  });
};

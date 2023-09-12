import request from "@/router/axios";
// 核销记录
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/finance/getWriteOffRecord",
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

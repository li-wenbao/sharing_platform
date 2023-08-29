import request from "@/router/axios";
// 签约方式
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/signing/getSigningWayList",
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
    url: "/share/signing/saveSigningWay",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/signing/updateSigningWay",
    method: "post",
    params: {
      ...params,
    },
  });
};

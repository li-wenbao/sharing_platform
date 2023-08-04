import request from "@/router/axios";
// 商品列表
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/commodity/getCommodityInfoList",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};

export const add = (ctid,name,curl,type) => {
  return request({
    url: "/share/commodity/saveCommodityInfo",
    method: "post",
    params: {
      ctid,name,curl,type
    },
  });
};

export const update = (cid,ctid,name,curl,type,status) => {
  return request({
    url: "/share/commodity/updateCommodityInfo",
    method: "post",
    params: {
      cid,ctid,name,curl,type,status
    },
  });
};

import request from "@/router/axios";
// 商品类型
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/commodity/getCommodityTypeList",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};

export const add = (miid,name,sort) => {
  return request({
    url: "/share/commodity/saveCommodityType",
    method: "post",
    params: {
      miid,name,sort
    },
  });
};

export const update = (ctid,name,sort,status) => {
  return request({
    url: "/share/commodity/updateCommodityType",
    method: "post",
    params: {
      ctid,name,sort,status
    },
  });
};

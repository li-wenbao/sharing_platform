import request from "@/router/axios";
// 商品规格
export const getList = (cid) => {
  return request({
    url: "/share/commodity/getCommoditySpec",
    method: "post",
    params: {
      cid
    },
  });
};
export const add = (params) => {
  return request({
    url: "/share/commodity/saveCommoditySpec",
    method: "post",
    params: {
      ...params
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/commodity/updateCommoditySpec",
    method: "post",
    params: {
      ...params
    },
  });
};

import request from "@/router/axios";
// 商品详情

export const getDetail = (cid) => {
  return request({
    url: "/share/commodity/getCommodityDesc",
    method: "post",
    params: { 
      cid,
    },
  });
};

export const add = (row) => {
  return request({
    url: "/share/commodity/saveCommodityDesc",
    method: "post",
    params: {
      ...row,
    },
  });
};

export const update = (row) => {
  return request({
    url: "/share/commodity/updateCommodityDesc",
    method: "post",
    params: {
      ...row,
    },
  });
};

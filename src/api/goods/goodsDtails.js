import request from "@/router/axios";
// 商品详情

export const getDetail = (cid) => {
  return request({
    url: "/share/commodity/getCommodityDesc",
    method: "post",
    params: {
      cid
    },
  });
};

export const add = (cid,intr,desc,terms) => {
  return request({
    url: "/share/commodity/saveCommodityDesc",
    method: "post",
    params: {
      cid,intr,desc,terms
    },
  });
};

export const update = (sid,intr,desc,terms) => {
  return request({
    url: "/share/commodity/updateCommodityDesc",
    method: "post",
    params: {
      sid,intr,desc,terms
    },
  });
};

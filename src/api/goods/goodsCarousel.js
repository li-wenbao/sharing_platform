import request from "@/router/axios";
// 商品轮播图
export const getList = (cid,status) => {
  return request({
    url: "/share/commodity/getCommodityPicture",
    method: "post",
    params: {
      cid,status
    },
  });
};

export const add = (cid, purlList) => {
  return request({
    url: "/share/commodity/saveCommodityPicture",
    method: "post",
    params: {
      // ...row,
      cid,
      purlList,
    },
  });
};

export const update = (pid,status) => {
  return request({
    url: "/share/commodity/updateCommodityPicture",
    method: "post",
    params: {
      pid,
      status,
    },
  });
};

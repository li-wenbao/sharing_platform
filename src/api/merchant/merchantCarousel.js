import request from "@/router/axios";
// 商户轮播图
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/merchant/getMerchantPictureList",
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
    url: "/share/merchant/saveMerchantPictureList",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/merchant/updateMerchantPictureList",
    method: "post",
    params: {
      ...params,
    },
  });
};

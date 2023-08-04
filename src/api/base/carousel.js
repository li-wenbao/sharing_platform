import request from "@/router/axios";
// 轮播图
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

export const add = (miid,purlList) => {
  return request({
    url: "/share/merchant/saveMerchantPictureList",
    method: "post",
    // data: data,
    params: {
      miid,
      purlList,
    },
  });
};

export const update = (mpid, purl, status) => {
  return request({
    url: "/share/merchant/updateMerchantPictureList",
    method: "post",
    params: {
      mpid,
      purl,
      status,
    },
  });
};

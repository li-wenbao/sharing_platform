import request from "@/router/axios";
// 商户
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/merchant/getMerchantInfoList",
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
    url: "/share/merchant/saveMerchantInfo",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (miid,mtid,name,phone,contacts,sex,status,account,password,roleid,uid) => {
  return request({
    url: "/share/merchant/updateMerchantInfo",
    method: "post",
    params: {
      // ...params,
      miid,mtid,name,phone,contacts,sex,status,account,password,roleid,uid
    },
  });
};

export const getMerchantTypeList = (pageNum, pageSize,params) => {
  return request({
    url: "/share/merchant/getMerchantTypeList",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};


export const getDetail = (miid) => {
  return request({
    url: "/share/merchant/getMerchantDetails",
    method: "post",
    params: {
      miid,
    },
  });
};

// 修改商户详情
export const updateMerchantDetails = (mdid,coverurl,address,location,coordinate,license) => {
  return request({
    url: "/share/merchant/updateMerchantDetails",
    method: "post",
    params: {
      mdid,
      coverurl,
      address,
      location,
      coordinate,
      license,
    },
  });
};

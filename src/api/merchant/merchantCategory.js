import request from "@/router/axios";
// 商户类型
export const getList = (pageNum, pageSize, params) => {
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

export const add = (params) => {
  return request({
    url: "/share/merchant/saveMerchantType",
    method: "post",
    params: {
      ...params
    },
  });
};

export const update = (mtid,name,iconurl,sort,status) => {
  return request({
    url: "/share/merchant/updateMerchantType",
    method: "post",
    params: {
      mtid,name,iconurl,sort,status
    },
  });
};

// export const update = (params) => {
//   return request({
//     url: "/share/merchant/updateMerchantType",
//     method: "post",
//     params: {
//       ...params
//     },
//   });
// };

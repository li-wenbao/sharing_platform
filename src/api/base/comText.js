import request from "@/router/axios";
// 公共文本
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/material/getPublicMaterialList",
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
    url: "/share/material/savePublicMaterial",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/material/updatePublicMaterial",
    method: "post",
    params: {
      ...params,
    },
  });
};

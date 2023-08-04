import request from "@/router/axios";
// 公共图片
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/material/getPublicPictureList",
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
    url: "/share/material/savePublicPicture",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/material/updatePublicPicture",
    method: "post",
    params: {
      ...params,
    },
  });
};

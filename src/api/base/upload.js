import request from "@/router/axios";
// 素材上传
export const getListFile = (file) => {
  return request({
    url: "/share/merchant/materialUpload",
    method: "post",
    params: {
      file,
    },
  });
};

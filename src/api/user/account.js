import request from "@/router/axios";
// 账号
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/user/getUserInfoList",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};
// export const add = (roleid,account,password,name,level,supuid) => {
export const add = (params) => {
  return request({
    url: "/share/user/saveUserInfo",
    method: "post",
    params: {
      ...params,
      // roleid,account,password,name,level,supuid
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/user/updateUserInfo",
    method: "post",
    params: {
      ...params,
    },
  });
};

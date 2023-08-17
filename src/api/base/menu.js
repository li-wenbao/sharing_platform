import request from "@/router/axios";

export const getList = (uid) => {
  return request({
    url: "/share/menu/userMenu",
    method: "post",
    params: {
      uid,
    },
  });
};

export const remove = (menuIdList) => {
    return request({
      url: "/share/menu/deleteMenu",
      method: "post",
      params: {
        menuIdList,
      },
    });
  };
  
  export const add = (row) => {
    return request({
      url: "/share/menu/saveMenu",
      method: "post",
      params: {
        ...row,
      },
    });
  };
  
  export const update = (row) => {
    return request({
      url: "/share/menu/updateMenu",
      method: "post",
      params: {
        ...row,
      },
    });
  };
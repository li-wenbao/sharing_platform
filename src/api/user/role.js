import request from "@/router/axios";
// 角色管理
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/role/getRoleList",
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
    url: "/share/role/saveRole",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/role/updateRole",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const rolePermissions = (uid,roleid) => {
  return request({
    url: "/share/menu/assignPermissionsGetMenu",
    method: "post",
    params: {
      uid,roleid
    },
  });
};

export const setRolePermissions = (roleid,menuIdList) => {
  return request({
    url: "/share/role/assignPermissions",
    method: "post",
    params: {
      // ...params,
      roleid,menuIdList
    },
  });
};

import request from "@/router/axios";

export const getList = (current, size, params) => {
  return request({
    url: "/share/menu/getMenuList",
    method: "post",
    params: {
      ...params,
      current,
      size,
    },
  });
};

export const getLazyList = (params) => {
  return request({
    url: "/share/menu/getMenuList",
    method: "get",
    params: {
      ...params,
    },
  });
};

export const getLazyMenuList = (parentId, params) => {
  return request({
    url: "/api/blade-system/menu/lazy-menu-list",
    method: "get",
    params: {
      ...params,
      parentId,
    },
  });
};

export const getMenuList = (current, size, params) => {
  return request({
    url: "/api/blade-system/menu/menu-list",
    method: "get",
    params: {
      ...params,
      current,
      size,
    },
  });
};

export const getMenuTree = (tenantId) => {
  return request({
    url: "/api/blade-system/menu/tree",
    method: "get",
    params: {
      tenantId,
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

export const Info = (menuid) => {
  return request({
    url: "/share/menu/getMenuInfo",
    method: "post",
    params: { menuid },
  });
};

export const getMenu = (uid) => {
  return request({
    url: "/share/menu/userMenu",
    method: "post",
    params: {
      uid,
    },
  });
};

export const getTopMenu = () =>
  request({
    url: "/api/blade-system/menu/top-menu",
    method: "get",
  });

export const getRoutes = () =>
  request({
    url: "/share/menu/getMenuList",
    method: "get",
    params: {
      // uid,
    },
  });

import request from "@/router/axios";

// 商品总列表
export const getAllList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/commodity/commodityAssemble",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};

export const commodityUpDown = (cid, status) => {
  return request({
    url: "/share/commodity/commodityUpDown",
    method: "post",
    params: {
      cid,
      status,
    },
  });
};

export const getExaList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/commodity/commodityToExamine",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};

// 商品列表
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/commodity/getCommodityInfoList",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};

// export const add = (ctid,name,curl,type) => {
export const add = (params) => {
  return request({
    url: "/share/commodity/saveCommodityInfo",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const update = (params) => {
  return request({
    url: "/share/commodity/updateCommodityInfo",
    method: "post",
    params: {
      ...params,
    },
  });
};

export const release = (params) => {
  return request({
    url: "/share/commodity/commodityRelease",
    method: "post",
    params: {
      ...params,
    },
  });
};

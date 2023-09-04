import request from "@/router/axios";
// 推荐位
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/merchant/getRecommendList",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};

export const add = (name,sort,coveurl) => {
  return request({
    url: "/share/merchant/savegetRecommend",
    method: "post",
    params: {
      name,sort,coveurl
    },
  });
};

export const update = (rlid,name,sort,coveurl,status) => {
  return request({
    url: "/share/merchant/updateRecommend",
    method: "post",
    params: {
      rlid,name,sort,coveurl,status
    },
  });
};

// 推荐位详情  查看
export const getRecommendDesc = (rlid) => {
  return request({
    url: "/share/merchant/getRecommendDesc",
    method: "post",
    params: {
      rlid,
    },
  });
};

//推荐位详情  新增
export const saveRecommendDesc = (params) => {
  return request({
    url: "/share/merchant/saveRecommendDesc",
    method: "post",
    params: {
      ...params,
    },
  });
};

//推荐位详情  修改
export const updateRecommendDesc = (rdid,labelone,labetwo,blurb,toneone,tonetwo) => {
  return request({
    url: "/share/merchant/updateRecommendDesc",
    method: "post",
    params: {
      rdid,labelone,labetwo,blurb,toneone,tonetwo
    },
  });
};

// 推荐位轮播图  查看
export const getRecommendPictureList = (rdid) => {
  return request({
    url: "/share/merchant/getRecommendPictureList",
    method: "post",
    params: {
      rdid,
    },
  });
};

// 推荐位轮播图  新增
export const saveRecommendPicture = (params) => {
  return request({
    url: "/share/merchant/saveRecommendPicture",
    method: "post",
    params: {
      ...params,
    },
  });
};
// 推荐位轮播图  修改
export const updateRecommendPicture = (params) => {
  return request({
    url: "/share/merchant/updateRecommendPicture",
    method: "post",
    params: {
      ...params,
    },
  });
};

import request from "@/router/axios";
// 评论列表
export const getList = (pageNum, pageSize, params) => {
  return request({
    url: "/share/comment/getUserCommentAdminList",
    method: "post",
    params: {
      ...params,
      pageNum,
      pageSize,
    },
  });
};
// 用户评论(状态修改)
export const updateUserComment = (wcid, status) => {
  return request({
    url: "/share/comment/updateUserComment",
    method: "post",
    params: {
      wcid,
      status,
    },
  });
};

//用户评论-图片(状态修改)
export const updateUserCommentPicture = (pcid, status) => {
  return request({
    url: "/share/comment/updateUserCommentPicture",
    method: "post",
    params: {
      pcid,
      status,
    },
  });
};

// 商家回复-新增
export const orderConfirm = (mrid, status) => {
  return request({
    url: "/share/comment/saveMerchantReply",
    method: "post",
    params: {
      mrid,
      status,
    },
  });
};

//商家回复-修改
export const updateMerchantReply = (mrid, status, content) => {
  return request({
    url: "/share/comment/updateMerchantReply",
    method: "post",
    params: {
      mrid,
      status,
      content,
    },
  });
};

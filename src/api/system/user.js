import request from '@/router/axios';

export const getList = (pageNum, pageSize, params) => {
  return request({
    url: '/share/user/getUserInfoList',
    method: 'post',
    params: {
      ...params,
      pageNum,
      pageSize,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/share/user/saveUserInfo',
    method: 'post',
    params: {
      ...row,
    },
  })
}

export const update = (row) => {
  return request({
    url: '/share/user/updateUserInfo',
    method: 'post',
    params: {
      ...row,
    },
  })
}

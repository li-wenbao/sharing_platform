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

export const updatePlatform = (userId, userType, userExt) => {
  return request({
    url: '/api/blade-system/user/update-platform',
    method: 'post',
    params: {
      userId,
      userType,
      userExt,
    }
  })
}

export const getUser = (id) => {
  return request({
    url: '/api/blade-system/user/detail',
    method: 'get',
    params: {
      id,
    }
  })
}

export const getUserPlatform = (id) => {
  return request({
    url: '/api/blade-system/user/platform-detail',
    method: 'get',
    params: {
      id,
    }
  })
}

export const getUserInfo = () => {
  return request({
    url: '/api/blade-system/user/info',
    method: 'get',
  })
}

export const resetPassword = (userIds) => {
  return request({
    url: '/api/blade-system/user/reset-password',
    method: 'post',
    params: {
      userIds,
    }
  })
}

export const updatePassword = (oldPassword, newPassword, newPassword1) => {
  return request({
    url: '/api/blade-system/user/update-password',
    method: 'post',
    params: {
      oldPassword,
      newPassword,
      newPassword1,
    }
  })
}

export const updateInfo = (row) => {
  return request({
    url: '/api/blade-system/user/update-info',
    method: 'post',
    data: row
  })
}

export const grant = (userIds, roleIds) => {
  return request({
    url: '/api/blade-system/user/grant',
    method: 'post',
    params: {
      userIds,
      roleIds,
    }
  })
}

export const unlock = (userIds) => {
  return request({
    url: '/api/blade-system/user/unlock',
    method: 'post',
    params: {
      userIds,
    }
  })
}

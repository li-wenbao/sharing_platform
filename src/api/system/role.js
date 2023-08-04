import request from '@/router/axios';

export const getList = (pageNum, pageSize, params) => {
  return request({
    url: '/share/role/getRoleList',
    method: 'post',
    params: {
      ...params,
      pageNum,
      pageSize,
    }
  })
}
export const grantTree = () => {
  return request({
    url: '/api/blade-system/menu/grant-tree',
    method: 'get',
  })
}

export const grant = (roleIds, menuIds, dataScopeIds, apiScopeIds) => {
  return request({
    url: '/api/blade-system/role/grant',
    method: 'post',
    data: {
      roleIds,
      menuIds,
      dataScopeIds,
      apiScopeIds
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/blade-system/role/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/share/role/saveRole',
    method: 'post',
    params: {
      ...row,
    },
  })
}

export const update = (row) => {
  return request({
    url: '/share/role/updateRole',
    method: 'post',
    params: {
      ...row,
    },
  })
}


export const getRole = (roleIds) => {
  return request({
    url: '/api/blade-system/menu/role-tree-keys',
    method: 'get',
    params: {
      roleIds,
    }
  })
}

// 获取权限
export const getRoleTree = (uid,roleid) => {
  return request({
    url: '/share/menu/assignPermissionsGetMenu',
    method: 'post',
    params: {
      uid,
      roleid
    }
  })
}
// 分配权限
export const pushRole = (roleid,menuIdList) => {
  return request({
    url: '/share/role/assignPermissions',
    method: 'post',
    params: {
      roleid,
      menuIdList
    }
  })
}
export const getRoleTreeById = (roleId) => {
  return request({
    url: '/api/blade-system/role/tree-by-id',
    method: 'get',
    params: {
      roleId,
    }
  })
}

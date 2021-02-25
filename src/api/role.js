import request from '@/utils/request'

const roleApi = {
  Role: '/role',
  RoleList: '/role/list',
  RoleDelete: '/role/delete',
  RoleSetAuth: '/role/assignAuth',
  RoleGetAuth: '/role/getAuths'
}

// 角色-保存
export function roleSave(parameter) {
  return request({
    url: roleApi.Role,
    method: 'post',
    data: parameter
  })
}

// 角色-详情
export function roleGet(roleId) {
  return request({
    url: roleApi.Role,
    method: 'get',
    params: { roleId }
  })
}

// 角色-列表
export function roleList(parameter) {
  return request({
    url: roleApi.RoleList,
    method: 'post',
    data: parameter
  })
}

// 角色-删除
export function roleDelete(roleId) {
  console.log(roleId)
  return request({
    url: roleApi.RoleDelete,
    method: 'get',
    params: { roleId }
  })
}

// 角色-分配权限
export function roleSetPremission(roleId, authIds) {
  return request({
    url: roleApi.RoleSetAuth,
    method: 'post',
    data: { roleId, authIds }
  })
}
// 角色-获取权限
export function roleGetPremission(roleId) {
  return request({
    url: roleApi.RoleGetAuth,
    method: 'get',
    params: { roleId }
  })
}

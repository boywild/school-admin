import request from '@/utils/request'

const adminApi = {
  AdminSave: '/admin',
  AdminList: '/admin/list',
  AdminLogin: '/admin/login',
  AdminRemove: 'admin/delete'
}

// 管理员保存
export function adminSave(parameter) {
  return request({
    url: adminApi.AdminSave,
    method: 'post',
    data: parameter
  })
}

// 管理员－列表
export function adminList(parameter) {
  return request({
    url: adminApi.AdminList,
    method: 'post',
    data: parameter
  })
}

// 管理员－删除
export function adminRemove(adminId) {
  return request({
    url: adminApi.AdminRemove,
    method: 'post',
    data: adminId
  })
}

// 管理员登录
export function adminLogin(parameter) {
  return request({
    url: adminApi.AdminLogin,
    method: 'post',
    data: parameter
  })
}

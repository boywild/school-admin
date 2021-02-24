import request from '@/utils/request'

const adminApi = {
  AdminSave: '/admin',
  AdminList: '/admin/list',
  AdminLogin: '/admin/login'
}

export function adminSave(parameter) {
  return request({
    url: adminApi.AdminSave,
    method: 'post',
    data: parameter
  })
}

export function adminList(parameter) {
  return request({
    url: adminApi.AdminList,
    method: 'post',
    data: parameter
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

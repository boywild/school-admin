import request from '@/utils/request'

const adminApi = {
  AdminSave: '/admin',
  AdminList: '/admin/list'
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

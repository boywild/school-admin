import request from '@/utils/request'

const api = {
  students: '/students'
}

export function getStudentsList(parameter) {
  return request({
    url: api.students,
    method: 'get',
    params: parameter
  })
}

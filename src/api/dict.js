import request from '@/utils/request'

export function dict(dict) {
  return request({
    url: `/dict/${dict}`,
    method: 'get'
  })
}

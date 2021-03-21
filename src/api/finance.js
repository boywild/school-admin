import request from '@/utils/request'

const financeApi = {
  FinanceList: '/finance/list',
  Finance: '/finance'
}

// 财务-列表
export function financeList(parameter) {
  return request({
    url: financeApi.FinanceList,
    method: 'post',
    data: parameter
  })
}

// 财务-保存
export function financeSave(parameter) {
  return request({
    url: financeApi.Finance,
    method: 'post',
    data: parameter
  })
}

// 财务-获取
export function financeDetail(studentId) {
  return request({
    url: financeApi.Finance,
    method: 'get',
    params: { studentId }
  })
}

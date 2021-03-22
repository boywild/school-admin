import request from '@/utils/request'
import download from '@/utils/download'

const sysApi = {
  ExcelDownLoad: '/excel/download'
}
// 学生-保存毕业申请
export function downLoadExcel(applyType = '') {
  request({
    url: sysApi.ExcelDownLoad,
    method: 'get',
    params: { applyType },
    responseType: 'blob'
  }).then(res => {
    const { data, headers = {} } = res
    try {
      const filename = decodeURIComponent(headers['content-disposition']).split('filename=')[1]
      download(data, filename)
    } catch (e) {
      console.error('返回头里缺少 content-disposition')
    }
    return res
  })
}

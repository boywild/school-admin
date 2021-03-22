const extensionMime = {
  xls: 'application/vnd.ms-excel;charset=utf-8',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8',
  dot: 'application/msword;charset=utf-8',
  dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template;charset=utf-8',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation;charset=utf-8',
  pdf: 'application/pdf;charset=utf-8',
  zip: 'application/gzip;charset=utf-8',
  txt: 'text/plain'
}

/**
 * 根据文件名获取mime类型
 *
 * @param {String} filename 文件名(含后缀)
 * @returns
 */
function getMimeByName(filename = '') {
  const arr = filename.split('.')
  const suffixName = arr[arr.length - 1]
  return extensionMime[suffixName]
}

/**
 *
 *
 * @param {String} href blobUrl
 * @param {String} filename 文件名(含后缀)
 */
function createElementA(href, filename) {
  let a
  if (window.navigator.userAgent.indexOf('Edge') === -1) {
    a = document.createElement('a')
  } else {
    a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
  }
  a.style.display = 'none'
  a.href = href
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default function download(data, filename) {
  const blob = new Blob([data], { type: getMimeByName(filename) })
  const url = window.URL || window.webkitURL
  const blobUrl = url.createObjectURL(blob)
  createElementA(blobUrl, filename)
  url.revokeObjectURL(blobUrl)
}

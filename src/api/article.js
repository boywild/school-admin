import request from '@/utils/request'

const articleApi = {
  articleList: '/article/pageList',
  articleSave: '/article',
  articleRemove: '/article/delete'
}

export function articleList(parameter) {
  return request({
    url: articleApi.articleList,
    method: 'post',
    data: parameter
  })
}

// 文章－删除
export function articleRemove(articleId) {
  return request({
    url: articleApi.articleRemove,
    method: 'post',
    data: articleId
  })
}

export function articleSave(parameter) {
  console.log(parameter)
  return request({
    url: articleApi.articleSave,
    method: 'post',
    data: parameter
  })
}

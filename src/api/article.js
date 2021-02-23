import request from '@/utils/request'

const articleApi = {
  articleList: '/article/pageList',
  articleSave: '/article'
}

export function articleList(parameter) {
  return request({
    url: articleApi.articleList,
    method: 'post',
    data: parameter
  })
}

export function articleSave(parameter) {
  return request({
    url: articleApi.articleSave,
    method: 'post',
    data: parameter
  })
}

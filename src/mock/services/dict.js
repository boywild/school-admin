import Mock from 'mockjs2'
// import { builder } from '../util'

const YesOrNoEnum = () => {
  return [
    { desc: '是', code: 1 },
    { desc: '否', code: 0 }
  ]
}

const OpenOrCloseEnum = () => {
  return [
    { desc: '启用', code: '1' },
    { desc: '禁用', code: '0' }
  ]
}

Mock.mock(/\/dict\/YesOrNoEnum/, 'get', YesOrNoEnum)
Mock.mock(/\/dict\/OpenOrCloseEnum/, 'get', OpenOrCloseEnum)

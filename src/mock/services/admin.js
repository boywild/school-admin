import Mock from 'mockjs2'
import { builder } from '../util'

const adminSave = () => {
  return builder(
    {
      adminId: '6004edc5ea0c5125d024346f',
      loginNo: 'admin',
      name: '管理员',
      phone: '13312345678',
      allowStatus: true,
      remark: '首个'
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}
const adminList = () => {
  return builder(
    {
      pageNum: 0,
      pageSize: 30,
      totalElements: 300,
      totalPages: 1,
      last: true,
      first: true,
      content: [
        {
          adminId: '6004ea41ea0c514170d80874',
          loginNo: '000',
          name: '用户1',
          phone: '13312345678',
          allowStatus: true,
          roleId: '60052b7332ea0c5120ec4c5410',
          roleName: '超级管理员',
          createTime: 1612938896703,
          remark: '首个'
        },
        {
          adminId: '6004ea41ea0c51417220d80874',
          loginNo: '001',
          name: '用户2',
          phone: '18827032021',
          allowStatus: false,
          roleId: '60052b72ea033rc5120ec4c5410',
          roleName: '超级管理员',
          createTime: 1612938896703,
          remark: '首个'
        }
      ]
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}
const adminLogin = () => {
  return builder(
    {
      name: '超级管理员',
      adminType: '0',
      phone: '18827032021',
      roleId: '001',
      remark: '测试使用',
      authIds: [
        'T001',
        'T005',
        'F001',
        'S001',
        'S002',
        'S003',
        'S004',
        'F002',
        'S005',
        'S006',
        'S007',
        'S008',
        'S009',
        'F003',
        'F004',
        'S011',
        'S012',
        'F005',
        'F006'
      ],
      jsessionId: '4291d7da9005377ec9aec4a71ea837f'
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}
Mock.mock(/\/admin\/list/, 'post', adminList)
Mock.mock(/\/admin\/login/, 'post', adminLogin)
Mock.mock(/\/admin/, 'post', adminSave)

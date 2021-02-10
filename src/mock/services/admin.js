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
      pageNum: 1,
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
          roleId: '92389',
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
          roleId: '92389',
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

Mock.mock(/\/admin\/list/, 'post', adminList)
Mock.mock(/\/admin/, 'post', adminSave)

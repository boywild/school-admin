import Mock from 'mockjs2'
import { builder } from '../util'

const studentList = () => {
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
          name: '超级管理员',
          phone: '13312345678',
          allowStatus: true,
          remark: '首个'
        },
        {
          adminId: '6004ea41ea0c514170d80874',
          loginNo: '001',
          name: '学校管理员',
          phone: '18827032021',
          allowStatus: false,
          remark: '首个'
        }
      ]
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

Mock.mock(/\/student\/list/, 'post', studentList)
Mock.mock(/\/student\/saveBase/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/uploadPicture/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/apply/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/saveTerm/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/saveDegreeInfo/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/saveExam/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/graduateApply/, 'post', builder(true, '', 200))

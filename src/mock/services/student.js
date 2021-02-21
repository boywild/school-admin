import Mock from 'mockjs2'
import { builder } from '../util'

const studentList = () => {
  return builder(
    {
      pageNum: 1,
      pageSize: 30,
      totalElements: 0,
      totalPages: 0,
      last: true,
      first: true,
      content: [
        {
          studentId: '4291d7da9005377ec9aec4a71ea837f',
          studentNo: '001',
          studentName: '哈哈',
          idNumber: '424151525252525252',
          phone: '18827032021',
          age: '23',
          graduateSchool: '23',
          major: '23',
          graduateTime: 1613911570038,
          score: '23'
        },
        {
          studentId: '4291d7d2323a9005377ec9aec4a71ea837f',
          studentNo: '110',
          studentName: '哈哈',
          idNumber: '424151525252525252',
          phone: '18827032021',
          age: '23',
          graduateSchool: '23',
          major: '23',
          graduateTime: 1613911570038,
          score: '23'
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

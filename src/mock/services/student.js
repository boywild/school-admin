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

const baseInfo = () => {
  return builder(
    {
      studentId: '60054737ea0c51177873f92e',
      studentName: '测试一号',
      idType: '身份证',
      idNumber: '111111',
      phone: '13812345678',
      nation: '汉',
      gender: '男',
      birthDay: '20210118',
      location: ['11', '1101', '110101'],
      householdType: '农村',
      profession: 'ADC',
      politicsStatus: '党员',
      graduateSchool: '家里蹲大学',
      graduateTime: '20210701',
      diplomaNo: '420',
      diplomaType: '学士学位',
      contactAddr: '湖北武汉',
      workLocation: '武昌',
      email: '136@qq.com'
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

const pictureInfo = () => {
  return builder(
    [
      {
        pictureId: '60054a5fea0c511e846114d4',
        studentId: '60054737ea0c51177873f92e',
        pictureType: 'education',
        fileUrl: 'https:www.baidu.com/123.jpg'
      }
    ],
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

const applyInfo = () => {
  return builder(
    {
      applyId: '6005527dea0c512224250d93',
      sourceType: 'group',
      studentId: '60054737ea0c51177873f92e',
      principalGuy: '责任人',
      principalTeacher: '责任老师',
      studentApplyLevel: 'senior2junior',
      applySchool: '武汉大学',
      applyMajor: '社会学',
      duration: '4',
      bachelorSecondFlag: true,
      studyPlatform: '作业帮',
      studentNo: '123',
      studyAccount: 'admin',
      loginPassword: 'a123456',
      admitResult: '成功',
      score: 0.0,
      textFlag: false,
      refundFlag: false
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

const termInfo = () => {
  return builder(
    [
      {
        termId: '600569bbea0c513274621384',
        studentId: '60054737ea0c51177873f92e',
        wantDegreeFlag: true,
        situation: '良好',
        degreeRequire: true,
        applyUnifyFlag: true,
        unifyDealFlag: true,
        unifyDate: '上午',
        unifyLocation: '一教教学楼',
        unifyAccount: 'kk123',
        unifyPassword: 'a123456',
        englishScore: 59.0,
        computerScore: 59.0
      }
    ],
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

const degreeInfo = () => {
  return builder(
    {
      degreeId: '60065517ea0c511904dd9a66',
      degreePaperFlag: true,
      dealFlag: true,
      registerEndFlag: true,
      infoCheckFlag: true,
      reachFlag: true,
      takeFlag: true,
      applyDiplomaFlag: true,
      hasDiplomaFlag: true,
      reachDiplomaFlag: true,
      takeDiplomaFlag: true,
      takeDiplomaDate: '20210119',
      takeWay: '邮寄'
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

const examInfo = () => {
  return builder(
    {
      subjectId: '60065865ea0c511540525364',
      studentId: '60054737ea0c51177873f92e',
      subjectCode: '001',
      subjectName: '语文',
      examTime: '上午',
      applyFlag: true,
      assignReviewDataFlag: true,
      tutorialInformFlag: true,
      grade: 99.0,
      passDateTime: '2021-01-19T11:56:20.896',
      grades: [{ subjectName: '语文', grade: 99.0 }]
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

Mock.mock(/\/student\/list/, 'post', studentList)
Mock.mock(/\/student\/saveBase/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/base/, 'get', baseInfo)

Mock.mock(/\/student\/uploadPicture/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/picture/, 'get', pictureInfo)

Mock.mock(/\/student\/apply/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/getApplyInfo/, 'get', applyInfo)

Mock.mock(/\/student\/saveTerm/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/termList/, 'get', termInfo)

Mock.mock(/\/student\/saveDegreeInfo/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/degreeInfo/, 'get', degreeInfo)

Mock.mock(/\/student\/saveExam/, 'post', builder(true, '', 200))
Mock.mock(/\/student\/subjectDetail/, 'get', examInfo)

Mock.mock(/\/student\/graduateApply/, 'post', builder(true, '', 200))

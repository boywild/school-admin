import request from '@/utils/request'

const studentApi = {
  StudentList: '/student/list',

  StudentBaseInfo: '/student/saveBase',
  StudentGetBaseInfo: '/student/base',

  StudentPic: '/student/uploadPicture',
  StudentGetPic: '/student/picture',

  StudentApply: '/student/apply',
  StudentGetApply: '/student/getApplyInfo',

  StudentTerm: '/student/saveTerm',
  StudentGetTerm: '/student/termList',

  StudentDegree: '/student/saveDegreeInfo',
  StudentGetDegree: '/student/degreeInfo',

  StudentExam: '/student/saveExam',
  StudentGetExam: '/student/subjectDetail',

  StudentGraduate: '/student/graduateApply'
}

// 学生-列表
export function studentList(parameter) {
  return request({
    url: studentApi.StudentList,
    method: 'post',
    data: parameter
  })
}

// 学生-保存基本信息
export function studentBaseInfo(parameter) {
  return request({
    url: studentApi.StudentBaseInfo,
    method: 'post',
    data: parameter
  })
}

// 学生-获取基本信息
export function getBaseInfo(studentId) {
  return request({
    url: studentApi.StudentGetBaseInfo,
    method: 'get',
    data: { studentId }
  })
}

// 学生-保存图片信息
export function studentPic(parameter) {
  return request({
    url: studentApi.StudentPic,
    method: 'post',
    data: parameter
  })
}

// 学生-获取图片信息
export function getPic(studentId) {
  return request({
    url: studentApi.StudentGetPic,
    method: 'get',
    data: { studentId }
  })
}

// 学生-保存报名信息
export function studentApply(parameter) {
  return request({
    url: studentApi.StudentApply,
    method: 'post',
    data: parameter
  })
}

// 学生-获取报名信息
export function getApply(studentId) {
  return request({
    url: studentApi.StudentGetApply,
    method: 'get',
    data: { studentId }
  })
}

// 学生-保存学期信息
export function studentTerm(parameter) {
  return request({
    url: studentApi.StudentTerm,
    method: 'post',
    data: parameter
  })
}

// 学生-获取学期信息
export function getTerm(studentId) {
  return request({
    url: studentApi.StudentGetTerm,
    method: 'get',
    data: { studentId }
  })
}

// 学生-保存学位信息
export function studentDegree(parameter) {
  return request({
    url: studentApi.StudentDegree,
    method: 'post',
    data: parameter
  })
}

// 学生-获取学位信息
export function getDegree(studentId) {
  return request({
    url: studentApi.StudentGetDegree,
    method: 'get',
    data: { studentId }
  })
}

// 学生-添加考期信息
export function studentExam(parameter) {
  return request({
    url: studentApi.StudentExam,
    method: 'post',
    data: parameter
  })
}

// 学生-获取考期信息
export function getExam(studentId) {
  return request({
    url: studentApi.StudentGetExam,
    method: 'post',
    data: { studentId }
  })
}

// 学生-毕业申请
export function studentGraduate(parameter) {
  return request({
    url: studentApi.StudentGraduate,
    method: 'post',
    data: parameter
  })
}

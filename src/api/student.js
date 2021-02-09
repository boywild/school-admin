import request from '@/utils/request'

const studentApi = {
  StudentList: '/student/list',
  StudentBaseInfo: '/student/saveBase',
  StudentPic: '/student/uploadPicture',
  StudentApply: '/student/apply',
  StudentTerm: '/student/saveTerm',
  StudentDegree: '/student/saveDegreeInfo',
  StudentExam: '/student/saveExam',
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

// 学生-图片信息
export function studentPic(parameter) {
  return request({
    url: studentApi.StudentPic,
    method: 'post',
    data: parameter
  })
}

// 学生-报名信息
export function studentApply(parameter) {
  return request({
    url: studentApi.StudentApply,
    method: 'post',
    data: parameter
  })
}

// 学生-学期信息
export function studentTerm(parameter) {
  return request({
    url: studentApi.StudentTerm,
    method: 'post',
    data: parameter
  })
}

// 学生-学位信息
export function studentDegree(parameter) {
  return request({
    url: studentApi.StudentDegree,
    method: 'post',
    data: parameter
  })
}

// 学生-考期信息
export function studentExam(parameter) {
  return request({
    url: studentApi.StudentExam,
    method: 'post',
    data: parameter
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

import request from '@/utils/request'

const studentApi = {
  StudentList: '/student/list', // 学生列表

  StudentBaseInfo: '/student/saveBase', // 基本信息-保存
  StudentGetBaseInfo: '/student/base', // 基本信息-获取

  StudentPic: '/student/uploadPicture', // 图片-保存
  StudentGetPic: '/student/picture', // 图片-列表

  StudentApply: '/student/apply', // 报名-保存
  StudentGetApply: '/student/getApplyInfo', // 报名-获取

  StudentTerm: '/student/saveTerm', // 学期-保存
  StudentGetTerm: '/student/termList', // 学期-获取

  StudentDegree: '/student/saveDegreeInfo', // 学位-保存
  StudentGetDegree: '/student/degreeInfo', // 学位-获取

  StudentExam: '/student/saveExam', // 教务考期-保存
  StudentGetExam: '/student/subjectDetail', // 教务考期-获取

  StudentEduTask: '/student/saveAcademic', // 教务-保存
  StudentGetEduTask: '/student/academicInfo', // 教务-获取

  StudentGraduate: '/student/graduateApply', // 毕业申请-保存
  StudentGetGraduate: '/student/getGraduateApply', // 毕业申请-获取
  StudentScore: '/student/subjectList' // 科目成绩列表
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
    params: { studentId }
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
    params: { studentId }
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
    params: { studentId }
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
    params: { studentId }
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
export function getDegree(studentId, term) {
  return request({
    url: studentApi.StudentGetDegree,
    method: 'get',
    params: { studentId, term }
  })
}

// 学生-保存教务信息
export function studentEduTask(parameter) {
  return request({
    url: studentApi.StudentEduTask,
    method: 'post',
    data: parameter
  })
}

// 学生-获取教务信息
export function studentGetEduTask(studentId, subjectType) {
  return request({
    url: studentApi.StudentGetEduTask,
    method: 'get',
    params: { studentId, subjectType }
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
export function getExam(studentId, subjectType) {
  return request({
    url: studentApi.StudentGetExam,
    method: 'get',
    params: { studentId, subjectType }
  })
}

// 获取科目成绩
export function getSubjectScore(studentId) {
  return request({
    url: studentApi.StudentScore,
    method: 'get',
    params: { studentId }
  })
}
// 学生-保存毕业申请
export function studentGraduate(parameter) {
  return request({
    url: studentApi.StudentGraduate,
    method: 'post',
    data: parameter
  })
}
// 学生-获取毕业申请
export function studentGetGraduate(studentId) {
  return request({
    url: studentApi.StudentGetGraduate,
    method: 'get',
    params: { studentId }
  })
}

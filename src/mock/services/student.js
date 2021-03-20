import Mock from 'mockjs2'
import { builder } from '../util'

const studentList = () => {
  return {
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
  }
}

const baseInfo = () => {
  return {
    studentId: '60054737ea0c51177873f92e',
    studentName: '测试一号',
    idType: '1',
    idNumber: '111111',
    phone: '13812345678',
    nation: '1',
    gender: '1',
    birthDay: '20210118',
    location: ['11', '1101', '110101'],
    householdType: '1',
    profession: 'ADC',
    politicsStatus: '1',
    graduateSchool: '家里蹲大学',
    graduateTime: '20210701',
    diplomaNo: '420',
    diplomaType: '学士学位',
    contactAddr: '湖北武汉',
    workLocation: '武昌',
    email: '136@qq.com'
  }
}

const pictureInfo = () => {
  return [
    {
      pictureId: '60054a5fea0c511e846114d4',
      studentId: '60054737ea0c51177873f92e',
      pictureType: '0',
      pictureTypeDesc: '学生',
      fileUrl: ['https:www.baidu.com/123.jpg']
    },
    {
      pictureId: '60054a5fea0c511e846114d4',
      studentId: '60054737ea0c51177873f92e',
      pictureType: '1',
      pictureTypeDesc: '身份证',
      fileUrl: ['https:www.baidu.com/123.jpg']
    },
    {
      pictureId: '60054a5fea0c511e846114d4',
      studentId: '60054737ea0c51177873f92e',
      pictureType: '2',
      pictureTypeDesc: '学历',
      fileUrl: ['https:www.baidu.com/123.jpg']
    },
    {
      pictureId: '60054a5fea0c511e846114d4',
      studentId: '60054737ea0c51177873f92e',
      pictureType: '3',
      pictureTypeDesc: '其他照片',
      fileUrl: ['https:www.baidu.com/123.jpg']
    }
  ]
}

const applyInfo = () => {
  return {
    entranceDate: 1616139128276,
    sourceType: '1',
    sourceTypeDesc: '',
    studentId: 's34343421123123123',
    principalGuy: '陈老师',
    principalTeacher: '熊老师',
    crtDateTime: 1616139128276,
    updDateTime: 1616139128276,
    studentApplyLevel: '1',
    studentApplyLevelDesc: '',
    applySchool: '湖北大学',
    applySchoolCode: '001',
    applyMajor: '修电脑',
    applyMajorCode: '888',
    learnStyle: '1',
    learnStyleDesc: '',
    duration: '12',
    bachelorSecondFlag: '1',
    workStartTime: 1616139128276,
    testFree: '1',
    specialApply: '1',
    specialApplyDistrict: '湖北大学武昌校区',
    studyPlatform: '慕课网',
    studentNo: '20101877',
    studyAccount: 'chentian@qq.com',
    loginPassword: '123456',
    admitResult: '1',
    lessonStyle: '1',
    trainTimes: 2,
    examCerNo: '001',
    examineeNo: '55643',
    examDateTime: 1616139128276,
    examCity: ['11', '1101', '110101'],
    score: 33.44,
    diplomaTime: 1616139128276,
    studyEffect: '1',
    applyStatus: '1',
    applyTimes: '20',
    textFlag: '1',
    refundFlag: '1',
    refundWay: '支付宝'
  }
}

const termInfo = () => {
  return [
    {
      termId: '23423',
      term: '34563456345',
      studentId: '12sadsasd23423',
      baoKaoDegree: '1',
      applyDegree: '1',
      degreeInformTime: 1616139128276,
      degreeScore: '1',
      termEndScore: 223.23,
      registerSheetFlag: '1',
      studentRegisterFlag: '1',
      specialItem: '1',
      graduateRegisterSheet: '1',
      graduateGather: '1',
      graduateGatherDesc: '',
      graduatePictureReachEntFlag: '1',
      graduatePicturePostSchoolFlag: '1',
      delayGraduateFlag: '1',
      studentPaper: '1',
      studentPaperDesc: '',
      diplomaFlag: '1',
      diplomaReachFlag: '1',
      diplomaTakeFlag: '1',
      diplomaTakeTime: 1616139128276,
      diplomaTakeWay: '1',
      wantDegreeFlag: '1',
      situation: '2323',
      degreeRequire: '1',
      applyUnifyFlag: '1',
      unifyDealFlag: '1',
      unifyDate: 1616139128276,
      unifyLocation: '湖北武汉',
      unifyAccount: '239239293',
      unifyPassword: '111111',
      englishScore: 20.44,
      computerScore: 30.55
    }
  ]
}

const degreeInfo = () => {
  return [
    {
      degreeId: '232323',
      term: '1',
      studentId: '893489843',
      school: '湖北大学',
      major: '电子信息工程',
      majorCode: '887',
      duration: '2',
      studentNo: '09882828',
      studentDegreeType: '1',
      studentDegreeTypeDesc: '',
      degreeExamNo: '0987778',
      examLocation: '087',
      language: '1',
      languageDesc: '',
      vipFlag: '1',
      vipFlagDesc: '',
      vipDutyTeacher: '高晓松',
      passStatus: '1',
      passStatusDesc: '',
      paper: '1',
      paperDesc: '',
      dealFlag: '1',
      registerEndFlag: '1',
      infoCheckFlag: '1',
      reachFlag: '1',
      takeFlag: '1',
      takeDate: 1616139128276,
      applyDiplomaFlag: '1',
      hasDiplomaFlag: '1',
      reachDiplomaFlag: '1',
      takeDiplomaFlag: '1',
      takeDiplomaDate: 1616139128276,
      takeWay: '邮寄'
    }
  ]
}

const examInfo = () => {
  return [
    {
      subjectId: '60065865ea0c511540525364',
      studentId: '60054737ea0c51177873f92e',
      subjectType: '',
      subjectCode: '001',
      subjectName: '语文',
      examTime: '上午',
      applyFlag: true,
      assignReviewDataFlag: true,
      tutorialInformFlag: true,
      grade: 99.0,
      scoreResult: '',
      passDateTime: ''
    }
  ]
}
const academicInfo = () => {
  return {
    studentId: '89890809809',
    studentSource: '80',
    applySchool: '武汉大学',
    applyMajor: '物流',
    entranceTime: 1616139128276,
    certificateFlag: '1',
    myCertificateFlag: '1',
    dutyTeacher: '雷军',
    registerFlowNo: '80809898989',
    initPsd: '123456',
    majorCode: '001',
    examLocation: '4',
    vipFlag: '1',
    preApplyNo: '1',
    smsPassword: '1',
    examNo: '09090',
    studentNo: '09090',
    admitLetterReachFlag: '1',
    admitLetterSendFlag: '1',
    cheatFlag: '1',
    studyPlatform: '慕课网',
    studyNo: '099889',
    accountNo: '3333',
    loginPsd: '2222',
    admitFlag: '1'
  }
}
const graduateApply = () => {
  return {
    degreeId: '89890809809',
    graduateApplyFlag: '1',
    takeDiplomaFlag: '1',
    takeDiplomaDate: 1616139128276,
    takeWay: '邮寄'
  }
}

const subjectList = () => {
  return [
    {
      subjectId: '9092039029',
      subjectType: '0',
      subjectTypeDesc: '',
      grade: 20
    },
    {
      subjectId: '9092039029',
      subjectType: '1',
      subjectTypeDesc: '',
      grade: 20
    }
  ]
}

Mock.mock(/\/student\/list/, 'post', studentList) // 学生列表
Mock.mock(/\/student\/saveBase/, 'post', builder(true, '', 200)) // 基本信息-保存
Mock.mock(/\/student\/base/, 'get', baseInfo) // 基本信息-获取

Mock.mock(/\/student\/uploadPicture/, 'post', builder(true, '', 200)) // 图片-保存
Mock.mock(/\/student\/picture/, 'get', pictureInfo) // 图片-列表

Mock.mock(/\/student\/apply/, 'post', builder(true, '', 200)) // 报名-保存
Mock.mock(/\/student\/getApplyInfo/, 'get', applyInfo) // 报名-获取

Mock.mock(/\/student\/saveTerm/, 'post', builder(true, '', 200)) // 学期-保存
Mock.mock(/\/student\/termList/, 'get', termInfo) // 学期-获取

Mock.mock(/\/student\/saveDegreeInfo/, 'post', builder(true, '', 200)) // 学位-保存
Mock.mock(/\/student\/degreeInfo/, 'get', degreeInfo) // 学位-获取

Mock.mock(/\/student\/saveExam/, 'post', builder(true, '', 200)) // 教务考期-保存
Mock.mock(/\/student\/subjectDetail/, 'get', examInfo) // 教务考期-获取

Mock.mock(/\/student\/saveAcademic/, 'post', builder(true, '', 200)) // 教务-保存
Mock.mock(/\/student\/academicInfo/, 'get', academicInfo) // 教务-获取

Mock.mock(/\/student\/graduateApply/, 'post', builder(true, '', 200)) // 毕业申请
Mock.mock(/\/student\/graduateApply/, 'get', graduateApply) // 毕业申请
Mock.mock(/\/student\/subjectList/, 'get', subjectList) // 科目成绩列表

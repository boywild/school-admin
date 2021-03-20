import Mock from 'mockjs2'
import { builder } from '../util'

const financeList = () => {
  return {
    pageNum: 1,
    pageSize: 30,
    totalElements: 300,
    totalPages: 100,
    last: true,
    first: true,
    content: [
      {
        studentId: '6004ea41ea0c514170d80874',
        degreeLevel: '2021-12-12',
        layer: '1',
        graduateSchool: '武汉大学',
        studentName: '武大郎',
        major: '搬砖人员',
        idNumber: '959595959595959595',
        registerDateTime: 1612938896703,
        totalExpense: '99999.99',
        realExpense: '99999.99',
        oweExpense: '99999.99',
        expenseTypeInfos: []
      }
    ]
  }
}

const financeDetail = () => {
  return {
    oweClearTime: 1616139128276,
    totalExpense: 100,
    realExpense: 100,
    oweExpense: 100,
    status: 100,
    first: 100,
    second: 100,
    third: 100,
    fourth: 100,
    fifth: 100,
    apply: 100,
    test: 100,
    unifyEnglish: 100,
    unifyComputer: 100,
    unifyDegreeEnglish: 100,
    degreePaper: 100,
    nonDegreePaper: 100,
    reward: 100,
    entranceTutor: 100,
    degreeApply: 100,
    degreeTutor: 100,
    eCourse: 100,
    paper: 100,
    imageCollect: 100,
    specialApply: 100,
    bonus: 100
  }
}
Mock.mock(/\/finance\/list/, 'post', financeList)
Mock.mock(/\/finance/, 'post', builder(true, '', 200))
Mock.mock(/\/finance/, 'get', financeDetail)

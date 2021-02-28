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
    financeId: '60068367ea0c513f343e144b',
    studentId: '60054737ea0c51177873f92e',
    degreeLevel: '第一批',
    layer: '第一层',
    graduateSchool: '家里蹲大学',
    studentName: '测试一号',
    major: '修电脑',
    idNumber: '111111',
    registerDateTime: 1610958646966,
    totalExpense: 1500,
    realExpense: 1300,
    oweExpense: 200,
    expenseTypeInfos: [
      { expenseType: 'apply', expenseAmt: 1000, realAmt: 900, expenseDateTime: '2021-01-19T15:07:32.286' },
      { expenseType: 'degreeTutor', expenseAmt: 500, realAmt: 400, expenseDateTime: '2021-01-19T15:07:32.287' }
    ]
  }
}
Mock.mock(/\/finance\/list/, 'post', financeList)
Mock.mock(/\/finance/, 'post', builder(true, '', 200))
Mock.mock(/\/finance/, 'get', financeDetail)

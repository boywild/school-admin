export default [
  {
    label: '报考学位',
    field: 'wantDegreeFlag',
    form: 'radio',
    radioFrom: 'YESORNO_ENMU',
    rules: []
  },
  {
    label: '申请学位',
    field: 'xxxx',
    form: 'radio',
    radioFrom: 'YESORNO_ENMU',
    rules: []
  },
  {
    label: '学位成绩通过时间',
    field: 'xxxx',
    form: 'date',
    rules: []
  },
  {
    label: '学位成绩',
    field: 'xxxx',
    form: 'select',
    selectFrom: 'REACH_ENMU',
    rules: []
  },
  {
    label: '期末考试成绩',
    field: 'xxxx',
    form: 'input',
    rules: [{ max: 6, message: '登录密码限制输入6位' }]
  },
  {
    label: '填写入学生登记表',
    field: 'xxxx',
    form: 'radio',
    radioFrom: 'YESORNO_ENMU',
    rules: []
  },
  {
    label: '学籍已注册',
    field: 'xxxx',
    form: 'radio',
    radioFrom: 'YESORNO_ENMU',
    rules: []
  },
  {
    label: '特殊事项',
    field: 'xxxx',
    form: 'input',
    rules: []
  }
]

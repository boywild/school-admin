import Mock from 'mockjs2'
import { builder } from '../util'

const roleSave = () => {
  return builder(
    {
      roleId: '60052b7332ea0c5120ec4c5410',
      roleName: '超级管理员',
      status: '0',
      updSysData: '1',
      remark: '系统初始化'
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}
const roleList = () => {
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
          roleId: '60052b7332ea0c5120ec4c5410',
          roleName: '超级管理员',
          status: '1',
          updSysData: '1',
          createTime: 1612938896703,
          remark: '系统初始化'
        },
        {
          roleId: '60052b72ea033rc5120ec4c5410',
          roleName: '学校管理员',
          status: '0',
          updSysData: '0',
          createTime: 1612938896703,
          remark: '新建'
        }
      ]
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}
const permissionList = () => {
  return builder(
    [
      {
        authId: 'F001',
        authName: '学历教育',
        chooseFlag: true,
        list: [
          {
            authId: 'S001',
            authName: '成人教育',
            chooseFlag: true,
            list: [
              { authId: 'T001', authName: '基本信息', chooseFlag: true },
              { authId: 'T002', authName: '学生图片信息', chooseFlag: true },
              { authId: 'T003', authName: '报名相关信息', chooseFlag: true },
              { authId: 'T004', authName: '学期管理', chooseFlag: true },
              { authId: 'T005', authName: '学位管理', chooseFlag: true },
              { authId: 'T006', authName: '财务管理', chooseFlag: true }
            ]
          },
          {
            authId: 'S002',
            authName: '自考教育',
            chooseFlag: true,
            list: [
              { authId: 'T007', authName: '基本信息', chooseFlag: true },
              { authId: 'T008', authName: '学生图片信息', chooseFlag: true },
              { authId: 'T009', authName: '教务添加考期', chooseFlag: true },
              { authId: 'T022', authName: '毕业申请', chooseFlag: true }
            ]
          }
        ]
      },
      {
        authId: 'F002',
        authName: '职业培训',
        chooseFlag: true,
        list: [
          {
            authId: 'S003',
            authName: '人事培训',
            chooseFlag: true,
            list: [
              { authId: 'T010', authName: '基本信息', chooseFlag: true },
              { authId: 'T011', authName: '学生照片信息', chooseFlag: true },
              { authId: 'T012', authName: '报名相关信息', chooseFlag: true }
            ]
          },
          {
            authId: 'S004',
            authName: '医考培训',
            chooseFlag: true,
            list: [
              { authId: 'T013', authName: '修改', chooseFlag: true },
              { authId: 'T014', authName: '数据导出', chooseFlag: true }
            ]
          }
        ]
      },
      {
        authId: 'F003',
        authName: '文章管理',
        chooseFlag: true,
        list: [
          {
            authId: 'S005',
            authName: '首页列表',
            chooseFlag: true,
            list: [{ authId: 'T015', authName: '新建', chooseFlag: true }]
          }
        ]
      },
      { authId: 'F004', authName: '财务管理', chooseFlag: true, list: [] },
      {
        authId: 'F005',
        authName: '待办事项',
        chooseFlag: true,
        list: [{ authId: 'S006', authName: '待审核信息', chooseFlag: true, list: [] }]
      },
      {
        authId: 'F006',
        authName: '系统管理',
        chooseFlag: true,
        list: [
          {
            authId: 'S007',
            authName: '用户管理',
            chooseFlag: true,
            list: [
              { authId: 'T016', authName: '基本信息', chooseFlag: true },
              { authId: 'T017', authName: '角色管理', chooseFlag: true }
            ]
          },
          {
            authId: 'S008',
            authName: '角色管理',
            chooseFlag: true,
            list: [
              { authId: 'T018', authName: '查看', chooseFlag: true },
              { authId: 'T019', authName: '修改', chooseFlag: true },
              { authId: 'T020', authName: '删除', chooseFlag: true }
            ]
          },
          {
            authId: 'S009',
            authName: '日志管理',
            chooseFlag: true,
            list: [{ authId: 'T021', authName: '用户名', chooseFlag: true }]
          }
        ]
      }
    ],
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

Mock.mock(/\/role\/list/, 'post', roleList)
Mock.mock(/\/role\/delete/, 'get', builder(true, '', 200))
Mock.mock(/\/role\/assignAuth/, 'post', builder(true, '', 200))
Mock.mock(/\/role\/getAuths/, 'get', permissionList)
Mock.mock(/\/role/, 'post', roleSave)

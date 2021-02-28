import Mock from 'mockjs2'
import { builder } from '../util'

const roleSave = () => {
  return {
    roleId: '60052b7332ea0c5120ec4c5410',
    roleName: '超级管理员',
    status: '0',
    updSysData: '1',
    remark: '系统初始化'
  }
}
const roleList = () => {
  return {
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
        remark: '系统初始化',
        checkedKeys: ['XLJY', '0', '0_0']
      },
      {
        roleId: '60052b72ea033rc5120ec4c5410',
        roleName: '学校管理员',
        status: '0',
        updSysData: '0',
        createTime: 1612938896703,
        remark: '新建',
        checkedKeys: ['XLJY', 'ZYPX', '9']
      }
    ]
  }
}
const permissionList = () => {
  return {
    children: [
      {
        title: '学历教育',
        key: 'F001',
        children: [
          {
            title: '成人教育',
            key: 'S001',
            children: [
              { title: '查询', key: 'T001' },
              { title: '新建', key: 'T002' },
              { title: '删除', key: 'T003' },
              { title: '导出', key: 'T004' },
              { title: '基本信息', key: 'T005' },
              { title: '图片管理', key: 'T006' },
              { title: '报名管理', key: 'T007' },
              { title: '教务管理', key: 'T008' },
              { title: '学期管理', key: 'T009' },
              { title: '学位管理', key: 'T010' },
              { title: '财务管理', key: 'T011' }
            ]
          },
          {
            title: '自学考试',
            key: 'S002',
            children: [
              { title: '查询', key: 'T012' },
              { title: '新建', key: 'T013' },
              { title: '删除', key: 'T014' },
              { title: '导出', key: 'T015' },
              { title: '基本信息', key: 'T016' },
              { title: '图片管理', key: 'T017' },
              { title: '教务管理', key: 'T018' },
              { title: '教务添加考期', key: 'T019' },
              { title: '毕业申请', key: 'T020' },
              { title: '学位管理', key: 'T021' },
              { title: '财务管理', key: 'T022' }
            ]
          },
          {
            title: '网络教育',
            key: 'S003',
            children: [
              { title: '查询', key: 'T023' },
              { title: '新建', key: 'T024' },
              { title: '删除', key: 'T025' },
              { title: '导出', key: 'T026' },
              { title: '基本信息', key: 'T027' },
              { title: '图片管理', key: 'T028' },
              { title: '报名管理', key: 'T029' },
              { title: '学期管理', key: 'T030' },
              { title: '财务管理', key: 'T031' }
            ]
          },
          {
            title: '开发大学',
            key: 'S004',
            children: [
              { title: '查询', key: 'T032' },
              { title: '新建', key: 'T033' },
              { title: '删除', key: 'T034' },
              { title: '导出', key: 'T035' },
              { title: '基本信息', key: 'T036' },
              { title: '图片管理', key: 'T037' },
              { title: '报名管理', key: 'T038' },
              { title: '教务管理', key: 'T039' },
              { title: '财务管理', key: 'T040' }
            ]
          }
        ]
      },
      {
        title: '职业培训',
        key: 'F002',
        children: [
          {
            title: '人设局培训',
            key: 'S005',
            children: [
              { title: '查询', key: 'T041' },
              { title: '新建', key: 'T042' },
              { title: '删除', key: 'T043' },
              { title: '导出', key: 'T044' },
              { title: '基本信息', key: 'T045' },
              { title: '图片管理', key: 'T046' },
              { title: '报名管理', key: 'T047' },
              { title: '教务管理', key: 'T048' },
              { title: '财务管理', key: 'T049' }
            ]
          },
          {
            title: '安检',
            key: 'S006',
            children: [
              { title: '查询', key: 'T050' },
              { title: '新建', key: 'T051' },
              { title: '删除', key: 'T052' },
              { title: '导出', key: 'T053' },
              { title: '基本信息', key: 'T054' },
              { title: '图片管理', key: 'T055' },
              { title: '报名管理', key: 'T056' },
              { title: '教务管理', key: 'T057' },
              { title: '财务管理', key: 'T058' }
            ]
          },
          {
            title: '质检',
            key: 'S007',
            children: [
              { title: '查询', key: 'T059' },
              { title: '新建', key: 'T060' },
              { title: '删除', key: 'T061' },
              { title: '导出', key: 'T062' },
              { title: '基本信息', key: 'T063' },
              { title: '图片管理', key: 'T064' },
              { title: '报名管理', key: 'T065' },
              { title: '教务管理', key: 'T066' },
              { title: '财务管理', key: 'T067' }
            ]
          },
          {
            title: '途胜教育',
            key: 'S008',
            children: [
              { title: '查询', key: 'T068' },
              { title: '新建', key: 'T069' },
              { title: '删除', key: 'T070' },
              { title: '导出', key: 'T071' },
              { title: '基本信息', key: 'T072' },
              { title: '图片管理', key: 'T073' },
              { title: '报名管理', key: 'T074' },
              { title: '教务管理', key: 'T075' },
              { title: '财务管理', key: 'T076' }
            ]
          },
          {
            title: '医考培训',
            key: 'S009',
            children: [
              { title: '查询', key: 'T077' },
              { title: '新建', key: 'T078' },
              { title: '删除', key: 'T079' },
              { title: '导出', key: 'T080' },
              { title: '基本信息', key: 'T081' },
              { title: '图片管理', key: 'T082' },
              { title: '报名管理', key: 'T083' },
              { title: '教务管理', key: 'T084' },
              { title: '财务管理', key: 'T085' }
            ]
          }
        ]
      },
      {
        title: '财务管理',
        key: 'F003',
        children: [{ title: '财务查询', key: 'S010' }]
      },
      {
        title: '系统管理',
        key: 'F004',
        children: [
          {
            title: '用户列表',
            key: 'S011',
            children: [
              { title: '查询', key: 'T086' },
              { title: '新建', key: 'T087' },
              { title: '删除', key: 'T088' },
              { title: '修改', key: 'T089' }
            ]
          },
          {
            title: '角色列表',
            key: 'S012',
            children: [
              { title: '查询', key: 'T090' },
              { title: '新建', key: 'T091' },
              { title: '删除', key: 'T092' },
              { title: '修改', key: 'T093' },
              { title: '分配权限', key: 'T094' }
            ]
          }
        ]
      },
      {
        title: '文章管理',
        key: 'F005',
        children: [
          { title: '查询', key: 'S013' },
          { title: '新建', key: 'S014' },
          { title: '删除', key: 'S015' },
          { title: '修改', key: 'S016' },
          { title: '发布', key: 'S017' },
          { title: '取消发布', key: 'S018' }
        ]
      },
      { title: '代办事项', key: 'F006', children: [{ title: '查询', key: 'S006' }] }
    ],
    hasAuthIds: ['F001', 'S001', 'T001', 'T002', 'T003']
  }
}

Mock.mock(/\/role\/list/, 'post', roleList)
Mock.mock(/\/role\/delete/, 'get', builder(true, '', 200))
Mock.mock(/\/role\/assignAuth/, 'post', builder(true, '', 200))
Mock.mock(/\/role\/getAuths/, 'get', permissionList)
Mock.mock(/\/role/, 'post', roleSave)

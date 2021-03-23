<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="学生姓名">
                <a-input v-model="queryParam.id" placeholder="请输入学生姓名" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="证件号码">
                <a-input v-model="queryParam.status" placeholder="请输入证件号码" />
              </a-form-item>
            </a-col>
            <template v-if="advanced"> </template>
            <a-col :md="(!advanced && 8) || 24" :sm="24" v-if="$auth('T012')">
              <span
                class="table-page-search-submitButtons"
                :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
              >
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => (this.queryParam = {})">重置</a-button>
                <a @click="toggleAdvanced" style="margin-left: 8px">
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'" />
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <div class="table-operator">
        <a-button type="primary" icon="plus" v-action:T013 @click="handleAdd">新建</a-button>
        <a-button type="danger" icon="delete" v-action:T014 @click="deleteStudent">删除</a-button>
        <a-button type="primary" ghost icon="download" v-action:T015 @click="downLoad">导出数据</a-button>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="studentId"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
        :scroll="{ x: 1500 }"
      >
        <span slot="action" slot-scope="text, record">
          <template>
            <a v-action:T016 @click="handleModify(record, 'BaseInfo')">基本信息</a>
            <a-divider v-action:T017 type="vertical" />
            <a v-action:T017 @click="handleModify(record, 'ImgInfo')">图片</a>
            <a-divider v-action:T018 type="vertical" />
            <a v-action:T018 @click="handleModify(record, 'EduTask')">教务</a>
            <a-divider v-action:T019 type="vertical" />
            <a v-action:T019 @click="handleModify(record, 'ExamTerm')">教务考期</a>
            <a-divider v-action:T020 type="vertical" />
            <a v-action:T020 @click="handleModify(record, 'GraduationApply')">毕业申请</a>
            <a-divider v-action:T021 type="vertical" />
            <a v-action:T021 @click="handleModify(record, 'StudyDegree')">学位</a>
            <a-divider v-action:T022 type="vertical" />
            <a v-action:T022 @click="handleModify(record, 'StudyCost')">财务</a>
          </template>
        </span>
      </s-table>
      <BaseInfo v-model="visibleBaseInfo" :studentId="mdl && mdl.studentId" @update="tableRefresh"></BaseInfo>
      <ImgInfo v-model="visibleImgInfo" :studentId="mdl && mdl.studentId" @update="tableRefresh"></ImgInfo>
      <EduTask v-model="visibleEduTask" :studentId="mdl && mdl.studentId" @update="tableRefresh"></EduTask>
      <ExamTerm v-model="visibleExamTerm" :studentId="mdl && mdl.studentId" @update="tableRefresh"></ExamTerm>
      <GraduationApply
        v-model="visibleGraduationApply"
        :studentId="mdl && mdl.studentId"
        @update="tableRefresh"
      ></GraduationApply>
      <StudyDegree v-model="visibleStudyDegree" :studentId="mdl && mdl.studentId" @update="tableRefresh"></StudyDegree>
      <StudyCost v-model="visibleStudyCost" :studentId="mdl && mdl.studentId" @update="tableRefresh"></StudyCost>
    </a-card>
  </page-header-wrapper>
</template>

<script>
// import moment from 'moment'
import { mapState, mapActions } from 'vuex'
import { STable, Ellipsis } from '@/components'
import BaseInfo from './components/BaseInfo'
import ImgInfo from './components/ImgInfo'
// import JoinInfo from './components/JoinInfo'
import EduTask from './components/EduTask'
// import StudyTerm from './components/StudyTerm'
import StudyDegree from './components/StudyDegree'
import ExamTerm from './components/ExamTerm'
import GraduationApply from './components/GraduationApply'
import StudyCost from './components/StudyCost'
// import { getRoleList } from '@/api/manage'
// import { getStudentsList } from '@/api/students'
import { studentList } from '@/api/student'
import { downLoadExcel } from '@/api/sys'
// import {
//   STUDENT_FROM_ENMU,
//   STUDY_LEVEL_ENMU,
//   STUDY_WAT_ENMU,
//   SUBJECT_ENMU,
//   INFO_GATHER_ENMU,
//   THESIS_FROM_ENMU,
//   REACH_ENMU,
//   YESORNO_ENMU
// } from '@/config/dict'

// import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './components/CreateForm'
// import { type } from 'mockjs2'

const columns = [
  { title: '学号', dataIndex: 'studentNo', width: 160 },
  { title: '姓名', dataIndex: 'studentName', width: 100 },
  { title: '证件号', dataIndex: 'idNumber', width: 220 },
  { title: '电话号', dataIndex: 'phone', width: 140 },
  { title: '年龄', dataIndex: 'age', width: 70 },
  { title: '毕业院校', dataIndex: 'graduateSchool', width: 150 },
  { title: '专业', dataIndex: 'major', width: 140 },
  { title: '毕业时间', dataIndex: 'graduateTime', width: 190 },
  { title: '学分', dataIndex: 'score', width: 80 },
  { title: '操作', dataIndex: 'action', width: 420, fixed: 'right', scopedSlots: { customRender: 'action' } }
]

export default {
  name: 'Adult',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    BaseInfo,
    ImgInfo,
    // JoinInfo,
    EduTask,
    // StudyTerm,
    StudyDegree,
    ExamTerm,
    GraduationApply,
    StudyCost
  },
  data() {
    this.columns = columns
    return {
      // create model
      // STUDENT_FROM_ENMU,
      // STUDY_LEVEL_ENMU,
      // STUDY_WAT_ENMU,
      // SUBJECT_ENMU,
      // INFO_GATHER_ENMU,
      // THESIS_FROM_ENMU,
      // REACH_ENMU,
      // YESORNO_ENMU,
      currentForm: 'BaseInfo',
      visibleBaseInfo: false,
      visibleImgInfo: false,
      visibleEduTask: false,
      visibleExamTerm: false,
      visibleGraduationApply: false,
      visibleStudyDegree: false,
      visibleStudyCost: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return studentList({ applyType: 'S002', ...requestParameters }).then(res => {
          return res
        })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },

  created() {
    // getRoleList({ t: new Date() })

    this.YesOrNoEnum()
    this.IdTypeEnum()
    this.GenderTypeEnum()
    this.NationEnum()
    this.HouseholdEnum()
    this.PoliticsEnum()
    this.ScoreResultEnum()
    this.StudentSubjectEnum()
    this.StudentDegreeTypeEnum()
    this.LanuageEnum()
    this.StudentPassEnum()
    this.StudentPaperEnum()
    this.StudentPaperEnum()
  },
  computed: {
    ...mapState({
      dict: state => state.dict.dict
    }),
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    },
    getForm() {
      return this.currentForm
    },
    setDialogTitle() {
      let titTxt = ''
      switch (this.currentForm) {
        case 'BaseInfo':
          titTxt = '基本信息'
          break
        case 'ImgInfo':
          titTxt = '图片信息'
          break
        // case 'JoinInfo':
        //   titTxt = '报名信息'
        //   break
        case 'EduTask':
          titTxt = '教务信息'
          break
        case 'ExamTerm':
          titTxt = '添加教务考期'
          break
        case 'GraduationApply':
          titTxt = '毕业申请'
          break
        case 'StudyDegree':
          titTxt = '学位信息'
          break
        case 'StudyCost':
          titTxt = '财务信息'
          break
      }
      return titTxt
    }
  },
  methods: {
    ...mapActions([
      'YesOrNoEnum',
      'IdTypeEnum',
      'GenderTypeEnum',
      'NationEnum',
      'HouseholdEnum',
      'PoliticsEnum',
      'ScoreResultEnum',
      'StudentSubjectEnum',
      'StudentDegreeTypeEnum',
      'LanuageEnum',
      'StudentPassEnum',
      'StudentPaperEnum',
      'StudentPaperEnum'
    ]),
    // 新建学生
    handleAdd() {
      this.mdl = null
      this['visibleBaseInfo'] = true
    },
    tableRefresh() {
      const table = this.$refs.table
      table.refresh()
    },

    // 保存成功
    actionSuccess(text) {
      // 刷新表格
      this.$message.info(text)
      this.tableRefresh()
    },
    // 修改
    handleModify(record, form) {
      this.mdl = record
      this[`visible${form}`] = true
    },
    // 勾选
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    // 重置search条件
    resetSearchForm() {
      this.queryParam = {}
    },
    // 删除学生
    deleteStudent() {
      if (!this.selectedRows.length) {
        this.$message.warning('至少选择一项')
        return
      }
      this.$confirm({
        title: '是否确认删除这些数据',
        content: '请在删除前仔细确定删除数据.确认无误后点击确认按钮删除',
        onOk: async () => {
          await new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          }).catch(() => console.log('Oops errors!'))
          await this.tableRefresh()
        },
        onCancel() {}
      })
    },
    async downLoad() {
      await downLoadExcel('S002')
    }
  }
}
</script>

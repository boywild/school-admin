<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="学生姓名">
                <a-input v-model="queryParam.studentName" placeholder="请输入学生姓名" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="证件号码">
                <a-input v-model="queryParam.idNumber" placeholder="请输入证件号码" />
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="入学批次">
                  <a-input v-model="queryParam.callNo" placeholder="请输入入学批次" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="学生来源">
                  <a-select v-model="queryParam.from" placeholder="请选择学生来源">
                    <a-select-option
                      :value="item.code"
                      v-for="(item, index) in dict.StudentSourceTypeEnum"
                      :key="index"
                      >{{ item.desc }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="负责人">
                  <a-input v-model="queryParam.useStatus" placeholder="请输负责人" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="所报层次">
                  <a-select v-model="queryParam.cc" placeholder="请选择所报层次">
                    <a-select-option
                      :value="item.code"
                      v-for="(item, index) in dict.StudentApplyLevelEnum"
                      :key="index"
                      >{{ item.desc }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="所报院校">
                  <a-input v-model="queryParam.useStatus" placeholder="请输入所报院校" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="所报专业">
                  <a-input v-model="queryParam.useStatus" placeholder="请输入所报专业" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="免试">
                  <a-select v-model="queryParam.ms" placeholder="请选择免试">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.YesOrNoEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <!-- <a-col :md="8" :sm="24">
                <a-form-item label="入学考试科目">
                  <a-select v-model="queryParam.km" placeholder="请选择入学考试科目">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.YesOrNoEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col> -->
              <a-col :md="8" :sm="24">
                <a-form-item label="入学考试总分数">
                  <a-input v-model="queryParam.useStatus" placeholder="请输入学考试总分数" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="发放录取通知书">
                  <a-select v-model="queryParam.ff" placeholder="请选择发放录取通知书">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.YesOrNoEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="录取结果">
                  <a-input v-model="queryParam.useStatus" placeholder="请输入录取结果" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="是否报考学位">
                  <a-select v-model="queryParam.bk" placeholder="请选择是否报考学位">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.YesOrNoEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="学位成绩">
                  <a-select v-model="queryParam.xwcj" placeholder="请选择学位成绩">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.ScoreResultEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="毕业信息采集">
                  <a-select v-model="queryParam.byxxcj" placeholder="请选择毕业信息采集">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.GraduateGatherEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="是否延期毕业">
                  <a-select v-model="queryParam.yqby" placeholder="请选择是否延期毕业">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.YesOrNoEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="论文性质">
                  <a-select v-model="queryParam.lwxz" placeholder="请选择论文性质">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.StudentPaperEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="(!advanced && 8) || 24" :sm="24" v-if="$auth('T001')">
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
        <a-button type="primary" icon="plus" v-action:T002 @click="handleAdd">新建</a-button>
        <a-button type="danger" icon="delete" v-action:T003 @click="deleteStudent">删除</a-button>
        <a-button type="primary" ghost icon="download" v-action:T004>导出数据</a-button>
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
        <span slot="graduateTime" slot-scope="text">
          {{ text | dateFromate }}
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a v-action:T005 @click="handleModify(record, 'BaseInfo')">基本信息</a>
            <a-divider v-action:T006 type="vertical" />
            <a v-action:T006 @click="handleModify(record, 'ImgInfo')">图片</a>
            <a-divider v-action:T007 type="vertical" />
            <a v-action:T007 @click="handleModify(record, 'JoinInfo')">报名</a>
            <a-divider v-action:T008 type="vertical" />
            <a v-action:T008 @click="handleModify(record, 'EduTask')">教务</a>
            <a-divider v-action:T009 type="vertical" />
            <a v-action:T009 @click="handleModify(record, 'StudyTerm')">学期</a>
            <a-divider v-action:T010 type="vertical" />
            <a v-action:T010 @click="handleModify(record, 'StudyDegree')">学位</a>
            <a-divider v-action:T011 type="vertical" />
            <a v-action:T011 @click="handleModify(record, 'StudyCost')">财务</a>
          </template>
        </span>
      </s-table>
      <BaseInfo v-model="visibleBaseInfo" :studentId="mdl && mdl.studentId" @update="tableRefresh"></BaseInfo>
      <ImgInfo v-model="visibleImgInfo" :studentId="mdl && mdl.studentId" @update="tableRefresh"></ImgInfo>
      <JoinInfo v-model="visibleJoinInfo" :studentId="mdl && mdl.studentId" @update="tableRefresh"></JoinInfo>
      <EduTask v-model="visibleEduTask" :studentId="mdl && mdl.studentId" @update="tableRefresh"></EduTask>
      <StudyTerm v-model="visibleStudyTerm" :studentId="mdl && mdl.studentId" @update="tableRefresh"></StudyTerm>
      <StudyDegree v-model="visibleStudyDegree" :studentId="mdl && mdl.studentId" @update="tableRefresh"></StudyDegree>
      <StudyCost v-model="visibleStudyCost" :studentId="mdl && mdl.studentId" @update="tableRefresh"></StudyCost>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { mapState, mapActions } from 'vuex'
import { STable, Ellipsis } from '@/components'
import BaseInfo from './components/BaseInfo'
import ImgInfo from './components/ImgInfo'
import JoinInfo from './components/JoinInfo'
import EduTask from './components/EduTask'
import StudyTerm from './components/StudyTerm'
import StudyDegree from './components/StudyDegree'
import StudyCost from './components/StudyCost'
// import { getRoleList } from '@/api/manage'
// import { getStudentsList } from '@/api/students'
import { studentList } from '@/api/student'

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
// import moment from 'moment'
// import { type } from 'mockjs2'

const columns = [
  { title: '学号', dataIndex: 'studentNo', width: 160 },
  { title: '姓名', dataIndex: 'studentName', width: 100 },
  { title: '身份证号', dataIndex: 'idNumber', width: 220 },
  { title: '电话号', dataIndex: 'phone', width: 140 },
  { title: '年龄', dataIndex: 'age', width: 70 },
  { title: '毕业院校', dataIndex: 'graduateSchool', width: 150 },
  { title: '专业', dataIndex: 'major', width: 140 },
  { title: '毕业时间', dataIndex: 'graduateTime', width: 190, scopedSlots: { customRender: 'graduateTime' } },
  { title: '学分', dataIndex: 'score', width: 80 },
  { title: '操作', dataIndex: 'action', width: 370, fixed: 'right', scopedSlots: { customRender: 'action' } }
]

export default {
  name: 'Adult',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    BaseInfo,
    ImgInfo,
    JoinInfo,
    EduTask,
    StudyTerm,
    StudyDegree,
    StudyCost
  },
  filters: {
    dateFromate(data) {
      return moment(Number(data)).format('YYYY-MM-DD')
    }
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
      visibleJoinInfo: false,
      visibleEduTask: false,
      visibleStudyTerm: false,
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
        return studentList({ applyType: 'S001', ...requestParameters }).then(res => {
          console.log(res)
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
    this.StudentSourceTypeEnum()
    this.StudentApplyLevelEnum()
    this.StudentLearnStyleEnum()
    this.StudentPaperEnum()
    this.GraduateGatherEnum()
    this.StudentPassEnum()
    this.LanuageEnum()
    this.StudentDegreeLevelEnum()
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
    }
  },
  methods: {
    ...mapActions([
      'IdTypeEnum',
      'GenderTypeEnum',
      'NationEnum',
      'HouseholdEnum',
      'PoliticsEnum',
      'StudentSourceTypeEnum',
      'StudentApplyLevelEnum',
      'StudentLearnStyleEnum',
      'YesOrNoEnum',
      'StudentPaperEnum',
      'GraduateGatherEnum',
      'StudentPassEnum',
      'LanuageEnum',
      'StudentDegreeLevelEnum',
      'ScoreResultEnum'
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
    }
  }
}
</script>

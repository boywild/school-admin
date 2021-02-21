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
                    <a-select-option :value="item.code" v-for="(item, index) in STUDENT_FROM_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
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
                    <a-select-option :value="item.code" v-for="(item, index) in STUDY_LEVEL_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
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
                    <a-select-option :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="入学考试科目">
                  <a-select v-model="queryParam.km" placeholder="请选择入学考试科目">
                    <a-select-option :value="item.code" v-for="(item, index) in SUBJECT_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="入学考试总分数">
                  <a-input v-model="queryParam.useStatus" placeholder="请输入学考试总分数" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="发放录取通知书">
                  <a-select v-model="queryParam.ff" placeholder="请选择发放录取通知书">
                    <a-select-option :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{
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
                    <a-select-option :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="学位成绩">
                  <a-select v-model="queryParam.xwcj" placeholder="请选择学位成绩">
                    <a-select-option :value="item.code" v-for="(item, index) in REACH_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="毕业信息采集">
                  <a-select v-model="queryParam.byxxcj" placeholder="请选择毕业信息采集">
                    <a-select-option :value="item.code" v-for="(item, index) in INFO_GATHER_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="是否延期毕业">
                  <a-select v-model="queryParam.yqby" placeholder="请选择是否延期毕业">
                    <a-select-option :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="论文性质">
                  <a-select v-model="queryParam.lwxz" placeholder="请选择论文性质">
                    <a-select-option :value="item.code" v-for="(item, index) in THESIS_FROM_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="(!advanced && 8) || 24" :sm="24">
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
        <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
        <a-button type="danger" icon="delete" @click="deleteStudent">删除</a-button>
        <a-button type="primary" ghost icon="download">导出数据</a-button>
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
          {{ text | moment }}
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleModify(record, 'BaseInfo')">基本信息</a>
            <a-divider type="vertical" />
            <a @click="handleModify(record, 'ImgInfo')">图片</a>
            <a-divider type="vertical" />
            <a @click="handleModify(record, 'JoinInfo')">报名</a>
            <a-divider type="vertical" />
            <a @click="handleModify(record, 'EduTask')">教务</a>
            <a-divider type="vertical" />
            <a @click="handleModify(record, 'StudyTerm')">学期</a>
            <a-divider type="vertical" />
            <a @click="handleModify(record, 'StudyDegree')">学位</a>
            <a-divider type="vertical" />
            <a @click="handleModify(record, 'StudyCost')">财务</a>
          </template>
        </span>
      </s-table>

      <create-form
        ref="createModal"
        :visible="visible"
        :loading="confirmLoading"
        :model="mdl"
        :title="setDialogTitle"
        @cancel="handleCancel"
        @ok="handleOk"
      >
        <component ref="currentComponent" :is="getForm"></component>
      </create-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import BaseInfo from './components/BaseInfo'
import ImgInfo from './components/ImgInfo'
import JoinInfo from './components/JoinInfo'
import EduTask from './components/EduTask'
import StudyTerm from './components/StudyTerm'
import StudyDegree from './components/StudyDegree'
import StudyCost from './components/StudyCost'
import { getRoleList } from '@/api/manage'
// import { getStudentsList } from '@/api/students'
import { studentList } from '@/api/student'

import {
  STUDENT_FROM_ENMU,
  STUDY_LEVEL_ENMU,
  STUDY_WAT_ENMU,
  SUBJECT_ENMU,
  INFO_GATHER_ENMU,
  THESIS_FROM_ENMU,
  REACH_ENMU,
  YESORNO_ENMU
} from '@/config/dict'

// import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './components/CreateForm'
// import { type } from 'mockjs2'

const columns = [
  { title: '学号', dataIndex: 'studentNo', width: 160 },
  { title: '姓名', dataIndex: 'studentName', width: 100 },
  { title: '身份证号', dataIndex: 'idNumber', width: 180 },
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
  data() {
    this.columns = columns
    return {
      // create model
      STUDENT_FROM_ENMU,
      STUDY_LEVEL_ENMU,
      STUDY_WAT_ENMU,
      SUBJECT_ENMU,
      INFO_GATHER_ENMU,
      THESIS_FROM_ENMU,
      REACH_ENMU,
      YESORNO_ENMU,
      currentForm: 'BaseInfo',
      visible: false,
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
        return studentList(requestParameters).then(res => {
          console.log(res)
          return res.result
        })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },

  created() {
    getRoleList({ t: new Date() })
  },
  computed: {
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
        case 'JoinInfo':
          titTxt = '报名信息'
          break
        case 'EduTask':
          titTxt = '教务信息'
          break
        case 'StudyTerm':
          titTxt = '学期信息'
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
    // 新建学生
    handleAdd() {
      this.mdl = null
      this.visible = true
      this.currentForm = 'BaseInfo'
    },
    tableRefresh() {
      const table = this.$refs.table
      table.refresh()
    },
    handleOk() {
      const form = this.$refs.currentComponent

      form.validate(values => {
        console.log('通过', values)
        this.confirmLoading = true
        if (values.id > 0) {
          // 修改 e.g.
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve()
            }, 1000)
          }).then(res => {
            this.visible = false
            this.confirmLoading = false
            // 重置表单数据
            form.resetFields()
            // 刷新表格
            this.tableRefresh()

            this.$message.info('修改成功')
          })
        } else {
          // 新增
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve()
            }, 1000)
          }).then(res => {
            this.visible = false
            this.confirmLoading = false
            // 重置表单数据
            form.resetFields()
            // 刷新表格
            this.tableRefresh()

            this.$message.info('新增成功')
          })
        }
      })
    },
    // 取消新建
    handleCancel() {
      const form = this.$refs.currentComponent
      form.resetForm()
      this.visible = false
    },
    // 修改
    handleModify(record, form) {
      this.mdl = record
      this.visible = true
      this.currentForm = form
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
      this.queryParam = {
        date: moment(new Date())
      }
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

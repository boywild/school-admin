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
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="入学批次">
                  <a-input v-model="queryParam.callNo" placeholder="请输入入学批次" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="渠道来源">
                  <a-input v-model="queryParam.callNoSS" placeholder="请输入渠道来源" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="报名">
                  <a-select v-model="queryParam.bm" placeholder="请选择所报层次">
                    <a-select-option :value="item.code" v-for="(item, index) in TRAINING_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="报考层次">
                  <a-select v-model="queryParam.cc" placeholder="请选择报考层次">
                    <a-select-option :value="item.code" v-for="(item, index) in STUDY_LEVEL_ENMU2" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="授课方式">
                  <a-select v-model="queryParam.skfs" placeholder="请选择授课方式">
                    <a-select-option :value="item.code" v-for="(item, index) in TEACHMETHOD_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="班型">
                  <a-select v-model="queryParam.bx" placeholder="请选择班型">
                    <a-select-option :value="item.code" v-for="(item, index) in CLASSTYPE_ENMU" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="招生老师">
                  <a-input v-model="queryParam.zsls" placeholder="请输入招生老师" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="班主任">
                  <a-input v-model="queryParam.bzr" placeholder="请输入班主任" style="width: 100%" />
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
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
        :scroll="{ x: 1500 }"
      >
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
import StudyCost from './components/StudyCost'
import { getRoleList } from '@/api/manage'
import { getStudentsList } from '@/api/students'
import {
  STUDENT_FROM_ENMU,
  STUDY_LEVEL_ENMU,
  STUDY_WAT_ENMU,
  SUBJECT_ENMU,
  INFO_GATHER_ENMU,
  THESIS_FROM_ENMU,
  REACH_ENMU,
  YESORNO_ENMU,
  STUDY_LEVEL_ENMU2,
  TRAINING_ENMU,
  TEACHMETHOD_ENMU,
  CLASSTYPE_ENMU
} from '@/config/dict'

// import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './components/CreateForm'
// import { type } from 'mockjs2'

const columns = [
  { title: '学号', dataIndex: 'a', width: 100 },
  { title: '姓名', dataIndex: 'description', width: 100 },
  { title: '性别', dataIndex: 'description', width: 100 },
  { title: '出生日期', dataIndex: 'description', width: 100 },
  { title: '身份证号', dataIndex: 'callNo', width: 170 },
  { title: '电话号', dataIndex: 'status', width: 140 },
  { title: '毕业院校', dataIndex: 'school', width: 150 },
  { title: '职业', dataIndex: 'zy', width: 140 },
  { title: '所属省市', dataIndex: 'updatedAt', width: 190 },
  { title: '操作', dataIndex: 'action', width: 280, fixed: 'right', scopedSlots: { customRender: 'action' } }
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
      STUDY_LEVEL_ENMU2,
      TRAINING_ENMU,
      TEACHMETHOD_ENMU,
      CLASSTYPE_ENMU,
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
        return getStudentsList(requestParameters).then(res => {
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

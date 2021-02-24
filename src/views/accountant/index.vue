<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="姓名">
                <a-input v-model="queryParam.studentName" placeholder="请输入姓名" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="证件号">
                <a-input v-model="queryParam.idNumber" placeholder="请输入证件号" style="width: 100%" />
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="录入时间">
                  <a-range-picker v-model="queryParam.timeRange" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="批次">
                  <a-input v-model="queryParam.degreeLevel" placeholder="请输批次" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="院校">
                  <a-input v-model="queryParam.graduateSchool" placeholder="请输入院校" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="专业">
                  <a-input v-model="queryParam.major" placeholder="请输入专业" style="width: 100%" />
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

      <s-table
        ref="table"
        size="default"
        rowKey="studentId"
        :columns="columns"
        :data="loadData"
        showPagination="auto"
        :scroll="{ x: 1500 }"
      >
        <span slot="registerDateTime" slot-scope="text">
          {{ text | moment }}
        </span>
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable } from '@/components'
// import { getRoleList } from '@/api/manage'
import { financeList } from '@/api/finance'

// import StepByStepModal from './modules/StepByStepModal'
// import CreateForm from './components/CreateForm'

const columns = [
  { title: '批次', dataIndex: 'degreeLevel', width: 120 },
  { title: '层次', dataIndex: 'layer', width: 100 },
  { title: '院校', dataIndex: 'graduateSchool', width: 160 },
  { title: '专业', dataIndex: 'major', width: 160 },
  { title: '姓名', dataIndex: 'studentName', width: 120 },
  { title: '证件号码', dataIndex: 'idNumber', width: 210 },
  { title: '录入时间', dataIndex: 'registerDateTime', width: 220, scopedSlots: { customRender: 'registerDateTime' } },
  { title: '总学费', dataIndex: 'totalExpense', width: 120 },
  { title: '实缴学费', dataIndex: 'realExpense', width: 120 },
  { title: '欠款', dataIndex: 'oweExpense', width: 120 },
  { title: '第一年交费', dataIndex: 'xxxx1', width: 120 },
  { title: '第二年', dataIndex: 'xxxx2', width: 120 },
  { title: '第三年', dataIndex: 'xxxx3', width: 120 },
  { title: '第四年', dataIndex: 'xxxx4', width: 120 },
  { title: '第五年', dataIndex: 'xxxx5', width: 120 },
  { title: '报考费', dataIndex: 'xxxx6', width: 120 },
  { title: '入学考试辅导费', dataIndex: 'xxxx7', width: 140 },
  { title: '学位报考费', dataIndex: 'xxxx8', width: 120 },
  { title: '学位辅导费', dataIndex: 'xxxx9', width: 120 },
  { title: '网课费', dataIndex: 'xxxx10', width: 120 },
  { title: '论文费', dataIndex: 'xxxx11', width: 120 },
  { title: '图像采集费', dataIndex: 'xxxx12', width: 120 }
]

export default {
  name: 'TableList',
  components: {
    STable
  },
  data() {
    this.columns = columns
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        if (this.queryParam.timeRange) {
          this.queryParam = {
            ...this.queryParam,
            startTime: this.queryParam.timeRange[0] || '',
            endTime: this.queryParam.timeRange[1] || ''
          }
        }
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return financeList(requestParameters).then(res => {
          return res.result
        })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {},
  created() {
    // getRoleList({ t: new Date() })
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    handleAdd() {
      this.mdl = null
      this.visible = true
    },
    handleEdit(record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleOk() {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
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
              this.$refs.table.refresh()

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
              this.$refs.table.refresh()

              this.$message.info('新增成功')
            })
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel() {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleSub(record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    resetSearchForm() {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>

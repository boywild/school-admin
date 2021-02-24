<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="姓名">
                <a-input v-model="queryParam.name" placeholder="请输入姓名" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="手机号">
                <a-input v-model="queryParam.phone" placeholder="请输入手机号" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="使用状态">
                <a-select v-model="queryParam.allowStatus" placeholder="请选择使用状态" default-value="0">
                  <a-select-option :value="item.code" v-for="(item, index) in OPENORCLOSE_ENMU" :key="index">{{
                    item.desc
                  }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="角色">
                <a-select v-model="queryParam.roleId" placeholder="请选择角色" default-value="0">
                  <a-select-option :value="item.roleId" v-for="(item, index) in roleList" :key="index">{{
                    item.roleName
                  }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="创建日期">
                  <a-range-picker v-model="queryParam.timeRange" />
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="(!advanced && 8) || 24" :sm="24" v-if="$auth('T086')">
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
        <a-button type="primary" icon="plus" v-action:T087 @click="handleAdd">新建</a-button>
        <a-button type="danger" icon="delete" v-action:T088>删除</a-button>
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
      >
        <span slot="allowStatus" slot-scope="text">
          <a-tag :color="text ? 'blue' : 'orange'">{{ text ? '启用' : '禁用' }}</a-tag>
        </span>
        <span slot="createTime" slot-scope="text">
          {{ text | moment }}
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a v-action:T089 @click="handleEdit(record)">修改</a>
          </template>
        </span>
      </s-table>

      <create-form
        ref="createModal"
        :visible="visible"
        :loading="confirmLoading"
        :model="mdl"
        @cancel="handleCancel"
        @ok="handleOk"
      />
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable } from '@/components'
import { adminList, adminSave } from '@/api/admin'
import { roleList } from '@/api/role'
// import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './components/CreateForm'
import { OPENORCLOSE_ENMU } from '@/config/dict'

const columns = [
  { title: '登录名', dataIndex: 'loginNo' },
  { title: '姓名', dataIndex: 'name' },
  { title: '手机号', dataIndex: 'phone' },
  { title: '使用状态', dataIndex: 'allowStatus', scopedSlots: { customRender: 'allowStatus' } },
  { title: '角色', dataIndex: 'roleName' },
  { title: '创建时间', dataIndex: 'createTime', scopedSlots: { customRender: 'createTime' } },
  { title: '备注', dataIndex: 'remark' },
  { title: '操作', dataIndex: 'action', width: '150px', scopedSlots: { customRender: 'action' } }
]

export default {
  name: 'UserList',
  components: {
    STable,
    CreateForm
  },
  data() {
    this.columns = columns
    return {
      // create model
      OPENORCLOSE_ENMU,
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
            startTime: this.queryParam.timeRange[0].valueOf() || '',
            endTime: this.queryParam.timeRange[1].valueOf() || ''
          }
        }
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return adminList(requestParameters).then(res => {
          console.log(res)
          return res.result
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
      roleList: []
    }
  },
  filters: {},
  created() {
    // adminList({ t: new Date() })
    this.getRole()
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
    async getRole() {
      const { result = {} } = await roleList()
      this.roleList = result.content
    },
    handleAdd() {
      this.mdl = null
      this.visible = true
    },
    handleEdit(record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleOk() {
      const form = this.$refs.createModal
      form.validate(async values => {
        console.log(values)
        this.confirmLoading = true
        const { result = {} } = await adminSave(values)
        this.confirmLoading = false
        this.handleCancel()
        this.$refs.table.refresh()
        console.log(result)
      })
    },
    handleCancel() {
      this.visible = false
      this.$refs['createModal'].resetForm()
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
        date: [moment(new Date()), moment(new Date())]
      }
    }
  }
}
</script>

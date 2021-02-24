<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="标题">
                <a-input v-model="queryParam.title" placeholder="请输入标题" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="热门状态">
                <a-select v-model="queryParam.hotFlag" placeholder="请选择热门状态">
                  <a-select-option :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">
                    {{ item.desc }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="更新日期">
                  <a-range-picker v-model="queryParam.timeRange" />
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="(!advanced && 8) || 24" :sm="24" v-if="$auth('S013')">
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
        <a-button type="primary" icon="plus" v-action:S014 @click="$refs['createModal'].open()">新建</a-button>
        <a-button type="danger" icon="delete" v-action:S015>删除</a-button>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="id"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
      >
        <span slot="crtDateTime" slot-scope="text">
          {{ text | moment }}
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a v-action:S017 @click="handleEdit(record, true)">详情</a>
            <a-divider v-action:S014 type="vertical" />
            <a v-action:S016 @click="handleEdit(record)">修改</a>
          </template>
        </span>
      </s-table>

      <create-form
        ref="createModal"
        :visible="visible"
        :loading="confirmLoading"
        :model="mdl"
        @refresh="refreshTable"
      />
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable } from '@/components'
import { articleList } from '@/api/article'
import { YESORNO_ENMU } from '@/config/dict'
// import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './components/CreateForm'

const columns = [
  { title: '标题', dataIndex: 'title' },
  { title: '热门', dataIndex: 'hotFlag' },
  { title: '点击量', dataIndex: 'clickCnt' },
  { title: '评论量', dataIndex: 'commentCnt' },
  { title: '更新时间', dataIndex: 'crtDateTime', scopedSlots: { customRender: 'crtDateTime' } },
  { title: '操作', dataIndex: 'action', width: '150px', scopedSlots: { customRender: 'action' } }
]

export default {
  name: 'ArticleList',
  components: {
    STable,
    CreateForm
  },
  data() {
    this.columns = columns
    return {
      // create model
      YESORNO_ENMU,
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
        return articleList(requestParameters).then(res => {
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
    handleEdit(record, disabled = false) {
      this.visible = true
      this.mdl = { ...record, disabled }
      this.$refs['createModal'].open()
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
    },
    refreshTable() {
      // 新增/修改 成功时，重载列表
      this.$refs.table.refresh()
    }
  }
}
</script>

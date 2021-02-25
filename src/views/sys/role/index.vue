<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="10">
            <a-col :md="6" :sm="24">
              <a-form-item label="角色名称">
                <a-input v-model="queryParam.roleName" placeholder="请输入角色名称" />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item label="角色状态">
                <a-select placeholder="请选择角色状态" v-model="queryParam.status">
                  <a-select-option :value="item.code" v-for="(item, index) in OPENORCLOSE_ENMU" :key="index">{{
                    item.desc
                  }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item label="创建时间">
                <a-range-picker v-model="queryParam.timeRange" />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24" v-if="$auth('T090')">
              <span class="table-page-search-submitButtons">
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => (this.queryParam = {})">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div class="table-operator">
        <a-button type="primary" icon="plus" v-action:T091 @click="$refs.roleModal.add()">新建</a-button>
      </div>
      <s-table ref="table" size="default" rowKey="roleId" :columns="columns" :data="loadData">
        <span slot="status" slot-scope="text">
          <a-tag :color="text === 1 ? 'blue' : 'orange'">{{ text === 1 ? '启用' : '禁用' }}</a-tag>
        </span>
        <span slot="createTime" slot-scope="text">
          {{ text | moment }}
        </span>
        <div slot="expandedRowRender" slot-scope="record" style="margin: 0">
          <a-row :gutter="24" :style="{ marginBottom: '12px' }">
            <a-col
              :span="12"
              v-for="(role, index) in record.permissions"
              :key="index"
              :style="{ marginBottom: '12px' }"
            >
              <a-col :span="4">
                <span>{{ role.permissionName }}：</span>
              </a-col>
              <a-col :span="20" v-if="role.actionEntitySet.length > 0">
                <a-tag color="cyan" v-for="(action, k) in role.actionEntitySet" :key="k">{{ action.describe }}</a-tag>
              </a-col>
              <a-col :span="20" v-else>-</a-col>
            </a-col>
          </a-row>
        </div>
        <span slot="action" slot-scope="text, record">
          <a v-action:T093 :disabled="record.updSysData===1" @click="$refs.roleModal.edit(record)">修改</a>
          <a-divider v-action:T094 type="vertical" />
          <a v-action:T094 :disabled="record.updSysData===1" @click="$refs.modal.edit(record)">权限</a>
          <a-divider v-action:T092 type="vertical" />
          <a-popconfirm
            v-if="$auth('T092')"
            placement="topLeft"
            title="删除会导致该角色下管理员无法正常使用，请再三确认！！"
            ok-text="确认"
            cancel-text="取消"
            @confirm="confirmDelete(record)"
          >
            <a :disabled="record.updSysData===1" href="javascript:;">删除</a>
          </a-popconfirm>
        </span>
      </s-table>

      <role-modal ref="roleModal" @refresh="refreshTable"></role-modal>
      <role-permission-modal ref="modal" @refresh="refreshTable"></role-permission-modal>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { STable } from '@/components'
import RoleModal from './components/RoleModal'
import RolePermissionModal from './components/RolePermissionModal'
import { OPENORCLOSE_ENMU } from '@/config/dict'

import { roleList, roleDelete } from '@/api/role'
export default {
  name: 'Role',
  components: {
    STable,
    RoleModal,
    RolePermissionModal
  },
  data() {
    return {
      OPENORCLOSE_ENMU,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        { title: '角色名称', dataIndex: 'roleName' },
        { title: '状态', dataIndex: 'status', scopedSlots: { customRender: 'status' } },
        { title: '创建时间', dataIndex: 'createTime', scopedSlots: { customRender: 'createTime' } },
        { title: '操作', width: '180px', dataIndex: 'action', scopedSlots: { customRender: 'action' } }
      ],
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
        return roleList(requestParameters).then(res => {
          console.log(res)
          return res
        })
      },

      selectedRowKeys: [],
      selectedRows: []
    }
  },
  methods: {
    refreshTable() {
      // 新增/修改 成功时，重载列表
      this.$refs.table.refresh()
    },

    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    async confirmDelete({ roleId }) {
      try {
        await roleDelete(roleId)
        this.refreshTable()
      } catch (e) {}
    }
  },
  watch: {}
}
</script>

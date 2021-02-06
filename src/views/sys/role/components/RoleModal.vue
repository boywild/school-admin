<template>
  <a-modal
    title="角色"
    :width="900"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-tree
      class="permission-tree"
      v-model="checkedKeys"
      checkable
      :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      :selected-keys="selectedKeys"
      :tree-data="treeData"
      @expand="onExpand"
      @select="onSelect"
    />
  </a-modal>
</template>

<script>
const permissionList = [
  {
    title: '成人教育',
    key: '0',
    children: [
      { title: '查询', key: '0-0' },
      { title: '新建', key: '0-1' },
      { title: '删除', key: '0-2' },
      { title: '导出', key: '0-3' },
      { title: '基本信息', key: '0-4' },
      { title: '图片管理', key: '0-5' },
      { title: '报名管理', key: '0-6' },
      { title: '教务管理', key: '0-7' },
      { title: '学期管理', key: '0-8' },
      { title: '学位管理', key: '0-9' },
      { title: '财务管理', key: '0-10' }
    ]
  },
  {
    title: '自学考试',
    key: '1',
    children: [
      { title: '查询', key: '1-0' },
      { title: '新建', key: '1-1' },
      { title: '删除', key: '1-2' },
      { title: '导出', key: '1-3' },
      { title: '基本信息', key: '1-4' },
      { title: '图片管理', key: '1-5' },
      { title: '教务管理', key: '1-6' },
      { title: '教务添加考期', key: '1-7' },
      { title: '毕业申请', key: '1-8' },
      { title: '学位管理', key: '1-9' },
      { title: '财务管理', key: '1-10' }
    ]
  },
  {
    title: '网络教育',
    key: '2',
    children: [
      { title: '查询', key: '2-0' },
      { title: '新建', key: '2-1' },
      { title: '删除', key: '2-2' },
      { title: '导出', key: '2-3' },
      { title: '基本信息', key: '2-4' },
      { title: '图片管理', key: '2-5' },
      { title: '报名管理', key: '2-6' },
      { title: '学期管理', key: '2-7' },
      { title: '财务管理', key: '2-8' }
    ]
  },
  {
    title: '开发大学',
    key: '3',
    children: [
      { title: '查询', key: '3-0' },
      { title: '新建', key: '3-1' },
      { title: '删除', key: '3-2' },
      { title: '导出', key: '3-3' },
      { title: '基本信息', key: '3-4' },
      { title: '图片管理', key: '3-5' },
      { title: '报名管理', key: '3-6' },
      { title: '教务管理', key: '3-7' },
      { title: '财务管理', key: '3-8' }
    ]
  },
  {
    title: '人设局培训',
    key: '4',
    children: [
      { title: '查询', key: '4-0' },
      { title: '新建', key: '4-1' },
      { title: '删除', key: '4-2' },
      { title: '导出', key: '4-3' },
      { title: '基本信息', key: '4-4' },
      { title: '图片管理', key: '4-5' },
      { title: '报名管理', key: '4-6' },
      { title: '教务管理', key: '4-7' },
      { title: '财务管理', key: '4-8' }
    ]
  },
  {
    title: '安检',
    key: '5',
    children: [
      { title: '查询', key: '5-0' },
      { title: '新建', key: '5-1' },
      { title: '删除', key: '5-2' },
      { title: '导出', key: '5-3' },
      { title: '基本信息', key: '5-4' },
      { title: '图片管理', key: '5-5' },
      { title: '报名管理', key: '5-6' },
      { title: '教务管理', key: '5-7' },
      { title: '财务管理', key: '5-8' }
    ]
  },
  {
    title: '质检',
    key: '6',
    children: [
      { title: '查询', key: '6-0' },
      { title: '新建', key: '6-1' },
      { title: '删除', key: '6-2' },
      { title: '导出', key: '6-3' },
      { title: '基本信息', key: '6-4' },
      { title: '图片管理', key: '6-5' },
      { title: '报名管理', key: '6-6' },
      { title: '教务管理', key: '6-7' },
      { title: '财务管理', key: '6-8' }
    ]
  },
  {
    title: '途胜教育',
    key: '7',
    children: [
      { title: '查询', key: '7-0' },
      { title: '新建', key: '7-1' },
      { title: '删除', key: '7-2' },
      { title: '导出', key: '7-3' },
      { title: '基本信息', key: '7-4' },
      { title: '图片管理', key: '7-5' },
      { title: '报名管理', key: '7-6' },
      { title: '教务管理', key: '7-7' },
      { title: '财务管理', key: '7-8' }
    ]
  },
  {
    title: '医考培训',
    key: '8',
    children: [
      { title: '查询', key: '8-0' },
      { title: '新建', key: '8-1' },
      { title: '删除', key: '8-2' },
      { title: '导出', key: '8-3' },
      { title: '基本信息', key: '8-4' },
      { title: '图片管理', key: '8-5' },
      { title: '报名管理', key: '8-6' },
      { title: '教务管理', key: '8-7' },
      { title: '财务管理', key: '8-8' }
    ]
  },
  {
    title: '财务管理',
    key: '9',
    children: [{ title: '查询', key: '9-0' }]
  },
  {
    title: '用户列表',
    key: '10',
    children: [
      { title: '查询', key: '10-0' },
      { title: '新建', key: '10-1' },
      { title: '删除', key: '10-2' },
      { title: '修改', key: '10-3' },
      { title: '禁用', key: '10-4' },
      { title: '启用', key: '10-5' }
    ]
  },
  {
    title: '角色列表',
    key: '11',
    children: [
      { title: '查询', key: '11-0' },
      { title: '新建', key: '11-1' },
      { title: '删除', key: '11-2' },
      { title: '修改', key: '11-3' },
      { title: '禁用', key: '11-4' },
      { title: '启用', key: '11-5' }
    ]
  },
  { title: '代办事项', key: '12', children: [{ title: '查询', key: '12-0' }] }
]
export default {
  name: 'RoleModal',
  data() {
    return {
      expandedKeys: ['0', '1', '2', '3'],
      autoExpandParent: true,
      checkedKeys: ['0'],
      selectedKeys: [],
      treeData: permissionList,
      visible: false,
      confirmLoading: false
    }
  },
  created() {},
  watch: {
    checkedKeys(val) {
      console.log('onCheck', val)
    }
  },
  methods: {
    handleOk() {
      this.close()
    },
    handleCancel() {
      this.close()
    },
    edit(record) {
      this.visible = true
    },
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck(checkedKeys) {
      console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys
    },
    onSelect(selectedKeys, info) {
      console.log('onSelect', info)
      this.selectedKeys = selectedKeys
    },
    close() {
      this.$emit('close')
      this.visible = false
    }
  }
}
</script>

<style lang="less">
.permission-tree {
  // color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > li {
    width: 25%;
    margin-bottom: 15px;
    > .ant-tree-node-content-wrapper {
      font-weight: bold;
      color: #000;
    }
  }
}
</style>

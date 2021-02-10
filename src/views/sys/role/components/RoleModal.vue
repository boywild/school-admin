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
      { title: '查询', key: '0_0' },
      { title: '新建', key: '0_1' },
      { title: '删除', key: '0_2' },
      { title: '导出', key: '0_3' },
      { title: '基本信息', key: '0_4' },
      { title: '图片管理', key: '0_5' },
      { title: '报名管理', key: '0_6' },
      { title: '教务管理', key: '0_7' },
      { title: '学期管理', key: '0_8' },
      { title: '学位管理', key: '0_9' },
      { title: '财务管理', key: '0_10' }
    ]
  },
  {
    title: '自学考试',
    key: '1',
    children: [
      { title: '查询', key: '1_0' },
      { title: '新建', key: '1_1' },
      { title: '删除', key: '1_2' },
      { title: '导出', key: '1_3' },
      { title: '基本信息', key: '1_4' },
      { title: '图片管理', key: '1_5' },
      { title: '教务管理', key: '1_6' },
      { title: '教务添加考期', key: '1_7' },
      { title: '毕业申请', key: '1_8' },
      { title: '学位管理', key: '1_9' },
      { title: '财务管理', key: '1_10' }
    ]
  },
  {
    title: '网络教育',
    key: '2',
    children: [
      { title: '查询', key: '2_0' },
      { title: '新建', key: '2_1' },
      { title: '删除', key: '2_2' },
      { title: '导出', key: '2_3' },
      { title: '基本信息', key: '2_4' },
      { title: '图片管理', key: '2_5' },
      { title: '报名管理', key: '2_6' },
      { title: '学期管理', key: '2_7' },
      { title: '财务管理', key: '2_8' }
    ]
  },
  {
    title: '开发大学',
    key: '3',
    children: [
      { title: '查询', key: '3_0' },
      { title: '新建', key: '3_1' },
      { title: '删除', key: '3_2' },
      { title: '导出', key: '3_3' },
      { title: '基本信息', key: '3_4' },
      { title: '图片管理', key: '3_5' },
      { title: '报名管理', key: '3_6' },
      { title: '教务管理', key: '3_7' },
      { title: '财务管理', key: '3_8' }
    ]
  },
  {
    title: '人设局培训',
    key: '4',
    children: [
      { title: '查询', key: '4_0' },
      { title: '新建', key: '4_1' },
      { title: '删除', key: '4_2' },
      { title: '导出', key: '4_3' },
      { title: '基本信息', key: '4_4' },
      { title: '图片管理', key: '4_5' },
      { title: '报名管理', key: '4_6' },
      { title: '教务管理', key: '4_7' },
      { title: '财务管理', key: '4_8' }
    ]
  },
  {
    title: '安检',
    key: '5',
    children: [
      { title: '查询', key: '5_0' },
      { title: '新建', key: '5_1' },
      { title: '删除', key: '5_2' },
      { title: '导出', key: '5_3' },
      { title: '基本信息', key: '5_4' },
      { title: '图片管理', key: '5_5' },
      { title: '报名管理', key: '5_6' },
      { title: '教务管理', key: '5_7' },
      { title: '财务管理', key: '5_8' }
    ]
  },
  {
    title: '质检',
    key: '6',
    children: [
      { title: '查询', key: '6_0' },
      { title: '新建', key: '6_1' },
      { title: '删除', key: '6_2' },
      { title: '导出', key: '6_3' },
      { title: '基本信息', key: '6_4' },
      { title: '图片管理', key: '6_5' },
      { title: '报名管理', key: '6_6' },
      { title: '教务管理', key: '6_7' },
      { title: '财务管理', key: '6_8' }
    ]
  },
  {
    title: '途胜教育',
    key: '7',
    children: [
      { title: '查询', key: '7_0' },
      { title: '新建', key: '7_1' },
      { title: '删除', key: '7_2' },
      { title: '导出', key: '7_3' },
      { title: '基本信息', key: '7_4' },
      { title: '图片管理', key: '7_5' },
      { title: '报名管理', key: '7_6' },
      { title: '教务管理', key: '7_7' },
      { title: '财务管理', key: '7_8' }
    ]
  },
  {
    title: '医考培训',
    key: '8',
    children: [
      { title: '查询', key: '8_0' },
      { title: '新建', key: '8_1' },
      { title: '删除', key: '8_2' },
      { title: '导出', key: '8_3' },
      { title: '基本信息', key: '8_4' },
      { title: '图片管理', key: '8_5' },
      { title: '报名管理', key: '8_6' },
      { title: '教务管理', key: '8_7' },
      { title: '财务管理', key: '8_8' }
    ]
  },
  {
    title: '财务管理',
    key: '9',
    children: [{ title: '查询', key: '9_0' }]
  },
  {
    title: '用户列表',
    key: '10',
    children: [
      { title: '查询', key: '10_0' },
      { title: '新建', key: '10_1' },
      { title: '删除', key: '10_2' },
      { title: '修改', key: '10_3' },
      { title: '禁用', key: '10_4' },
      { title: '启用', key: '10_5' }
    ]
  },
  {
    title: '角色列表',
    key: '11',
    children: [
      { title: '查询', key: '11_0' },
      { title: '新建', key: '11_1' },
      { title: '删除', key: '11_2' },
      { title: '修改', key: '11_3' },
      { title: '禁用', key: '11_4' },
      { title: '启用', key: '11_5' }
    ]
  },
  {
    title: '角色列表',
    key: '12',
    children: [
      { title: '查询', key: '12_0' },
      { title: '新建', key: '12_1' },
      { title: '删除', key: '12_2' },
      { title: '修改', key: '12_3' },
      { title: '发布', key: '12_4' },
      { title: '取消发布', key: '12_5' }
    ]
  },
  { title: '代办事项', key: '13', children: [{ title: '查询', key: '13_0' }] }
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

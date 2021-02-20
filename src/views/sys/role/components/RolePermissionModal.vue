<template>
  <a-modal
    title="分配权限"
    :width="900"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-spin :spinning="loading">
      <a-tree
        class="permission-tree"
        v-model="checkedKeys"
        checkable
        :check-strictly="true"
        :expanded-keys="expandedKeys"
        :auto-expand-parent="autoExpandParent"
        :selected-keys="selectedKeys"
        :tree-data="treeData"
        @expand="onExpand"
        @select="onSelect"
      />
    </a-spin>
  </a-modal>
</template>

<script>
import { roleSetPremission, roleGetPremission } from '@/api/role'

export default {
  name: 'RolePermissionModal',
  data() {
    return {
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: ['XLJY', '0', '0_0'],
      selectedKeys: [],
      treeData: [],
      visible: false,
      confirmLoading: false,
      loading: true,
      roleId: ''
    }
  },
  created() {},
  watch: {
    checkedKeys(val) {
      console.log('onCheck', val)
    }
  },
  methods: {
    async getPremission() {
      this.loading = true
      const { result = [] } = await roleGetPremission(this.roleId)
      this.loading = false
      this.treeData = result
      this.expandedKeys = result.map(ele => ele.key)
    },
    async handleOk() {
      this.confirmLoading = true
      try {
        await roleSetPremission(this.roleId, this.expandedKeys)
        this.confirmLoading = false
        this.$emit('refresh')
      } catch (e) {
        this.confirmLoading = false
      }
      this.toggle(false)
    },
    handleCancel() {
      this.toggle(false)
    },
    edit(record) {
      this.roleId = record.roleId
      if (record.checkedKeys) {
        this.checkedKeys = record.checkedKeys
      }
      this.getPremission()
      this.toggle()
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
    toggle(flag = true) {
      this.visible = flag
    }
  }
}
</script>

<style lang="less">
.permission-tree {
  // color: #fff;
  display: flex;
  justify-content: flex-start;
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

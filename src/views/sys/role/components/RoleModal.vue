<template>
  <a-modal
    title="角色"
    :width="576"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-spin :spinning="loading">
      <a-form-model ref="userInfo" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="登录名" prop="roleName">
          <a-input v-model.trim="form.roleName" placeholder="请输入登录名" />
        </a-form-model-item>
        <a-form-model-item label="是否可用" prop="status">
          <a-radio-group v-model="form.status">
            <a-radio :value="radio.code" v-for="(radio, count) in YESORNO_ENMU" :key="count">
              {{ radio.desc }}
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="是否系统数据" prop="updSysData">
          <a-radio-group v-model="form.updSysData">
            <a-radio :value="radio.code" v-for="(radio, count) in YESORNO_ENMU" :key="count">
              {{ radio.desc }}
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="备注" prop="remark">
          <a-input has-feedback v-model.trim="form.remark" placeholder="请输入备注" />
        </a-form-model-item>
      </a-form-model>
    </a-spin>
  </a-modal>
</template>

<script>
import { YESORNO_ENMU } from '@/config/dict'
export default {
  name: 'RoleModal',
  data() {
    return {
      YESORNO_ENMU,
      visible: false,
      loading: false,
      confirmLoading: false,
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
      form: {
        roleName: '',
        status: '',
        updSysData: '',
        remark: ''
      },
      rules: {
        roleName: [{ required: true, message: '登录名不能为空' }],
        status: [{ required: true, message: '请选择是否允许登录' }],
        updSysData: [{ required: true, message: '请选择是否允许登录' }]
      }
    }
  },
  created() {},
  watch: {},
  methods: {
    handleOk() {
      this.toggle(false)
    },
    handleCancel() {
      this.toggle(false)
    },
    edit(record) {
      this.toggle()
    },
    add() {
      this.toggle()
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

<template>
  <a-modal
    title="新建用户"
    :width="576"
    :visible="visible"
    :confirmLoading="loading"
    @ok="
      () => {
        $emit('ok')
      }
    "
    @cancel="
      () => {
        $emit('cancel')
      }
    "
  >
    <a-spin :spinning="loading">
      <a-form-model ref="userInfo" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="角色" prop="role">
          <a-select v-model="form.role" placeholder="请输入角色">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="登录名" prop="account">
          <a-input v-model.trim="form.account" placeholder="请输入登录名" />
        </a-form-model-item>
        <a-form-model-item label="姓名" prop="name">
          <a-input has-feedback v-model.trim="form.name" placeholder="请输入姓名" />
        </a-form-model-item>
        <a-form-model-item label="密码" prop="password">
          <a-input has-feedback v-model.trim="form.password" placeholder="请输入密码" />
        </a-form-model-item>
        <a-form-model-item label="确认密码" prop="confirPassword">
          <a-input has-feedback v-model.trim="form.confirPassword" placeholder="请输入确认密码" />
        </a-form-model-item>
        <a-form-model-item label="手机号" prop="phone">
          <a-input has-feedback v-model.trim="form.phone" placeholder="请输入手机号" />
        </a-form-model-item>
        <a-form-model-item label="接受待办通知" prop="receive">
          <a-radio-group v-model="form.receive" :default-value="0">
            <a-radio :value="1">是 </a-radio>
            <a-radio :value="0">否 </a-radio>
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
import WangEditor from '@/components/Editor/WangEditor'

export default {
  props: {
    visible: { type: Boolean, required: true },
    loading: { type: Boolean, default: () => false },
    model: { type: Object, default: () => null }
  },
  components: {
    WangEditor
  },
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
      form: {
        account: '',
        name: '',
        password: '',
        confirPassword: '',
        phone: '',
        role: '',
        receive: '0',
        remark: ''
      },
      rules: {
        account: [{ required: true, message: '登录名不能为空' }],
        name: [{ required: true, message: '姓名不能为空' }],
        password: [{ required: true, message: '密码不能为空' }],
        confirPassword: [{ required: true, message: '确认密码不能为空' }],
        phone: [{ required: true, message: '手机号不能为空' }],
        receive: [{ required: true, message: '请选择' }],
        role: [{ required: true, message: '角色不能为空' }]
      }
    }
  },
  created() {},
  methods: {
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        // file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange({ fileList }) {
      this.fileList = fileList
    },
    resetForm() {
      this.$refs['userInfo'].resetFields()
    }
  }
}
</script>

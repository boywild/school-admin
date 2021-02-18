<template>
  <a-modal
    :title="form.adminId ? '修改用户' : '新建用户'"
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
        <a-form-model-item label="角色" prop="roleId">
          <a-select v-model="form.roleId" placeholder="请输入角色">
            <a-select-option :value="item.roleId" v-for="(item, index) in roleList" :key="index">{{
              item.roleName
            }}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="登录名" prop="loginNo">
          <a-input v-model.trim="form.loginNo" placeholder="请输入登录名" />
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
        <a-form-model-item label="是否允许登录" prop="allowStatus">
          <a-radio-group v-model="form.allowStatus">
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
import WangEditor from '@/components/Editor/WangEditor'
import { YESORNO_ENMU } from '@/config/dict'
import { roleList } from '@/api/role'
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
      YESORNO_ENMU,
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
      roleList: [],
      form: {
        loginNo: '',
        name: '',
        password: '',
        confirPassword: '',
        phone: '',
        roleId: '',
        roleName: '',
        allowStatus: '',
        remark: ''
      },
      rules: {
        loginNo: [{ required: true, message: '登录名不能为空' }],
        name: [{ required: true, message: '姓名不能为空' }],
        password: [{ required: true, message: '密码不能为空' }],
        confirPassword: [{ required: true, message: '确认密码不能为空' }],
        phone: [{ required: true, message: '手机号不能为空' }],
        allowStatus: [{ required: true, message: '请选择是否允许登录' }],
        roleId: [{ required: true, message: '请为用户分配角色' }]
      }
    }
  },
  created() {
    this.$watch('model', () => {
      if (this.model && this.model.adminId) {
        this.form = {
          ...this.form,
          ...this.model
        }
      }
    })
    this.getRole()
  },
  methods: {
    async getRole() {
      const { result = {} } = await roleList()
      this.roleList = result.content
    },
    validate(callback) {
      const form = this.$refs.userInfo
      form.validate(success => {
        if (success) {
          callback && callback(this.form)
        }
      })
    },
    resetForm() {
      const form = this.$refs.userInfo
      this.form = {}
      form.clearValidate()
    }
  }
}
</script>

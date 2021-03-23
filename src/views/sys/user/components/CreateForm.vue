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
          <a-select v-model="form.roleId" placeholder="请选择角色">
            <a-select-option :value="item.roleId" v-for="(item, index) in roleList" :key="index">{{
              item.roleName
            }}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="登录名" prop="loginNo">
          <a-input v-model.trim="form.loginNo" placeholder="请输入登录名由小写字母和数字组成 例如：test001" />
        </a-form-model-item>
        <a-form-model-item label="姓名" prop="name">
          <a-input has-feedback v-model.trim="form.name" placeholder="请输入姓名由中文和数字组成 例如：小李001" />
        </a-form-model-item>
        <a-form-model-item label="密码" prop="password">
          <a-input
            has-feedback
            type="password"
            v-model.trim="form.password"
            placeholder="请输入6-12位密码由小写字母和数字组成 例如：password123"
          />
        </a-form-model-item>
        <a-form-model-item label="确认密码" prop="confirPassword">
          <a-input has-feedback type="password" v-model.trim="form.confirPassword" placeholder="请输入确认密码" />
        </a-form-model-item>
        <a-form-model-item label="手机号" prop="phone">
          <a-input has-feedback v-model.trim="form.phone" placeholder="请输入手机号" />
        </a-form-model-item>
        <a-form-model-item label="是否允许登录" prop="allowStatus">
          <a-radio-group v-model="form.allowStatus">
            <a-radio :value="radio.code" v-for="(radio, count) in dict.YesOrNoEnum" :key="count">
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
import { mapState } from 'vuex'
import WangEditor from '@/components/Editor/WangEditor'
// import { YESORNO_ENMU } from '@/config/dict'
import { isPassword, isLoginName, isChinese, isPhone } from '@/utils/validate'
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
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else if (value.length < 6 || value.length > 12) {
        callback(new Error('密码最短6位 最长12位'))
      } else if (!isPassword(value)) {
        callback(new Error('密码格式错误'))
      } else {
        if (this.form.confirPassword !== '') {
          this.$refs.userInfo.validateField('confirPassword')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value !== this.form.password) {
        callback(new Error('输入密码不匹配'))
      } else {
        callback()
      }
    }
    const validateLoginName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('登录名不能为空'))
      } else if (!isLoginName(value)) {
        callback(new Error('登录名式错误'))
      } else {
        callback()
      }
    }
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('姓名不能为空'))
      } else if (!isChinese(value)) {
        callback(new Error('姓名格式错误'))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else if (!isPhone(value)) {
        callback(new Error('手机号格式错误'))
      } else {
        callback()
      }
    }

    return {
      // YESORNO_ENMU,
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
        loginNo: [{ required: true, validator: validateLoginName }],
        name: [{ required: true, validator: validateName }],
        password: [{ required: true, validator: validatePass }],
        confirPassword: [{ required: true, validator: validatePass2 }],
        phone: [{ required: true, validator: validatePhone }],
        allowStatus: [{ required: true, message: '请选择是否允许登录' }],
        roleId: [{ required: true, message: '请为用户分配角色' }]
      }
    }
  },
  computed: {
    ...mapState({
      dict: state => state.dict.dict
    })
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
      const { content = [] } = await roleList({ pageNo: 1, pageSize: 100 })
      this.roleList = content
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

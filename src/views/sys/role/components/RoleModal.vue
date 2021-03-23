<template>
  <a-modal
    :title="form.roleId ? '修改角色' : '新建角色'"
    :width="576"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-spin :spinning="loading">
      <a-form-model ref="roleInfo" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="角色名称" prop="roleName">
          <a-input v-model.trim="form.roleName" placeholder="请输入角色名称" />
        </a-form-model-item>
        <a-form-model-item label="是否可用" prop="status">
          <a-radio-group v-model="form.status">
            <a-radio :value="radio.code" v-for="(radio, count) in dict.YesOrNoEnum" :key="count">
              {{ radio.desc }}
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="是否系统数据" prop="updSysData">
          <a-radio-group v-model="form.updSysData" disabled>
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
// import { YESORNO_ENMU } from '@/config/dict'
import { roleSave } from '@/api/role'
export default {
  name: 'RoleModal',
  data() {
    return {
      // YESORNO_ENMU,
      visible: false,
      loading: false,
      confirmLoading: false,
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
      form: {
        roleName: '',
        status: '',
        updSysData: '0',
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
  computed: {
    ...mapState({
      dict: state => state.dict.dict
    })
  },
  methods: {
    handleOk() {
      this.validate(async values => {
        // this.$emit('save', { ...values })
        this.confirmLoading = true
        try {
          await roleSave(values)
          this.confirmLoading = false
          this.$emit('refresh')
        } catch (e) {
          this.confirmLoading = false
        }
        this.handleCancel()
      })
    },
    handleCancel() {
      this.resetForm()
      this.toggle(false)
    },
    edit(record) {
      this.form = {
        ...this.form,
        ...record
      }
      this.toggle()
    },
    add() {
      this.toggle()
    },
    toggle(flag = true) {
      this.visible = flag
    },
    validate(callback) {
      const form = this.$refs.roleInfo
      form.validate(success => {
        if (success) {
          callback && callback(this.form)
        }
      })
    },
    resetForm() {
      const form = this.$refs.roleInfo
      this.form = {}
      form.clearValidate()
    }
  }
}
</script>

<style lang="less"></style>

<template>
  <a-modal
    title="基本信息"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存基本信息"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="edu-adult">
      <a-spin :spinning="loadingData">
        <form-generate ref="form" :fields="tab1"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
import { mapState } from 'vuex'
// import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'
import { isEmail, isPhone } from '@/utils/validate'
// import timestamp from '@/utils/timestamp'
// import { matchAddress } from '@/utils/address'

import { studentBaseInfo, getBaseInfo } from '@/api/student'

export default {
  name: 'BaseInfo',
  props: {
    value: { type: Boolean, required: true },
    studentId: { type: String, default: '' }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { FormGenerate },
  data() {
    const validatorEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入email'))
      }
      if (!isEmail(value)) {
        return callback(new Error('email格式不正确'))
      } else {
        callback()
      }
    }
    const validatorPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入联系电话'))
      }
      if (!isPhone(value)) {
        return callback(new Error('联系电话格式不正确'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      loadingData: false,
      tab1: [
        {
          label: '学生姓名',
          field: 'studentName',
          form: 'input',
          rules: [
            { required: true, message: '请输入学生姓名' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        { label: '联系电话', field: 'phone', form: 'input', rules: [{ required: true, validator: validatorPhone }] },
        {
          label: '证件种类',
          field: 'idType',
          form: 'select',
          selectFrom: 'IdTypeEnum',
          rules: [{ required: true, message: '请输入证件种类' }]
        },
        {
          label: '证件号码',
          field: 'idNumber',
          form: 'input',
          rules: [
            { required: true, message: '请输入证件号码' },
            { max: 18, message: '请输入18位证件号码' }
          ]
        },
        {
          label: '民族',
          field: 'nation',
          form: 'select',
          selectFrom: 'NationEnum',
          rules: [{ required: true, message: '请选择民族' }]
        },
        {
          label: '性别',
          field: 'gender',
          form: 'radio',
          radioFrom: 'GenderTypeEnum',
          rules: [{ required: true, message: '请选择性别' }]
        },
        { label: '出生日期', field: 'birthDay', form: 'date', rules: [{ required: true, message: '请选择出生日期' }] },
        {
          label: '所属省市',
          field: 'location',
          form: 'cascader',
          rules: [{ required: true, message: '请输入所属省市' }]
        },
        {
          label: '户口性质',
          field: 'householdType',
          form: 'select',
          selectFrom: 'HouseholdEnum',
          rules: [{ required: true, message: '请输入户口性质' }]
        },
        {
          label: '职业',
          field: 'profession',
          form: 'input',
          rules: [
            { required: true, max: 20, message: '请输入职业' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: '政治面貌',
          field: 'politicsStatus',
          form: 'select',
          selectFrom: 'PoliticsEnum',
          rules: [{ required: true, max: 20, message: '请选择政治面貌' }]
        },
        {
          label: '原毕业学校',
          field: 'graduateSchool',
          form: 'input',
          rules: [
            { required: true, message: '请输入源毕业学校' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: '原毕业时间',
          field: 'graduateTime',
          form: 'date',
          rules: [{ required: true, message: '请选择原毕业时间' }]
        },
        {
          label: '原毕业证书编号',
          field: 'diplomaNo',
          form: 'input',
          rules: [
            { required: true, max: 20, message: '请输入原毕业证书编号' },
            { max: 15, message: '限制输入15位' }
          ]
        },
        {
          label: '原毕业证书类型',
          field: 'diplomaType',
          form: 'input',
          rules: [{ required: true, message: '请输入原毕业证书类型' }]
        },
        {
          label: '通讯地址',
          field: 'contactAddr',
          form: 'input',
          rules: [
            { required: true, message: '请输入通讯地址' },
            { max: 30, message: '限制输入30位' }
          ]
        },
        {
          label: '工作单位',
          field: 'workLocation',
          form: 'input',
          rules: [
            { required: true, message: '请输入工作单位' },
            { max: 30, message: '限制输入30位' }
          ]
        },
        { label: 'email', field: 'email', form: 'input', rules: [{ required: true, validator: validatorEmail }] }
      ]
    }
  },
  created() {
    console.log(this.$route)
  },
  mounted() {
    this.$watch('value', val => {
      if (val && this.studentId) {
        this.getBaseInfo()
      }
    })
  },
  computed: {
    ...mapState({
      IdTypeEnum: state => state.dict.IdTypeEnum,
      GenderTypeEnum: state => state.dict.GenderTypeEnum,
      NationEnum: state => state.dict.NationEnum,
      HouseholdEnum: state => state.dict.HouseholdEnum,
      PoliticsEnum: state => state.dict.PoliticsEnum
    })
  },
  methods: {
    async getBaseInfo() {
      this.loadingData = true
      console.log(this.studentId)
      const result = await getBaseInfo(this.studentId)
      const form = this.$refs.form
      form.setData({ ...result })
      this.loadingData = false
      console.log(result)
    },
    saveBaseInfo() {
      this.validate(async values => {
        this.loading = true
        await studentBaseInfo({
          applyType: 'S001',
          ...values,
          studentId: this.studentId
        })
        this.loading = false
        this.handleCancel()
        this.$emit('update')
      })
    },
    validate(callback) {
      const form = this.$refs.form
      form.validate(data => {
        callback && callback(data)
      })
    },
    resetForm() {
      const form = this.$refs.form
      form.reset()
    },
    handleOk() {
      this.saveBaseInfo()
    },
    handleCancel() {
      this.$emit('change', false)
      this.resetForm()
    }
  }
}
</script>

<template>
  <a-modal
    title="报名信息"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存报名信息"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="edu-adult">
      <a-spin :spinning="loadingData">
        <form-generate ref="form" :fields="tab3"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import { getApply, studentApply } from '@/api/student'
// import moment from 'moment'

export default {
  name: 'JoinInfo',
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
    return {
      loading: false,
      loadingData: false,
      tab3: [
        {
          label: '入学批次',
          field: 'entranceDate',
          form: 'date',
          rules: [{ required: true, message: '请输入入学批次' }]
        },
        {
          label: '学生来源',
          field: 'sourceType',
          form: 'select',
          selectFrom: 'StudentSourceTypeEnum',
          rules: [{ required: true, message: '请选择学生来源' }]
        },
        {
          label: '负责人',
          field: 'principalGuy',
          form: 'input',
          rules: [
            { required: true, message: '请输入负责人' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '学校负责老师',
          field: 'principalTeacher',
          form: 'input',
          rules: [
            { required: true, message: '请输入学校负责老师' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '所报层次',
          field: 'studentApplyLevel',
          form: 'select',
          selectFrom: 'StudentApplyLevelEnum',
          rules: [{ required: true, message: '请选择所报层次' }]
        },
        {
          label: '所报院校',
          field: 'applySchool',
          form: 'input',
          rules: [{ required: true, message: '请选择所报院校' }]
        },
        {
          label: '所报专业',
          field: 'applyMajor',
          form: 'input',
          rules: [{ required: true, message: '请选择所报专业' }]
        },
        {
          label: '学制',
          field: 'duration',
          form: 'input',
          rules: [{ required: true, message: '请选择学制' }]
        },
        {
          label: '是否本科二学历',
          field: 'bachelorSecondFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: [{ required: true, message: '请选择是否本科二学历' }]
        },

        {
          label: '何时参加工作',
          field: 'workStartTime',
          form: 'date',
          rules: [{ required: true, message: '请选择何时参加工作' }]
        },
        {
          label: '学习平台',
          field: 'studyPlatform',
          form: 'input',
          rules: [{ required: true, message: '请输入学习平台' }]
        },
        {
          label: '学号',
          field: 'studentNo',
          form: 'input',
          rules: [
            { required: true, message: '请输入学号' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: '学习帐号',
          field: 'studyAccount',
          form: 'input',
          rules: [
            { required: true, message: '请输入学习帐号' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '登录密码',
          field: 'loginPassword',
          form: 'input',
          rules: [
            { required: true, message: '请输入登录密码' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '录取结果',
          field: 'admitResult',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: [
            { required: true, message: '请输入专业代码' },
            { max: 10, message: '限制输入10位' }
          ]
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.$watch('value', val => {
      if (val) {
        this.getJoinInfo()
      }
    })
  },
  computed: {},
  methods: {
    async getJoinInfo() {
      this.loadingData = true
      const result = await getApply(this.studentId)
      const form = this.$refs.form
      form.setData({
        ...result
      })
      this.loadingData = false
    },
    async saveJoinInfo() {
      this.validate(async values => {
        this.loading = true
        await studentApply({ ...values, studentId: this.studentId })
        this.loading = false
        this.handleCancel()
        this.$emit('update')
      })
    },
    validate(callback) {
      const form = this.$refs.form
      form.validate(data => {
        callback && callback(data)
        console.log(data)
      })
    },
    resetForm() {
      const form = this.$refs.form
      form.reset()
    },
    handleOk() {
      this.saveJoinInfo()
    },
    handleCancel() {
      this.$emit('change', false)
      this.resetForm()
    }
  }
}
</script>

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
          label: '所报层次',
          field: 'studentApplyLevel',
          form: 'select',
          selectFrom: 'StudentApplyLevelEnum',
          rules: [{ required: true, message: '请选择所报层次' }]
        },
        {
          label: '学费来源',
          field: 'feeSource',
          form: 'select',
          selectFrom: 'FeeSourceTypeEnum',
          rules: [{ required: true, message: '请选择所学费来源' }]
        },
        {
          label: '所报专业',
          field: 'applyMajor',
          form: 'input',
          rules: [{ required: true, message: '请输入所报专业' }]
        },
        {
          label: '电大毕业',
          field: 'tvGraduateFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: [{ required: true, message: '请选择是否电大毕业' }]
        },
        {
          label: '证书性质',
          field: 'certQuatity',
          form: 'input',
          rules: [{ required: true, message: '请选择证书性质' }]
        },
        {
          label: '是否本科二学历',
          field: 'bachelorSecondFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: [{ required: true, message: '请选择是否本科二学历' }]
        },

        {
          label: '认证编号',
          field: 'authNo',
          form: 'input',
          rules: [{ required: true, message: '请输入认证编号' }]
        },
        {
          label: '电子注册备案表编号',
          field: 'eeRegisterNo',
          form: 'input',
          rules: [{ required: true, message: '请输入电子注册备案表编号' }]
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

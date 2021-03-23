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
        <form-generate ref="joinInfoForm" :fields="tab3"></form-generate>
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
          rules: [{ required: true, message: '请选择入学批次' }]
        },
        {
          label: '渠道来源',
          field: 'sourceType',
          form: 'select',
          selectFrom: 'StudentSourceTypeEnum',
          rules: [{ required: true, message: '请输入渠道来源' }]
        },
        {
          label: '报考工种',
          field: 'workIndustry',
          form: 'select',
          selectFrom: 'TraningTypeEnum',
          rules: [{ required: true, message: '请输入报考工种' }]
        },
        {
          label: '报考层次',
          field: 'studentApplyLevel',
          form: 'select',
          selectFrom: 'StudentApplyLevel2Enum',
          rules: [{ required: true, message: '请选择报考层次' }]
        },
        {
          label: '报考时间',
          field: 'applyTime',
          form: 'date',
          rules: [{ required: true, message: '请选择报考时间' }]
        },
        {
          label: '授课方式',
          field: 'lessonStyle',
          form: 'select',
          selectFrom: 'LessonStyleEnum',
          rules: [{ required: true, message: '请输入授课方式' }]
        },
        {
          label: '班型',
          field: 'vipClassFlag',
          form: 'select',
          selectFrom: 'ClassTypeEnum',
          rules: [{ required: true, message: '请选择首次培训/复培' }]
        },

        {
          label: '招生老师',
          field: 'principalTeacher',
          form: 'input',
          rules: [{ required: true, message: '请输入招生老师' }]
        },
        {
          label: '班主任',
          field: 'headTeacher',
          form: 'input',
          rules: [{ required: true, message: '请输入班主任' }]
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
      const form = this.$refs.joinInfoForm
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
      const form = this.$refs.joinInfoForm
      form.validate(data => {
        callback && callback(data)
        console.log(data)
      })
    },
    resetForm() {
      const form = this.$refs.joinInfoForm
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

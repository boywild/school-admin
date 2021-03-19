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
import moment from 'moment'

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
          rules: [
            { required: true, message: '请输入入学批次' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '学生来源',
          field: 'sourceType',
          form: 'select',
          selectFrom: 'STUDENT_FROM_ENMU',
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
          selectFrom: 'STUDY_LEVEL_ENMU',
          rules: [{ required: true, message: '请选择所报层次' }]
        },
        {
          label: '所报学习形式',
          field: 'learnStyle',
          form: 'select',
          selectFrom: 'STUDY_WAT_ENMU',
          rules: [{ required: true, message: '请选择所报学习形式' }]
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
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择是否本科二学历' }]
        },

        {
          label: '何时参加工作',
          field: 'workStartTime',
          form: 'date',
          rules: [{ required: true, message: '请选择何时参加工作' }]
        },
        {
          label: '考试城市',
          field: 'examCity',
          form: 'cascader',
          rules: [{ required: true, message: '请输入考试城市' }]
        },
        {
          label: '所报院校',
          field: 'applySchool',
          form: 'input',
          rules: [
            { required: true, message: '请输入所报院校' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: '所报院校代码',
          field: 'applySchoolCode',
          form: 'input',
          rules: [
            { required: true, message: '请输入所报院校代码' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '所报专业',
          field: 'applyMajor',
          form: 'input',
          rules: [
            { required: true, message: '请输入所报专业' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '专业代码',
          field: 'applyMajorCode',
          form: 'input',
          rules: [
            { required: true, message: '请输入专业代码' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '免试',
          field: 'testFree',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择免试' }]
        },
        {
          label: '特殊报考',
          field: 'specialApply',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请输入特殊报考' }]
        },
        {
          label: '特殊报考区',
          field: 'specialApplyDistrict',
          form: 'input',
          rules: [{ required: true, message: '请输入特殊报考区' }]
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
      const result = await getApply()
      const form = this.$refs.form
      form.setData({
        ...result,
        entranceDate: moment(result.entranceDate),
        workStartTime: moment(result.workStartTime)
      })
      this.loadingData = false
    },
    async saveJoinInfo() {
      this.validate(async values => {
        this.loading = true
        await studentApply(values)
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

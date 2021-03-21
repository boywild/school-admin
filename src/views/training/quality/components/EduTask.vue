<template>
  <a-modal
    title="教务信息"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存教务信息"
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
import { studentEduTask, studentGetEduTask, getSubjectScore } from '@/api/student'

export default {
  name: 'EduTask',
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
          label: '准考证号',
          field: 'examNo',
          form: 'input',
          rules: [{ max: 15, message: '准考证号限制输入15位' }]
        },
        {
          label: '考生号',
          field: 'studentNo',
          form: 'input',
          rules: [{ max: 20, message: '考生号限制输入20位' }]
        },
        {
          label: '考试时间',
          field: 'examTime',
          form: 'date',
          rules: []
        },

        {
          label: '考试成绩',
          field: 'grade',
          form: 'input',
          rules: [{ max: 6, message: '考试成绩限制输入6位' }]
        },
        {
          label: '证书发放时间',
          field: 'certProvideTime',
          form: 'date',
          rules: []
        },
        {
          label: '学习实效',
          field: 'learnEffect',
          form: 'input',
          rules: []
        },
        {
          label: '报考情况',
          field: 'applySituation',
          form: 'input',
          rules: []
        },
        {
          label: '报考次数',
          field: 'applyTimes',
          form: 'input',
          rules: [{ max: 20, message: '报考次数限制输入20位' }]
        },
        {
          label: '教材领取',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '退费',
          field: 'refundFeeFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '退费时间',
          field: 'refundFeeTime',
          form: 'date',
          rules: []
        },
        {
          label: '退费途径',
          field: 'refundWay',
          rules: []
        }
      ]
    }
  },
  mounted() {
    this.$watch('value', val => {
      if (val && this.studentId) {
        this.getSbuject().then(res => {
          this.getEduTask(res)
        })
        this.getSbuject()
      }
    })
  },
  computed: {
    rules() {
      const rules = {}
      this.tab3.forEach(item => {
        rules[item.field] = item.rules
      })
      return rules
    }
  },
  methods: {
    async getEduTask(subject = {}) {
      this.loadingData = true
      const result = await studentGetEduTask(this.studentId)
      const form = this.$refs.form
      form.setData({ ...result, ...subject })
      this.loadingData = false
    },
    async saveEduTask() {
      this.validate(async values => {
        this.loading = true
        await studentEduTask({ ...values, studentId: this.studentId })
        this.loading = false
        this.handleCancel()
        this.$emit('update')
      })
    },
    async getSbuject() {
      const result = await getSubjectScore(this.studentId)
      const field = [
        'chineseScore',
        'mathScore',
        'englishScore',
        'politicsScore',
        'universityChineseScore',
        'highMathScore1',
        'highMathScore2',
        'physicsScore',
        'educationScore',
        'medicineScore',
        'civillawScore',
        'historyGeographyScore',
        'artScore',
        'totalScore'
      ]
      const formObj = {}
      field.forEach((ele, index) => {
        formObj[ele] = result[index] ? result[index].grade : ''
      })
      console.log(formObj)
      return formObj
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
      this.saveEduTask()
    },
    handleCancel() {
      this.$emit('change', false)
      this.resetForm()
    }
  }
}
</script>

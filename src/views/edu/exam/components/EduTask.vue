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
    <div class="edu-exam">
      <a-spin :spinning="loadingData">
        <form-generate ref="form" :fields="tab3"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import { studentEduTask, studentGetEduTask, getSubjectScore } from '@/api/student'
import moment from 'moment'
export default {
  name: 'EduTask',
  components: { FormGenerate },
  props: {
    value: { type: Boolean, required: true },
    studentId: { type: String, default: '' }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      loading: false,
      loadingData: false,
      tab3: [
        {
          label: '学生来源',
          field: 'studentSource',
          form: 'input',
          rules: [{ max: 10, message: '预报名号限制输入10位' }]
        },
        {
          label: '所报院校',
          field: 'applySchool',
          form: 'input',
          rules: [{ max: 15, message: '所报院校限制输入15位' }]
        },
        {
          label: '所报专业',
          field: 'applyMajor',
          form: 'input',
          rules: [{ max: 15, message: '所报专业限制输入15位' }]
        },
        {
          label: '专科入学时间',
          field: 'entranceTime',
          form: 'date',
          rules: []
        },
        {
          label: '是否有证书',
          field: 'certificateFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '是否为我司证书',
          field: 'myCertificateFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '负责老师',
          field: 'dutyTeacher',
          form: 'input',
          rules: [{ max: 10, message: '负责老师限制输入10位' }]
        },

        {
          label: '注册流水号',
          field: 'registerFlowNo',
          form: 'input',
          rules: [{ max: 20, message: '注册流水号限制输入20位' }]
        },
        {
          label: '准考证号',
          field: 'examNo',
          form: 'input',
          rules: [{ max: 15, message: '准考证号限制输入15位' }]
        },
        {
          label: '初始密码',
          field: 'initPsd',
          form: 'input',
          rules: [{ max: 12, message: '初始密码限制输入12位' }]
        },
        {
          label: '专业代码',
          field: 'majorCode',
          form: 'input',
          rules: [{ max: 20, message: '专业代码限制输入20位' }]
        },
        {
          label: '考区',
          field: 'examLocation',
          form: 'input',
          rules: [{ max: 20, message: '考区限制输入20位' }]
        },
        {
          label: 'VIP',
          field: 'vipFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        }
      ]
    }
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
  methods: {
    async getEduTask(subject = {}) {
      this.loadingData = true
      const result = await studentGetEduTask(this.studentId)
      const form = this.$refs.form
      form.setData({ ...result, ...subject, entranceTime: moment(result.entranceTime) })
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

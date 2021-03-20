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
          label: '预报名号',
          field: 'preApplyNo',
          form: 'input',
          rules: [{ max: 10, message: '预报名号限制输入10位' }]
        },
        {
          label: '短信密码',
          field: 'smsPassword',
          form: 'input',
          rules: [{ max: 6, message: '预报名号输入10位' }]
        },
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
          rules: [{ max: 20, message: '准考证号限制输入20位' }]
        },
        // {
        //   label: '入学考试科目及分数',
        //   field: 'xxxx',
        //   form: 'input',
        //   rules: [{ max: 5, message: '入学考试总分数' }]
        // },
        {
          label: '语文分数',
          field: 'chineseScore',
          form: 'input',
          rules: [{ max: 5, message: '语文分数' }]
        },
        {
          label: '数学分数（高中起点）',
          field: 'mathScore',
          form: 'input',
          rules: [{ max: 5, message: '数学分数' }]
        },
        {
          label: '英语分数（高中起点）',
          field: 'englishScore',
          form: 'input',
          rules: [{ max: 5, message: '英语分数' }]
        },
        {
          label: '政治分数',
          field: 'politicsScore',
          form: 'input',
          rules: [{ max: 5, message: '政治分数' }]
        },
        {
          label: '大学语文分数',
          field: 'universityChineseScore',
          form: 'input',
          rules: [{ max: 5, message: '大学语文分数' }]
        },
        {
          label: '高等数学一分数',
          field: 'highMathScore1',
          form: 'input',
          rules: [{ max: 5, message: '高等数学一分数' }]
        },
        {
          label: '高等数学二分数',
          field: 'highMathScore2',
          form: 'input',
          rules: [{ max: 5, message: '高等数学二分数' }]
        },
        {
          label: '物理化学分数',
          field: 'physicsScore',
          form: 'input',
          rules: [{ max: 5, message: '物理化学分数' }]
        },
        {
          label: '教育理论分数',
          field: 'educationScore',
          form: 'input',
          rules: [{ max: 5, message: '教育理论分数' }]
        },
        {
          label: '医学综合分数',
          field: 'medicineScore',
          form: 'input',
          rules: [{ max: 5, message: '医学综合分数' }]
        },
        {
          label: '民法分数',
          field: 'civillawScore',
          form: 'input',
          rules: [{ max: 5, message: '民法分数' }]
        },
        {
          label: '历史地理分数',
          field: 'historyGeographyScore',
          form: 'input',
          rules: [{ max: 5, message: '历史地理分数' }]
        },
        {
          label: '艺术概论分数',
          field: 'artScore',
          form: 'input',
          rules: [{ max: 5, message: '艺术概论分数' }]
        },

        {
          label: '入学考试总分数',
          field: 'totalScore',
          form: 'input',
          rules: [{ max: 5, message: '入学考试总分数' }]
        },
        {
          label: '加试时间',
          field: 'xxxx',
          form: 'input',
          rules: []
        },
        {
          label: '加试成绩',
          field: 'xxxx',
          form: 'input',
          rules: [{ max: 6, message: '加试成绩限制输入6位' }]
        },
        {
          label: '录取通知书已到',
          field: 'admitLetterReachFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '录取通知书已发',
          field: 'admitLetterSendFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '虚报',
          field: 'cheatFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '学习平台',
          field: 'studyPlatform',
          form: 'input',
          rules: [{ max: 20, message: '学习平台限制输入20位' }]
        },
        {
          label: '学号',
          field: 'studyNo',
          form: 'input',
          rules: [{ max: 15, message: '学号限制输入15位' }]
        },
        {
          label: '学习帐号',
          field: 'accountNo',
          form: 'input',
          rules: [{ max: 15, message: '学习帐号限制输入15位' }]
        },
        {
          label: '登录密码',
          field: 'loginPsd',
          form: 'input',
          rules: [{ max: 15, message: '登录密码限制输入15位' }]
        },
        {
          label: '录取结果',
          field: 'admitFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
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

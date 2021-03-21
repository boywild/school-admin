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
          field: 'language',
          form: 'input',
          rules: []
        },
        {
          label: '数学分数（高中起点）',
          field: 'math',
          form: 'input',
          rules: []
        },
        {
          label: '英语分数（高中起点）',
          field: 'english',
          form: 'input',
          rules: []
        },
        {
          label: '政治分数',
          field: 'politics',
          form: 'input',
          rules: []
        },
        {
          label: '大学语文分数',
          field: 'collageLanguage',
          form: 'input',
          rules: []
        },
        {
          label: '高等数学一分数',
          field: 'highMathOne',
          form: 'input',
          rules: []
        },
        {
          label: '高等数学二分数',
          field: 'highMathTwo',
          form: 'input',
          rules: []
        },
        {
          label: '物理化学分数',
          field: 'physicsChemistry',
          form: 'input',
          rules: []
        },
        {
          label: '教育理论分数',
          field: 'educationTheory',
          form: 'input',
          rules: []
        },
        {
          label: '医学综合分数',
          field: 'medicine',
          form: 'input',
          rules: []
        },
        {
          label: '民法分数',
          field: 'civilLaw',
          form: 'input',
          rules: []
        },
        {
          label: '历史地理分数',
          field: 'historyGeography',
          form: 'input',
          rules: []
        },
        {
          label: '艺术概论分数',
          field: 'art',
          form: 'input',
          rules: []
        },

        {
          label: '入学考试总分数',
          field: 'totalScore',
          form: 'input',
          rules: []
        },
        {
          label: '加试时间',
          field: 'addTime',
          form: 'input',
          rules: []
        },
        {
          label: '加试成绩',
          field: 'add',
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
          radioFrom: 'YesOrNoEnum',
          rules: []
        }
      ]
    }
  },
  mounted() {
    this.$watch('value', val => {
      if (val && this.studentId) {
        // this.getSbuject().then(res => {
        //   this.getEduTask(res)
        // })
        this.getEduTask()
        // this.getSbuject()
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

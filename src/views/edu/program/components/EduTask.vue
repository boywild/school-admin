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
          label: '学校负责老师',
          field: 'dutyTeacher',
          form: 'input',
          rules: [{ max: 10, message: '学校负责老师限制输入10位' }]
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
          rules: [{ max: 20, message: '学习帐号限制输入20位' }]
        },
        {
          label: '登录密码',
          field: 'loginPsd',
          form: 'input',
          rules: [{ max: 15, message: '登录密码限制输入15位' }]
        },
        {
          label: '录取结果',
          form: 'admitFlag',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '有录取通知书',
          field: 'admitLetterFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '如期毕业',
          field: 'graduateOnTimeFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },

        {
          label: '未毕业原因',
          field: 'noGraduateReason',
          form: 'input',
          rules: [{ max: 30, message: '未毕业原因限制输入30位' }]
        },
        {
          label: '已有毕业证书',
          field: 'haveGraduateCertFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业证书已到',
          field: 'graduateCertReachFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业证书已领',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '领走时间',
          field: 'graduateCertTakeTime',
          form: 'date',
          rules: []
        },
        {
          label: '领走方式',
          field: 'graduateCertTakeWay',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '已填毕业生登记表',
          field: 'fillGraduateRegisterSheetFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业信息已采集',
          field: 'graduateInfoCollectFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业纸质照片已到我司',
          field: 'graduatePhotoReachMyEntFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业纸质照片已提交院校',
          field: 'graduatePhotoSubmitSchoolFlag',
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

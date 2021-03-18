<template>
  <div class="edu-exam">
    <form-generate ref="form" :fields="tab3"></form-generate>
  </div>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
export default {
  name: 'EduTask',
  components: { FormGenerate },
  data() {
    return {
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
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '是否为我司证书',
          field: 'myCertificateFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
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
          radioFrom: 'YESORNO_ENMU',
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
  methods: {
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
    }
  }
}
</script>

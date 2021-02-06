<template>
  <div class="edu-adult">
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
          label: '预报名号',
          field: 'name',
          form: 'input',
          rules: [{ max: 10, message: '预报名号限制输入10位' }]
        },
        {
          label: '短信密码',
          field: 'phone',
          form: 'input',
          rules: [{ max: 6, message: '预报名号输入10位' }]
        },
        {
          label: '准考证号',
          field: 'card',
          form: 'input',
          rules: [{ max: 15, message: '准考证号限制输入15位' }]
        },
        {
          label: '考生号',
          field: 'cardNo',
          form: 'input',
          rules: [{ max: 20, message: '准考证号限制输入20位' }]
        },
        {
          label: '入学考试科目及分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '入学考试总分数' }]
        },
        {
          label: '入学考试总分数',
          field: 'birth',
          form: 'input',
          rules: [{ max: 5, message: '入学考试总分数' }]
        },
        {
          label: '加试时间',
          field: 'location',
          form: 'input',
          rules: []
        },

        {
          label: '加试成绩',
          field: 'xz',
          form: 'input',
          rules: [{ max: 6, message: '加试成绩限制输入6位' }]
        },
        {
          label: '录取通知书已到',
          field: 'tzssfyd',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '录取通知书已发',
          field: 'tzssfyf',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '虚报',
          field: 'xb',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学习平台',
          field: 'meal',
          form: 'input',
          rules: [{ max: 20, message: '学习平台限制输入20位' }]
        },
        {
          label: '学号',
          field: 'mealss',
          form: 'input',
          rules: [{ max: 15, message: '学号限制输入15位' }]
        },
        {
          label: '学习帐号',
          field: 'ms',
          form: 'input',
          rules: [{ max: 15, message: '学习帐号限制输入15位' }]
        },
        {
          label: '登录密码',
          field: 'tsbk',
          form: 'input',
          rules: [{ max: 15, message: '登录密码限制输入15位' }]
        },
        {
          label: '录取结果',
          field: 'tsbkq',
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

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
          label: '准考证号',
          field: 'examNo',
          form: 'input',
          rules: [{ max: 15, message: '准考证号限制输入15位' }]
        },
        {
          label: '考生号',
          field: 'studyNo',
          form: 'input',
          rules: [{ max: 20, message: '准考证号限制输入20位' }]
        },
        {
          label: '考试成绩',
          field: 'xxxx',
          form: 'input',
          rules: [{ max: 5, message: '考试成绩' }]
        },
        {
          label: '考试时间',
          field: 'xxxx',
          form: 'date',
          rules: []
        },

        {
          label: '证书发放时间',
          field: 'xxxx',
          form: 'date',
          rules: []
        },
        {
          label: '学习实效',
          field: 'xxxx',
          form: 'input',
          rules: []
        },
        {
          label: '报考情况',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '特殊操作',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '报考次数',
          field: 'xxxx',
          form: 'input',
          rules: [{ max: 2, message: '报考次数限制输入2位' }]
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
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '退费时间',
          field: 'xxxx',
          form: 'date',
          rules: []
        },
        {
          label: '退费途径',
          field: 'xxxx',
          form: 'input',
          rules: []
        },
        {
          label: '沟通一',
          field: 'xxxx',
          form: 'input',
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

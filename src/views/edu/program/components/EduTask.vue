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
          label: '学校负责老师',
          field: 'name',
          form: 'input',
          rules: [{ max: 10, message: '学校负责老师限制输入10位' }]
        },
        {
          label: '学号',
          field: 'phone',
          form: 'input',
          rules: [{ max: 15, message: '学号限制输入15位' }]
        },
        {
          label: '学习帐号',
          field: 'card',
          form: 'input',
          rules: [{ max: 20, message: '学习帐号限制输入20位' }]
        },
        {
          label: '登录密码',
          field: 'cardNo',
          form: 'input',
          rules: [{ max: 15, message: '登录密码限制输入15位' }]
        },
        {
          label: '录取结果',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '有录取通知书',
          field: 'birth',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '如期毕业',
          field: 'location',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },

        {
          label: '未毕业原因',
          field: 'xz',
          form: 'input',
          rules: [{ max: 30, message: '未毕业原因限制输入30位' }]
        },
        {
          label: '已有毕业证书',
          field: 'tzssfyd',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业证书已到',
          field: 'tzssfyf',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业证书已领',
          field: 'xb',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '领走时间',
          field: 'meal',
          form: 'date',
          rules: []
        },
        {
          label: '领走方式',
          field: 'mealss',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '已填毕业生登记表',
          field: 'ms',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业信息已采集',
          field: 'tsbk',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业纸质照片已到我司',
          field: 'tsbkq',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业纸质照片已提交院校',
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

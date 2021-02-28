<template>
  <div class="edu-adult">
    <form-generate ref="form" :fields="tab6"></form-generate>
  </div>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import { isMoney } from '@/utils/validate'
export default {
  name: 'StudyCost',
  components: { FormGenerate },
  data() {
    const validatorMoney = text => {
      return (rule, value, callback) => {
        if (!value) {
          return callback()
        }
        if (!isMoney(value)) {
          return callback(new Error(`${text}格式不正确`))
        } else {
          callback()
        }
      }
    }
    return {
      tab6: [
        {
          label: '批次',
          field: 'degreeLevel',
          form: 'select',
          rules: [{ max: 15, message: '批次限制输入15位' }]
        },
        {
          label: '层次',
          field: 'layer',
          form: 'select',
          rules: [{ max: 15, message: '层次限制输入15位' }]
        },
        {
          label: '院校',
          field: 'graduateSchool',
          form: 'input',
          rules: [{ max: 20, message: '院校限制输入20位' }]
        },
        {
          label: '姓名',
          field: 'studentName',
          form: 'input',
          rules: [{ max: 15, message: '姓名限制输入15位' }]
        },
        {
          label: '专业',
          field: 'major',
          form: 'input',
          rules: [{ max: 15, message: '限制输入15位' }]
        },
        {
          label: '证件号码',
          field: 'idNumber',
          form: 'input',
          rules: [{ max: 18, message: '身份证号限制输入18位' }]
        },
        {
          label: '录入时间',
          field: 'registerDateTime',
          form: 'date',
          rules: []
        },
        {
          label: '总学费',
          field: 'totalExpense',
          form: 'input',
          rules: [{ validator: validatorMoney('总学费') }]
        },
        {
          label: '实际学费',
          field: 'realExpense',
          form: 'input',
          rules: [{ validator: validatorMoney('实际学费') }]
        },
        {
          label: '欠款',
          field: 'oweExpense',
          form: 'input',
          rules: [{ validator: validatorMoney('欠款') }]
        },
        {
          label: '第一年交费',
          field: 'mm',
          form: 'input',
          rules: [{ validator: validatorMoney('第一年交费') }]
        },
        {
          label: '第二年交费',
          field: 'school',
          form: 'input',
          rules: [{ validator: validatorMoney('第二年交费') }]
        },
        {
          label: '报名费',
          field: 'address',
          form: 'input',
          rules: [{ validator: validatorMoney('报考费') }]
        },
        {
          label: '图像采集费',
          field: 'dd',
          form: 'input',
          rules: [{ validator: validatorMoney('图像采集费') }]
        }
      ]
    }
  },
  computed: {},
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
<style lang="less"></style>

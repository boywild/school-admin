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
          label: '欠费',
          field: 'oweExpense',
          form: 'input',
          rules: [{ validator: validatorMoney('欠费') }]
        },
        {
          label: '补贴费用',
          field: 'bonus',
          form: 'input',
          rules: [{ validator: validatorMoney('补贴费用') }]
        },
        {
          label: '补贴到账时间',
          field: 'xxxx',
          form: 'date',
          rules: [{ validator: validatorMoney('补贴到账时间') }]
        },
        {
          label: '备注',
          field: 'xxxx',
          form: 'input',
          rules: []
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

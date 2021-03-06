<template>
  <a-modal
    title="财务信息"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存财务信息"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="edu-adult">
      <a-spin :spinning="loadingData">
        <form-generate ref="form" :fields="tab6"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
// import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'
import { isMoney } from '@/utils/validate'
import { financeDetail, financeSave } from '@/api/finance'

export default {
  name: 'StudyCost',
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
      loading: false,
      loadingData: false,
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
          field: 'bonusComeInTime',
          form: 'date',
          rules: []
        },
        {
          label: '备注',
          field: 'remark',
          form: 'input',
          rules: []
        }
      ]
    }
  },
  mounted() {
    this.$watch('value', val => {
      if (val) {
        this.getStudyCost()
      }
    })
  },
  computed: {},
  methods: {
    async getStudyCost() {
      this.loadingData = true
      const result = await financeDetail(this.studentId)
      const form = this.$refs.form
      form.setData({ ...result })
      this.loadingData = false
    },
    async saveStudyCost() {
      this.validate(async values => {
        this.loading = true
        await financeSave({ ...values, studentId: this.studentId })
        this.loading = false
        this.handleCancel()
        this.$emit('update')
      })
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
      this.saveStudyCost()
    },
    handleCancel() {
      this.$emit('change', false)
      this.resetForm()
    }
  }
}
</script>
<style lang="less"></style>

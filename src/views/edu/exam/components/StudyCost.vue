<template>
  <a-modal
    title="毕业申请"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存毕业申请"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="edu-exam">
      <a-spin :spinning="loadingData">
        <form-generate ref="form" :fields="tab6"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'
import { financeDetail, financeSave } from '@/api/finance'
import { isMoney } from '@/utils/validate'
export default {
  name: 'StudyCost',
  components: { FormGenerate },
  props: {
    value: { type: Boolean, required: true },
    studentId: { type: String, default: '' }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
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
        // {
        //   label: '批次',
        //   field: 'degreeLevel',
        //   form: 'select',
        //   rules: [{ max: 15, message: '批次限制输入15位' }]
        // },
        // {
        //   label: '层次',
        //   field: 'layer',
        //   form: 'select',
        //   rules: [{ max: 15, message: '层次限制输入15位' }]
        // },
        // {
        //   label: '院校',
        //   field: 'graduateSchool',
        //   form: 'input',
        //   rules: [{ max: 20, message: '院校限制输入20位' }]
        // },
        // {
        //   label: '姓名',
        //   field: 'studentName',
        //   form: 'input',
        //   rules: [{ max: 15, message: '姓名限制输入15位' }]
        // },
        // {
        //   label: '专业',
        //   field: 'major',
        //   form: 'input',
        //   rules: [{ max: 15, message: '限制输入15位' }]
        // },
        // {
        //   label: '证件号码',
        //   field: 'idNumber',
        //   form: 'input',
        //   rules: [{ max: 18, message: '身份证号限制输入18位' }]
        // },
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
          label: '欠款结算时间',
          field: 'oweClearTime',
          form: 'date'
        },
        {
          label: '学位辅导费',
          field: 'degreeTutor',
          form: 'input',
          rules: [{ validator: validatorMoney('学位辅导费') }]
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
      form.setData({
        ...result,
        registerDateTime: moment(result.registerDateTime),
        oweClearTime: moment(result.oweClearTime)
      })
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

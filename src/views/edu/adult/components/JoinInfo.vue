<template>
  <a-form-model
    class="form-no-margin"
    ref="joinInfoForm"
    :model="joinInfo"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-row>
      <a-col :span="12" :gutter="5" v-for="(item, index) in tab3" :key="index">
        <a-form-model-item :label="item.label" :prop="item.field">
          <a-input v-if="item.form === 'input'" v-model="joinInfo[item.field]" :placeholder="'请输入' + item.label" />
          <a-select v-if="item.form === 'select'" v-model="joinInfo[item.field]" :placeholder="'请输入' + item.label">
            <a-select-option :value="select.value" v-for="(select, count) in selectData[item.field]" :key="count">
              {{ select.name }}
            </a-select-option>
          </a-select>
          <a-radio-group v-if="item.form === 'radio'" v-model="joinInfo[item.field]">
            <a-radio :value="radio.value" v-for="(radio, count) in radioData[item.field]" :key="count">
              {{ radio.name }}
            </a-radio>
          </a-radio-group>
          <a-date-picker v-if="item.form === 'date'" v-model="joinInfo[item.field]" />
        </a-form-model-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
import { SELECTION_OPTIONS, MALE } from '@/config/constant'
export default {
  data() {
    return {
      joinInfo: {},
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      selectData: {
        name: SELECTION_OPTIONS,
        cardNo: SELECTION_OPTIONS,
        birth: SELECTION_OPTIONS
      },
      radioData: {
        location: MALE,
        bookNo: MALE
      },
      tab3: [
        {
          label: '学生来源',
          field: 'name',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请选择学生来源' }]
        },
        {
          label: '负责人',
          field: 'phone',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入负责人' }]
        },
        {
          label: '学校负责老师',
          field: 'card',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入学校负责老师' }]
        },
        {
          label: '所报层次',
          field: 'cardNo',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请选择所报层次' }]
        },
        {
          label: '所报院校',
          field: 'mz',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入所报院校' }]
        },
        {
          label: '所报专业',
          field: 'meal',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入所报专业' }]
        },
        {
          label: '学制',
          field: 'birth',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请选择学制' }]
        },
        {
          label: '是否本科二学历',
          field: 'location',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请选择是否本科二学历' }]
        },
        {
          label: '何时参加工作',
          field: 'xz',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请选择何时参加工作' }]
        },
        {
          label: '学习平台',
          field: 'zy',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入学习平台' }]
        },
        {
          label: '学号',
          field: 'mm',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入学号' }]
        },
        {
          label: '学习帐号',
          field: 'school',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入学习帐号' }]
        },
        {
          label: '登录密码',
          field: 'byTime',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入登录密码' }]
        },
        {
          label: '录取结果',
          field: 'bookNo',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请选择录取结果' }]
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
      const form = this.$refs.joinInfoForm
      form.validate(success => {
        this.$emit('validate', { success, data: this.joinInfo })
        if (success) {
          callback && callback(this.joinInfo)
        }
      })
    },
    resetForm() {
      const form = this.$refs.joinInfoForm
      form.resetFields()
    }
  }
}
</script>

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
            <a-select-option :value="select.code" v-for="(select, count) in selectData[item.field]" :key="count">
              {{ select.desc }}
            </a-select-option>
          </a-select>
          <a-radio-group v-if="item.form === 'radio'" v-model="joinInfo[item.field]">
            <a-radio :value="radio.code" v-for="(radio, count) in radioData[item.field]" :key="count">
              {{ radio.desc }}
            </a-radio>
          </a-radio-group>
          <a-date-picker v-if="item.form === 'date'" v-model="joinInfo[item.field]" />
        </a-form-model-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
import { YESORNO_ENMU } from '@/config/dict'
export default {
  data() {
    return {
      joinInfo: {},
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      selectData: {},
      radioData: {
        tzssfyf: YESORNO_ENMU,
        tzssfyd: YESORNO_ENMU,
        xb: YESORNO_ENMU
      },
      tab3: [
        {
          label: '预报名号',
          field: 'name',
          form: 'input',
          rules: [{ min: 5, message: '请输入预报名号' }]
        },
        {
          label: '短信密码',
          field: 'phone',
          form: 'input',
          rules: [{ min: 5, message: '请输入短信密码' }]
        },
        {
          label: '准考证号',
          field: 'card',
          form: 'input',
          rules: [{ min: 5, message: '请输入准考证号' }]
        },
        {
          label: '考生号',
          field: 'cardNo',
          form: 'input',
          rules: [{ min: 5, message: '请输入考生号' }]
        },
        {
          label: '入学考试科目及分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ min: 5, message: '请选择所报学习形式' }]
        },
        {
          label: '入学考试总分数',
          field: 'birth',
          form: 'input',
          rules: [{ min: 5, message: '请输入入学考试总分数' }]
        },
        {
          label: '加试时间',
          field: 'location',
          form: 'input',
          rules: [{ min: 5, message: '请输入加试时间' }]
        },

        {
          label: '加试成绩',
          field: 'xz',
          form: 'input',
          rules: [{ min: 5, message: '请输入加试成绩' }]
        },
        {
          label: '录取通知书是否已到',
          field: 'tzssfyd',
          form: 'radio',
          rules: [{ min: 5, message: '请选择录取通知书是否已到' }]
        },
        {
          label: '录取通知书有否已发',
          field: 'tzssfyf',
          form: 'radio',
          rules: [{ min: 5, message: '请选择录取通知书有否已发' }]
        },
        {
          label: '是否虚报',
          field: 'xb',
          form: 'radio',
          rules: [{ min: 5, message: '请输入所报院校代码' }]
        },
        {
          label: '学习平台',
          field: 'meal',
          form: 'input',
          rules: [{ min: 5, message: '请输入学习平台' }]
        },
        {
          label: '学号',
          field: 'mealss',
          form: 'input',
          rules: [{ min: 5, message: '请输入学号' }]
        },
        {
          label: '学习帐号',
          field: 'ms',
          form: 'input',
          rules: [{ min: 5, message: '请输入学习帐号' }]
        },
        {
          label: '登录密码',
          field: 'tsbk',
          form: 'input',
          rules: [{ min: 5, message: '请输入登录密码' }]
        },
        {
          label: '录取结果',
          field: 'tsbkq',
          form: 'input',
          rules: [{ min: 5, message: '请输入录取结果' }]
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

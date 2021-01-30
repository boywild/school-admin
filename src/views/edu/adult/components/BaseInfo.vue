<template>
  <a-form-model
    class="form-no-margin"
    ref="baseInfoForm"
    :model="baseInfo"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-row>
      <a-col :span="12" :gutter="5" v-for="(item, index) in tab1" :key="index">
        <a-form-model-item :label="item.label" :prop="item.field">
          <a-input
            v-if="item.form === 'input'"
            has-feedback
            v-model.trim="baseInfo[item.field]"
            :placeholder="'请输入' + item.label"
          />
          <a-select v-if="item.form === 'select'" v-model="baseInfo[item.field]" :placeholder="'请输入' + item.label">
            <a-select-option :value="select.code" v-for="(select, count) in selectData[item.field]" :key="count">
              {{ select.desc }}
            </a-select-option>
          </a-select>
          <a-radio-group v-if="item.form === 'radio'" v-model="baseInfo[item.field]">
            <a-radio :value="radio.code" v-for="(radio, count) in radioData[item.field]" :key="count">
              {{ radio.desc }}
            </a-radio>
          </a-radio-group>
          <a-date-picker v-if="item.form === 'date'" v-model="baseInfo[item.field]" />
        </a-form-model-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
import { isEmail, isPhone } from '@/utils/validate'
import { SELECTION_OPTIONS } from '@/config/constant'
import { YESORNO_ENMU } from '@/config/dict'
export default {
  data() {
    const validatorEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入email'))
      }
      if (!isEmail(value)) {
        return callback(new Error('email格式不正确'))
      } else {
        callback()
      }
    }
    const validatorPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入联系电话'))
      }
      if (!isPhone(value)) {
        return callback(new Error('联系电话格式不正确'))
      } else {
        callback()
      }
    }
    return {
      baseInfo: {},
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      selectData: {
        card: SELECTION_OPTIONS,
        bookType: SELECTION_OPTIONS,
        mz: SELECTION_OPTIONS,
        mm: SELECTION_OPTIONS,
        xz: SELECTION_OPTIONS
      },
      radioData: {
        male: YESORNO_ENMU
      },
      tab1: [
        {
          label: '学生姓名',
          field: 'name',
          form: 'input',
          rules: [
            { required: true, message: '请输入学生姓名' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '联系电话',
          field: 'phone',
          form: 'input',
          rules: [{ required: true, validator: validatorPhone }]
        },
        {
          label: '证件种类',
          field: 'card',
          form: 'select',
          rules: [{ required: true, message: '请输入证件种类' }]
        },
        {
          label: '证件号码',
          field: 'cardNo',
          form: 'input',
          rules: [
            { required: true, message: '请输入证件号码' },
            { max: 18, message: '请输入18位证件号码' }
          ]
        },
        {
          label: '民族',
          field: 'mz',
          form: 'select',
          rules: [{ required: true, message: '请选择民族' }]
        },
        {
          label: '性别',
          field: 'male',
          form: 'radio',
          rules: [{ required: true, message: '请选择性别' }]
        },
        {
          label: '出生日期',
          field: 'birth',
          form: 'date',
          rules: [{ required: true, message: '请选择出生日期' }]
        },
        {
          label: '所属省市',
          field: 'location',
          form: 'input',
          rules: [
            { required: true, message: '请输入所属省市' },
            { max: 30, message: '限制输入30位' }
          ]
        },
        {
          label: '户口性质',
          field: 'xz',
          form: 'select',
          rules: [{ required: true, message: '请输入户口性质' }]
        },
        {
          label: '职业',
          field: 'zy',
          form: 'input',
          rules: [
            { required: true, max: 20, message: '请输入职业' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: '政治面貌',
          field: 'mm',
          form: 'select',
          rules: [{ required: true, max: 20, message: '请选择政治面貌' }]
        },
        {
          label: '原毕业学校',
          field: 'school',
          form: 'input',
          rules: [
            { required: true, message: '请输入源毕业学校' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: '原毕业时间',
          field: 'byTime',
          form: 'date',
          rules: [{ required: true, max: 20, message: '请选择原毕业时间' }]
        },
        {
          label: '原毕业证书编号',
          field: 'bookNo',
          form: 'input',
          rules: [
            { required: true, max: 20, message: '请输入原毕业证书编号' },
            { max: 15, message: '限制输入15位' }
          ]
        },
        {
          label: '原毕业证书类型',
          field: 'bookType',
          form: 'select',
          rules: [{ required: true, message: '请输入原毕业证书类型' }]
        },
        {
          label: '通讯地址',
          field: 'address',
          form: 'input',
          rules: [
            { required: true, message: '请输入通讯地址' },
            { max: 30, message: '限制输入30位' }
          ]
        },
        {
          label: '工作单位',
          field: 'work',
          form: 'input',
          rules: [
            { required: true, message: '请输入工作单位' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: 'email',
          field: 'email',
          form: 'input',
          rules: [{ required: true, validator: validatorEmail }]
        }
      ]
    }
  },
  mounted() {
    // this.validate()
  },
  computed: {
    rules() {
      const rules = {}
      this.tab1.forEach(item => {
        rules[item.field] = item.rules
      })
      return rules
    }
  },
  methods: {
    validate(callback) {
      const form = this.$refs.baseInfoForm
      form.validate(success => {
        this.$emit('validate', { success, data: this.baseInfo })
        if (success) {
          callback && callback(this.baseInfo)
        }
      })
    },
    resetForm() {
      const form = this.$refs.baseInfoForm
      form.resetFields()
    }
  }
}
</script>

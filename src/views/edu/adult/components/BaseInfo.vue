<template>
  <a-form-model
    class="form-no-margin"
    ref="baseInfo"
    :model="baseInfo"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-row>
      <a-col :span="12" :gutter="5" v-for="(item, index) in tab1" :key="index">
        <a-form-item :label="item.label">
          <a-input v-if="item.form === 'input'" v-model="baseInfo[item.field]" />
          <a-select v-if="item.form === 'select'" v-model="baseInfo[item.field]">
            <a-select-option :value="select.value" v-for="(select, count) in selectData[item.field]" :key="count">
              {{ select.name }}
            </a-select-option>
          </a-select>
          <a-radio-group v-if="item.form === 'radio'" v-model="baseInfo[item.field]">
            <a-radio :value="radio.value" v-for="(radio, count) in radioData[item.field]" :key="count">
              {{ radio.name }}
            </a-radio>
          </a-radio-group>
          <a-date-picker v-if="item.form === 'date'" v-model="baseInfo[item.field]" />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
import { SELECTION_OPTIONS, MALE } from '@/config/constant'
export default {
  data() {
    return {
      baseInfo: {},
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      selectData: {
        card: SELECTION_OPTIONS,
        bookType: SELECTION_OPTIONS,
        mz: SELECTION_OPTIONS
      },
      radioData: {
        male: MALE
      },
      tab1: [
        {
          label: '学生姓名',
          field: 'name',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '联系电话',
          field: 'phone',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '证件种类',
          field: 'card',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '证件号码',
          field: 'cardNo',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '民族',
          field: 'mz',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '性别',
          field: 'male',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '出生日期',
          field: 'birth',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '所属省市',
          field: 'location',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '户口性质',
          field: 'xz',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '职业',
          field: 'zy',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '政治面貌',
          field: 'mm',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '源毕业学校',
          field: 'school',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '原毕业时间',
          field: 'byTime',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '源毕业证书编号',
          field: 'bookNo',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '源毕业证书类型',
          field: 'bookType',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '通讯地址',
          field: 'address',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '工作单位',
          field: 'work',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: 'email',
          field: 'email',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        }
      ]
    }
  },
  computed: {}
}
</script>
<style lang="less">
.form-no-margin {
  .ant-form-item {
    margin-bottom: 0;
  }
}
</style>

<template>
  <a-form-model
    class="form-no-margin"
    ref="joinInfo"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-row>
      <a-col :span="12" :gutter="5" v-for="(item, index) in tab3" :key="index">
        <a-form-item :label="item.label">
          <a-input v-if="item.form === 'input'" v-model="joinInfo[item.field]" />
          <a-select v-if="item.form === 'select'" v-model="joinInfo[item.field]">
            <a-select-option value="shanghai">
              Zone one
            </a-select-option>
          </a-select>
          <a-radio-group v-if="item.form === 'radio'" v-model="joinInfo[item.field]">
            <a-radio value="1">
              Sponsor
            </a-radio>
          </a-radio-group>
          <a-date-picker v-if="item.form === 'date'" v-model="joinInfo[item.field]" />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {
      joinInfo: {},
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      tab3: [
        {
          label: '学生来源',
          field: 'name',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '负责人',
          field: 'phone',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学校负责老师',
          field: 'card',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '所报层次',
          field: 'cardNo',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '所报院校',
          field: 'mz',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '所报专业',
          field: 'meal',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学制',
          field: 'birth',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否本科二学历',
          field: 'location',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '何时参加工作',
          field: 'xz',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学习平台',
          field: 'zy',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学号',
          field: 'mm',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学习帐号',
          field: 'school',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '登录密码',
          field: 'byTime',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '录取结果',
          field: 'bookNo',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        }
      ],
      rules: []
    }
  },
  computed: {}
}
</script>

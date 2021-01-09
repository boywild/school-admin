<template>
  <a-form-model
    class="form-no-margin"
    ref="studyCost"
    :model="studyCost"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-row>
      <a-col :span="12" :gutter="5" v-for="(item, index) in tab6" :key="index">
        <a-form-item :label="item.label">
          <a-input v-if="item.form === 'input'" v-model="studyCost[item.field]" />
          <a-select v-if="item.form === 'select'" v-model="studyCost[item.field]">
            <a-select-option value="shanghai">
              Zone one
            </a-select-option>
          </a-select>
          <a-date-picker v-if="item.form === 'date'" v-model="studyCost[item.field]" />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
export default {
  name: 'StudyCost',
  data() {
    return {
      studyCost: {},
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      tab6: [
        {
          label: '批次',
          field: 'name',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '层次',
          field: 'phone',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '院校',
          field: 'card',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '姓名',
          field: 'cardNo',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '专业',
          field: 'mz',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '身份证号',
          field: 'meal',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '录入时间',
          field: 'birth',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '总学费',
          field: 'location',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '实际学费',
          field: 'xz',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '欠款',
          field: 'zy',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '第一年交费',
          field: 'mm',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '第二年交费',
          field: 'school',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '第三年交费',
          field: 'byTime',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '第四年交费',
          field: 'bookNo',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '第五年交费',
          field: 'bookType',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '报考费',
          field: 'address',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '入学考试辅导费',
          field: 'work',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学位报考费',
          field: 'email',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学位辅导费',
          field: 'email',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '网课费',
          field: 'email',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '论文费',
          field: 'email',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '图像采集费',
          field: 'email',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        }
      ],
      rules: []
    }
  },
  computed: {}
}
</script>
<style lang="less">
</style>

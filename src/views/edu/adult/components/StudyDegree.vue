<template>
  <div class="edu-adult">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="第一学期"> </a-tab-pane>
      <a-tab-pane key="2" tab="第二学期"> </a-tab-pane>
    </a-tabs>
    <form-generate :fields="tab5"></form-generate>
  </div>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
export default {
  name: 'StudyDegree',
  components: { FormGenerate },
  data() {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      studyDegree: {},
      tab5: [
        { label: '批次', field: 'isneedXW', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        { label: '院校', field: 'studyStatus', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        { label: '专业', field: 'isAchieve', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        { label: '学制', field: 'isJoin', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        { label: '姓名', field: 'isDeal', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        {
          label: '性别',
          field: 'time',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '民族',
          field: 'address',
          form: 'select',
          selectFrom: 'MZ_ENMU',
          rules: [{ message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '户口性质',
          field: 'account',
          form: 'select',
          selectFrom: 'HK_ENMU',
          rules: [{ message: '请输入至少五个字符的规则描述！' }]
        },
        { label: '证件号码', field: 'password', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        { label: '电话', field: 'enScore', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        { label: '学号', field: 'coScore', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        {
          label: '学位性质',
          field: 'a',
          form: 'select',
          selectFrom: 'DEGREE_ENMU',
          rules: [{ message: '请输入至少五个字符的规则描述！' }]
        },
        { label: '学位准考证号', field: 'b', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        { label: '专业代码', field: 'c', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },

        { label: '考区', field: 'c', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        {
          label: '语种',
          field: 'c',
          form: 'select',
          selectFrom: 'LANG_ENMU',
          rules: [{ message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否为VIP',
          field: 'c',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ message: '请输入至少五个字符的规则描述！' }]
        },
        { label: 'VIP负责人', field: 'c', form: 'input', rules: [{ message: '请输入至少五个字符的规则描述！' }] },
        {
          label: '学位分数',
          field: 'c',
          form: 'radio',
          radioFrom: 'REACH_ENMU',
          rules: [{ message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '毕业论文',
          field: 'c',
          form: 'select',
          selectFrom: 'THESIS_FROM_ENMU',
          rules: [{ message: '请输入至少五个字符的规则描述！' }]
        }
      ]
    }
  },
  computed: {}
}
</script>

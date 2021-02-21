<template>
  <div class="edu-exam">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="第一学期"> </a-tab-pane>
      <a-tab-pane key="2" tab="第二学期"> </a-tab-pane>
    </a-tabs>
    <form-generate ref="form" :fields="tab5"></form-generate>
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
        {
          label: '批次',
          field: 'isneedXW',
          form: 'input',
          rules: [{ max: '10', message: '批次限制输入10位' }]
        },
        {
          label: '院校',
          field: 'studyStatus',
          form: 'input',
          rules: [{ max: '20', message: '院校限制输入20位' }]
        },
        { label: '专业', field: 'isAchieve', form: 'input', rules: [{ max: '10', message: '专业制输入10位' }] },
        // { label: '学制', field: 'isJoin', form: 'input', rules: [{ max: '10', message: '学制限制输入10位' }] },
        { label: '姓名', field: 'isDeal', form: 'input', rules: [{ max: '10', message: '姓名限制输入20位' }] },
        {
          label: '性别',
          field: 'time',
          form: 'radio',
          radioFrom: 'SEX_ENMU',
          rules: []
        },
        {
          label: '民族',
          field: 'address',
          form: 'select',
          selectFrom: 'MZ_ENMU',
          rules: []
        },
        {
          label: '户口性质',
          field: 'account',
          form: 'select',
          selectFrom: 'HK_ENMU',
          rules: []
        },
        {
          label: '证件号码',
          field: 'password',
          form: 'input',
          rules: [{ max: '20', message: '证件号码限制输入20位' }]
        },
        { label: '电话', field: 'enScore', form: 'input', rules: [{ max: '11', message: '电话限制输入11位' }] },
        { label: 'Email', field: 'enScore222', form: 'input', rules: [{ max: '11', message: 'Email限制输入15位' }] },
        // { label: '学号', field: 'coScore', form: 'input', rules: [{ max: '20', message: '学号限制输入20位' }] },
        {
          label: '学位性质',
          field: 'a',
          form: 'select',
          selectFrom: 'DEGREE_ENMU',
          rules: []
        },
        {
          label: '学位准考证号',
          field: 'b',
          form: 'input',
          rules: [{ max: '20', message: '学位准考证号限制输入20位' }]
        },
        { label: '专业代码', field: 'c', form: 'input', rules: [{ max: '20', message: '专业代码限制输入20位' }] },

        { label: '考区', field: 'c', form: 'input', rules: [{ max: '15', message: '考区限制输入15位' }] },
        {
          label: '语种',
          field: 'c',
          form: 'select',
          selectFrom: 'LANG_ENMU',
          rules: []
        },
        {
          label: '是否为VIP',
          field: 'c',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        { label: 'VIP负责人', field: 'c', form: 'input', rules: [{ max: '15', message: 'VIP负责人限制输入15位' }] },
        {
          label: '学位分数',
          field: 'c',
          form: 'radio',
          radioFrom: 'REACH_ENMU',
          rules: []
        },
        {
          label: '毕业论文',
          field: 'c',
          form: 'select',
          selectFrom: 'THESIS_FROM_ENMU',
          rules: []
        },
        {
          label: '是否报考学位',
          field: 'ca',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '是否申请学位',
          field: 'cb',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位成绩',
          field: 'cc',
          form: 'radio',
          radioFrom: 'REACH_ENMU',
          rules: []
        },
        {
          label: '学位成绩通过时间',
          field: 'cd',
          form: 'date',
          rules: []
        },
        {
          label: '学位证书是否已到',
          field: 'ce',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '是否已领走',
          field: 'cf',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '领走时间',
          field: 'cg',
          form: 'date',
          rules: []
        },
        {
          label: '领走方式',
          field: 'ch',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
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

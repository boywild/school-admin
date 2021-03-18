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
        // {
        //   label: '批次',
        //   field: 'xxxx',
        //   form: 'input',
        //   rules: [{ max: '10', message: '批次限制输入10位' }]
        // },
        // {
        //   label: '院校',
        //   field: 'xxxx',
        //   form: 'input',
        //   rules: [{ max: '20', message: '院校限制输入20位' }]
        // },
        // { label: '专业', field: 'xxxx', form: 'input', rules: [{ max: '10', message: '专业制输入10位' }] },
        // { label: '学制', field: 'isJoin', form: 'input', rules: [{ max: '10', message: '学制限制输入10位' }] },
        // { label: '姓名', field: 'xxxx', form: 'input', rules: [{ max: '10', message: '姓名限制输入20位' }] },
        // {
        //   label: '性别',
        //   field: 'xxxx',
        //   form: 'radio',
        //   radioFrom: 'SEX_ENMU',
        //   rules: []
        // },
        // {
        //   label: '民族',
        //   field: 'xxxx',
        //   form: 'select',
        //   selectFrom: 'MZ_ENMU',
        //   rules: []
        // },
        // {
        //   label: '户口性质',
        //   field: 'xxxx',
        //   form: 'select',
        //   selectFrom: 'HK_ENMU',
        //   rules: []
        // },
        // {
        //   label: '证件号码',
        //   field: 'xxxx',
        //   form: 'input',
        //   rules: [{ max: '20', message: '证件号码限制输入20位' }]
        // },
        // { label: '电话', field: 'enScore', form: 'input', rules: [{ max: '11', message: '电话限制输入11位' }] },
        // { label: 'Email', field: 'enScore222', form: 'input', rules: [{ max: '11', message: 'Email限制输入15位' }] },
        // { label: '学号', field: 'coScore', form: 'input', rules: [{ max: '20', message: '学号限制输入20位' }] },
        {
          label: '学位性质',
          field: 'studentDegreeType',
          form: 'select',
          selectFrom: 'DEGREE_ENMU',
          rules: []
        },
        {
          label: '学位准考证号',
          field: 'degreeExamNo',
          form: 'input',
          rules: [{ max: '20', message: '学位准考证号限制输入20位' }]
        },
        { label: '专业代码', field: 'majorCode', form: 'input', rules: [{ max: '20', message: '专业代码限制输入20位' }] },

        { label: '考区', field: 'examLocation', form: 'input', rules: [{ max: '15', message: '考区限制输入15位' }] },
        {
          label: '语种',
          field: 'language',
          form: 'select',
          selectFrom: 'LANG_ENMU',
          rules: []
        },
        {
          label: '是否为VIP',
          field: 'vipFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        { label: 'VIP负责人', field: 'vipDutyTeacher', form: 'input', rules: [{ max: '15', message: 'VIP负责人限制输入15位' }] },
        {
          label: '学位分数',
          field: 'passStatus',
          form: 'radio',
          radioFrom: 'REACH_ENMU',
          rules: []
        },
        {
          label: '毕业论文',
          field: 'paper',
          form: 'select',
          selectFrom: 'THESIS_FROM_ENMU',
          rules: []
        },
        {
          label: '是否报考学位',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '是否申请学位',
          field: 'applyDiplomaFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位成绩',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'REACH_ENMU',
          rules: []
        },
        {
          label: '学位成绩通过时间',
          field: 'xxxx',
          form: 'date',
          rules: []
        },
        {
          label: '学位证书是否已到',
          field: 'reachDiplomaFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '是否已领走',
          field: 'takeDiplomaFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '领走时间',
          field: 'takeDiplomaDate',
          form: 'date',
          rules: []
        },
        {
          label: '领走方式',
          field: 'takeWay',
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

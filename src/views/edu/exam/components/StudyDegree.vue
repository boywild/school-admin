<template>
  <a-modal
    title="学位信息"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    :okText="`保存${(panes[activeKey - 1] && panes[activeKey - 1].title) || '学期'}学位信息`"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="edu-exam">
      <a-tabs v-model="activeKey" type="card" @change="handleChange">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"> </a-tab-pane>
      </a-tabs>
      <a-spin :spinning="loadingData">
        <form-generate ref="form" :fields="tab5"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import { getDegree, studentDegree } from '@/api/student'
// import moment from 'moment'
export default {
  name: 'StudyDegree',
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
    const panes = [
      { title: '第1学期', content: '', key: '1' },
      { title: '第2学期', content: '', key: '2' },
      { title: '第3学期', content: '', key: '3' },
      { title: '第4学期', content: '', key: '4' },
      { title: '第5学期', content: '', key: '5' }
    ]
    return {
      loading: false,
      loadingData: false,
      activeKey: panes[0].key,
      panes,
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
          selectFrom: 'StudentDegreeTypeEnum',
          rules: []
        },
        {
          label: '学位准考证号',
          field: 'degreeExamNo',
          form: 'input',
          rules: [{ max: '20', message: '学位准考证号限制输入20位' }]
        },
        {
          label: '专业代码',
          field: 'majorCode',
          form: 'input',
          rules: [{ max: '20', message: '专业代码限制输入20位' }]
        },

        { label: '考区', field: 'examLocation', form: 'input', rules: [{ max: '15', message: '考区限制输入15位' }] },
        {
          label: '语种',
          field: 'language',
          form: 'select',
          selectFrom: 'LanuageEnum',
          rules: []
        },
        {
          label: '是否为VIP',
          field: 'vipFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: 'VIP负责人',
          field: 'vipDutyTeacher',
          form: 'input',
          rules: [{ max: '15', message: 'VIP负责人限制输入15位' }]
        },
        {
          label: '学位分数',
          field: 'passStatus',
          form: 'radio',
          radioFrom: 'StudentPassEnum',
          rules: []
        },
        {
          label: '毕业论文',
          field: 'paper',
          form: 'select',
          selectFrom: 'StudentPaperEnum',
          rules: []
        },
        {
          label: '是否报考学位',
          field: 'applyDegreeFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '是否申请学位',
          field: 'applyDiplomaFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '学位成绩',
          field: 'degreeScore',
          form: 'radio',
          radioFrom: 'StudentPaperEnum',
          rules: []
        },
        {
          label: '学位成绩通过时间',
          field: 'degreeInformTime',
          form: 'date',
          rules: []
        },
        {
          label: '学位证书是否已到',
          field: 'reachDiplomaFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '是否已领走',
          field: 'takeDiplomaFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
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
          radioFrom: 'YesOrNoEnum',
          rules: []
        }
      ]
    }
  },
  mounted() {
    this.$watch('value', val => {
      if (val) {
        this.getStudyDegree()
      }
    })
  },
  computed: {},
  methods: {
    async getStudyDegree() {
      this.loadingData = true
      const result = await getDegree(this.studentId, this.activeKey)
      const form = this.$refs.form
      form.setData({ ...result })
      this.loadingData = false
    },
    async saveStudyDegree() {
      this.validate(async values => {
        this.loading = true
        await studentDegree({ ...values, studentId: this.studentId, term: this.activeKey })
        this.loading = false
        const { panes, activeKey } = this
        this.$message.info(`${(panes[activeKey - 1] && panes[activeKey - 1].title) || '学期'}信息保存成功`)
        // this.handleCancel()
        // this.$emit('update')
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
    async handleChange() {
      await this.resetForm()
      this.getStudyDegree()
    },
    handleOk() {
      this.saveStudyDegree()
    },
    handleCancel() {
      this.$emit('change', false)
      this.resetForm()
      this.$emit('update')
    }
  }
}
</script>

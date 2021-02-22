<template>
  <a-modal
    title="学位信息"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存学位信息"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="edu-adult">
      <a-tabs v-model="activeKey" type="card">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"> </a-tab-pane>
      </a-tabs>
      <form-generate ref="form" :fields="tab5"></form-generate>
    </div>
  </a-modal>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
export default {
  name: 'StudyDegree',
  props: {
    value: { type: Boolean, required: true }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { FormGenerate },
  data() {
    const panes = [
      { title: '第1学期', content: '', key: '1' },
      { title: '第2学期', content: '', key: '2' }
    ]
    return {
      loading: false,
      activeKey: panes[0].key,
      panes,
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      studyDegree: {},
      tab5: [
        {
          label: '批次',
          field: 'xxxx',
          form: 'input',
          rules: [{ max: '10', message: '批次限制输入10位' }]
        },
        {
          label: '院校',
          field: 'xxxx',
          form: 'input',
          rules: [{ max: '20', message: '院校限制输入20位' }]
        },
        { label: '专业', field: 'xxxx', form: 'input', rules: [{ max: '10', message: '专业制输入10位' }] },
        { label: '学制', field: 'xxxx', form: 'input', rules: [{ max: '10', message: '学制限制输入10位' }] },
        { label: '姓名', field: 'xxxx', form: 'input', rules: [{ max: '10', message: '姓名限制输入20位' }] },
        {
          label: '性别',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'SEX_ENMU',
          rules: []
        },
        {
          label: '民族',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'MZ_ENMU',
          rules: []
        },
        {
          label: '户口性质',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'HK_ENMU',
          rules: []
        },
        {
          label: '证件号码',
          field: 'xxxx',
          form: 'input',
          rules: [{ max: '20', message: '证件号码限制输入20位' }]
        },
        { label: '电话', field: 'xxxx', form: 'input', rules: [{ max: '11', message: '电话限制输入11位' }] },
        { label: '学号', field: 'xxxx', form: 'input', rules: [{ max: '20', message: '学号限制输入20位' }] },
        {
          label: '学位性质',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'DEGREE_ENMU',
          rules: []
        },
        {
          label: '学位准考证号',
          field: 'xxxx',
          form: 'input',
          rules: [{ max: '20', message: '学位准考证号限制输入20位' }]
        },
        { label: '专业代码', field: 'xxxx', form: 'input', rules: [{ max: '20', message: '专业代码限制输入20位' }] },

        { label: '考区', field: 'xxxx', form: 'input', rules: [{ max: '15', message: '考区限制输入15位' }] },
        {
          label: '语种',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'LANG_ENMU',
          rules: []
        },
        {
          label: '是否为VIP',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        { label: 'VIP负责人', field: 'xxxx', form: 'input', rules: [{ max: '15', message: 'VIP负责人限制输入15位' }] },
        {
          label: '学位分数',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'REACH_ENMU',
          rules: []
        },
        {
          label: '毕业论文',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'THESIS_FROM_ENMU',
          rules: []
        }
      ]
    }
  },
  computed: {},
  methods: {
    async saveStudyDegree() {},
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
    handleOk() {},
    handleCancel() {
      this.$emit('change', false)
      this.resetForm()
    }
  }
}
</script>

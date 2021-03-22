<template>
  <a-modal
    title="教务考期"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存教务考期"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-tabs v-model="activeKey" type="card" @change="getBaseInfo">
      <a-tab-pane v-for="pane in dict.StudentSubjectEnum" :key="pane.code" :tab="pane.desc"> </a-tab-pane>
    </a-tabs>
    <div class="edu-exam">
      <a-spin :spinning="loadingData">
        <form-generate ref="examTermForm" :fields="tab4"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
import { mapState } from 'vuex'
// import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'
import { getExam, studentExam } from '@/api/student'
// import { YESORNO_ENMU, INFO_GATHER_ENMU, REACH_ENMU, THESIS_FROM_ENMU, SUBJECT_ENMU } from '@/config/dict'
export default {
  name: 'ExamTerm',
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
    return {
      loading: false,
      loadingData: false,
      activeKey: '0',
      // YESORNO_ENMU,
      // INFO_GATHER_ENMU,
      // REACH_ENMU,
      // THESIS_FROM_ENMU,
      // SUBJECT_ENMU,
      tab4: [
        {
          label: '科目编码',
          field: 'subjectCode',
          form: 'input',
          rules: []
        },
        {
          label: '考试科目',
          field: 'subjectName',
          form: 'input',
          rules: []
        },

        {
          label: '考试时间',
          field: 'examTime',
          form: 'date',
          rules: []
        },
        {
          label: '报考',
          field: 'applyFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '复习资料已发放',
          field: 'assignReviewDataFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '辅导课已通知',
          field: 'tutorialInformFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '成绩查询',
          field: 'grade',
          form: 'select',
          selectFrom: 'ScoreResultEnum',
          rules: []
        }
      ]
    }
  },
  mounted() {
    this.$watch('value', val => {
      if (val && this.studentId) {
        this.getBaseInfo()
      }
    })
  },
  computed: {
    ...mapState({
      dict: state => state.dict.dict
    })
  },
  methods: {
    async getBaseInfo() {
      this.loadingData = true
      const result = await getExam(this.studentId, this.activeKey)
      const form = this.$refs.examTermForm
      form.setData({ ...result })
      this.loadingData = false
      console.log(result)
    },
    saveBaseInfo() {
      this.validate(async values => {
        this.loading = true
        await studentExam({ ...values, studentId: this.studentId, subjectType: this.activeKey })
        this.loading = false
        this.handleCancel()
        this.$emit('update')
      })
    },
    validate(callback) {
      const form = this.$refs.examTermForm
      form.validate(data => {
        callback && callback(data)
      })
    },
    resetForm() {
      const form = this.$refs.examTermForm
      form.reset()
    },
    handleOk() {
      this.saveBaseInfo()
    },
    handleCancel() {
      this.$emit('change', false)
      this.resetForm()
    }
  }
}
</script>
<style lang="less">
.like-table {
  .ant-row {
    padding: 7px 0;
  }
}
</style>

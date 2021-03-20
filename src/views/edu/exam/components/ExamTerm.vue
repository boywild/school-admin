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
    <a-tabs v-model="activeKey" type="card">
      <a-tab-pane v-for="pane in SUBJECT_ENMU" :key="pane.code" :tab="pane.desc"> </a-tab-pane>
    </a-tabs>
    <div class="edu-exam">
      <a-spin :spinning="loadingData">
        <form-generate ref="form" :fields="tab4"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'
import { studentGetEduTask, studentExam } from '@/api/student'
import { YESORNO_ENMU, INFO_GATHER_ENMU, REACH_ENMU, THESIS_FROM_ENMU, SUBJECT_ENMU } from '@/config/dict'
export default {
  name: 'StudyTerm',
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
      activeKey: SUBJECT_ENMU[0].key,
      YESORNO_ENMU,
      INFO_GATHER_ENMU,
      REACH_ENMU,
      THESIS_FROM_ENMU,
      SUBJECT_ENMU,
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
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '复习资料已发放',
          field: 'assignReviewDataFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '辅导课已通知',
          field: 'tutorialInformFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '成绩查询',
          field: 'grade',
          form: 'select',
          selectFrom: 'SCOREQUERY_ENMU',
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
      IdTypeEnum: state => state.dict.IdTypeEnum,
      GenderTypeEnum: state => state.dict.GenderTypeEnum,
      NationEnum: state => state.dict.NationEnum,
      HouseholdEnum: state => state.dict.HouseholdEnum,
      PoliticsEnum: state => state.dict.PoliticsEnum
    })
  },
  methods: {
    async getBaseInfo() {
      this.loadingData = true
      const result = await studentGetEduTask(this.studentId)
      const form = this.$refs.form
      form.setData({ ...result, birthDay: moment(result.birthDay), graduateTime: moment(result.birthDay) })
      this.loadingData = false
      console.log(result)
    },
    saveBaseInfo() {
      this.validate(async values => {
        this.loading = true
        await studentExam({ applyType: 'S001', ...values, studentId: this.studentId })
        this.loading = false
        this.handleCancel()
        this.$emit('update')
      })
    },
    validate(callback) {
      const form = this.$refs.form
      form.validate(data => {
        callback && callback(data)
      })
    },
    resetForm() {
      const form = this.$refs.form
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

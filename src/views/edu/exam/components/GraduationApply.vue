<template>
  <a-modal
    title="毕业申请"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存毕业申请"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="edu-exam">
      <a-spin :spinning="loadingData">
        <form-generate ref="graduationApplyForm" :fields="tab4"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
// import { mapState } from 'vuex'
// import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'
import { studentGraduate, studentGetGraduate } from '@/api/student'
// import { YESORNO_ENMU, INFO_GATHER_ENMU, REACH_ENMU, THESIS_FROM_ENMU } from '@/config/dict'
export default {
  name: 'GraduationApply',
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
    // const panes = [
    //   { title: '第1学期', content: '', key: '1' },
    //   { title: '第2学期', content: '', key: '2' }
    // ]
    return {
      loading: false,
      loadingData: false,
      // activeKey: panes[0].key,
      // panes,
      // YESORNO_ENMU,
      // INFO_GATHER_ENMU,
      // REACH_ENMU,
      // THESIS_FROM_ENMU,
      studyTimeRange: {
        isneedXW: [],
        studyStatus: [],
        isAchieve: [],
        isJoin: [],
        isDeal: [],
        time: [],
        address: [],
        account: [],
        password: [],
        enScore: [],
        coScore: []
      },
      tab4: [
        {
          label: '申请毕业',
          field: 'graduateApplyFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业证书已到',
          field: 'graduateCertReachFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },

        {
          label: '已领走',
          field: 'graduateCertTakeFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '领走时间',
          field: 'graduateCertTakeTime',
          form: 'date',
          rules: []
        },
        {
          label: '领走方式',
          field: 'graduateCertTakeWay',
          form: 'input',
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
  computed: {},
  methods: {
    async getBaseInfo() {
      this.loadingData = true
      const result = await studentGetGraduate(this.studentId)
      const form = this.$refs.graduationApplyForm
      form.setData({ ...result })
      this.loadingData = false
      console.log(result)
    },
    saveBaseInfo() {
      this.validate(async values => {
        this.loading = true
        await studentGraduate({ ...values, studentId: this.studentId })
        this.loading = false
        this.handleCancel()
        this.$emit('update')
      })
    },
    validate(callback) {
      const form = this.$refs.graduationApplyForm
      form.validate(data => {
        callback && callback(data)
      })
    },
    resetForm() {
      const form = this.$refs.graduationApplyForm
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

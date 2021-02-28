<template>
  <div class="edu-exam">
    <a-tabs v-model="activeKey" type="card">
      <a-tab-pane v-for="pane in SUBJECT_ENMU" :key="pane.code" :tab="pane.desc"> </a-tab-pane>
    </a-tabs>
    <form-generate ref="form" :fields="tab4"></form-generate>
  </div>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import { YESORNO_ENMU, INFO_GATHER_ENMU, REACH_ENMU, THESIS_FROM_ENMU, SUBJECT_ENMU } from '@/config/dict'
export default {
  name: 'StudyTerm',
  components: { FormGenerate },
  data() {
    return {
      activeKey: SUBJECT_ENMU[0].key,
      YESORNO_ENMU,
      INFO_GATHER_ENMU,
      REACH_ENMU,
      THESIS_FROM_ENMU,
      SUBJECT_ENMU,
      tab4: [
        {
          label: '科目编码',
          field: 'studyStatus',
          form: 'input',
          rules: []
        },
        {
          label: '考试科目',
          field: 'isAchieve',
          form: 'input',
          rules: []
        },

        {
          label: '考试时间',
          field: 'isAchievesss',
          form: 'date',
          rules: []
        },
        {
          label: '报考',
          field: 'isAchievesss23',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '复习资料已发放',
          field: 'isAchievesss5',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '辅导课已通知',
          field: 'isAchievesss4',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '成绩查询',
          field: 'isAchievesss3',
          form: 'select',
          selectFrom: 'SCOREQUERY_ENMU',
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
<style lang="less">
.like-table {
  .ant-row {
    padding: 7px 0;
  }
}
</style>

<template>
  <div class="edu-adult">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="第一学期"> </a-tab-pane>
      <a-tab-pane key="2" tab="第二学期"> </a-tab-pane>
      <a-tab-pane key="３" tab="第三学期"> </a-tab-pane>
      <a-tab-pane key="4" tab="第四学期"> </a-tab-pane>
      <a-tab-pane key="5" tab="第五学期"> </a-tab-pane>
    </a-tabs>
    <form-generate ref="form" :fields="tab4"></form-generate>
  </div>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import { YESORNO_ENMU, INFO_GATHER_ENMU, REACH_ENMU, THESIS_FROM_ENMU } from '@/config/dict'
export default {
  name: 'StudyTerm',
  components: { FormGenerate },
  data() {
    return {
      YESORNO_ENMU,
      INFO_GATHER_ENMU,
      REACH_ENMU,
      THESIS_FROM_ENMU,
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
          label: '报考学位',
          field: 'studyStatus',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '填写毕业生登记表',
          field: 'isAchieve',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '申请学位',
          field: 'isJoin',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业信息采集',
          field: 'isDeal',
          form: 'select',
          selectFrom: 'INFO_GATHER_ENMU',
          rules: []
        },
        {
          label: '学位成绩',
          field: 'time',
          form: 'select',
          selectFrom: 'REACH_ENMU',
          rules: []
        },
        {
          label: '毕业纸质照片到我司',
          field: 'address',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位成绩通过时间',
          field: 'account',
          form: 'date',
          rules: []
        },
        {
          label: '毕业纸质照片提交院校',
          field: 'password',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '期末考试成绩',
          field: 'enScore',
          form: 'input',
          rules: [{ max: 6, message: '登录密码限制输入6位' }]
        },
        {
          label: '延期毕业',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '填写入学生登记表',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '论文性质',
          field: 'coScore',
          form: 'select',
          selectFrom: 'THESIS_FROM_ENMU',
          rules: []
        },
        {
          label: '学籍已注册',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '特殊事项',
          field: 'coScore',
          form: 'input',
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

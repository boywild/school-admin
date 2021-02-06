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
          label: '要学位',
          field: 'studyStatus',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '本学期学习情况',
          field: 'isAchieve',
          form: 'input',
          rules: []
        },
        {
          label: '学分达到学位要求',
          field: 'isJoin',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '报考统考',
          field: 'isDeal',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '统考由我司处理',
          field: 'time',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '统考考试时间',
          field: 'address',
          form: 'date',
          rules: []
        },
        {
          label: '统考地点',
          field: 'account',
          form: 'input',
          rules: []
        },
        {
          label: '统考账号',
          field: 'password',
          form: 'input',
          rules: []
        },
        {
          label: '统考密码',
          field: 'enScore',
          form: 'input',
          rules: [{ max: 6, message: '登录密码限制输入6位' }]
        },
        {
          label: '统考英语分数',
          field: 'coScore',
          form: 'input',
          rules: []
        },
        {
          label: '统考计算机分数',
          field: 'coScore',
          form: 'input',
          rules: []
        },
        {
          label: '学位论文',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位论文由我司处理',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业生登记表已填写',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },

        {
          label: '毕业信息已核实',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '图像采集已完成',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '延期毕业',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '已到',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '已领走',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '领走时间',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '领走方式',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '申请学位证书',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '有学位证书',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位证书已到',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '已领走',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '领走时间',
          field: 'coScore',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '领走方式',
          field: 'coScore',
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
<style lang="less">
.like-table {
  .ant-row {
    padding: 7px 0;
  }
}
</style>

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
          field: 'wantDegreeFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '本学期学习情况',
          field: 'situation',
          form: 'input',
          rules: []
        },
        {
          label: '学分达到学位要求',
          field: 'degreeRequire',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '报考统考',
          field: 'applyUnifyFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '统考由我司处理',
          field: 'unifyDealFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '统考考试时间',
          field: 'unifyDate',
          form: 'date',
          rules: []
        },
        {
          label: '统考地点',
          field: 'unifyLocation',
          form: 'input',
          rules: []
        },
        {
          label: '统考账号',
          field: 'unifyAccount',
          form: 'input',
          rules: []
        },
        {
          label: '统考密码',
          field: 'unifyPassword',
          form: 'input',
          rules: [{ max: 6, message: '登录密码限制输入6位' }]
        },
        {
          label: '统考英语分数',
          field: 'englishScore',
          form: 'input',
          rules: []
        },
        {
          label: '统考计算机分数',
          field: 'computerScore',
          form: 'input',
          rules: []
        },
        {
          label: '学位论文',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位论文由我司处理',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业生登记表已填写',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },

        {
          label: '毕业信息已核实',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '图像采集已完成',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '延期毕业',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '已有毕业证书',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },

        {
          label: '毕业证书已到',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业证书已领走',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业证书领走时间',
          field: 'xxxx',
          form: 'date',
          rules: []
        },
        {
          label: '毕业证书领走方式',
          field: 'xxxx',
          form: 'select',
          rules: []
        },
        {
          label: '申请学位证书',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '有学位证书',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位证书已到',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位证已领走',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位证领走时间',
          field: 'xxxx',
          form: 'date',
          rules: []
        },
        {
          label: '学位证领走方式',
          field: 'xxxx',
          form: 'select',
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

<template>
  <a-modal
    title="学期信息"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    :okText="`保存${(panes[activeKey - 1] && panes[activeKey - 1].title) || '学期'}信息`"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="edu-adult">
      <a-tabs v-model="activeKey" type="card" @change="getStudyTerm">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title"> </a-tab-pane>
      </a-tabs>
      <a-spin :spinning="loadingData">
        <form-generate ref="onlineStudyTermForm" :fields="tab4"></form-generate>
      </a-spin>
    </div>
  </a-modal>
</template>

<script>
// import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'

// import { YESORNO_ENMU, INFO_GATHER_ENMU, REACH_ENMU, THESIS_FROM_ENMU } from '@/config/dict'
import { studentTerm, getTerm } from '@/api/student'

export default {
  name: 'OnlineStudyTerm',
  props: {
    value: { type: Boolean, required: true },
    studentId: { type: String, default: '' }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { FormGenerate },
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
      contentData: {},
      tab4: [
        {
          label: '要学位',
          field: 'wantDegreeFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
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
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '报考统考',
          field: 'applyUnifyFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '统考由我司处理',
          field: 'unifyDealFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
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
          field: 'degreePaperFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '学位论文由我司处理',
          field: 'degreePaperMyEntDealFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业生登记表已填写',
          field: 'graduateRegisterSheet',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },

        {
          label: '毕业信息已核实',
          field: 'graduateInfoCheckFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '图像采集已完成',
          field: 'imageCollectFinishFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '延期毕业',
          field: 'delayGraduateFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '已有毕业证书',
          field: 'diplomaFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },

        {
          label: '毕业证书已到',
          field: 'diplomaReachFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业证书已领走',
          field: 'diplomaTakeFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '毕业证书领走时间',
          field: 'diplomaTakeTime',
          form: 'date',
          rules: []
        },
        {
          label: '毕业证书领走方式',
          field: 'diplomaTakeWay',
          form: 'select',
          rules: []
        },
        {
          label: '申请学位证书',
          field: 'applyDegreeCertFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '有学位证书',
          field: 'haveDegreeCertFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '学位证书已到',
          field: 'degreeCertReachFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '学位证已领走',
          field: 'degreeCertTakeFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },
        {
          label: '学位证领走时间',
          field: 'degreeTakeTime',
          form: 'date',
          rules: []
        },
        {
          label: '学位证领走方式',
          field: 'degreeTakeWay',
          form: 'input',
          rules: []
        }
      ]
    }
  },
  mounted() {
    this.$watch('value', val => {
      if (val) {
        this.getStudyTerm()
      }
    })
  },
  computed: {},
  methods: {
    async getStudyTerm() {
      this.loadingData = true
      this.contentData = {}
      const result = await getTerm(this.studentId, this.activeKey)
      const form = this.$refs['onlineStudyTermForm']
      // console.log(form)
      // const data = result[this.activeKey - 1] || result[0]
      const current = result.find(ele => ele.term === Number(this.activeKey)) || {}
      // this.contentData = current
      form.setData({ ...current })
      this.loadingData = false
    },
    async saveStudyTerm() {
      this.validate(async values => {
        this.loading = true
        console.log({ ...values, studentId: this.studentId, term: this.activeKey })
        await studentTerm({ ...values, studentId: this.studentId, term: this.activeKey })
        this.loading = false
        const { panes, activeKey } = this
        this.$message.info(`${(panes[activeKey - 1] && panes[activeKey - 1].title) || '学期'}信息保存成功`)
        // this.handleCancel()
        // this.$emit('update')
      })
    },
    validate(callback) {
      const form = this.$refs['onlineStudyTermForm']
      form.validate(callback)
    },
    resetForm() {
      const form = this.$refs['onlineStudyTermForm']
      form.resetForm()
    },
    // onEdit(targetKey, action) {
    //   console.log(targetKey, action)
    //   this[action](targetKey)
    // },
    // add() {
    //   const panes = this.panes
    //   const activeKey = `${this.panes.length + 1}`
    //   console.log(activeKey)
    //   panes.push({
    //     title: `第${activeKey}学期`,
    //     content: '',
    //     key: activeKey
    //   })
    //   this.panes = panes
    // },
    // remove(targetKey) {
    //   let activeKey = this.activeKey
    //   let lastIndex
    //   if (this.panes.length === 1) {
    //     this.$message.warning('至少保留１一个学期')
    //     return
    //   }
    //   this.panes.forEach((pane, i) => {
    //     console.log(pane.key, targetKey)
    //     if (pane.key === targetKey) {
    //       lastIndex = i - 1
    //     }
    //   })
    //   const panes = this.panes.filter(pane => pane.key !== targetKey)
    //   if (panes.length && activeKey === targetKey) {
    //     if (lastIndex >= 0) {
    //       activeKey = panes[lastIndex].key
    //     } else {
    //       activeKey = panes[0].key
    //     }
    //   }
    //   this.panes = panes
    //   this.activeKey = activeKey
    // },
    handleOk() {
      this.saveStudyTerm()
    },
    handleCancel() {
      this.$emit('change', false)
      this.activeKey = '1'
      this.$emit('update')
      // this.resetForm()
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

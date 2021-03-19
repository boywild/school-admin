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
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title">
          <a-spin :spinning="loadingData">
            <!-- <component ref="form" :is="`TermFormTab${index + 1}`" :content="contentData"></component> -->
            <term-form-tab1 v-if="activeKey === '1'" :content="contentData"></term-form-tab1>
            <term-form-tab2 v-else-if="activeKey === '2'" :content="contentData"></term-form-tab2>
            <term-form-tab3 v-else-if="activeKey === '3'" :content="contentData"></term-form-tab3>
            <term-form-tab4 v-else-if="activeKey === '4'" :content="contentData"></term-form-tab4>
            <term-form-tab5 v-else :content="contentData"></term-form-tab5>
            <!-- <form-generate ref="form" :fields="tab4"></form-generate> -->
          </a-spin>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-modal>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import TermFormTab1 from './TermFormTab1'
import TermFormTab2 from './TermFormTab2'
import TermFormTab3 from './TermFormTab3'
import TermFormTab4 from './TermFormTab4'
import TermFormTab5 from './TermFormTab5'
// import { YESORNO_ENMU, INFO_GATHER_ENMU, REACH_ENMU, THESIS_FROM_ENMU } from '@/config/dict'
import { studentTerm, getTerm } from '@/api/student'

export default {
  name: 'StudyTerm',
  props: {
    value: { type: Boolean, required: true },
    studentId: { type: String, default: '' }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { FormGenerate, TermFormTab1, TermFormTab2, TermFormTab3, TermFormTab4, TermFormTab5 },
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
      contentData: {}
      // YESORNO_ENMU,
      // INFO_GATHER_ENMU,
      // REACH_ENMU,
      // THESIS_FROM_ENMU,
      // tab4: [
      //   {
      //     label: '报考学位',
      //     field: 'wantDegreeFlag',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '填写毕业生登记表',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },

      //   {
      //     label: '有毕业证书',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '毕业证书已到',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '毕业证书已领走',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '毕业证书领走时间',
      //     field: 'xxxx',
      //     form: 'date',
      //     rules: []
      //   },
      //   {
      //     label: '毕业证书领走方式',
      //     field: 'xxxx',
      //     form: 'input',
      //     rules: []
      //   },
      //   {
      //     label: '申请学位',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '毕业信息采集',
      //     field: 'xxxx',
      //     form: 'select',
      //     selectFrom: 'INFO_GATHER_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '学位成绩',
      //     field: 'xxxx',
      //     form: 'select',
      //     selectFrom: 'REACH_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '毕业纸质照片到我司',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '学位成绩通过时间',
      //     field: 'xxxx',
      //     form: 'date',
      //     rules: []
      //   },
      //   {
      //     label: '毕业纸质照片提交院校',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '期末考试成绩',
      //     field: 'xxxx',
      //     form: 'input',
      //     rules: [{ max: 6, message: '登录密码限制输入6位' }]
      //   },
      //   {
      //     label: '延期毕业',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '填写入学生登记表',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '论文性质',
      //     field: 'xxxx',
      //     form: 'select',
      //     selectFrom: 'THESIS_FROM_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '学籍已注册',
      //     field: 'xxxx',
      //     form: 'radio',
      //     radioFrom: 'YESORNO_ENMU',
      //     rules: []
      //   },
      //   {
      //     label: '特殊事项',
      //     field: 'xxxx',
      //     form: 'input',
      //     rules: []
      //   }
      // ]
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
      const result = await getTerm(this.studentId)
      if (result[this.activeKey - 1]) {
        // const form = this.$refs.form
        // form.setData(result[this.activeKey])
        console.log(result[this.activeKey - 1])
        this.contentData = result[this.activeKey - 1]
      } else {
        this.contentData = result[0]
      }
      console.log(result)
      this.loadingData = false
    },
    async saveStudyTerm() {
      this.validate(async values => {
        this.loading = true
        await studentTerm({ ...values, studentId: this.studentId })
        this.loading = false
        this.handleCancel()
        this.$emit('update')
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
      const form = this.$refs.form[0]
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

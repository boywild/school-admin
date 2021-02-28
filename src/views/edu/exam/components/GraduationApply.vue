<template>
  <div class="edu-exam">
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
    const panes = [
      { title: '第1学期', content: '', key: '1' },
      { title: '第2学期', content: '', key: '2' }
    ]
    return {
      activeKey: panes[0].key,
      panes,
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
          label: '申请毕业',
          field: 'graduateApplyFlag',
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
          label: '已领走',
          field: 'takeDiplomaFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '领走时间',
          field: 'takeDiplomaDate',
          form: 'date',
          rules: []
        },
        {
          label: '领走方式',
          field: 'takeWay',
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
    },
    onEdit(targetKey, action) {
      console.log(targetKey, action)
      this[action](targetKey)
    },
    add() {
      const panes = this.panes
      const activeKey = `${this.panes.length + 1}`
      console.log(activeKey)
      panes.push({
        title: `第${activeKey}学期`,
        content: '',
        key: activeKey
      })
      this.panes = panes
    },
    remove(targetKey) {
      let activeKey = this.activeKey
      let lastIndex
      if (this.panes.length === 1) {
        this.$message.warning('至少保留１一个学期')
        return
      }
      this.panes.forEach((pane, i) => {
        console.log(pane.key, targetKey)
        if (pane.key === targetKey) {
          lastIndex = i - 1
        }
      })
      const panes = this.panes.filter(pane => pane.key !== targetKey)
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key
        } else {
          activeKey = panes[0].key
        }
      }
      this.panes = panes
      this.activeKey = activeKey
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

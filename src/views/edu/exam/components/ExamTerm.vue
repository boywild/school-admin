<template>
  <div class="edu-exam">
    <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"> </a-tab-pane>
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
        },
        {
          label: '语文分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '数学分数' }]
        },
        {
          label: '数学分数（高中起点）',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '数学分数' }]
        },
        {
          label: '英语分数（高中起点）',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '英语分数' }]
        },
        {
          label: '政治分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: 'studyWay' }]
        },
        {
          label: '大学语文分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '大学语文分数' }]
        },
        {
          label: '高等数学一分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '高等数学一分数' }]
        },
        {
          label: '高等数学二分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '高等数学二分数' }]
        },
        {
          label: '物理化学分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '物理化学分数' }]
        },
        {
          label: '教育理论分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '教育理论分数' }]
        },
        {
          label: '医学综合分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '医学综合分数' }]
        },
        {
          label: '民法分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '民法分数' }]
        },
        {
          label: '历史地理分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '历史地理分数' }]
        },
        {
          label: '艺术概论分数',
          field: 'studyWay',
          form: 'input',
          rules: [{ max: 5, message: '艺术概论分数' }]
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

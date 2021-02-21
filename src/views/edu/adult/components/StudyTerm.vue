<template>
  <div class="edu-adult">
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
      tab4: [
        {
          label: '报考学位',
          field: 'wantDegreeFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '填写毕业生登记表',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },

        {
          label: '有毕业证书',
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
          form: 'input',
          rules: []
        },
        {
          label: '申请学位',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业信息采集',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'INFO_GATHER_ENMU',
          rules: []
        },
        {
          label: '学位成绩',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'REACH_ENMU',
          rules: []
        },
        {
          label: '毕业纸质照片到我司',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '学位成绩通过时间',
          field: 'xxxx',
          form: 'date',
          rules: []
        },
        {
          label: '毕业纸质照片提交院校',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '期末考试成绩',
          field: 'xxxx',
          form: 'input',
          rules: [{ max: 6, message: '登录密码限制输入6位' }]
        },
        {
          label: '延期毕业',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '填写入学生登记表',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '论文性质',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'THESIS_FROM_ENMU',
          rules: []
        },
        {
          label: '学籍已注册',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '特殊事项',
          field: 'xxxx',
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

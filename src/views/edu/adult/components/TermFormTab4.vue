<template>
  <div>
    <form-generate ref="form" :fields="tab4"></form-generate>
  </div>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import { YESORNO_ENMU, INFO_GATHER_ENMU, THESIS_FROM_ENMU } from '@/config/dict'

export default {
  name: 'StudyTerm',
  props: {
    studentId: { type: String, default: '' },
    content: { type: Object, default: () => {} }
  },

  components: { FormGenerate },
  data() {
    return {
      YESORNO_ENMU,
      INFO_GATHER_ENMU,
      THESIS_FROM_ENMU,
      tab4: [
        {
          label: '填写毕业生登记表',
          field: 'graduateRegisterSheet',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },

        {
          label: '毕业信息采集',
          field: 'graduateGather',
          form: 'select',
          selectFrom: 'GraduateGatherEnum',
          rules: []
        },

        {
          label: '毕业纸质照片到我司',
          field: 'graduatePictureReachEntFlag',
          form: 'radio',
          radioFrom: 'YesOrNoEnum',
          rules: []
        },

        {
          label: '毕业纸质照片提交院校',
          field: 'graduatePicturePostSchoolFlag',
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
          label: '论文性质',
          field: 'studentPaper',
          form: 'select',
          selectFrom: 'StudentPaperEnum',
          rules: []
        },
        {
          label: '特殊事项',
          field: 'specialItem',
          form: 'input',
          rules: []
        }
      ]
    }
  },
  mounted() {},
  computed: {},
  watch: {
    content(newVal, oldVal) {
      if (newVal) {
        const form = this.$refs.form
        console.log(newVal)
        form.setData({ ...newVal })
      }
    }
  },
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

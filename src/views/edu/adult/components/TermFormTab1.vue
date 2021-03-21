<template>
  <div>
    <form-generate ref="termFormTabForm1" :fields="tab4"></form-generate>
  </div>
</template>

<script>
// import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'
import { YESORNO_ENMU, REACH_ENMU } from '@/config/dict'

import termFormConfig from './termFormConfig'
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
      REACH_ENMU,
      tab4: termFormConfig
    }
  },
  mounted() {},
  watch: {
    content(newVal, oldVal) {
      if (newVal) {
        const form = this.$refs.termFormTabForm1
        form.setData({ ...newVal })
      }
    }
  },
  methods: {
    validate(callback) {
      const form = this.$refs.termFormTabForm1
      form.validate(data => {
        callback && callback(data)
      })
    },
    resetForm() {
      const form = this.$refs.termFormTabForm1
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

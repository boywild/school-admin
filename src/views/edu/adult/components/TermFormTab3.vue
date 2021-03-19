<template>
  <div>
    <form-generate ref="form" :fields="tab4"></form-generate>
  </div>
</template>

<script>
import moment from 'moment'
import FormGenerate from '@/components/FormGenerate'
import { YESORNO_ENMU, REACH_ENMU } from '@/config/dict'
import termFormConfig from './termFormConfig'
export default {
  name: 'TermFormTab3',
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
  computed: {},
  watch: {
    content(newVal, oldVal) {
      if (newVal) {
        const form = this.$refs.form
        console.log(newVal)
        form.setData({ ...newVal, degreeInformTime: moment(newVal.degreeInformTime) })
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

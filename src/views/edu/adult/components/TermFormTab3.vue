<template>
  <div>
    <form-generate ref="termFormTabForm3" :fields="tab4"></form-generate>
  </div>
</template>

<script>
// import moment from 'moment'
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
        const form = this.$refs.termFormTabForm3
        console.log(newVal)
        form.setData({ ...newVal })
      }
    }
  },
  methods: {
    validate(callback) {
      const form = this.$refs.termFormTabForm3
      form.validate(data => {
        callback && callback(data)
        console.log(data)
      })
    },
    resetForm() {
      const form = this.$refs.termFormTabForm3
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

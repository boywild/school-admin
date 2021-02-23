<template>
  <div>
    <form-generate ref="form" :fields="tab4"></form-generate>
    <div class="ant-modal-footer">
      <div>
        <button type="button" class="ant-btn"><span>取 消</span></button
        ><button type="button" class="ant-btn ant-btn-primary"><span>保存学期信息</span></button>
      </div>
    </div>
  </div>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
import { YESORNO_ENMU, REACH_ENMU } from '@/config/dict'
import termFormConfig from './termFormConfig'
export default {
  name: 'StudyTerm',
  props: {
    studentId: { type: String, default: '' }
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

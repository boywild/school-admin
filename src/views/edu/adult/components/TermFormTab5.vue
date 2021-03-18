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
import { YESORNO_ENMU } from '@/config/dict'

export default {
  name: 'StudyTerm',
  props: {
    studentId: { type: String, default: '' }
  },

  components: { FormGenerate },
  data() {
    return {
      YESORNO_ENMU,
      tab4: [
        {
          label: '有毕业证书',
          field: 'diplomaFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业证书已到',
          field: 'diplomaReachFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: []
        },
        {
          label: '毕业证书已领走',
          field: 'diplomaTakeFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
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
          form: 'input',
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

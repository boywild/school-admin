<template>
  <div class="edu-adult">
    <form-generate ref="form" :fields="tab3"></form-generate>
  </div>
</template>

<script>
import FormGenerate from '@/components/FormGenerate'
export default {
  name: 'JoinInfo',
  components: { FormGenerate },
  data() {
    return {
      tab3: [
        {
          label: '入学批次',
          field: 'name',
          form: 'date',
          rules: [{ required: true, message: '请选择入学批次' }]
        },
        {
          label: '渠道来源',
          field: 'phone',
          form: 'input',
          rules: [
            { required: true, message: '请输入渠道来源' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '报考工种',
          field: 'card',
          form: 'input',
          rules: [
            { required: true, message: '请输入报考工种' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '报考层次',
          field: 'cardNo',
          form: 'select',
          selectFrom: 'STUDY_LEVEL_ENMU',
          rules: [{ required: true, message: '请选择报考层次' }]
        },
        {
          label: '报考时间',
          field: 'studyWay',
          form: 'date',
          rules: [{ required: true, message: '请选择报考时间' }]
        },
        {
          label: '授课方式',
          field: 'birth',
          form: 'input',
          rules: [{ required: true, message: '请输入授课方式' }]
        },
        {
          label: '首次培训/复培',
          field: 'location',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择首次培训/复培' }]
        },

        {
          label: '招生老师',
          field: 'xz',
          form: 'input',
          rules: [{ required: true, message: '请输入招生老师' }]
        },
        {
          label: '班主任',
          field: 'ybmh',
          form: 'input',
          rules: [{ required: true, message: '请输入班主任' }]
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
    }
  }
}
</script>

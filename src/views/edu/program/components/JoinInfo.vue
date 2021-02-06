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
          label: '学生来源',
          field: 'name',
          form: 'select',
          selectFrom: 'STUDENT_FROM_ENMU',
          rules: [{ required: true, message: '请选择学生来源' }]
        },
        {
          label: '负责人',
          field: 'phone',
          form: 'input',
          rules: [
            { required: true, message: '请输入负责人' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '所报层次',
          field: 'cardNo',
          form: 'select',
          selectFrom: 'STUDY_LEVEL_ENMU',
          rules: [{ required: true, message: '请选择所报层次' }]
        },
        {
          label: '学费来源',
          field: 'studyWay',
          form: 'select',
          selectFrom: 'FEESOURCE_ENMU',
          rules: [{ required: true, message: '请选择所学费来源' }]
        },
        {
          label: '所报专业',
          field: 'birthcc',
          form: 'input',
          rules: [{ required: true, message: '请输入所报专业' }]
        },
        {
          label: '电大毕业',
          field: 'birthaa',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择是否电大毕业' }]
        },
        {
          label: '证书性质',
          field: 'birthdd',
          form: 'input',
          rules: [{ required: true, message: '请选择证书性质' }]
        },
        {
          label: '是否本科二学历',
          field: 'location',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择是否本科二学历' }]
        },

        {
          label: '认证编号',
          field: 'xz',
          form: 'input',
          rules: [{ required: true, message: '请输入认证编号' }]
        },
        {
          label: '电子注册备案表编号',
          field: 'ybmh',
          form: 'input',
          rules: [{ required: true, message: '请输入电子注册备案表编号' }]
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

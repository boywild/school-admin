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
          field: 'pc',
          form: 'input',
          rules: [
            { required: true, message: '请输入入学批次' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '学生来源',
          field: 'sourceType',
          form: 'select',
          selectFrom: 'STUDENT_FROM_ENMU',
          rules: [{ required: true, message: '请选择学生来源' }]
        },
        {
          label: '负责人',
          field: 'principalGuy',
          form: 'input',
          rules: [
            { required: true, message: '请输入负责人' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '所报层次',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'STUDY_LEVEL_ENMU',
          rules: [{ required: true, message: '请选择所报层次' }]
        },
        {
          label: '学费来源',
          field: 'xxxx',
          form: 'select',
          selectFrom: 'FEESOURCE_ENMU',
          rules: [{ required: true, message: '请选择所学费来源' }]
        },
        {
          label: '所报专业',
          field: 'applyMajor',
          form: 'input',
          rules: [{ required: true, message: '请输入所报专业' }]
        },
        {
          label: '电大毕业',
          field: 'xxxx',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择是否电大毕业' }]
        },
        {
          label: '证书性质',
          field: 'xxxx',
          form: 'input',
          rules: [{ required: true, message: '请选择证书性质' }]
        },
        {
          label: '是否本科二学历',
          field: 'bachelorSecondFlag',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择是否本科二学历' }]
        },

        {
          label: '认证编号',
          field: 'xxxx',
          form: 'input',
          rules: [{ required: true, message: '请输入认证编号' }]
        },
        {
          label: '电子注册备案表编号',
          field: 'xxxx',
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

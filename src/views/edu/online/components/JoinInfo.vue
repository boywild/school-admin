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
          label: '学校负责老师',
          field: 'card',
          form: 'input',
          rules: [
            { required: true, message: '请输入学校负责老师' },
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
          label: '所报院校',
          field: 'yx',
          form: 'input',
          rules: [{ required: true, message: '请选择所报院校' }]
        },
        {
          label: '所报专业',
          field: 'zy',
          form: 'input',
          rules: [{ required: true, message: '请选择所报专业' }]
        },
        {
          label: '学制',
          field: 'birth',
          form: 'input',
          rules: [{ required: true, message: '请选择学制' }]
        },
        {
          label: '是否本科二学历',
          field: 'location',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择是否本科二学历' }]
        },

        {
          label: '何时参加工作',
          field: 'xz',
          form: 'date',
          rules: [{ required: true, message: '请选择何时参加工作' }]
        },
        {
          label: '学习平台',
          field: 'ybmh',
          form: 'input',
          rules: [{ required: true, message: '请输入学习平台' }]
        },
        {
          label: '学号',
          field: 'mz',
          form: 'input',
          rules: [
            { required: true, message: '请输入学号' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: '学习帐号',
          field: 'yxdm',
          form: 'input',
          rules: [
            { required: true, message: '请输入学习帐号' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '登录密码',
          field: 'meal',
          form: 'input',
          rules: [
            { required: true, message: '请输入登录密码' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '录取结果',
          field: 'mealss',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [
            { required: true, message: '请输入专业代码' },
            { max: 10, message: '限制输入10位' }
          ]
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

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
          label: '所报学习形式',
          field: 'studyWay',
          form: 'select',
          selectFrom: 'STUDY_WAT_ENMU',
          rules: [{ required: true, message: '请选择所报学习形式' }]
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
          label: '考试城市',
          field: 'ybmh',
          form: 'cascader',
          rules: [{ required: true, message: '请输入考试城市' }]
        },
        {
          label: '所报院校',
          field: 'mz',
          form: 'input',
          rules: [
            { required: true, message: '请输入所报院校' },
            { max: 20, message: '限制输入20位' }
          ]
        },
        {
          label: '所报院校代码',
          field: 'yxdm',
          form: 'input',
          rules: [
            { required: true, message: '请输入所报院校代码' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '所报专业',
          field: 'meal',
          form: 'input',
          rules: [
            { required: true, message: '请输入所报专业' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '专业代码',
          field: 'mealss',
          form: 'input',
          rules: [
            { required: true, message: '请输入专业代码' },
            { max: 10, message: '限制输入10位' }
          ]
        },
        {
          label: '免试',
          field: 'ms',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请选择免试' }]
        },
        {
          label: '特殊报考',
          field: 'tsbk',
          form: 'radio',
          radioFrom: 'YESORNO_ENMU',
          rules: [{ required: true, message: '请输入特殊报考' }]
        },
        {
          label: '特殊报考区',
          field: 'tsbkq',
          form: 'input',
          rules: [{ required: true, message: '请输入特殊报考区' }]
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

<template>
  <div class="like-table">
    <a-row :gutter="10">
      <a-col :span="4">学期管理 </a-col>
      <a-col :span="4">第一学期 </a-col>
      <a-col :span="4">第二学期 </a-col>
      <a-col :span="4">第三学期 </a-col>
      <a-col :span="4">第四学期 </a-col>
      <a-col :span="4">第五学期 </a-col>
    </a-row>
    <a-row v-for="(item, index) in tab4" :key="index" :gutter="10">
      <a-col :span="4" v-for="(col, ind) in 6" :key="ind">
        <div class="like-label" v-if="ind === 0">{{ item.label }}</div>
        <template v-else>
          <a-input v-if="item.form === 'input'" v-model="studyTimeRange[item.field][ind]" />
          <a-date-picker v-if="item.form === 'date'" v-model="studyTimeRange[item.field][ind]" />
          <a-radio-group v-if="item.form === 'radio'" v-model="studyTimeRange[item.field][ind]">
            <a-radio value="1">是 </a-radio>
            <a-radio value="0">否 </a-radio>
          </a-radio-group>
        </template>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'StudyTerm',
  data() {
    return {
      studyTimeRange: {
        isneedXW: [],
        studyStatus: [],
        isAchieve: [],
        isJoin: [],
        isDeal: [],
        time: [],
        address: [],
        account: [],
        password: [],
        enScore: [],
        coScore: []
      },
      tab4: [
        {
          label: '是否要学位',
          field: 'isneedXW',
          form: 'radio',
          rules: [{ required: true }]
        },
        {
          label: '本学期学习状况',
          field: 'studyStatus',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '本学期学分是否达到学位要求',
          field: 'isAchieve',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否报考统考',
          field: 'isJoin',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '统考是否我司处理',
          field: 'isDeal',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '统考时间',
          field: 'time',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '统考地点',
          field: 'address',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '统考帐号',
          field: 'account',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '统考密码',
          field: 'password',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '统考英语分数',
          field: 'enScore',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '统考计算机分数',
          field: 'coScore',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        }
      ],
      rules: []
    }
  },
  computed: {}
}
</script>
<style lang="less">
.like-table {
  .ant-row {
    padding: 7px 0;
  }
}
</style>

<template>
  <div class="like-table">
    <a-row :gutter="30">
      <a-col :span="8">学期管理 </a-col>
      <a-col :span="8">第一学期 </a-col>
      <a-col :span="8">第二学期 </a-col>
    </a-row>
    <a-row v-for="(item, index) in tab5" :key="index" :gutter="30">
      <a-col :span="8" v-for="(col, ind) in 3" :key="ind">
        <div class="like-label" v-if="ind === 0">{{ item.label }}</div>
        <template v-else>
          <a-input v-if="item.form === 'input'" v-model="studyDegree[item.field][ind]" />
          <a-date-picker v-if="item.form === 'date'" v-model="studyDegree[item.field][ind]" />
          <a-radio-group v-if="item.form === 'radio'" v-model="studyDegree[item.field][ind]">
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
  name: 'StudyDegree',
  data() {
    return {
      studyDegree: {
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
        coScore: [],
        a: [],
        b: [],
        c: []
      },
      tab5: [
        {
          label: '是否为学位论文（是/否）',
          field: 'isneedXW',
          form: 'radio',
          rules: [{ required: true }]
        },
        {
          label: '学位论文是否为我司处理（是/否）',
          field: 'studyStatus',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '毕业生登记表填写是否完毕（是/否）',
          field: 'isAchieve',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '毕业信息核实是否完毕',
          field: 'isJoin',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否已到',
          field: 'isDeal',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否已领走',
          field: 'time',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '领走时间',
          field: 'address',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '领走方式',
          field: 'account',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否申请学位证书',
          field: 'password',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否有学位证书',
          field: 'enScore',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学位证书是否已到',
          field: 'coScore',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否已领走',
          field: 'a',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '领走时间',
          field: 'b',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '领走方式',
          field: 'c',
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

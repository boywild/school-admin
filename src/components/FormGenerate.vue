<template>
  <a-form-model ref="formGenerate" :model="formData" :rules="formRules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-row>
      <a-col :span="12" :gutter="5" v-for="(item, index) in fields" :key="index">
        <a-form-model-item :label="item.label" :prop="item.field">
          <a-input
            v-if="item.form === 'input'"
            has-feedback
            v-model.trim="formData[item.field]"
            :placeholder="'请输入' + item.label"
          />
          <a-select v-if="item.form === 'select'" v-model="formData[item.field]" :placeholder="'请输入' + item.label">
            <a-select-option :value="select.code" v-for="(select, count) in selectData[item.selectFrom]" :key="count">
              {{ select.desc }}
            </a-select-option>
          </a-select>
          <a-radio-group v-if="item.form === 'radio'" v-model="formData[item.field]">
            <a-radio :value="radio.code" v-for="(radio, count) in radioData[item.radioFrom]" :key="count">
              {{ radio.desc }}
            </a-radio>
          </a-radio-group>
          <a-date-picker v-if="item.form === 'date'" v-model="formData[item.field]" />
        </a-form-model-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
import { YESORNO_ENMU, REACH_ENMU, THESIS_FROM_ENMU, HK_ENMU, LANG_ENMU, MZ_ENMU, DEGREE_ENMU } from '@/config/dict'
export default {
  name: 'FormGenerate',
  props: { fields: { type: Array, default: () => [] } },
  data() {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      formData: {},
      selectData: {
        THESIS_FROM_ENMU,
        HK_ENMU,
        LANG_ENMU,
        MZ_ENMU,
        DEGREE_ENMU
      },
      radioData: {
        YESORNO_ENMU,
        REACH_ENMU
      }
    }
  },
  computed: {
    formRules() {
      const rules = {}
      this.fields.forEach(item => {
        rules[item.field] = item.rules
      })
      return rules
    }
  }
}
</script>

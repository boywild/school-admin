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
            <a-select-option :value="select.code" v-for="(select, count) in dict[item.selectFrom]" :key="count">
              {{ select.desc }}
            </a-select-option>
          </a-select>

          <a-radio-group v-if="item.form === 'radio'" v-model="formData[item.field]">
            <a-radio :value="radio.code" v-for="(radio, count) in dict[item.radioFrom]" :key="count">
              {{ radio.desc }}
            </a-radio>
          </a-radio-group>
          <a-date-picker v-if="item.form === 'date'" v-model="formData[item.field]" />
          <a-cascader
            v-if="item.form === 'cascader'"
            v-model="formData[item.field]"
            :options="cascaderData.CITY"
            :placeholder="'请选择' + item.label"
          />
        </a-form-model-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import { matchAddress } from '@/utils/address'
// import timestamp from '@/utils/timestamp'
// import {
//   STUDENT_FROM_ENMU,
//   STUDY_LEVEL_ENMU,
//   STUDY_WAT_ENMU,
//   SUBJECT_ENMU,
//   INFO_GATHER_ENMU,
//   DEGREE_ENMU,
//   THESIS_FROM_ENMU,
//   REACH_ENMU,
//   YESORNO_ENMU,
//   MZ_ENMU,
//   HK_ENMU,
//   LANG_ENMU,
//   SEX_ENMU,
//   ZZMM_ENMU,
//   CARDTYPE_ENMU,
//   HJ_ENMU,
//   PLATFORM_ENMU,
//   FEESOURCE_ENMU,
//   SCOREQUERY_ENMU,
//   STUDY_LEVEL_ENMU2,
//   TRAINING_ENMU,
//   TEACHMETHOD_ENMU,
//   CLASSTYPE_ENMU
// } from '@/config/dict'
import city from '@/config/city'

export default {
  name: 'FormGenerate',
  props: { fields: { type: Array, default: () => [] } },
  data() {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      formData: {},
      // selectData: {
      //   STUDENT_FROM_ENMU,
      //   STUDY_LEVEL_ENMU,
      //   STUDY_LEVEL_ENMU2,
      //   STUDY_WAT_ENMU,
      //   SUBJECT_ENMU,
      //   INFO_GATHER_ENMU,
      //   THESIS_FROM_ENMU,
      //   HK_ENMU,
      //   LANG_ENMU,
      //   MZ_ENMU,
      //   DEGREE_ENMU,
      //   ZZMM_ENMU,
      //   CARDTYPE_ENMU,
      //   PLATFORM_ENMU,
      //   FEESOURCE_ENMU,
      //   SCOREQUERY_ENMU,
      //   TRAINING_ENMU,
      //   TEACHMETHOD_ENMU,
      //   CLASSTYPE_ENMU
      // },
      // radioData: {
      //   YESORNO_ENMU,
      //   REACH_ENMU,
      //   SEX_ENMU,
      //   HJ_ENMU
      // },
      cascaderData: {
        CITY: city
      },
      interceptAddress: ['examCity', 'location'],
      interceptDate: [
        'birthDay',
        'graduateTime',
        'entranceDate',
        'workStartTime',
        'degreeInformTime',
        'diplomaTakeTime',
        'registerDateTime',
        'graduateTime',
        'entranceTime',
        'registerDateTime',
        'oweClearTime',
        'takeDiplomaDate',
        'examTime',
        'graduateCertTakeTime',
        'unifyDate',
        'degreeTakeTime'
      ]
    }
  },
  computed: {
    ...mapState({
      dict: state => state.dict.dict
    }),
    formRules() {
      const rules = {}
      this.fields.forEach(item => {
        rules[item.field] = item.rules
      })
      return rules
    }
  },
  methods: {
    validate(callback) {
      const form = this.$refs.formGenerate
      form.validate(success => {
        // this.$emit('validate', { success, data: this.baseInfo })
        const res = {}
        if (success) {
          this.interceptAddress.forEach(address => {
            if (this.formData && this.formData[address]) {
              res[address] = matchAddress(this.formData[address])
            }
          })
          this.interceptDate.forEach(date => {
            if (this.formData && this.formData[date]) {
              res[date] = new Date(this.formData[date]).getTime()
            }
          })
          const validateData = { ...this.formData, ...res }
          console.log(validateData)
          callback && callback(validateData)
        }
      })
    },
    reset() {
      const form = this.$refs.formGenerate
      // form.resetFields()
      this.formData = {}
      form.clearValidate()
    },
    setData(data) {
      this.interceptAddress.forEach(address => {
        if (data && data[address]) {
          const location = data[address]
          data[address] = [location[0].code, location[1].code, location[2].code]
        }
      })
      this.interceptDate.forEach(date => {
        if (data && data[date]) {
          data[date] = moment(Number(data[date]))
        }
      })
      this.formData = data
    }
  }
}
</script>

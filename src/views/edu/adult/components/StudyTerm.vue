<template>
  <div class="like-table">
    <a-table :columns="columns" :data-source="columnsData" bordered :pagination="false" :scroll="{ x: 1500 }">
      <div slot="age">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>
      <div slot="address">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>
      <div slot="tags">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>
      <div slot="a">
        <a-select placeholder="请选择毕业信息采集" style="width:100%;">
          <a-select-option :value="select.code" v-for="(select, count) in INFO_GATHER_ENMU" :key="count">
            {{ select.desc }}
          </a-select-option>
        </a-select>
      </div>
      <div slot="b">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in REACH_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>
      <div slot="c">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>

      <div slot="d">
        <a-date-picker />
      </div>
      <div slot="e">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>
      <div slot="k">
        <a-input />
      </div>
      <div slot="f">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>
      <div slot="g">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>
      <div slot="h">
        <a-select placeholder="请选论文性质" style="width:100%;">
          <a-select-option :value="item.code" v-for="(item, index) in THESIS_FROM_ENMU" :key="index">{{
            item.desc
          }}</a-select-option>
        </a-select>
      </div>
      <div slot="i">
        <a-radio-group>
          <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">{{ item.desc }} </a-radio>
        </a-radio-group>
      </div>
      <div slot="j">
        <a-input />
      </div>
    </a-table>
    <!-- <a-row :gutter="10">
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
    </a-row> -->
  </div>
</template>

<script>
import { YESORNO_ENMU, INFO_GATHER_ENMU, REACH_ENMU, THESIS_FROM_ENMU } from '@/config/dict'
export default {
  name: 'StudyTerm',
  data() {
    return {
      YESORNO_ENMU,
      INFO_GATHER_ENMU,
      REACH_ENMU,
      THESIS_FROM_ENMU,
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
      // tab4: [
      //   {
      //     label: '是否要学位',
      //     field: 'isneedXW',
      //     form: 'radio',
      //     rules: [{ required: true }]
      //   },
      //   {
      //     label: '本学期学习状况',
      //     field: 'studyStatus',
      //     form: 'radio',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '本学期学分是否达到学位要求',
      //     field: 'isAchieve',
      //     form: 'radio',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '是否报考统考',
      //     field: 'isJoin',
      //     form: 'radio',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '统考是否我司处理',
      //     field: 'isDeal',
      //     form: 'radio',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '统考时间',
      //     field: 'time',
      //     form: 'date',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '统考地点',
      //     field: 'address',
      //     form: 'input',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '统考帐号',
      //     field: 'account',
      //     form: 'input',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '统考密码',
      //     field: 'password',
      //     form: 'input',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '统考英语分数',
      //     field: 'enScore',
      //     form: 'input',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   },
      //   {
      //     label: '统考计算机分数',
      //     field: 'coScore',
      //     form: 'input',
      //     rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
      //   }
      // ],
      columns: [
        { title: '学期管理', dataIndex: 'name', scopedSlots: { customRender: 'name' }, align: 'center', width: 90 },
        { title: '是否报考学位', dataIndex: 'age', scopedSlots: { customRender: 'age' }, align: 'center', width: 160 },
        {
          title: '是否填写毕业生登记表',
          dataIndex: 'address',
          scopedSlots: { customRender: 'address' },
          align: 'center',
          width: 180
        },
        {
          title: '是否申请学位',
          dataIndex: 'tags',
          scopedSlots: { customRender: 'tags' },
          align: 'center',
          width: 160
        },
        { title: '毕业信息采集', dataIndex: 'a', scopedSlots: { customRender: 'a' }, align: 'center', width: 190 },
        { title: '学位成绩', dataIndex: 'b', scopedSlots: { customRender: 'b' }, align: 'center', width: 190 },
        {
          title: '毕业纸质照片是否到我司',
          dataIndex: 'c',
          scopedSlots: { customRender: 'c' },
          align: 'center',
          width: 190
        },
        { title: '学位成绩通过时间', dataIndex: 'd', scopedSlots: { customRender: 'd' }, align: 'center', width: 190 },
        {
          title: '毕业纸质照片是否提交院校',
          dataIndex: 'e',
          scopedSlots: { customRender: 'e' },
          align: 'center',
          width: 210
        },

        { title: '期末考试成绩', dataIndex: 'k', scopedSlots: { customRender: 'k' }, align: 'center', width: 160 },
        { title: '是否延期毕业', dataIndex: 'f', scopedSlots: { customRender: 'f' }, align: 'center', width: 160 },
        { title: '填写入学生登记表', dataIndex: 'g', scopedSlots: { customRender: 'g' }, align: 'center', width: 160 },
        { title: '论文性质', dataIndex: 'h', scopedSlots: { customRender: 'h' }, align: 'center', width: 190 },
        { title: '学籍是否已注册', dataIndex: 'i', scopedSlots: { customRender: 'i' }, align: 'center', width: 160 },
        { title: '特殊事项', dataIndex: 'j', scopedSlots: { customRender: 'j' }, align: 'center', width: 160 }
      ],
      columnsData: [
        {
          name: '第一期',
          age: '2',
          address: '3',
          tags: '4',
          a: '5',
          b: '6',
          c: '7',
          d: '8',
          e: '9',
          f: '10',
          g: '10',
          h: '10',
          i: '10',
          j: '10',
          k: '10'
        },
        {
          name: '第二期',
          age: '2',
          address: '3',
          tags: '4',
          a: '5',
          b: '6',
          c: '7',
          d: '8',
          e: '9',
          f: '10',
          g: '10',
          h: '10',
          i: '10',
          j: '10',
          k: '10'
        },
        {
          name: '第三期',
          age: '2',
          address: '3',
          tags: '4',
          a: '5',
          b: '6',
          c: '7',
          d: '8',
          e: '9',
          f: '10',
          g: '10',
          h: '10',
          i: '10',
          j: '10',
          k: '10'
        },
        {
          name: '第四期',
          age: '2',
          address: '3',
          tags: '4',
          a: '5',
          b: '6',
          c: '7',
          d: '8',
          e: '9',
          f: '10',
          g: '10',
          h: '10',
          i: '10',
          j: '10',
          k: '10'
        },
        {
          name: '第五期',
          age: '2',
          address: '3',
          tags: '4',
          a: '5',
          b: '6',
          c: '7',
          d: '8',
          e: '9',
          f: '10',
          g: '10',
          h: '10',
          i: '10',
          j: '10',
          k: '10'
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

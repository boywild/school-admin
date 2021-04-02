<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="学生姓名">
                <a-input v-model="queryParam.studentName" placeholder="请输入学生姓名" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="证件号码">
                <a-input v-model="queryParam.idNumber" placeholder="请输入证件号码" />
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="入学批次">
                  <a-date-picker v-model="queryParam.entranceDate" placeholder="请选择入学批次" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="渠道来源">
                  <a-select v-model="queryParam.sourceType" placeholder="请选择渠道来源">
                    <a-select-option
                      :value="item.code"
                      v-for="(item, index) in dict.StudentSourceTypeEnum"
                      :key="index"
                      >{{ item.desc }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="报考工种">
                  <a-select v-model="queryParam.workIndustry" placeholder="请选择报考工种">
                    <a-select-option
                      :value="item.code"
                      v-for="(item, index) in dict.StudentApplyLevel2Enum"
                      :key="index"
                      >{{ item.desc }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="报考层次">
                  <a-select v-model="queryParam.studentApplyLevel" placeholder="请选择报考层次">
                    <a-select-option
                      :value="item.code"
                      v-for="(item, index) in dict.StudentApplyLevel2Enum"
                      :key="index"
                      >{{ item.desc }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="报考时间">
                  <a-input v-model="queryParam.applyTime" placeholder="请输入报考时间" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="授课方式">
                  <a-select v-model="queryParam.lessonStyle" placeholder="请选择授课方式">
                    <a-select-option
                      :value="item.code"
                      v-for="(item, index) in dict.LessonStyleEnum"
                      :key="index"
                      >{{ item.desc }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="首次培训/复培">
                  <a-select v-model="queryParam.newTrainTimesFlag" placeholder="请选择首次培训/复培">
                    <a-select-option :value="item.code" v-for="(item, index) in dict.YesOrNoEnum" :key="index">{{
                      item.desc
                    }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="招生老师">
                  <a-input v-model="queryParam.principalTeacher" placeholder="请选择招生老师" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="班主任">
                  <a-input v-model="queryParam.headTeacher" placeholder="请输入班主任" style="width: 100%" />
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="(!advanced && 8) || 24" :sm="24" v-if="$auth('T041')">
              <span
                class="table-page-search-submitButtons"
                :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
              >
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => (this.queryParam = {})">重置</a-button>
                <a @click="toggleAdvanced" style="margin-left: 8px">
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'" />
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <div class="table-operator">
        <a-button type="primary" icon="plus" v-action:T042 @click="handleAdd">新建</a-button>
        <a-button type="danger" icon="delete" v-action:T043 @click="deleteStudent">删除</a-button>
        <a-button type="primary" ghost icon="download" v-action:T044 @click="downLoad">导出数据</a-button>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="studentId"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
        :scroll="{ x: 1500 }"
      >
        <span slot="gender" slot-scope="text, record">
          {{ record['genderDesc'] || '' }}
        </span>
        <span slot="birth" slot-scope="text">
          {{ text | moment('YYYY-MM-DD') }}
        </span>
        <span slot="location" slot-scope="text">
          {{ text[0] && text[0].desc }} {{ text[1] && text[1].desc }} {{ text[2] && text[2].desc }}
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a v-action:T054 @click="handleModify(record, 'BaseInfo')">基本信息</a>
            <a-divider v-action:T055 type="vertical" />
            <a v-action:T055 @click="handleModify(record, 'ImgInfo')">图片</a>
            <a-divider v-action:T056 type="vertical" />
            <a v-action:T056 @click="handleModify(record, 'JoinInfo')">报名</a>
            <a-divider v-action:T057 type="vertical" />
            <a v-action:T057 @click="handleModify(record, 'EduTask')">教务</a>
            <a-divider v-action:T058 type="vertical" />
            <a v-action:T058 @click="handleModify(record, 'StudyCost')">财务</a>
          </template>
        </span>
      </s-table>

      <BaseInfo v-model="visibleBaseInfo" :studentId="mdl && mdl.studentId" @update="tableRefresh"></BaseInfo>
      <ImgInfo v-model="visibleImgInfo" :studentId="mdl && mdl.studentId" @update="tableRefresh"></ImgInfo>
      <JoinInfo v-model="visibleJoinInfo" :studentId="mdl && mdl.studentId" @update="tableRefresh"></JoinInfo>
      <EduTask v-model="visibleEduTask" :studentId="mdl && mdl.studentId" @update="tableRefresh"></EduTask>

      <StudyCost v-model="visibleStudyCost" :studentId="mdl && mdl.studentId" @update="tableRefresh"></StudyCost>
    </a-card>
  </page-header-wrapper>
</template>

<script>
// import moment from 'moment'
import { mapState, mapActions } from 'vuex'
import { STable, Ellipsis } from '@/components'
import BaseInfo from './components/BaseInfo'
import ImgInfo from './components/ImgInfo'
import JoinInfo from './components/JoinInfo'
import EduTask from './components/EduTask'
import StudyCost from './components/StudyCost'
// import { getRoleList } from '@/api/manage'
import { studentList } from '@/api/student'
import { downLoadExcel } from '@/api/sys'
// import {
//   STUDENT_FROM_ENMU,
//   STUDY_LEVEL_ENMU,
//   STUDY_WAT_ENMU,
//   SUBJECT_ENMU,
//   INFO_GATHER_ENMU,
//   THESIS_FROM_ENMU,
//   REACH_ENMU,
//   YESORNO_ENMU,
//   STUDY_LEVEL_ENMU2,
//   TEACHMETHOD_ENMU
// } from '@/config/dict'

// import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './components/CreateForm'
// import { type } from 'mockjs2'

const columns = [
  { title: '学号', dataIndex: 'studentNo', width: 100 },
  { title: '姓名', dataIndex: 'studentName', width: 100 },
  { title: '性别', dataIndex: 'gender', width: 100, scopedSlots: { customRender: 'gender' } },
  { title: '出生日期', dataIndex: 'birthDay', width: 140, scopedSlots: { customRender: 'birth' } },
  { title: '身份证号', dataIndex: 'idNumber', width: 220 },
  { title: '电话号', dataIndex: 'phone', width: 140 },
  { title: '毕业院校', dataIndex: 'graduateSchool', width: 150 },
  { title: '职业', dataIndex: 'profession', width: 140 },
  { title: '所属省市', dataIndex: 'location', width: 190, scopedSlots: { customRender: 'location' } },
  { title: '操作', dataIndex: 'action', width: 280, fixed: 'right', scopedSlots: { customRender: 'action' } }
]

export default {
  name: 'Adult',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    BaseInfo,
    ImgInfo,
    JoinInfo,
    EduTask,
    StudyCost
  },
  data() {
    this.columns = columns
    return {
      // create model
      // STUDENT_FROM_ENMU,
      // STUDY_LEVEL_ENMU,
      // STUDY_WAT_ENMU,
      // SUBJECT_ENMU,
      // INFO_GATHER_ENMU,
      // THESIS_FROM_ENMU,
      // REACH_ENMU,
      // YESORNO_ENMU,
      // STUDY_LEVEL_ENMU2,
      // TEACHMETHOD_ENMU,
      currentForm: 'BaseInfo',
      visibleBaseInfo: false,
      visibleImgInfo: false,
      visibleJoinInfo: false,
      visibleEduTask: false,
      visibleStudyCost: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return studentList({ applyType: 'S006', ...requestParameters }).then(res => {
          console.log(res)
          return res
        })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },

  created() {
    // getRoleList({ t: new Date() })
    this.YesOrNoEnum()
    this.IdTypeEnum()
    this.GenderTypeEnum()
    this.NationEnum()
    this.HouseholdEnum()
    this.PoliticsEnum()
    this.TraningTypeEnum()
    this.StudentApplyLevel2Enum()
    this.LessonStyleEnum()
    this.StudentSourceTypeEnum()
  },
  computed: {
    ...mapState({
      dict: state => state.dict.dict
    }),
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    },
    getForm() {
      return this.currentForm
    },
    setDialogTitle() {
      let titTxt = ''
      switch (this.currentForm) {
        case 'BaseInfo':
          titTxt = '基本信息'
          break
        case 'ImgInfo':
          titTxt = '图片信息'
          break
        case 'JoinInfo':
          titTxt = '报名信息'
          break
        case 'EduTask':
          titTxt = '教务信息'
          break
        case 'StudyCost':
          titTxt = '财务信息'
          break
      }
      return titTxt
    }
  },
  methods: {
    ...mapActions([
      'YesOrNoEnum',
      'IdTypeEnum',
      'GenderTypeEnum',
      'NationEnum',
      'HouseholdEnum',
      'PoliticsEnum',
      'TraningTypeEnum',
      'StudentApplyLevel2Enum',
      'LessonStyleEnum',
      'StudentSourceTypeEnum'
    ]),
    // 新建学生
    handleAdd() {
      this.mdl = null
      this['visibleBaseInfo'] = true
    },
    tableRefresh() {
      const table = this.$refs.table
      table.refresh()
    },

    // 保存成功
    actionSuccess(text) {
      // 刷新表格
      this.$message.info(text)
      this.tableRefresh()
    },
    // 修改
    handleModify(record, form) {
      this.mdl = record
      this[`visible${form}`] = true
    },
    // 勾选
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    // 重置search条件
    resetSearchForm() {
      this.queryParam = {}
    },
    // 删除学生
    deleteStudent() {
      if (!this.selectedRows.length) {
        this.$message.warning('至少选择一项')
        return
      }
      this.$confirm({
        title: '是否确认删除这些数据',
        content: '请在删除前仔细确定删除数据.确认无误后点击确认按钮删除',
        onOk: async () => {
          await new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          }).catch(() => console.log('Oops errors!'))
          await this.tableRefresh()
        },
        onCancel() {}
      })
    },
    async downLoad() {
      await downLoadExcel('S006')
    }
  }
}
</script>

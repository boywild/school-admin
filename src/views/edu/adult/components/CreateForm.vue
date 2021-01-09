<template>
  <a-modal
    title="新建学生"
    :width="900"
    :visible="visible"
    :confirmLoading="loading"
    @ok="
      () => {
        $emit('ok')
      }
    "
    @cancel="
      () => {
        $emit('cancel')
      }
    "
  >
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="基本信息">
        <a-spin :spinning="loading">
          <a-form-model
            ref="baseInfo"
            :model="form.baseInfo"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-row>
              <a-col :span="12" :gutter="5" v-for="(item, index) in tab1" :key="index">
                <a-form-item :label="item.label">
                  <a-input v-if="item.form === 'input'" v-model="form.baseInfo[item.field]" />
                  <a-select v-if="item.form === 'select'" v-model="form.baseInfo[item.field]">
                    <a-select-option value="shanghai">
                      Zone one
                    </a-select-option>
                  </a-select>
                  <a-radio-group v-if="item.form === 'radio'" v-model="form.baseInfo[item.field]">
                    <a-radio value="1">
                      Sponsor
                    </a-radio>
                  </a-radio-group>
                  <a-date-picker v-if="item.form === 'date'" v-model="form.baseInfo[item.field]" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form-model>
        </a-spin>
      </a-tab-pane>
      <a-tab-pane key="2" tab="学生图片信息">
        <a-spin :spinning="loading">
          <a-form-model ref="imgInfo" :model="form" :rules="rules">
            <a-row>
              <a-col :span="12" :gutter="5" v-for="(item, index) in tab2" :key="index">
                <a-form-item :label="item.label">
                  <a-upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    list-type="picture-card"
                    :file-list="form.imgInfo[item.field]"
                    @preview="handlePreview"
                    @change="handleChange"
                  >
                    <div v-if="form.imgInfo[item.field].length < 2">
                      <a-icon type="plus" />
                      <div class="ant-upload-text">
                        上传图片
                      </div>
                    </div>
                  </a-upload>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form-model>
        </a-spin>
      </a-tab-pane>
      <a-tab-pane key="3" tab="报名相关信息">
        <a-spin :spinning="loading">
          <a-form-model ref="joinInfo" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-row>
              <a-col :span="12" :gutter="5" v-for="(item, index) in tab3" :key="index">
                <a-form-item :label="item.label">
                  <a-input v-if="item.form === 'input'" v-model="form.joinInfo[item.field]" />
                  <a-select v-if="item.form === 'select'" v-model="form.joinInfo[item.field]">
                    <a-select-option value="shanghai">
                      Zone one
                    </a-select-option>
                  </a-select>
                  <a-radio-group v-if="item.form === 'radio'" v-model="form.joinInfo[item.field]">
                    <a-radio value="1">
                      Sponsor
                    </a-radio>
                  </a-radio-group>
                  <a-date-picker v-if="item.form === 'date'" v-model="form.joinInfo[item.field]" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form-model>
        </a-spin>
      </a-tab-pane>
      <a-tab-pane key="4" tab="学期管理">
        <div class="like-table">
          <a-row :gutter="10">
            <a-col :span="4">
              学期管理
            </a-col>
            <a-col :span="4">
              第一学期
            </a-col>
            <a-col :span="4">
              第二学期
            </a-col>
            <a-col :span="4">
              第三学期
            </a-col>
            <a-col :span="4">
              第四学期
            </a-col>
            <a-col :span="4">
              第五学期
            </a-col>
          </a-row>
          <a-row v-for="(item, index) in tab4" :key="index" :gutter="10">
            <a-col :span="4" v-for="(col, ind) in 6" :key="ind">
              <div class="like-label" v-if="ind === 0">{{ item.label }}</div>
              <template v-else>
                <a-input v-if="item.form === 'input'" v-model="form.studyTimeRange[item.field][ind]" />
                <a-date-picker v-if="item.form === 'date'" v-model="form.studyTimeRange[item.field][ind]" />
                <a-radio-group v-if="item.form === 'radio'" v-model="form.studyTimeRange[item.field][ind]">
                  <a-radio value="1">是 </a-radio>
                  <a-radio value="0">否 </a-radio>
                </a-radio-group>
              </template>
            </a-col>
          </a-row>
        </div>
      </a-tab-pane>
      <a-tab-pane key="5" tab="学位管理"></a-tab-pane>
      <a-tab-pane key="6" tab="财务管理"></a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, required: true },
    loading: { type: Boolean, default: () => false },
    model: { type: Object, default: () => null }
  },
  data() {
    return {
      // form: this.$form.createForm(this),
      form: {
        baseInfo: {},
        imgInfo: {
          studentImg: [
            {
              uid: '-1',
              name: 'image.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
              uid: '-2',
              name: 'image.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }
          ],
          cardImg: [],
          studyImg: [],
          otherImg: []
        },
        joinInfo: {},
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
        }
      },
      previewVisible: false,
      previewImage: '',
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      tab1: [
        {
          label: '学生姓名',
          field: 'name',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '联系电话',
          field: 'phone',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '证件种类',
          field: 'card',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '证件号码',
          field: 'cardNo',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '民族',
          field: 'mz',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '性别',
          field: 'meal',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '出生日期',
          field: 'birth',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '所属省市',
          field: 'location',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '户口性质',
          field: 'xz',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '职业',
          field: 'zy',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '政治面貌',
          field: 'mm',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '源毕业学校',
          field: 'school',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '原毕业时间',
          field: 'byTime',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '源毕业证书编号',
          field: 'bookNo',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '源毕业证书类型',
          field: 'bookType',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '通讯地址',
          field: 'address',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '工作单位',
          field: 'work',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: 'email',
          field: 'email',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        }
      ],
      tab2: [
        {
          label: '学生图片',
          field: 'studentImg',
          form: 'upload',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '身份证图片',
          field: 'cardImg',
          form: 'upload',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学历图片',
          field: 'studyImg',
          form: 'upload',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '其他图片',
          field: 'otherImg',
          form: 'upload',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        }
      ],
      tab3: [
        {
          label: '学生来源',
          field: 'name',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '负责人',
          field: 'phone',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学校负责老师',
          field: 'card',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '所报层次',
          field: 'cardNo',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '所报院校',
          field: 'mz',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '所报专业',
          field: 'meal',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学制',
          field: 'birth',
          form: 'select',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '是否本科二学历',
          field: 'location',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '何时参加工作',
          field: 'xz',
          form: 'date',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学习平台',
          field: 'zy',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学号',
          field: 'mm',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '学习帐号',
          field: 'school',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '登录密码',
          field: 'byTime',
          form: 'input',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        },
        {
          label: '录取结果',
          field: 'bookNo',
          form: 'radio',
          rules: [{ required: true, min: 5, message: '请输入至少五个字符的规则描述！' }]
        }
      ],
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
      rules: {}
    }
  },
  created() {
    console.log('custom modal created')
  },
  computed: {
    formItemLayout() {
      return {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    }
  },
  methods: {
    callback(key) {
      console.log(key)
    },
    handleCancel() {
      this.previewVisible = false
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        // file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange({ fileList }) {
      this.fileList = fileList
    }
  }
}
</script>
<style lang="less" scoped>
.like-table {
  .ant-row {
    padding: 10px 0;
  }
  .like-label {
    font-weight: bold;
  }
}
</style>

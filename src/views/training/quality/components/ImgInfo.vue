<template>
  <a-modal
    title="图片信息"
    :width="900"
    :visible="value"
    :mask-closable="false"
    :confirmLoading="loading"
    okText="保存图片信息"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form-model class="form-no-margin" ref="imgInfoForm" :model="imgInfo" :rules="rules">
      <a-row :gutter="5">
        <a-col :span="12" v-for="(item, index) in tab2" :key="index">
          <a-form-model-item :label="item.label" :prop="item.field">
            <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture-card"
              :file-list="imgInfo[item.field]"
              @preview="handlePreview"
              @change="handleChange"
            >
              <div v-if="imgInfo[item.field].length < 2">
                <a-icon type="plus" />
                <div class="ant-upload-text">
                  上传图片
                </div>
              </div>
            </a-upload>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </a-modal>
</template>

<script>
export default {
  name: 'ImgInfo',
  props: {
    value: { type: Boolean, required: true }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      loading: false,
      previewVisible: false,
      previewImage: '',
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
      tab2: [
        {
          label: '学生图片',
          field: 'studentImg',
          form: 'upload',
          rules: [{ required: true, message: '请上传学生图片' }]
        },
        {
          label: '身份证图片',
          field: 'cardImg',
          form: 'upload',
          rules: [{ required: true, message: '请上传身份证图片' }]
        },
        {
          label: '学历图片',
          field: 'studyImg',
          form: 'upload',
          rules: [{ required: true, message: '请上传学历图片' }]
        },
        {
          label: '其他图片',
          field: 'otherImg',
          form: 'upload',
          rules: [{ required: true, message: '请上传其他图片' }]
        }
      ]
    }
  },
  computed: {
    rules() {
      const rules = {}
      this.tab2.forEach(item => {
        rules[item.field] = item.rules
      })
      return rules
    }
  },
  methods: {
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        // file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    async saveImgInfo() {},
    handleChange({ fileList }) {
      this.fileList = fileList
    },
    validate(callback) {
      const form = this.$refs.imgInfoForm
      form.validate(data => {
        callback && callback(data)
        console.log(data)
      })
    },
    resetForm() {
      const form = this.$refs.imgInfoForm
      form.resetFields()
    },
    handleOk() {},
    handleCancel() {
      this.$emit('change', false)
    }
  }
}
</script>

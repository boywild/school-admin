<template>
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
</template>

<script>
export default {
  data() {
    return {
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
    handleChange({ fileList }) {
      this.fileList = fileList
    },
    validate(callback) {
      const form = this.$refs.imgInfoForm
      form.validate(success => {
        this.$emit('validate', { success, data: this.imgInfo })
        if (success) {
          callback && callback(this.imgInfo)
        }
      })
    },
    resetForm() {
      const form = this.$refs.imgInfoForm
      form.resetFields()
    }
  }
}
</script>

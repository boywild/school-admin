<template>
  <a-modal
    title="新建文章"
    :width="800"
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
    <a-spin :spinning="loading">
      <a-form-model ref="articleInfo" :model="form" :rules="rules">
        <a-row :gutter="10">
          <a-col :span="12">
            <a-form-model-item label="标题" prop="title">
              <a-textarea v-model="form.title" showCount :auto-size="{ minRows: 4, maxRows: 4 }" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="介绍" prop="desc">
              <a-textarea v-model="form.desc" showCount :auto-size="{ minRows: 4, maxRows: 4 }" />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row :gutter="10">
          <a-col :span="12">
            <a-form-model-item label="图片" prop="images">
              <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                :file-list="imgInfo"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div v-if="imgInfo.length < 2">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">
                    上传图片
                  </div>
                </div>
              </a-upload>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="热门" prop="hot">
              <a-radio-group v-model="form.hot">
                <a-radio :value="1">是 </a-radio>
                <a-radio :value="0">否 </a-radio>
              </a-radio-group>
            </a-form-model-item>
          </a-col>
        </a-row>

        <a-form-model-item label="内容" prop="content" :labelCol="{ span: 24 }" :wrapperCol="{ span: 24 }">
          <WangEditor></WangEditor>
        </a-form-model-item>
      </a-form-model>
    </a-spin>
  </a-modal>
</template>

<script>
import WangEditor from '@/components/Editor/WangEditor'

export default {
  props: {
    visible: { type: Boolean, required: true },
    loading: { type: Boolean, default: () => false },
    model: { type: Object, default: () => null }
  },
  components: {
    WangEditor
  },
  data() {
    this.formLayout = {
      labelCol: {
        span: 24
      },
      wrapperCol: {
        span: 24
      }
    }
    return {
      form: {
        title: '',
        desc: '',
        images: [],
        hot: '',
        content: ''
      },
      imgInfo: [
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
      rules: {
        title: [{ required: true, message: '文章标题不能为空' }],
        desc: [{ required: true, message: '文章描述不能为空' }],
        images: [{ required: true, message: '文章图片不能为空' }],
        hot: [{ required: true, message: '请选择是否热门' }],
        content: [{ required: true, message: '文章内容不能为空' }]
      }
    }
  },
  created() {},
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
    resetForm() {
      this.$refs['articleInfo'].resetFields()
    }
  }
}
</script>

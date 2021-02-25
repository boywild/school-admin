<template>
  <a-modal
    :title="form.id ? '修改文章' : '新增文章'"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    :ok-button-props="{ props: { disabled: form.disabled } }"
    :cancel-button-props="{ props: { disabled: form.disabled } }"
    @ok="handleOk"
    @cancel="handleCancel"
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
            <a-form-model-item label="介绍" prop="introduce">
              <a-textarea v-model="form.introduce" showCount :auto-size="{ minRows: 4, maxRows: 4 }" />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row :gutter="10">
          <a-col :span="12">
            <a-form-model-item label="图片" prop="imgInfo">
              <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                :file-list="form.imgInfo"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div v-if="form.imgInfo && form.imgInfo.length < 2">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">
                    上传图片
                  </div>
                </div>
              </a-upload>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="热门" prop="hotFlag">
              <a-radio-group v-model="form.hotFlag">
                <a-radio :value="item.code" v-for="(item, index) in YESORNO_ENMU" :key="index">
                  {{ item.desc }}
                </a-radio>
              </a-radio-group>
            </a-form-model-item>
          </a-col>
        </a-row>

        <a-form-model-item label="内容" prop="content" :labelCol="{ span: 24 }" :wrapperCol="{ span: 24 }">
          <WangEditor ref="wangEditor" :value="form.content" @change="editorContent"></WangEditor>
        </a-form-model-item>
      </a-form-model>
    </a-spin>
  </a-modal>
</template>

<script>
import WangEditor from '@/components/Editor/WangEditor'
import { YESORNO_ENMU } from '@/config/dict'
import { articleSave } from '@/api/article'
export default {
  props: {
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
      YESORNO_ENMU,
      visible: false,
      confirmLoading: false,
      form: {
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
        ]
      },

      rules: {
        title: [{ required: true, message: '文章标题不能为空' }],
        introduce: [{ required: true, message: '文章描述不能为空' }],
        images: [{ required: true, message: '文章图片不能为空' }],
        hotFlag: [{ required: true, message: '请选择是否热门' }],
        content: [{ required: true, message: '文章内容不能为空' }]
      }
    }
  },
  mounted() {
    this.$watch('model', val => {
      setTimeout(() => {
        this.form = {
          ...this.form,
          ...val
        }
      }, 300)
    })
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
    handleOk() {
      this.handleSave()
    },
    async handleSave() {
      this.validate(async value => {
        this.confirmLoading = true
        await articleSave(this.form)
        this.confirmLoading = false
        this.handleCancel()
        this.$emit('refresh')
      })
    },
    handleCancel() {
      this.close()
      this.resetForm()
    },
    close() {
      this.toggle(false)
    },
    open() {
      this.toggle()
    },
    toggle(flag = true) {
      this.visible = flag
    },
    editorContent(val) {
      this.form.content = val
    },
    validate(callback) {
      const form = this.$refs.articleInfo
      form.validate(success => {
        if (success) {
          callback && callback(this.baseInfo)
        }
      })
    },
    resetForm() {
      const form = this.$refs.articleInfo
      this.$refs['wangEditor'].clearText()
      this.form = {}
      form.clearValidate()
    }
  }
}
</script>

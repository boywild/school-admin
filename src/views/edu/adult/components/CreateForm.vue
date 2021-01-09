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
        <a-spin :spinning="loading"><BaseInfo></BaseInfo> </a-spin>
      </a-tab-pane>
      <a-tab-pane key="2" tab="学生图片信息">
        <a-spin :spinning="loading"><ImgInfo></ImgInfo> </a-spin>
      </a-tab-pane>
      <a-tab-pane key="3" tab="报名相关信息">
        <a-spin :spinning="loading"><JoinInfo></JoinInfo> </a-spin>
      </a-tab-pane>
      <a-tab-pane key="4" tab="学期管理"><StudyTerm></StudyTerm> </a-tab-pane>
      <a-tab-pane key="5" tab="学位管理"><StudyDegree></StudyDegree> </a-tab-pane>
      <a-tab-pane key="6" tab="财务管理"> <StudyCost></StudyCost> </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
import BaseInfo from './BaseInfo'
import ImgInfo from './ImgInfo'
import JoinInfo from './JoinInfo'
import StudyTerm from './StudyTerm'
import StudyDegree from './StudyDegree'
import StudyCost from './StudyCost'
export default {
  props: {
    visible: { type: Boolean, required: true },
    loading: { type: Boolean, default: () => false },
    model: { type: Object, default: () => null }
  },
  components: { BaseInfo, ImgInfo, JoinInfo, StudyTerm, StudyDegree, StudyCost },
  data() {
    return {
      // form: this.$form.createForm(this),
      form: {},
      previewVisible: false,
      previewImage: '',
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

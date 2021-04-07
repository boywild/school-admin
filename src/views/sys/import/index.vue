<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="import-box">
        <a-upload-dragger name="file" :multiple="true" :customRequest="handleUpload" :file-list="fileList">
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text">
            点击或拖拽文件到该区域
          </p>
          <p class="ant-upload-hint">
            支持单个或批量上传
          </p>
        </a-upload-dragger>
        <!-- <a-button block size="big" type="primary">确认导入</a-button> -->
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
// import moment from 'moment'
// import { uploadUrl } from '@/config/url'
import { uploadExcel } from '@/api/sys'

export default {
  name: 'Import',
  components: {},
  data() {
    return {
      // uploadUrl,
      fileList: []
    }
  },
  filters: {},
  created() {},
  computed: {},
  methods: {
    handleChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
    async handleUpload(file) {
      const { applyType = '' } = this.$route.query
      const formData = new FormData()
      formData.append('file', file.file)
      // formData.append('applyType', 'S001')
      const { data } = await uploadExcel(applyType || 'S001', formData)
      this.fileList = [
        {
          uid: file.file.uid,
          name: file.file.name,
          status: 'done',
          url: data
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.import-box {
  width: 600px;
  margin: 0 auto;
}
</style>

<template>
  <a-modal
    title="新建学生"
    :width="900"
    :visible="visible"
    :mask-closable="false"
    :confirmLoading="loading"
    :okText="okText"
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
        <a-spin :spinning="loading"><BaseInfo ref="baseInfo"></BaseInfo> </a-spin>
      </a-tab-pane>
      <a-tab-pane key="2" tab="图片信息">
        <a-spin :spinning="loading"><ImgInfo ref="imgInfo"></ImgInfo> </a-spin>
      </a-tab-pane>
      <a-tab-pane key="3" tab="报名相关信息">
        <a-spin :spinning="loading"><JoinInfo ref="joinInfo"></JoinInfo> </a-spin>
      </a-tab-pane>
      <a-tab-pane key="4" tab="学期管理"><StudyTerm ref="studyTerm"></StudyTerm> </a-tab-pane>
      <a-tab-pane key="5" tab="学位管理"><StudyDegree ref="studyDegree"></StudyDegree> </a-tab-pane>
      <a-tab-pane key="6" tab="财务管理"> <StudyCost ref="studyCost"></StudyCost> </a-tab-pane>
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
      currentTab: '1'
    }
  },
  created() {
    console.log('custom modal created')
  },
  computed: {
    okText() {
      let btnTxt = ''
      switch (this.currentTab) {
        case '1':
          btnTxt = '基本信息'
          break
        case '2':
          btnTxt = '图片信息'
          break
        case '3':
          btnTxt = '报名相关信息'
          break
        case '4':
          btnTxt = '学期管理信息'
          break
        case '5':
          btnTxt = '学位管理信息'
          break
        case '6':
          btnTxt = '财务管理信息'
          break
      }
      return '保存' + btnTxt
    }
  },
  methods: {
    callback(key) {
      this.currentTab = key
      console.log(key)
    },
    handleCancel() {
      this.previewVisible = false
    }
  }
}
</script>

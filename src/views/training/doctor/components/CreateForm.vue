<template>
  <a-modal
    :title="title"
    :width="900"
    :visible="visible"
    :mask-closable="false"
    :confirmLoading="loading"
    :okText="`保存${title}`"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <slot></slot>
  </a-modal>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, required: true },
    loading: { type: Boolean, default: () => false },
    model: { type: Object, default: () => null },
    title: { type: String, default: () => '' }
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    handleCancel() {
      this.previewVisible = false
      this.$emit('cancel')
    },
    handleOk() {
      this.$emit('ok')
    }
  }
}
</script>

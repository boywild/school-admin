<template>
  <a-form-model class="form-no-margin" ref="imgInfo" :model="form" :rules="rules">
    <a-row>
      <a-col :span="12" :gutter="5" v-for="(item, index) in tab2" :key="index">
        <a-form-item :label="item.label">
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
        </a-form-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {
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
      rules: []
    }
  },
  computed: {}
}
</script>

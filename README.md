English | [简体中文](./README.zh-CN.md)

<h1 align="center">Ant Design Vue Pro</h1>
<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate. based on  <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
</div>

<div align="center">

[![License](https://img.shields.io/npm/l/package.json.svg?style=flat)](https://github.com/vueComponent/ant-design-vue-pro/blob/master/LICENSE)
[![Release](https://img.shields.io/github/release/vueComponent/ant-design-vue-pro.svg?style=flat)](https://github.com/vueComponent/ant-design-vue-pro/releases/latest)
[![Travis branch](https://travis-ci.org/vueComponent/ant-design-vue-pro.svg?branch=master)](https://travis-ci.org/vueComponent/ant-design-vue-pro)

</div>

- Preview: https://preview.pro.antdv.com
- Home Page: https://pro.antdv.com
- Documentation: https://pro.antdv.com/docs/getting-started
- ChangeLog: https://pro.antdv.com/docs/changelog
- FAQ: https://pro.antdv.com/docs/faq

Overview
----

![dashboard](https://static-2.loacg.com/open/static/github/SP1.png)

### Env and dependencies

- node
- yarn
- webpack
- eslint
- @vue/cli ~3
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 
- [vue-cropper](https://github.com/xyxiao001/vue-cropper) - Picture edit
- [@antv/g2](https://antv.alipay.com/zh-cn/index.html) - AntV G2
- [Viser-vue](https://viserjs.github.io/docs.html#/viser/guide/installation)  - Antv/G2 of Vue

> Note:  [Yarn](https://yarnpkg.com/) package management is recommended, the exact same version loaded with the demo site of this project (yarn.lock) . but you can also use npm


### Project setup

- Clone repo
```bash
git clone https://github.com/vueComponent/ant-design-vue-pro.git
cd ant-design-vue-pro
```

- Install dependencies
```
yarn install
```

- Compiles and hot-reloads for development
```
yarn run serve
```

- Compiles and minifies for production
```
yarn run build
```

- Lints and fixes files
```
yarn run lint
```


### Other

- **IMPORTANT : About Issue feedback !! when opening Issue read [Issue / PR Contributing](https://github.com/vueComponent/ant-design-vue-pro/issues/90)**

- [Vue-cli3](https://cli.vuejs.org/guide/) used by the project.

- Disable Eslint (not recommended): remove `eslintConfig`  field in `package.json`  and `vue.config.js` field `lintOnSave: false`

- Load on Demand `/src/main.js` L14, in `import './core/lazy_use'`, `import './core/use''`. more [load-on-demand.md](./docs/load-on-demand.md)

- Customize Theme:  [Custom Theme Config (@kokoroli)](https://github.com/kokoroli/antd-awesome/blob/master/docs/Ant_Design_%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96.md)

- I18n: [locales (@musnow)](./src/locales/index.js)

- Production env `mock` is disabled. use `src/mock/index.js`

- pls use `release` version

## Browsers support

Modern browsers and IE10.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| IE10, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


## Contributors

This project exists thanks to all the people who contribute. 
<a href="https://github.com/vueComponent/ant-design-vue-pro/graphs/contributors"><img src="https://opencollective.com/ant-design-pro-vue/contributors.svg?width=890&button=false" /></a>


1. 管理员详情/角色详情 接口未使用，数据放在列表中返回
2. 管理员模块缺少删除接口，查询条件新增使用状态/角色/创建日期/范围
3. 文章模块/待办事项/财务管理接口缺失
4. 查询角色列表使用post方法非get方法
5. 查询角色列表搜索条件增加-角色状态 创建时间范围
6. allowStatus updSysData 不使用boolean，不好反显
7. authId-key/authName-title/list-children


## 接口
1. 添加学生考期信息接口再哪里使用
2. 需要可以`添加学期/添加教务考期`，`学位和学期对应`
3. 教务信息－`保存和查询接口缺失`
4. 财务信息的`获取和保存接口缺失`
5. 图片`上传接口缺失`
6. 删除`学生接口缺失`
7. 成人教育/自考教育/网络教育/开发大学/人设局培训/医考培训/安检培训/质检培训/途胜教育 列表查询/新建学生．调用相同的接口还是不同的接口，查询还缺少字段


## 字段
1. 查询学生基本信息缺少字段`原毕业专业`
2. 报名信息缺少字段-`所报层次/所报学习形式/何时参加工作/考试城市/所报院校代码/专业代码/免试/特殊报考/特殊报考区字段缺失`

3. 学期缺少字段-`填写毕业生登记表/有毕业证书/毕业证书已到/毕业证书已领走/毕业证书领走时间/毕业证书领走方式/申请学位/毕业信息采集/学位成绩/毕业纸质照片到我司/学位成绩通过时间/毕业纸质照片提交院校/期末考试成绩/延期毕业/填写入学生登记表/论文性质/学籍已注册/特殊事项`

4. 学位缺少字段-`批次/院校/专业/学制/姓名/性别/民族/户口性质/证件号码/电话/学号/学位性质/学位准考证号/专业代码/考区/语种/是否为VIP/VIP负责人/学位分数/毕业论文`

5. 所属省市前端是数据如何和后端对接 男女 名族 如何和后端对接

## 成人教育已整理完
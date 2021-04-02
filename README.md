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



## 接口
1. 添加学生考期信息接口再哪里使用
2. `学位和学期对应`
3. 教务信息－`保存和查询接口缺失`
4. 图片`上传接口缺失`
5. 成人教育/自考教育/网络教育/开发大学/人设局培训/医考培训/安检培训/质检培训/途胜教育 列表查询/新建学生．调用相同的接口还是不同的接口，查询还缺少字段


## 成人教育
1. 基本信息－`原毕业专业`
2. 报名信息－`所报层次/所报学习形式/何时参加工作/考试城市/所报院校代码/专业代码/免试/特殊报考/特殊报考区`
3. 学期－`填写毕业生登记表/有毕业证书/毕业证书已到/毕业证书已领走/毕业证书领走时间/毕业证书领走方式/申请学位/毕业信息采集/学位成绩/毕业纸质照片到我司/学位成绩通过时间/毕业纸质照片提交院校/期末考试成绩/延期毕业/填写入学生登记表/论文性质/学籍已注册/特殊事项`
4. 学位－`院校/专业/学制/学号/学位性质/学位准考证号/专业代码/考区/语种/是否为VIP/VIP负责人/学位分数/毕业论文`，去掉重复字段`批次/姓名/性别/民族/户口性质/证件号码/电话/`
5. 财务－`第一年交费/第二年交费/第三年交费/第四年交费/第五年交费/报考费/入学考试辅导费/学位报考费 学位辅导费/网课费/论文费/图像采集费`,`expenseTypeInfos这个字段如何使用`，去掉重复字段`批次/层次/院校/专业/姓名/证件号码`
6. 教务接口缺少－`预报名号/短信密码/准考证号/考生号/语文分数/数学分数（高中起点）/英语分数（高中起点）/政治分数/大学语文分数/高等数学一分数/高等数学二分数/物理化学分数/教育理论分数/医学综合分数/民法分数/历史地理分数/艺术概论分数/入学考试总分数/加试时间/加试成绩/录取通知书已到/录取通知书已发/虚报/学习平台/学号/学习帐号/登录密码/录取结果`

## 自考教育
1. 基本信息－`原毕业专业`
2. 教务接口缺少－`学生来源/所报院校/所报专业/专科入学时间/是否有证书/是否为我司证书/负责老师/注册流水号/准考证号/初始密码/专业代码/考区/VIP`
3. 教务考期接口缺少
4. 毕业申请－`毕业证书是否已到`
5. 学位－`学位性质/学位准考证号/专业代码/考区/语种/是否为VIP/VIP负责人/学位分数/毕业论文/是否报考学位/学位成绩/学位成绩通过时间`，去掉重复字段`批次/院校/专业/姓名/性别/民族/户口性质/证件号码/电话/Email`
6. 财务－`欠款结算时间/学位辅导费/所报专业`，去掉重复字段`批次/层次/院校/专业/姓名/证件号码`

## 网络教育
1. 基本信息－`户籍`
2. 报名信息－`所报层次/何时参加工作`
3. 学期－`学位论文/学位论文由我司处理/毕业生登记表已填写/毕业信息已核实/图像采集已完成/延期毕业/已有毕业证书/毕业证书已到/毕业证书已领走/毕业证书领走时间/毕业证书领走方式/申请学位证书/有学位证书/学位证书已到/学位证已领走/学位证领走时间/学位证领走方式`
4. 财务－`第一年交费/第二年交费/第三年交费/报考费/测试费/统考英语费/统考计算机费/统考学位英语费/学位论文费/非学费论文费/奖励费/图像采集费`，去掉重复字段`批次/层次/院校/专业/姓名/证件号码`

## 开发大学
1. 基本信息－`录入平台/户籍/已婚/原毕业专业`
2. 报名信息－`所报层次/学费来源/电大毕业/证书性质/认证编号/电子注册备案表编号`
3. 教务接口缺少－`学校负责老师/学号/学习帐号/登录密码/录取结果/是否有录取通知书/如期毕业/未毕业原因/已有毕业证书/毕业证书已到/毕业证书已领/领走时间/领走方式/已填毕业生登记表/毕业信息已采集/毕业纸质照片已到我司/`
4. 财务－`第一年交费/第二年交费/报名费/图像采集费`，去掉重复字段`批次/层次/院校/专业/姓名/证件号码`

## 成人教育/自考教育/网络教育/开发大学
1. 基本信息－`原毕业专业/录入平台/户籍/是否已婚`
2. 报名信息－`所报层次/所报学习形式/何时参加工作/考试城市/所报院校代码/专业代码/是否免试/是否特殊报考/特殊报考区/学费来源/电大毕业/证书性质/认证编号/电子注册备案表编号`
3. 教务接口缺少－`预报名号/短信密码/准考证号/考生号/语文分数/数学分数（高中起点）/英语分数（高中起点）/政治分数/大学语文分数/高等数学一分数/高等数学二分数/物理化学分数/教育理论分数/医学综合分数/民法分数/历史地理分数/艺术概论分数/入学考试总分数/加试时间/加试成绩/录取通知书是否已到/录取通知书是否已发/是否虚报/学习平台/学校负责老师/学号/学习帐号/登录密码/录取结果/学生来源/所报院校/所报专业/专科入学时间/是否有证书/是否为我司证书/注册流水号/初始密码/专业代码/考区/是否VIP/是否有录取通知书/是否如期毕业/未毕业原因/是否已有毕业证书/毕业证书是否已到/毕业证书是否已领/领走时间/领走方式/已填毕业生登记表/毕业信息是否已采集/毕业纸质照片是否已到我司/`
4. 教务考期接口缺少－13个科目都需要的字段`科目编码/考试科目/考试时间/是否报考/复习资料是否已发放/辅导课是否已通知/成绩查询`
5. 学期－`填写毕业生登记表/是否有毕业证书/毕业证书是否已到/毕业证书是否已领走/毕业证书领走时间/毕业证书领走方式/是否申请学位/毕业信息采集/学位成绩/毕业纸质照片是否到我司/学位成绩通过时间/毕业纸质照片是否提交院校/期末考试成绩/是否延期毕业/是否填写入学生登记表/论文性质/是否学籍已注册/特殊事项/学位论文/学位论文是否由我司处理/毕业生登记表是否已填写/毕业信息是否已核实/图像采集是否已完成/是否已有毕业证书/是否申请学位证书/是否有学位证书/学位证书是否已到/学位证是否已领走/学位证领走时间/学位证领走方式`
6. 学位－`院校/专业/学制/学号/学位性质/学位准考证号/专业代码/考区/语种/是否为VIP/VIP负责人/学位分数/毕业论文/是否报考学位/学位成绩/学位成绩通过时间`
7. 财务－`第一年交费/第二年交费/第三年交费/第四年交费/第五年交费/报考费/测试费/统考英语费/统考计算机费/统考学位英语费/学位论文费/非学费论文费/奖励费/入学考试辅导费/学位报考费/学位辅导费/网课费/论文费/图像采集费/欠款结算时间/所报专业`
8. 毕业申请－`毕业证书是否已到`



## 人设局培训/医考培训/安检培训/质检培训/途胜培训
1. 基本信息－`学历层次/保险缴纳时限`
2. 报名信息－`报考工种/报考层次/报考时间/首次培训-复培/招生老师/班主任/班型/授课方式`
3. 教务接口缺少－`准考证号/考生号/考试时间/考试成绩/证书发放时间/学习实效/报考情况/报考次数/特殊操作/教材领取/是否退费/退费时间/退费途径/沟通`
4. 财务－`特殊报考费/培训费/实际缴费/补贴费用/补贴到账时间/备注/`



5. 所属省市前端是数据如何和后端对接 男女 名族 如何和后端对接


## 模块问题记录
1. 必要的字典接口查询
2. 文章删除 热门状态字典
2. 用户列表删除 使用状态字典 创建日期搜索不准 ，密码和确认密码字段未返回
2. 角色列表 角色状态字典 创建日期搜索不准


## 0318
### 成人教育
1. 基本信息-原毕业专业
2. 教务-加试时间、加试成绩

### 自考教育
1. 教务考期
2. 学位-是否报考学位、学位成绩、学位成绩通过时间
3. 财务-欠款结算时间、学位辅导费

### 网络教育
1. 学期-是否为学位论文、学位论文是否由我司处理、毕业信息是否已核实、图像采集是否已完成、是否申请学位证书、是否有学位证书、学位证书是否已到、学位证是否已领走、学位证领走时间、学位证领走方式

### 开发大学
1. 基本信息-户籍 、已婚、原毕业专业
2. 报名-学费来源、是否电大毕业、证书性质、认证编号、电子注册备案表编号
3. 教务-是否有录取通知书、是否如期毕业、未毕业原因、是否已有毕业证书、毕业证书是否已到、毕业证书是否已领、领走时间、领走方式、是否已填毕业生登记表、毕业信息是否已采集、毕业纸质照片是否已到我司、毕业纸质照片是否已提交院校

### 人社局培训
1. 基本信息-保险缴纳时限、学历层次
2. 报名-报考工种、报考时间、首次培训/复培、班主任、班型、授课方式
3. 教务-考试时间、考试成绩、证书发、放时间、学习实效、报考情况、报考次数、教材领取、退费、退费时间、退费途径、沟通一




## 搜索
### 成人教育
入学批次 所报院校 所报专业 是否免试 是否发放录取通知书 是否报考学位 毕业信息采集 是否延期毕业 论文性质

### 网络教育
入学批次 负责人 学校负责老师 所报层次 所报院校 所报专业 是否报考统考 统考是否我司处理

### 开发大学
入学批次 录入平台 学生来源 负责人 学校负责老师 所报层次 所报专业


import { dict as dictRequest } from '@/api/dict'

function setEnum({ commit, state }, type) {
  if (state.dict[type].length > 0) return
  dictRequest(type).then(res => {
    commit('SET_ENUM', { type, res })
  })
}
const dict = {
  state: {
    dict: {
      YesOrNoEnum: [],
      OpenOrCloseEnum: [],
      PoliticsEnum: [],
      StudentSubjectEnum: [],
      AdmitPlatformEnum: [],
      StudentLearnStyleEnum: [],
      ClassTypeEnum: [],
      FeeSourceTypeEnum: [],
      GenderTypeEnum: [],
      GraduateGatherEnum: [],
      HouseholdEnum: [],
      HuJiEnum: [],
      IdTypeEnum: [],
      LanuageEnum: [],
      LessonStyleEnum: [],
      NationEnum: [],
      ScoreResultEnum: [],
      StudentApplyLevel2Enum: [],
      StudentApplyLevelEnum: [],
      StudentDegreeLevelEnum: [],
      StudentDegreeTypeEnum: [],
      StudentPaperEnum: [],
      StudentPassEnum: [],
      StudentSourceTypeEnum: [],
      StudentStudyWayEnum: [],
      TraningTypeEnum: []
    }
  },
  mutations: {
    SET_ENUM(state, { type, res }) {
      state.dict[type] = res
    }
  },
  actions: {
    //   是/否
    YesOrNoEnum(store) {
      setEnum(store, 'YesOrNoEnum')
    },
    // 禁用/启用
    OpenOrCloseEnum(store) {
      setEnum(store, 'OpenOrCloseEnum')
    },

    // 政治面貌
    PoliticsEnum(store) {
      setEnum(store, 'PoliticsEnum')
    },

    // 学科
    StudentSubjectEnum(store) {
      setEnum(store, 'StudentSubjectEnum')
    },

    // 录入平台
    AdmitPlatformEnum(store) {
      setEnum(store, 'AdmitPlatformEnum')
    },

    // 所报学习形式
    StudentLearnStyleEnum(store) {
      setEnum(store, 'StudentLearnStyleEnum')
    },

    // 班型
    ClassTypeEnum(store) {
      setEnum(store, 'ClassTypeEnum')
    },

    // 学费来源
    FeeSourceTypeEnum(store) {
      setEnum(store, 'FeeSourceTypeEnum')
    },

    // 性别
    GenderTypeEnum(store) {
      setEnum(store, 'GenderTypeEnum')
    },

    // 毕业信息采集
    GraduateGatherEnum(store) {
      setEnum(store, 'GraduateGatherEnum')
    },

    // 户口
    HouseholdEnum(store) {
      setEnum(store, 'HouseholdEnum')
    },

    // 户籍
    HuJiEnum(store) {
      setEnum(store, 'HuJiEnum')
    },

    // 证件种类
    IdTypeEnum(store) {
      setEnum(store, 'IdTypeEnum')
    },

    // 语种
    LanuageEnum(store) {
      setEnum(store, 'LanuageEnum')
    },

    // 授课方式
    LessonStyleEnum(store) {
      setEnum(store, 'LessonStyleEnum')
    },

    // 民族
    NationEnum(store) {
      setEnum(store, 'NationEnum')
    },

    // 成绩查询
    ScoreResultEnum(store) {
      setEnum(store, 'ScoreResultEnum')
    },

    // 所报层次2
    StudentApplyLevel2Enum(store) {
      setEnum(store, 'StudentApplyLevel2Enum')
    },

    // 所报层次
    StudentApplyLevelEnum(store) {
      setEnum(store, 'StudentApplyLevelEnum')
    },

    // 学位性质
    StudentDegreeLevelEnum(store) {
      setEnum(store, 'StudentDegreeLevelEnum')
    },

    // 学位性质
    StudentDegreeTypeEnum(store) {
      setEnum(store, 'StudentDegreeTypeEnum')
    },

    // 毕业论文
    StudentPaperEnum(store) {
      setEnum(store, 'StudentPaperEnum')
    },

    // 学位分数
    StudentPassEnum(store) {
      setEnum(store, 'StudentPassEnum')
    },

    // 来源
    StudentSourceTypeEnum(store) {
      setEnum(store, 'StudentSourceTypeEnum')
    },

    // 学习形式
    StudentStudyWayEnum(store) {
      setEnum(store, 'StudentStudyWayEnum')
    },

    // 培训类型
    TraningTypeEnum(store) {
      setEnum(store, 'TraningTypeEnum')
    }
  }
}

export default dict

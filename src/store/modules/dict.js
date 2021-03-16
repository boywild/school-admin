import { dict as dictRequest } from '@/api/dict'

function setEnum({ commit, state }, type) {
  if (state[type].length > 0) return
  dictRequest(type).then(res => {
    commit('SET_ENUM', { type, res })
  })
}
const dict = {
  state: {
    YesOrNoEnum: [],
    OpenOrCloseEnum: [],
    AdmitPlatformEnum: []
  },
  mutations: {
    SET_ENUM(state, { type, res }) {
      state[type] = res
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
    // 录入平台
    AdmitPlatformEnum(store) {
      setEnum(store, 'AdmitPlatformEnum')
    }
  }
}

export default dict

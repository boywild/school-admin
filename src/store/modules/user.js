import storage from 'store'
import { login, getInfo } from '@/api/login'
import { adminLogin } from '@/api/admin'
import { ACCESS_TOKEN, PERMISSION, ADMINTYPE, USERNAME } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    permissionList: [],
    adminType: '',
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      console.log(state)
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_ADMINTYPE: (state, adminType) => {
      state.adminType = adminType
    },
    SET_PERMISSIONLIST: (state, permissionList) => {
      state.permissionList = permissionList
    },
    RESET_DATA: state => {
      state.token = ''
      state.roles = []
      state.info = {}
      state.permissionList = []
      state.adminType = ''
      // state.permission.addRouters = []
      console.log(state)
      storage.remove(ACCESS_TOKEN)
      storage.remove(PERMISSION)
      storage.remove(ADMINTYPE)
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const result = response.result
            storage.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    Login2({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        adminLogin(userInfo)
          .then(response => {
            console.log(response)
            const result = response
            storage.set(ACCESS_TOKEN, result.jsessionId, 8 * 60 * 60 * 1000)
            storage.set(PERMISSION, result.authIds || [], 7 * 24 * 60 * 60 * 1000)
            storage.set(ADMINTYPE, result.adminType, 7 * 24 * 60 * 60 * 1000)
            storage.set(USERNAME, result.name)
            commit('SET_TOKEN', result.jsessionId)
            commit('SET_NAME', { name: result.name, welcome: welcome() })
            commit('SET_INFO', result)
            commit('SET_PERMISSIONLIST', result.authIds || [])
            commit('SET_ADMINTYPE', result.adminType)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const result = response.result

            if (result.role && result.role.permissions.length > 0) {
              const role = result.role
              role.permissions = result.role.permissions
              role.permissions.map(per => {
                if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                  const action = per.actionEntitySet.map(action => {
                    return action.action
                  })
                  per.actionList = action
                }
              })
              role.permissionList = role.permissions.map(permission => {
                return permission.permissionId
              })
              commit('SET_ROLES', result.role)
              commit('SET_INFO', result)
            } else {
              reject(new Error('getInfo: roles must be a non-null array !'))
            }

            commit('SET_NAME', { name: result.name, welcome: welcome() })
            commit('SET_AVATAR', result.avatar)

            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise(resolve => {
        // logout(state.token)
        //   .then(() => {
        //     commit('SET_TOKEN', '')
        //     commit('SET_ROLES', [])
        //     commit('SET_INFO', {})
        //     commit('SET_PERMISSIONLIST', [])
        //     commit('SET_ADMINTYPE', '')
        //     storage.remove(ACCESS_TOKEN)
        //     storage.remove(PERMISSION)
        //     storage.remove(ADMINTYPE)
        //     resolve()
        //   })
        //   .catch(() => {
        //     resolve()
        //   })
        //   .finally(() => {})
        commit('RESET_DATA')
        commit('RSET_ROUTERS', null, { root: true })
        resolve()
      })
    }
  }
}

export default user

import {STATUS} from '../generator/vuex/utils/helpers'

export default {
  global: {
    state: {
      RECEIVE_STATUS: STATUS.INIT
    },
    mutations: {
      CHANGE_STATUS (state, action) {
        state['RECEIVE_STATUS'] = action
      }
    }
  }
}

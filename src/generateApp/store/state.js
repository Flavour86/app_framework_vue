import {STATUS} from '../../utils/vuexUtils/helpers'

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

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './state'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default function () {
  const store = new Vuex.Store({
    modules: mutations,
    strict: debug,
    middlewares: debug ? [createLogger()] : [],
    showBottomNav: true
  })

  if (module.hot) {
    module.hot.accept(['./state'], () => {
      const mutations = require('./state').default
      store.hotUpdate({
        modules: mutations
      })
    })
  }
  return store
}

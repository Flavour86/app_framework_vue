import './theme/css/app.css'
import Vue from 'vue'
import Router from 'vue-router'
import App from './internal/components/layout/App'
import plugins from './plugins'
import routerOptions from './router'
import storeFn from './store'
import generateStart from './generator'
import isArray from 'lodash/isArray'

Vue.config.productionTip = false
Vue.use(plugins)

/* eslint-disable no-new */
export default function entrance (config, opts = {}) {
  const {ui, plugins} = opts
  ui && Vue.use(ui)
  isArray(plugins) && plugins.forEach(plugin => {
    Vue.use(plugin)
  })
  generateStart(config)
  return new Vue({
    store: storeFn(),
    router: new Router(routerOptions),
    components: { App },
    template: '<App />'
  })
}

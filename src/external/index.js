import iView from 'iview'
import 'iview/dist/styles/iview.css'

let coms = {}
const request = require.context('./components', true, /.*\.vue/)

request.keys().forEach(path => {
  const module = request(path).default

  path = path.replace(/(\.\/|\.vue)/gi, '').split('/')
  const fileName = path[0]

  coms[fileName] = module
})

function installExternalComponents (Vue) {
  Object.keys(coms).forEach((key) => {
    Vue.component(key, coms[key])
  })
}

export default {
  ui: iView,
  externalComponents: installExternalComponents
}

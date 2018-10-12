import * as Vux from 'vux'

let coms = {
  ...Vux
}
const requestCommon = require.context('../common', false, /^((?!index).)*\.vue$/)
const requestComponents = require.context('./components', false, /^((?!index).)*\.vue/)

;[...requestCommon.keys(), ...requestComponents.keys()].forEach(path => {
  let module
  try {
    module = requestCommon(path).default
  } catch (e) {
    module = requestComponents(path).default
  }

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
  // ui: Vux,
  install: installExternalComponents
}

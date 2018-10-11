import * as Vux from 'vux'
// import 'iview/dist/styles/iview.css'
const {Video, ...other} = Vux

let coms = {
  ...other,
  XVideo: Video
}
const request = require.context('../common', true, /.*\.vue/)
const request1 = require.context('./components', true, /.*\.vue/)

;[...request.keys(), ...request1.keys()].forEach(path => {
  let module
  try {
    module = request(path).default
  } catch (e) {
    module = request1(path).default
  }

  path = path.replace(/(\.\/|\.vue)/gi, '').split('/')
  const fileName = path[0]

  coms[fileName] = module
})
console.log(coms)
function installExternalComponents (Vue) {
  Object.keys(coms).forEach((key) => {
    Vue.component(key, coms[key])
  })
}

export default {
  // ui: Vux,
  externalComponents: installExternalComponents
}

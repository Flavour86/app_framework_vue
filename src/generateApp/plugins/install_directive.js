let externalDirective = {}
const request = require.context('../internal/directives', true, /.*\.js$/)

request.keys().forEach(path => {
  const module = request(path).default
  path = path.replace(/(\.\/|\.js)/gi, '').split('/')
  const fileName = path[0]
  externalDirective[fileName] = module
})

export default function installCustomDirectives (Vue) {
  Object.keys(externalDirective).forEach((key) => {
    Vue.directive(key, externalDirective[key])
  })
}

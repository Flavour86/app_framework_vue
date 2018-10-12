let getterHandler = {}
const request = require.context('./', false, /^((?!index).)*\.js$/)

request.keys().forEach(path => {
  const module = request(path)
  path = path.replace(/(\.\/|\.js)/gi, '').split('/')
  const fileName = path[0]
  getterHandler[fileName] = module
})

export default getterHandler

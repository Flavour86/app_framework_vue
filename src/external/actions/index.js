let actionsHandler = {}
const request = require.context('./', false, /^((?!index).)*\.js$/)

request.keys().forEach(path => {
  const module = request(path)
  path = path.replace(/(\.\/|\.js)/gi, '').split('/')
  const fileName = path[0]
  actionsHandler[fileName] = module
})

export default actionsHandler

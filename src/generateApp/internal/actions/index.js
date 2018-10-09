let actionsHandler = {}
const request = require.context('./', true, /^((?!index).)*\.js$/)

request.keys().forEach(path => {
  const module = request(path)

  actionsHandler = {
    ...actionsHandler,
    ...module
  }
})

export default actionsHandler

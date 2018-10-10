let getterHandler = {}
const request = require.context('./', true, /^((?!index).)*\.js$/)

request.keys().forEach(path => {
  const module = request(path)

  getterHandler = {
    ...getterHandler,
    ...module
  }
})

export default getterHandler

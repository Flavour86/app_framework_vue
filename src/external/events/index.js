/**
 * Created by Administrator on 2018/9/17.
 */
let eventHandler = {}
const request = require.context('./', false, /^((?!index).)*\.js$/)

request.keys().forEach(path => {
  const module = request(path)
  path = path.replace(/(\.\/|\.js)/gi, '').split('/')
  const fileName = path[0]
  eventHandler[fileName] = module
})

export default eventHandler

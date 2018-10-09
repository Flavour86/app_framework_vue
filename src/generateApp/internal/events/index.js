/**
 * Created by Administrator on 2018/9/17.
 */
let eventHandler = {}
const request = require.context('./', true, /^((?!index).)*\.js$/)

request.keys().forEach(path => {
  const module = request(path)

  eventHandler = {
    ...eventHandler,
    ...module
  }
})

export default eventHandler

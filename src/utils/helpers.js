const camelizeRE = /-(\w)/g
export const noop = function () {}
/**
 * dom 树加载完的回调函数
 * @param cb <function>
 */
export const completed = (cb) => {
  cb = cb || noop
  document.removeEventListener('DOMContentLoaded', cb)
  window.removeEventListener('load', cb)
}
/**
 * 错误处理函数
 * @param msg <String>
 */
export const error = msg => {
  throw new Error(msg)
}
/**
 * 警告处理函数
 * @param msg <String>
 */
export const warn = msg => {
  console.warn(msg)
}
/**
 * 首字母大写
 * @param str <String>
 * @return str <String>
 */
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
/**
 * 连字符转驼峰
 * @param str <String>
 * @return str <String>
 */
export const camelize = str => str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')

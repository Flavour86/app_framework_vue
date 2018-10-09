export const noop = function () {}

export const completed = (cb) => {
  cb = cb || noop
  document.removeEventListener('DOMContentLoaded', cb)
  window.removeEventListener('load', cb)
}

export const error = msg => {
  throw new Error(msg)
}

export const warn = msg => {
  console.warn(msg)
}

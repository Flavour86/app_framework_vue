import {getInternalLibrary} from '../../utils'

export default function generateMethods (config) {
  let methods = {}
  let internalLibrary
  const {components, methods: originMethods} = config
  originMethods.forEach(m => {
    const key = m.value
    internalLibrary = getInternalLibrary(m.type)
    !methods[key] && (methods[key] = internalLibrary[key])
  })
  components.forEach(com => {
    const {on} = com
    if (on) {
      Object.keys(on).forEach(e => {
        if (on[e]) {
          const key = on[e].value
          internalLibrary = getInternalLibrary(on[e].type)
          !methods[key] && (methods[key] = internalLibrary[key])
        }
      })
    }
  })
  console.log(methods)
  return methods
}

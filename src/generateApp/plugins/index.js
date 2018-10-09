import installExternalComponents from './install_components'
import installCustomDirectives from './install_directive'

export default {
  install: (Vue, opts = {}) => {
    installExternalComponents(Vue)
    installCustomDirectives(Vue)
  }
}

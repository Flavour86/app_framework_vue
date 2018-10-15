import {INIT_TYPE_MAP, DATA_TYPE} from '../../utils'

export default function generateDataFn (page) {
  const { variable } = page
  return function (vm) {
    let data = {}
    const pageVars = variable.filter(vari => !vari.isShare)
    pageVars.reduce((dataObject, vari) => {
      if (vari['type'] === DATA_TYPE.ROUTER) {
        dataObject[vari.props] = vm.$route.params
      } else {
        dataObject[vari.props] = vari.value || INIT_TYPE_MAP[vari['type']]
      }
      return dataObject
    }, data)
    return data
  }
}

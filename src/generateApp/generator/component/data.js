import {INIT_TYPE_MAP} from '../../utils'

export default function generateDataFn (page) {
  const { variable } = page
  return function () {
    let data = {}
    const pageVars = variable.filter(vari => !vari.isShare)
    pageVars.reduce((dataObject, vari) => {
      dataObject[vari.props] = vari.value || INIT_TYPE_MAP[vari['type']]
      return dataObject
    }, data)
    return data
  }
}

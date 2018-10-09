import {INITTYPEMAP} from '../../utils'

export default function generateDataFn (page) {
  const { variable } = page
  return function () {
    let data = {}
    const pageVars = variable.filter(vari => !vari.isShare)
    pageVars.reduce((dataObject, vari) => {
      dataObject[vari.props] = vari.value || INITTYPEMAP[vari['type']]
      return dataObject
    }, data)
    return data
  }
}

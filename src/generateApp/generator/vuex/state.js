import {INITTYPEMAP} from '../../utils'

export default function generateState (page) {
  const {variable} = page
  let shareVari = variable.filter(vari => vari.isShare)
  let pageState = {}
  shareVari.reduce((state, vari) => {
    pageState[vari.props] = vari.value || INITTYPEMAP[vari['type']]
    return pageState
  }, pageState)
  return pageState
}

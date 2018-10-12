import {INIT_TYPE_MAP} from '../../utils'

export default function generateState (page) {
  const {variable} = page
  let shareVari = variable.filter(vari => vari.isShare)
  let pageState = {}
  shareVari.reduce((state, vari) => {
    pageState[vari.props] = vari.value || INIT_TYPE_MAP[vari['type']]
    return pageState
  }, pageState)
  return pageState
}

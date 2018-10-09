const initTypeMap = {
  'Array': [],
  'Object': {},
  'String': '',
  'Number': 0
}
export default function generateState (page) {
  const {variable} = page
  let shareVari = variable.filter(vari => vari.isShare)
  let pageState = {}
  shareVari.forEach(vari => {
    pageState[vari.props] = vari.value || initTypeMap[vari['type']]
  })
  return pageState
}

import { mapGetters } from 'vuex'
import {warn} from '@/utils/helpers'
import {GETTER_FIX} from '../../utils'

let stateForGetter = {}

export const getStateForGetter = () => stateForGetter

export default function generateCompute (page) {
  let { variable, name } = page
  let compute = {}
  variable = variable.filter(vari => vari.isShare)
  variable.reduce((computes, vari) => {
    if (!computes[vari.props]) {
      computes[vari.props] = `${name}${vari.getter}${GETTER_FIX}`
    } else {
      warn(`Duplicate variable key ${vari.props}, please check`)
    }
    collectStateForGetter(name, vari)
    return computes
  }, compute)

  return {
    ...mapGetters(compute)
  }
}

function collectStateForGetter (nameSpace, variableItem) {
  if (!variableItem) return
  const {props, getter} = variableItem
  stateForGetter[nameSpace] = stateForGetter[nameSpace] ? {
    ...stateForGetter[nameSpace]
  } : {}
  if (
    props &&
    !stateForGetter[nameSpace][props]
  ) {
    stateForGetter[nameSpace][props] = getter
  }
}

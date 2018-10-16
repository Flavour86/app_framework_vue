import {getBinds} from './action'
import handleAction from './utils/handleAction'
import isObject from 'lodash/isObject'

export default function generateMutation (page) {
  const {name} = page
  let mutations = {}
  const binds = getBinds()[name]
  isObject(binds) && Object.keys(binds).forEach(type => {
    if (!mutations[type]) {
      mutations[type] = handleAction((state, action, rootState) => {
        state[binds[type]] = action
      })
    }
  })
  return mutations
}

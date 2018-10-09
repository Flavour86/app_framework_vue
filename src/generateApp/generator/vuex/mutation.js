import {getBinds} from './action'
import handleAction from './utils/handleAction'

export default function generateMutation (page) {
  let mutations = {}
  const binds = getBinds()
  Object.keys(binds).forEach(type => {
    if (!mutations[type]) {
      mutations[type] = handleAction((state, action) => {
        state[type] = action
      })
    }
  })
  return mutations
}

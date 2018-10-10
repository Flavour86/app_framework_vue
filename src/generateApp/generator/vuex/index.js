import state from '../../store/state'
import generateState from './state'
import generateAction from './action'
import generateMutation from './mutation'
import generateGetters from './getters'

export default function generateVuex (config, vxModules) {
  const {pages} = config
  pages.forEach(page => {
    const {name} = page
    state[name] = {
      state: generateState(page),
      actions: generateAction(page),
      mutations: generateMutation(page),
      getters: generateGetters(page)
    }
  })
}

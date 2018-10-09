import {noop} from '@/utils/helpers'
import isArray from 'lodash/isArray'

function generateEvent (onConfig, vm, config) {
  if (!onConfig.generateEvent) {
    const {variable} = config
    Object.keys(onConfig).forEach(e => {
      const args = variable.filter(vari => onConfig[e].params.indexOf(vari.id) > -1).map(vari => vari.value)
      const value = onConfig[e].value
      onConfig[e] = (vm[value] || noop).bind(vm, ...args)
    })
    onConfig.generateEvent = true
  }

  return onConfig
}

function generateComs (h, components, vm, config) {
  return components.map(com => {
    let {name, slot, on, ...other} = com
    if (on) {
      on = generateEvent(on, vm, config)
      other.on = on
    }
    if (slot.type === 'components' && isArray(slot.value)) {
      return h(name, {...other}, generateComs(h, slot.value, vm, config))
    } else {
      return h(name, {...other}, slot.value)
    }
  })
}

export default function generateRender (config, vm) {
  const {components} = config
  return h => {
    return h('render-component', generateComs(h, components, vm, config))
  }
}

import {noop} from '@/utils/helpers'
import isArray from 'lodash/isArray'
import generateProps from './props'

function generateEvent (onConfig, vm, config) {
  if (!onConfig.generateEvent) {
    const {variable} = config
    Object.keys(onConfig).forEach(e => {
      const args = onConfig[e].params.map(id => variable.filter(vari => vari.id === id)[0]).map(vari => vari.isShare ? vm[vari.props] : vari.value)
      const value = onConfig[e].value
      onConfig[e] = (vm[value] || noop).bind(vm, ...args)
    })
    onConfig.generateEvent = true
  }

  return onConfig
}

function generateComs (h, components, vm, config) {
  return components.map(com => {
    let {name, slot, on, props, ...other} = com
    if (on) {
      on = generateEvent(on, vm, config)
      other.on = on
    }
    if (props) {
      other.props = generateProps(props, vm, config)
    }
    if (slot) {
      if (slot.type === 'components' && isArray(slot.value)) {
        return h(name, other, generateComs(h, slot.value, vm, config))
      } else {
        return h(name, other, slot.value)
      }
    }
    return h(name, other)
  })
}

export default function generateRender (config, vm) {
  const {components} = config
  return h => {
    return h('render-component', generateComs(h, components, vm, config))
  }
}

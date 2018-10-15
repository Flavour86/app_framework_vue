import {noop} from '@/utils/helpers'
import isArray from 'lodash/isArray'
import generateProps from './props'

function generateEvent (onConfig, vm, config) {
  if (!onConfig.generateEvent) {
    const {variable} = config
    Object.keys(onConfig).forEach(e => {
      const args = onConfig[e].params.map(id => variable.filter(vari => vari.id === id)[0]).filter(vari => vari !== undefined).map(vari => vari.isShare ? vm[vari.props] : vari.value)
      const value = onConfig[e].value
      onConfig[e] = (vm[value] || noop).bind(vm, ...args)
    })
    onConfig.generateEvent = true
  }

  return onConfig
}

function generateComs (h, components, vm, page) {
  const coms = components.map(com => {
    let {name, slot, on, props, ...other} = com
    if (on) {
      on = generateEvent(on, vm, page)
      other.on = on
    }
    if (props) {
      other.props = generateProps(props, vm, page)
    }
    if (slot) {
      if (slot.type === 'components' && isArray(slot.value)) {
        return h(name, other, generateComs(h, slot.value, vm, page))
      } else {
        return h(name, other, slot.value)
      }
    }
    return h(name, other)
  })
  return coms
}

export default function generateRender (page, vm) {
  const {components} = page
  return h => {
    return h('render-component', generateComs(h, components, vm, page))
  }
}

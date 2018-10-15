import {noop} from '@/utils/helpers'
import isArray from 'lodash/isArray'
import generateProps from './props'

function generateEvent (onConfig, vm, config) {
  if (!onConfig.generateEvent) {
    const {variable} = config
    Object.keys(onConfig).forEach(e => {
      const args = isArray(onConfig[e].params) ? onConfig[e].params.map(id => variable.filter(vari => vari.id === id)[0]).filter(vari => vari !== undefined).map(vari => vari && vari.isShare ? vm[vari.props] : vari.value) : []
      const value = onConfig[e].value
      /* eslint-disable */
      onConfig[e] = function (...argv) {
        const {params} = this.$route
        ;(vm[value] || noop).apply(vm, [params, ...args, ...argv])
      }.bind(vm)
    })
    onConfig.generateEvent = true
  }

  return onConfig
}

function generateComs (h, components, vm, config) {
  return components.map(com => {
    let {name, children, on, props, ...other} = com
    if (on) {
      on = generateEvent(on, vm, config)
      other.on = on
    }
    if (props) {
      other.props = generateProps(props, vm, config)
    }
    if (children) {
      if (children.type === 'components' && isArray(children.value)) {
        return h(name, other, generateComs(h, children.value, vm, config))
      } else {
        return h(name, other, children.value)
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

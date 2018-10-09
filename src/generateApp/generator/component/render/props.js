import {error} from '@/utils/helpers'
import isObject from 'lodash/isObject'
// import isString from 'lodash/isString'
import {globalConfig} from '../../../globalConfig'
import {MODE} from '../../../utils'

export default function generateProps (props, page = {}) {
  if (!props || !isObject(props)) {
    error('the props configuration is illegally！')
  }
  const {variable} = page
  Object.keys(props).forEach(prop => {
    if (globalConfig.mode === MODE.CONFIGURATION) {
      if (props[prop] && isObject(props[prop])) {
        props[prop] = variable.filter(vari => vari.id === props[prop].value)[0].value
      }
    }
  })
  return props
}

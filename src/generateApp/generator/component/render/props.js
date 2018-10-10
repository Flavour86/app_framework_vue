import {error} from '@/utils/helpers'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import {globalConfig} from '../../../globalConfig'
import {MODE} from '../../../utils'

export default function generateProps (originProps, vm, page = {}) {
  if (!originProps || !isObject(originProps)) {
    error('the props configuration is illegally！')
  }

  const {variable} = page
  let props = {}
  Object.keys(originProps).forEach(prop => {
    if (globalConfig.mode === MODE.CONFIGURATION) {
      if (originProps[prop] && isObject(originProps[prop])) {
        const varis = variable.filter(vari => vari.id === originProps[prop].value)[0]
        if (varis.isShare) {
          props[prop] = vm[varis.props]
        } else {
          props[prop] = varis.value
        }
      } else if (originProps[prop] && isString(originProps[prop])) {
        props[prop] = originProps[prop]
      }
    }
  })
  return props
}

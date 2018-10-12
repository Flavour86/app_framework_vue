import {error, camelize, capitalize} from '@/utils/helpers'
import {isReservedTag} from './utils'
import {globalConfig} from '../../globalConfig'

export default function generateComponents (components) {
  if (!components) {
    error('missing parameter components!')
  }
  const {ui} = globalConfig
  let componentsConfig = {}
  components.map(com => com.name).reduce((components, name) => {
    let {com, comName} = loadComponent(name)
    if (com && comName) {
      components[comName] = com
    }
    return components
  }, componentsConfig)
  return componentsConfig

  function loadComponent (name) {
    if (!isReservedTag(name)) {
      name = capitalize(camelize(name))
      console.log(name)
      if (name) {
        let com
        try {
          com = require(`ui/${ui}/${name}`)
        } catch (e) {
          try {
            com = require(`ui/common/${name}`)
          } catch (e) {
            com = require('vux')[name]
          }
        }
        return {
          com,
          comName: name
        }
      }
    }
    return {}
  }
}

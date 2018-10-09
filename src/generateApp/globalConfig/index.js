import assign from 'lodash/assign'

export let globalConfig = {
  mode: 'configuration'
}

export const mergeConfig = meConfig => {
  globalConfig = assign(globalConfig, meConfig)
  return globalConfig
}

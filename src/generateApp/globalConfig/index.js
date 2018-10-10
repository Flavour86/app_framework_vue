import assign from 'lodash/assign'

export let globalConfig = {
  // 默认为配置的模式
  mode: 'configuration'
}

export const mergeConfig = meConfig => {
  globalConfig = assign(globalConfig, meConfig)
  return globalConfig
}

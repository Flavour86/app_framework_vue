import assign from 'lodash/assign'

export let globalConfig = {
  // 默认为配置的模式
  mode: 'configuration',
  // 默认的ui为vux
  ui: 'vux'
}

export const mergeConfig = meConfig => {
  globalConfig = assign(globalConfig, meConfig)
  return globalConfig
}

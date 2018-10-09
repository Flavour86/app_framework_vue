import normalizeAction from './vuex/action'

export default config => {
  if (!config) return

  config = normalizeAction(config)
  config.parsered = true
  return config
}

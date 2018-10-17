export const ACTIONS_TYPE = {
  ACTION: 'action',
  EVENT: 'event'
}
export const SLOT_TYPE = {
  COMPONENT: 'components',
  TEXT: 'text'
}
export const MODE = {
  DEVELOPMENT: 'development',
  CONFIGURATION: 'configuration'
}
export const DATA_TYPE = {
  ARRAY: 'Array',
  OBJECT: 'Object',
  STRING: 'String',
  NUMBER: 'Number',
  ROUTER: 'Router'
}
export const INIT_TYPE_MAP = {
  [DATA_TYPE.ARRAY]: [],
  [DATA_TYPE.OBJECT]: {},
  [DATA_TYPE.STRING]: '',
  [DATA_TYPE.NUMBER]: 0
}

export const GETTER_FIX = 'Getter'
export const DEFAULT_GETTER = 'immediate'
export const DEFAULT_OPTIONS = {
  mode: 'configuration',
  ui: 'vux',
  mobile: true
}

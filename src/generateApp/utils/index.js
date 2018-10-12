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

export const INIT_TYPE_MAP = {
  'Array': [],
  'Object': {},
  'String': '',
  'Number': 0
}

export const GETTER_FIX = 'Getter'
export const DEFAULT_GETTER = 'immediate'
export const DEFAULT_OPTIONS = {
  mode: 'configuration',
  ui: 'vux',
  mobile: true
}

export const getInternalLibrary = type => require(`../internal/${type}s`)
export const ACTIONSTYPE = {
  ACTION: 'action',
  EVENT: 'event'
}
export const SLOTTYPE = {
  COMPONENT: 'components',
  TEXT: 'text'
}
export const MODE = {
  DEVELOPMENT: 'development',
  CONFIGURATION: 'configuration'
}

export const INITTYPEMAP = {
  'Array': [],
  'Object': {},
  'String': '',
  'Number': 0
}

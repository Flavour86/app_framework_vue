import isArray from 'lodash/isArray'
import {warn} from '@/utils/helpers'
import createAction from './utils/createAction'
// import actions from 'external/actions'
import {ACTIONS_TYPE, SLOT_TYPE} from '../../utils'

let binds = {}
export function getBinds () {
  return binds
}
export default function generateAction (page) {
  const {events, components, variable, name} = page
  if (!isArray(events) || !isArray(components)) {
    warn('the fields events or components is illegally！')
    return {}
  }
  let pageActions = {}
  let actionTypeEvents = []
  // 从page的事件中集成action
  events.forEach(eve => {
    if (eve.value && isArray(eve.value)) {
      eve.value.forEach(val => {
        if (val.type === ACTIONS_TYPE.ACTION) {
          actionTypeEvents.push(val)
        }
      })
    }
  })
  actionTypeEvents.forEach(action => {
    let actionFn
    try {
      actionFn = require(`external/actions/${action.value}`)
    } catch (e) {}
    !pageActions[action.value] && (pageActions[action.value] = createAction(action.value, actionFn))
    collectBind(name, action)
  })
  generateActionByCom(components)
  return pageActions

  function generateActionByCom (coms) {
    coms.forEach(com => {
      const {on, slot} = com
      // 从组件监听的事件中集成action
      on && Object.keys(on).forEach(key => {
        if (on[key].type === ACTIONS_TYPE.ACTION && !pageActions[on[key].value]) {
          const actionFn = require(`external/actions/${on[key].value}`)
          pageActions[on[key].value] = createAction(on[key].value, actionFn)
        }
        collectBind(name, on[key])
      })

      // 从子组件监听的事件中集成action
      if (slot && slot.type === SLOT_TYPE.COMPONENT && isArray(slot.value)) {
        generateActionByCom(slot.value)
      }
    })
  }

  function collectBind (nameSpace, action) {
    binds[nameSpace] = binds[nameSpace] ? {
      ...binds[nameSpace]
    } : {}
    if (action.bind && !binds[nameSpace][action.value]) {
      binds[nameSpace][action.value] = variable.filter(vari => vari.isShare && vari.id === action.bind).map(v => v.props)[0]
    }
  }
}

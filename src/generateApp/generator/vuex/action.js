import isArray from 'lodash/isArray'
import {warn} from '@/utils/helpers'
import createAction from './utils/createAction'
import actions from '../../internal/actions'
import {ACTIONSTYPE, SLOTTYPE} from '../../utils'

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
        if (val.type === ACTIONSTYPE.ACTION) {
          actionTypeEvents.push(val)
        }
      })
    }
  })
  actionTypeEvents.forEach(action => {
    !pageActions[action.value] && (pageActions[action.value] = createAction(action.value, actions[action.value]))
    collectBind(name, action)
  })
  generateActionByCom(components)
  return pageActions

  function generateActionByCom (coms) {
    coms.forEach(com => {
      const {on, slot} = com
      // 从组件监听的事件中集成action
      on && Object.keys(on).forEach(key => {
        if (on[key].type === ACTIONSTYPE.ACTION && !pageActions[on[key].value]) {
          pageActions[on[key].value] = createAction(on[key].value, actions[on[key].value])
        }
        collectBind(name, on[key])
      })

      // 从子组件监听的事件中集成action
      if (slot.type === SLOTTYPE.COMPONENT && isArray(slot.value)) {
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

import events from '../../internal/events'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import { mapActions } from 'vuex'
import {ACTIONSTYPE, SLOTTYPE} from '../../utils'

export default function generateMethods (page) {
  let methods = {}
  let actions = []
  const {components, methods: originMethods, events: eventsConfig} = page
  ;[components, originMethods, eventsConfig].forEach((config, i) => {
    const isComponents = i === 0
    generateByConfig(config, isComponents)
  })

  return {
    ...mapActions(actions),
    ...methods
  }

  function generateByConfig (config, isComponents) {
    // 处理methods 与 events
    if (isArray(config) && !isComponents) {
      config.forEach(item => {
        item.type === ACTIONSTYPE.ACTION ? setAction(item) : setEvent(item)
      })
    } else {
      // 处理组件所监听的事件
      generateByComs(config)
    }
  }

  function generateByComs (coms) {
    if (isArray(coms)) {
      coms.forEach(com => {
        const {on, slot} = com
        isObject(on) && Object.keys(on).forEach(e => {
          if (on[e]) {
            on[e].type === ACTIONSTYPE.ACTION ? setAction(on[e]) : setEvent(on[e])
          }
        })
        if (slot && slot.type === SLOTTYPE.COMPONENT) {
          generateByComs(slot.value)
        }
      })
    }
  }

  function setAction (action) {
    if (action && action.value && !actions.includes(action.value)) {
      actions.push(action.value)
    }
  }

  function setEvent (event) {
    if (event && event.value && !methods[event.value]) {
      methods[event.value] = events[event.value]
    }
  }
}

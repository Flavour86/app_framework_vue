import isArray from 'lodash/isArray'

export default function generateLifecycle (page) {
  let lifecycle = {}
  const {events} = page
  events && events.reduce((lifecycle, event) => {
    let eventValue = []
    if (event.value && isArray(event.value)) {
      event.value.reduce((eventValue, val) => {
        val.value && eventValue.push(val.value)
        return eventValue
      }, eventValue)
    }
    if (event.eventType && !lifecycle[event.eventType]) {
      lifecycle[event.eventType] = function () {
        for (let i = 0; i < eventValue.length; i++) {
          // todo 传参功能
          this[eventValue[i]]()
        }
      }
    }
    return lifecycle
  }, lifecycle)
  return lifecycle
}

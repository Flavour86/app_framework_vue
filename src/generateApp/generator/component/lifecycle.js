import isArray from 'lodash/isArray'

export default function generateLifecycle (page) {
  let lifecycle = {}
  const {events, variable} = page
  events && events.reduce((lifecycle, event) => {
    let eventValue = []
    if (event.value && isArray(event.value)) {
      event.value.reduce((eventValue, val) => {
        val.value && eventValue.push({
          fnName: val.value,
          fnParams: val.params || []
        })
        return eventValue
      }, eventValue)
    }
    if (event.eventType && !lifecycle[event.eventType]) {
      lifecycle[event.eventType] = function () {
        for (let i = 0; i < eventValue.length; i++) {
          let args = variable.filter(vari => eventValue[i].fnParams.indexOf(vari.id) > -1).map(vari => this[vari.props])
          this[eventValue[i].fnName].apply(this, args)
        }
      }
    }
    return lifecycle
  }, lifecycle)
  return lifecycle
}

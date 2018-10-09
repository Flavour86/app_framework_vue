import entrance from './generateApp'
import parserStart from './normalizer'
import {ui, externalComponents} from './external'
let config = require('../mock/config.json')
config = parserStart(config)

entrance(config, {
  ui: ui,
  plugins: [
    externalComponents
  ]
}).$mount('#app')

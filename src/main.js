import entrance from './generateApp'
import parserStart from './normalizer'
import {ui, externalComponents} from './external/vux/'
import('../mock/config.json').then(config => {
  config = parserStart(config)

  entrance(config, {
    ui: ui,
    plugins: [
      externalComponents
    ]
  }).$mount('#app')
})

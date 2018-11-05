import entrance from './generateApp'
import parserStart from './normalizer'
import ui from './ui/vux/'
import('../mock/config.json').then(config => {
  config = parserStart(config)

  entrance(config, {
    mode: 'configuration', // 配置模式111
    plugins: [
      ui
    ]
  }).$mount('#app')
})

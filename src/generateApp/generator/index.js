import { routes } from '../router'
import {error, warn} from '@/utils/helpers'
import generateRouter from './router'
import generateVuex from './vuex'
import {mergeConfig} from '../globalConfig'

export default function generateStart (config) {
  if (!config) {
    error('the configs is not find!')
  }

  if (!config.parsered) {
    warn('config is not parse yet!')
    return
  }
  mergeConfig({
    mode: config.mode
  })
  generateRouter(config, routes)
  generateVuex(config)
}

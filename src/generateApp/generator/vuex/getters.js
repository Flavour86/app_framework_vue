import { getStateForGetter } from '../component/compute'
import isObject from 'lodash/isObject'
import {GETTER_FIX, DEFAULT_GETTER} from '../../utils'
import handleGetter from '@/utils/vuexUtils/handleGetter'
// import getterHandler from 'external/getters'

export default function generateGetters (page) {
  const {name} = page
  let pageGetters = {}
  const stateForGetter = getStateForGetter()[name]
  isObject(stateForGetter) && Object.keys(stateForGetter).reduce((getters, key) => {
    const getterKey = `${name}${stateForGetter[key] || DEFAULT_GETTER}${GETTER_FIX}`
    const getterHandler = require(`external/getters/${stateForGetter[key] || DEFAULT_GETTER}`)
    if (!getters[getterKey]) {
      getters[getterKey] = handleGetter(getterHandler, key)
    }
    return getters
  }, pageGetters)
  return pageGetters
}

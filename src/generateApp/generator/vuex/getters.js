import { getStateForGetter } from '../component/compute'
import isObject from 'lodash/isObject'
import {GETTERFIX} from '../../utils'
import handleGetter from './utils/handleGetter'
import getterHandler from '../../internal/getters'

export default function generateGetters (page) {
  const {name} = page
  let pageGetters = {}
  const stateForGetter = getStateForGetter()[name]
  isObject(stateForGetter) && Object.keys(stateForGetter).reduce((getters, key) => {
    const getterKey = `${name}${stateForGetter[key]}${GETTERFIX}`
    const handlerKey = `${stateForGetter[key]}${GETTERFIX}`
    if (!getters[getterKey]) {
      getters[getterKey] = handleGetter(getterHandler[handlerKey], key)
    }
    return getters
  }, pageGetters)
  return pageGetters
}

import { $bus } from '../../utils'

const initMixin = {
  methods: {
    showMessage ($route, options) {
      $bus.$emit('showToast', options)
    }
  }
}

export default initMixin

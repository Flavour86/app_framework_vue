const initMixin = {
  methods: {
    showMessage (options) {
      console.log(options, this)
      this.$emit('showToast', options)
    }
  }
}

export default initMixin

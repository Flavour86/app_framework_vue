<template>
  <div class="custom" v-html="html" v-script="script" :style="'margin-top:' + mr + 'px'"></div>
</template>

<script>
export default {
  name: 'Custom',
  props: {
    html: {
      type: String,
      default: ''
    },
    script: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mr: 15
    }
  }
}
</script>

<template>
  <div>
    aaa
  </div>
</template>

<script>
export default {
  name: 'CommonDetail',
  props: {
    dataSour: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    console.log(this.dataSour, '22')
  }
}
</script>

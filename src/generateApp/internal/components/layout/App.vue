<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <!-- 这里不会被keepalive -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!--<z-toast text="aaa" type="success" :value="value" />-->
    <z-loading />
    <z-toast :value="value" :text="text" :width="width" :height="height" :time="time" :type="type" :isShowMask="isShowMask" />
  </div>
</template>

<script>
// import ZToast from '../common/toast.vue'
// import ZLoading from '../common/loading.vue'
export default {
  name: 'App',
  data () {
    return {
      value: false,
      text: null,
      width: null,
      height: null,
      time: null,
      type: null,
      isShowMask: null
    }
  },
  mounted () {
    this.$on('showToast', options => {
      console.log(11, options)
      Object.assign(this, options)
    })
  }
}
</script>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>

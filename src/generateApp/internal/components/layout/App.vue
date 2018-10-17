<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <!-- 这里不会被keepalive -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!--<z-toast text="aaa" type="success" :value="value" />-->
    <z-loading />
    <z-toast :value="isShowToast" :text="text" :width="width" :height="height" :time="time" :type="type" :isShowMask="isShowMask" />
  </div>
</template>

<script>
import {$bus} from '../../../utils'
export default {
  name: 'App',
  data () {
    return {
      isShowToast: false,
      text: null,
      width: null,
      height: null,
      time: null,
      type: null,
      isShowMask: null
    }
  },
  mounted () {
    $bus.$on('showToast', options => {
      Object.assign(this, options)
    })
    $bus.$on('toastHide', val => {
      this.isShowToast = val
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

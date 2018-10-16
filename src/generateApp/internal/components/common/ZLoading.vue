<template>
  <z-toast type="text" :value="value" height="95px">
    <div class="donut"></div>
  </z-toast>
</template>
<script>
export default {
  name: 'ZLoading',
  data () {
    return {
      value: true
    }
  }
}
</script>
<style>
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.donut {
  display: inline-block;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
}
</style>

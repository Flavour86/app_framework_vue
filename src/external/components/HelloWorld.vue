<template>
  <div class="hello">
    <div v-if="!!dataList.length">
      <div v-for="(item, index) in dataList" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.des }}</p>
      </div>
    </div>
    <div v-else class="noDate">
      数据加载中....
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Welcome to Your Vue.js App'
    },
    msg1: {
      type: String,
      default: 'Essential Links'
    },
    msg2: {
      type: String,
      default: 'Ecosystem'
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    dataList (newVal, oldVal) {
      console.log(newVal, oldVal, 'watch')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

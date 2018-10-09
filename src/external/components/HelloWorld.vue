<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msg1 }}</h2>
    <h2>{{ msg2 }}</h2>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="articleContent" v-if="!!Object.keys(dataSour).length">
    <div class="title">
      {{dataSour.title}}
    </div>
    <div class="sourceTitle">
      {{dataSour.meta.name}}
    </div>
    <div class="content" v-html="dataSour.nDetail"></div>
  </div>
</template>

<script>
export default {
  name: 'CDetail',
  props: {
    dataSour: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
  .articleContent{
    width: 100%;
    position: absolute;
    left:0;
    top: 56px;
    bottom: 0;
    padding: 0 10px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .title{
    font-size: 18px;
  }
  .sourceTitle{
    font-size: 14px;
    color: #999;
    padding-top: 6px;
  }
  .content{
    padding-top: 0px;
  }
</style>

<template>
  <div id="app">
        <one></one>
  </div>
</template>

<script>
  import Aside from '@/components/aside/aside'
  import one from '@/components/resume/pageDefault'

  export default {
    name:'App',
    components:{
      'Aside':Aside,
      'one':one,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    .aside
      background: #00c091
      top:40%
      left:86%
</style>


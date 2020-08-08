<template>
  <div id="app">
    <Aside class="aside"></Aside>
        <one></one>
  </div>
</template>

<script>
  import Aside from '@/components/aside/aside'
  import one from '@/components/resume/pageDefault'
  import two from '@/components/resume/pageDefault'
  import three from '@/components/resume/pageDefault'
  export default {
    name:'App',
    components:{
      'Aside':Aside,
      'one':one,
      'two':two,
      'three':three
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


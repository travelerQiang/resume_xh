<template>
  <div id="app">
    <Aside class="aside"></Aside>
      <div id="main">
        <one></one>
      </div>
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
    padding :30px
    .aside
      background: #00c091
      top:80px
      left:1420px
    .main
      float: left
      background-color: #ffffff
      position: relative
      left: 220px
      width: 880px
      height: 1377px
      margin-top: 30px
      margin-left: 10px
      box-shadow: 3px 3px 15px gray
</style>


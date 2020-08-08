<template>
  <div id="app">
    <three></three>
  </div>
</template>

<script>
    import Aside from '@/components/aside/aside'
    import three from '@/components/resume/pageThird'
    export default {
        name:'App',
        components:{
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


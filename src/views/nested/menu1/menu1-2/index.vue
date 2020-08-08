<template>
  <div id="app">
    <two></two>
  </div>
</template>

<script>
    import two from '@/components/resume/pageSecond'
    export default {
        name:'App',
        components:{
            'two':two
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


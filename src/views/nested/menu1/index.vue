<template>
  <div id="app" style="padding:30px;">
    <Aside class="aside"></Aside>
    <el-alert :closable="false" id="model" class="clearfix">
      <router-view />
    </el-alert>
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
  #model
    width:930px
    padding:0px
    left:8%
    border-radius: 4px
    background-color rgba(255,255,255,1)
</style>

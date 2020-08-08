<template>
  <div id="app" style="padding:30px;">
    <el-alert :closable="false" id="model">
      <router-view />
    </el-alert>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  #model
    width:930px
    left:8%
    border-radius: 4px
    background-color rgba(0,0,0,0.00)
</style>

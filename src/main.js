import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control
import  '@/assets/css/reset.css'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


/* eslint-disable no-unused-vars */
import common from '@/common/common.styl';

/* 引入这些内容为了弹框的使用 */
import layeyCss from '../static/layer/theme/default/layer.css'
import jquery from '../static/jquery.js'
import layer from '../static/layer/layer.js'

Vue.config.productionTip = false;
Vue.prototype.$layer = layer;
Vue.prototype.$jquery = jquery;
// 不同组件之间的通信
Vue.prototype.$hub = new Vue();

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

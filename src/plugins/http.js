const MyHttpPlugin = {}

import axios from 'axios'

MyHttpPlugin.install = (Vue)=> {

  //接口基本地址
  axios.defaults.baseURL='http://localhost:8000/api'
  // 4. 添加实例方法
  Vue.prototype.$http = axios

}

  export default MyHttpPlugin

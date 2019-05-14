import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import $ from 'jquery'

Vue.config.productionTip = false

//引入样式重置
import '../static/css/reset.css'

// 引入 ElementUI 响应式断点
import 'element-ui/lib/theme-chalk/display.css';

// 引入及使用 ElementUI
import {Row, Col, Button} from 'element-ui';
Vue.use(Row).use(Col).use(Button);


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

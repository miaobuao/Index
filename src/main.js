/*
 * @Author: miaobuao
 * @Date: 2021-07-06 15:21:00
 * @LastEditTime: 2021-07-08 17:45:13
 * @LastEditors: miaobuao
 * @Description: main
 * @FilePath: \index\src\main.js
 */
import Vue from 'vue'
import store from "./components/Store"
import App from './App'
// import "./js/ElementuUI"
Vue.config.productionTip = false

new Vue({
  name: "Index",
  store,
  render: h => h(App),
  beforeCreate:function(){
    this.$bus=this
  },
}).$mount('#app')

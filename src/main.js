import Vue from 'vue'
import store from "./components/Store"
import App from './App.vue'

Vue.config.productionTip = true

const vm = new Vue({
  name: "Index",
  store,
  render: h => h(App),
  beforeCreate:function(){
    this.$bus=this
  },
}).$mount('#app')

console.log(vm)
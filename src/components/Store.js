import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        search_engine:function(){
            return localStorage.getItem("search_engine")?localStorage.getItem("search_engine"):"bing"
        }()
    }
})

export default store
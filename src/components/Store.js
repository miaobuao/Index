/*
 * @Author: miaobuao
 * @Date: 2021-07-06 15:31:20
 * @LastEditTime: 2021-07-08 18:24:32
 * @LastEditors: miaobuao
 * @Description: 
 * @FilePath: \index\src\components\Store.js
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        search_engine:function(){
            return localStorage.getItem("search_engine")?localStorage.getItem("search_engine"):"bing"
        }(),
        if_in_manage:false,
        is_add:false
    }
})

export default store
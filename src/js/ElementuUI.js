/*
 * @Author: miaobuao
 * @Date: 2021-07-08 17:31:06
 * @LastEditTime: 2021-07-08 17:36:54
 * @LastEditors: miaobuao
 * @Description: auto use element ui add-ons
 * @FilePath: \index\src\js\ElementuUI.js
 */
import Vue from "vue"
import {
    Button,Dialog,MessageBox,Alert,Message
} from "element-ui"

function use(ui)
{
    for(var i in ui)
        Vue.use(ui[i])
}

use([Button,Dialog,MessageBox,Alert,Message])
// Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
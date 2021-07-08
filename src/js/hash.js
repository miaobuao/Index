/*
 * @Author: miaobuao
 * @Date: 2021-07-07 19:43:38
 * @LastEditTime: 2021-07-08 19:46:02
 * @LastEditors: miaobuao
 * @Description: 实现router
 * @FilePath: \index\src\js\hash.js
 */
const hash = {
    decode_hash(){
        return decodeURI(location.hash)
    },
    data_tree() {
        var temp = localStorage.getItem("data_tree") ? localStorage.getItem("data_tree") : '["home"]'
        return JSON.parse(temp)
    },
    deep_find(root,hash=decodeURI(location.hash))
    {
        var arr = this.arr(hash)
        for (var i = 0; i < arr.length; i++) {
            root = this.find_node(root, arr[i])
            if (root === false)
                return false
        }
        return root
    },
    find_node(root, name) {
        for (var i in root) {
            if (root[i] instanceof Array && root[i][0] == name)
                return root[i]
        }
        return false
    },

    arr_to_hash(arr = []) {
        if (arr.length == 0)
            return ""
        var res = arr[0]
        for (var i = 1; i < arr.length; i++)
            res += "/" + arr[i]
        return res
    },

    /**
     * @description:
     * @param {
     *      (String) hash:"hash value"
     * }
     * @return {
     *      (String) hash: "return last hash value"
     *  }
     */
    parent(hash = decodeURI(location.hash)) {
        return this.arr_to_hash(this.arr(hash + "/.."))
    },

    identify(hash_v = decodeURI(location.hash)) {
        var arr = this.arr(hash_v)
        var root = this.data_tree()
        for (var i = 0; i < arr.length; i++) {
            root = this.find_node(root, arr[i])
            if (root === false)
                return false
        }
        console.log("HASH正确，", root)
        return root
    },

    arr(hash_v = decodeURI(location.hash)) {
        hash_v = this.hash(hash_v)
        var res = hash_v ? hash_v.split("/") : []
        for (var i = 0; i < res.length; i++)
            if (res[i] == '')
                res.splice(i--, 1)
        else if (res[i] == "..") {
            res.splice(i--, 1)
            if (i >= 0)
                res.splice(i--, 1)
        }
        return res
    },

    item_list(hash_v =decodeURI(location.hash)) {
        var li = this.identify(hash_v)
        var res = []
        if (this.hash(hash_v))
            res.push({
                type: "backward",
                details: {
                    name: ".."
                }
            })
        for (var i = 1; i < li.length; i++)
            res.push({
                type: li[i] instanceof Array ? "dir" : "link",
                details: li[i],
            })
        return res
    },

    is_real(hash = decodeURI(location.hash)) {
        var det = this.identify(hash)
        return det === false ? false : true
    },

    hash(hash = decodeURI(location.hash)) {
        if (hash[0] == "#")
            hash = hash.slice(1)
        var temp=hash.split("/")
        for(var i=0;i<temp.length;i++)
            if(temp[i]=="" || temp[i]=='/' || temp[i]==" ")
                temp.splice(i--,1)
        console.log("tmep",temp)
        if(temp.length==0)
            return ""
        else
        {
            var res=temp[0]
            for(i=1;i<temp.length;i++)
                res+="/"+temp[i]
        }
        return res
    },

    goto(hash = decodeURI(location.hash)) {
        var arr = this.arr(hash)
        if (arr.length == 0) {
            location.hash = ""
            return
        }
        var res = arr[0]
        for (var i = 1; i < arr.length; i++)
            res += "/" + arr[i]
        location.hash = res
        console.log(arr)
    }
}
hash.goto()
export default hash
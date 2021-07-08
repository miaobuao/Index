<!--
 * @Author: miaobuao
 * @Date: 2021-07-08 11:05:22
 * @LastEditTime: 2021-07-08 19:50:06
 * @LastEditors: miaobuao
 * @FilePath: \index\src\components\RemoveItem.vue
-->
<template>
  <div class="item" @click="del" :title="title">
    <img :src="src" :key="isDir" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
import hash from "../js/hash";
export default {
  props: ["info", "type"],
  data() {
    return {
      details: this.info.details,
      isDir: this.info.type == "dir" ? true : false,
    };
  },
  methods: {
    del() {
        if (this.info.type == "backward")
            hash.goto(hash.parent());
        else
        {
            if(!confirm(`确定要删除 ${this.name} 吗？`))
              return;
            var data_tree=hash.data_tree()
            var parent=data_tree
            var arr=hash.arr()
            for(var i=0;i<arr.length;i++)
            {
                parent=hash.find_node(parent,arr[i])
                if(parent===false)
                    return false
            }
            console.log("pa:",parent)
            for(i=1;i<parent.length;i++)
            {
                if(this.isDir)
                {
                    if(parent[i] instanceof Array && parent[i][0]==this.details[0]){
                        parent.splice(i,1)
                        break
                    }
                }
                else
                {
                    if(!(parent[i] instanceof Array )&& parent[i].name==this.details.name){
                        parent.splice(i,1)
                        break
                    }
                }
            }
            console.log("del:",data_tree)
            localStorage.setItem("data_tree",JSON.stringify(data_tree))
            location.hash+="/"
        }
    },
  },
  computed: {
    src() {
      if (this.isDir) return "/svg/删除文件夹.svg";
      else if (this.info.type == "backward") return "/svg/返回.svg";
      else return "/svg/del_link.svg";
    },
    content_count() {
      var content = hash.identify(location.hash + "/" + this.name);
      return content.length - 1;
    },
    title() {
      if (this.info.type == "backward") return "返回上一级";
      var res = this.isDir
        ? `${this.name}(${this.content_count})`
        : this.details.url;
      return "删除->" + res;
    },
    name() {
      if (this.info.type == "backward") return "..";
      return this.isDir ? this.details[0] : this.details.name;
    },
  },
};
</script>

<style scoped>
.item {
  /* float: left; */
  width: 45px;
  padding: 13px;
}
img {
  width: 100%;
}
p {
  margin-top: -4px;
  font-size: 14px;
  text-align: center;
}
.item:hover {
  cursor: pointer;
}
</style>
<!--
 * @Author: miaobuao
 * @Date: 2021-07-06 15:25:29
 * @LastEditTime: 2021-07-08 20:15:27
 * @LastEditors: miaobuao
 * @Description: 
 * @FilePath: \index\src\components\item.vue
-->
<template>
  <div class=item @click="goto" :title="title">
      <img :src="src" :key="isDir">
      <p>{{name}}</p>
  </div>
</template>

<script>
import hash from '../js/hash';
export default {
    props:['info',"type"],
    data(){
        return {
            details:this.info.details,
            isDir:this.info.type=="dir"?true:false
        }
    },
    methods:{
        goto(){
            if(this.isDir || this.info.type=="backward")
                hash.goto(location.hash+"/"+this.name)
            else
                window.open(this.details.url)
        }
    },
    computed:{
        src(){
            if(this.info.type=="dir")
                return "svg/dir.svg"
            else if(this.info.type=="backward")
                return "svg/返回.svg"
            else
                return "svg/link.svg"
        },
        content_count()
        {
            var content=hash.identify(decodeURI(location.hash)+"/"+this.name)
            return content.length-1
        },
        title()
        {
            return this.isDir?`${this.name}(${this.content_count})`:this.details.url
        },
        name(){
            if(this.info.type=="backward")
                return ".."
            return this.isDir?this.details[0]:this.details.name
        }
    }
}
</script>

<style>
.item{
    width:45px;
    padding: 13px;
}
img{
    width: 100%;
}
p{
    margin-top: -4px;
    font-size: 14px;
    text-align: center;
}
.item:hover{
    cursor: pointer;
}
</style>
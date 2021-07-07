<template>
  <div>
      <div id=list v-if="is_hash_real">
        <Item v-for="item,index in items" :key="name(index)" :info="item"/>
        <manager/>
      </div>
      <div v-else>
          不存在的路径
      </div>
  </div>
</template>

<script>
import Item from "./Item"
import hash from "../js/hash"
import Manager from './Manager'
export default {
    mounted(){
        var vc=this
        window.onhashchange=function(){
            vc.refresh()
        }
    },
    data(){
        return {
            items:hash.item_list(),
            is_hash_real:hash.is_real(),
            shift:0,
            path:hash.hash()+"/"
        }
    },
    methods:{
        refresh() {
            this.is_hash_real=hash.is_real()
            var li = hash.item_list()
            while(this.items.length!=0)
                this.items.pop()
            for(var i in li)
                this.items.push(li[i])
            console.log("刷新："+this.shift,this.items)
            this.path=hash.hash()
        },
        name(index){
            if(this.items[index].type=="backward")
                return "backward"
            return this.path+index
        }
    },
    components:{Item,Manager}
}
</script>

<style>
#list{
    max-width: 888px;
    display: flex;
    justify-content:left;
    flex-wrap: wrap;
    margin: 12px auto;
}
</style>
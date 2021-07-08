<template>
  <div>
      <div id=list v-if="is_hash_real && !this.$store.state.if_in_manage">
        <Manager/>
        <Item v-for="item,index in items" :key="name(index)" :info="item"/>
      </div>
      <div id=unknown v-else-if="!$store.state.if_in_manage">
          不存在的路径
      </div>
      <div v-else>
          <div v-show="$store.state.is_add && $store.state.if_in_manage">
              <AddItem/>
          </div>
          <div id="list">
            <Manager/>
            <AltEngine/>
            <Add/>
            <RemoveItem v-for="item,index in items" :key="'destroy://'+name(index)" :info="item"/>
          </div>
      </div>
  </div>
</template>

<script>
import Item from "./Item"
import hash from "../js/hash"
import Manager from './Manager'
import RemoveItem from "./RemoveItem"
import Add from "./Add"
import AddItem from "./AddItem"
import AltEngine from "./AltEngine"
export default {
    mounted(){
        var vc=this
        window.onhashchange=function(){
            vc.refresh()
            hash.goto()
        }
    },
    data(){
        return {
            items:hash.item_list(),
            is_hash_real:hash.is_real(),
            shift:0,
            not_in_manage:true,
            path:hash.hash()+"/",
            is_add:false,
            hashs:[1,2,3]
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
        },
    },
    watch:{
    },
    components:{Item,Manager,RemoveItem,Add,AddItem,AltEngine}
}
</script>

<style>
#list{
    max-width: 655px;
    display: flex;
    justify-content:left;
    flex-wrap: wrap;
    margin: 46px auto;
}
#unknown{
    float: left;
}
</style>
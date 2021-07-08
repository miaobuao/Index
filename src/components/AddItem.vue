<template>
  <div id=add-area>
      <h3>新建</h3>
      <input type="text" :placeholder="hash()" v-model="new_name">
      <input type="text" placeholder="URL（为空则只创建文件夹）" v-model="url">
      <div id=button-area>
          <div class=btn id=confirm @click="submit">确定</div>
          <div class=btn id=cancel @click="$store.state.is_add=false">取消</div>
      </div>
  </div>
</template>

<script>
import hash from "../js/hash"
export default {
    data(){
        return {
            url:"",
            new_name:""
        }
    },
    methods:{
        hash(){
            var h=hash.hash()
            return h?"/"+h:"/home"
        },
        submit(){
            var root=hash.data_tree()
            var temp=hash.deep_find(root)
            console.log("submit",temp)
            var path=hash.hash(this.new_name).split("/")
            for(var i in path)
            {
                if(path[i]=="")
                    continue
                if(i<path.length-1 || this.url=="")
                {
                    var node=hash.find_node(temp,path[i])
                    if(node===false){
                        temp.push([path[i]])
                        temp=temp[1]
                    }
                    else
                        temp=node
                }else
                {
                    temp.push({
                        name:path[i],
                        url:this.url
                    })
                }
            }
            localStorage.setItem("data_tree",JSON.stringify(root))
            location.hash+="/"
        }
    }
}
</script>

<style scoped>
#add-area{
    margin: 30px auto;
    max-width: 555px;
    width: 88%;
    padding: 0px;
}
input
{
    width: 97%;
    font-size: large;
    padding: 12px;
    outline: none;
    border-radius: 4px;
    margin-bottom: 10px;
    border:1px solid #888;
}
#button-area{
    float: right;
}
.btn{
    float: right;
    padding: 5px;
    border-radius: 4px;
    border:1px solid #888;
}
#cancel{
    margin-right: 12px;
}
#confirm{
    background-color: rgb(0, 138, 230);
    color: #fff;
}
#cancel:hover{
    background-color: rgb(218, 216, 216);
}
#confirm:hover{
    background-color: rgb(0, 113, 189);
}
</style>
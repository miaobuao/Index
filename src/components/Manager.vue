<template>
  <div id="body" @click="show_panel=true">
    <img src="/svg/database.svg" :title="title">
    <p>{{title}}</p>
  <Panel :close="close_panel" v-if="show_panel"/>
  </div>
</template>

<script>
import Panel from "./Panel"
export default {
  data(){
    return {
      title:"管理",
      show_panel:false
    }
  },
  methods: {
    close_panel()
    {
      this.show_panel=false
    }
  },
  components:{
    Panel
  }
};
</script>

<style scoped>
#body {
  width: 45px;
  padding: 13px;
}
p{
    margin-top: -4px;
    font-size: 14px;
    text-align: center;
}
img{
  width:100%;
}
div:hover {
  cursor: pointer;
}
</style>
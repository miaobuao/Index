<template>
  <div id="body" @click="$store.state.if_in_manage=!$store.state.if_in_manage">
    <img :src="src()" :title="title()">
    <p>{{title()}}</p>
  </div>
</template>

<script>
export default {
  methods: {
    title(){
      return this.$store.state.if_in_manage?"退出":"管理"
    },
    src(){
      return this.$store.state.if_in_manage?"/svg/close.svg":"/svg/database.svg"
    }
  },
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
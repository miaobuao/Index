<!--
 * @Author: miaobuao
 * @Date: 2021-07-08 11:05:36
 * @LastEditTime: 2021-07-08 20:15:02
 * @LastEditors: miaobuao
 * @Description: 
 * @FilePath: \index\src\components\Add.vue
-->
<template>
  <div class="item" @click="add" title="添加">
    <img src="svg/添加2.svg"/>
    <p>添加</p>
  </div>
</template>

<script>
// import hash from "../js/hash";
export default {
  methods: {
    add(){
      this.$store.state.is_add=!this.$store.state.is_add
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
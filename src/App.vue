<template>
  <div id="app">
    <Search/>
    <List/>
    <Tips/>
    <div class="bottom-none"></div>
  </div>
</template>

<script>
import Search from "./components/Search"
import Tips from "./components/Tips"
import List from "./components/List"
export default {
  name: 'App',
  components: {
    Search,List,Tips
  }
}
</script>

<style scoped>
.bottom-none{
  height: 100px;
}
</style>

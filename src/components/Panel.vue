<template>
  <div class="background">
    <div id="panel">nihao1</div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("resize",e=>{
        console.log(e.target.innerWidth)
    })
  },
};
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
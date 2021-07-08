<template>
  <div class="item" @click="alt" title="点击切换搜索引擎">
    <img :src="src"/>
    <p>{{$store.state.search_engine}}</p>
  </div>
</template>

<script>
export default {
  methods: {
    alt(){
        var se=this.$store.state.search_engine
        var li=["baidu","bing","google","github"]
        this.$store.state.search_engine=li[(li.indexOf(se)+1)%li.length]
        return;
    },
  },
  computed: {
      src(){
            var se=this.$store.state.search_engine
            if(se=="bing")
                return "./svg/Bing.svg"
            else if(se=="baidu")
                return "./svg/百度.svg"
            else if(se=="google")
                return "./svg/google.svg"
            else
                return "./svg/github.svg"
      }
  }
};
</script>

<style scoped>
</style>
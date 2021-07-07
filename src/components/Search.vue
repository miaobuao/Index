<template>
  <div id="search_area">
    <input
      id="search_content"
      type="text"
      @keydown="gen_hint"
      @keyup.enter="search"
      :placeholder="hint"
      autocomplete="off"
      v-model="content"
    />
    <div id="search_btn">
      <img src=/svg/search_btn.svg @click="search"
      :title="$store.state.search_engine">
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.gen_hint();
  },
  data() {
    return {
      content: "",
      hint: "",
      hints: ["Hello world.", "✨邪王真眼是最棒的！"],
      jumps: {
        bing(v) {
          return `https://cn.bing.com/search?q=${v}`;
        },
        google(v) {
          return `https://www.google.com/search?q=${v}`;
        },
        github(v) {
          return `https://github.com/search?q=${v}&ref=opensearch`;
        },
        baidu(v) {
          return `https://www.baidu.com/s?wd=${v}`;
        },
      },
    };
  },
  methods: {
    open() {
      var se = this.$store.state.search_engine;
      window.open(this.jumps[se ? se : "bing"](this.content));
    },
    rand() {
      var res = Math.round(Math.random() * this.hints.length);
      return res == this.hints.length ? res - 1 : res;
    },
    gen_hint(e = { ketCode: 0 }) {
      if (e.keyCode != 13) this.hint = this.hints[this.rand()];
    },
    search() {
      if (this.content.replace(" ", "").length > 0) {
        var history = localStorage.getItem("search_history");
        history = JSON.parse(history ? history : "{}");
        history[Date.now()] = this.content;
        localStorage.setItem("search_history", JSON.stringify(history));
        this.open();
      } else this.hint = "想查什么呢🤔";
    },
  },
};
</script>

<style scoped>
#search_area {
  max-width: 555px;
  min-width: 233px;
  width: 100%;
  height: 50px;
  /* padding-top: 3px; */
  /* padding: 2px; */
  border-radius: 8px;
  border: 1px solid #222;
  margin: 120px auto 0 auto;
}
#search_area #search_content {
  outline: none;
  float: left;
  width: 82%;
  border: 0px;
  height: 100%;
  background-color: rgba(0,0,0,0);
  font-size: large;
  margin-left: 6px;
  color: #222;
}
#search_area #search_btn {
  height: 100%;
  float: right;
  width: 12%;
}
#search_area #search_btn img {
  cursor: pointer;
  cursor: hand;
  padding: 5px;
  width: 80%;
  height: 80%;
}
</style>
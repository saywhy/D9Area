<template>
  <div class="film_nav">
    <div class="container_main">
      <el-menu
        :default-active="activeIndex"
        text-color="#F6F6F6"
        active-text-color="#C9A562"
        background-color="#000"
        class="el_menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">新闻</el-menu-item>
        <el-menu-item index="2">简介</el-menu-item>
        <el-menu-item index="3">影片展示</el-menu-item>
        <el-menu-item index="4">影片申报</el-menu-item>
        <el-menu-item index="5">电影基金</el-menu-item>
        <el-menu-item index="6">Q&A</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "5"
    };
  },
  props: ["activenav"],
  mounted() {
    this.activeIndex = this.activenav;
    console.log( this.activenav);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.$router.push("/film_festival");
          break;
        case "2":
          this.$router.push("/film_festival");
          break;
        case "3":
          this.$router.push("/film_show");
          break;
        case "4":
          this.$router.push("/about2");
          break;
        case "6":
          this.$router.push("/QA");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang='less'>
//   nav 导航
.film_nav {
  height: 90px;
  border: 1px solid red;
  .el_menu,
  .el_menu li {
    font-size: 22px;
    height: 90px;
    line-height: 90px;
    float: left;
    background: #000000;
  }
  .el-menu.el-menu--horizontal {
    border: 0;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border: 0;
  }
  .el-menu--horizontal > .el-menu-item {
    border: 0;
  }
}
</style>
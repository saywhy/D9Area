<template>
  <div class="film_nav" id="film_nav" :class="srcolltop?'nav_srcoll':''">
    <div class="main_container">
      <img class="logo" width="70" src="@/assets/images/home/D9-logo.png" alt />
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
      <div @mouseover="imghover" @mouseleave="imgleave" class="search_box">
        <img src="@/assets/images/film/search.png" class="img_hover" width="28" height="28" alt />
        <input type="text" ref="input_search" class="input_search" id="input_search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      srcolltop: false
    };
  },
  props: ["activenav"],
  mounted() {
    this.activeIndex = this.activenav;
    console.log(this.activenav);
    //首先，在mounted钩子window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.$router.push("/film_festival");
          break;
        case "2":
          this.$router.push("/simple");
          break;
        case "3":
          this.$router.push("/film_show");
          break;
        case "4":
             this.$router.push("/upload_steps");
          break;
        case "6":
          this.$router.push("/QA");
          break;
        default:
          break;
      }
    },
    //然后在方法中，添加这个handleScroll方法来获取滚动的位置
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = document.querySelector("#film_nav").offsetTop;

      if (scrollTop < 5) {
        console.log("我到顶部里");
        this.srcolltop = false;
      } else if (scrollTop > 5) {
        console.log("我滚动里");
        this.srcolltop = true;
      }
    },
    // 放大镜
    imghover() {
      console.log(1111);
      console.log(this.$refs.input_search);
      this.$refs.input_search.style.width = "250px";
      this.$refs.input_search.style.padding = "0 10px";
      // document.getElementById('input_search').animate({'width':'250px'})
    },
    imgleave() {
      console.log(this.$refs.input_search);
      this.$refs.input_search.style.width = "0";
      this.$refs.input_search.style.padding = "0";
      // document.getElementById('input_search').animate({'width':'250px'})
    }
  },
  //由于是在整个window中添加的事件，所以要在页面离开时摧毁掉，否则会报错
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang='less'>
//   nav 导航
.film_nav {
  height: 120px;
  border-top: 1px solid #664c1b;
  border-bottom: 1px solid #664c1b;
  background: #000;
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 80px;
  .logo {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-right: 10px;
    float: left;
  }
  .el_menu,
  .el_menu li {
    font-size: 16px;
    float: left;
    background: #000000;
    height: 118px;
    line-height: 118px;
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
  .search_box {
    float: right;
    height: 120px;
    line-height: 120px;
  }
  .img_hover {
    cursor: pointer;
    vertical-align: middle;
  }
  .input_search {
    width: 0;
    height: 30px;
    font-size: 14px;
    color: rgb(246, 246, 246);
    caret-color: #fff;
    border: 0;
    background: rgba(85, 85, 84, 0.3);
    border-radius: 8px;
    outline: none;
    vertical-align: middle;
    &:hover,
    &:focus {
      border: 0;
      outline: none;
    }
  }
}
.nav_srcoll {
  height: 60px;
  .logo {
    width: 50px;
    height: 50px;
  }
  .el_menu,
  .el_menu li {
    height: 58px;
    line-height: 58px;
  }
  .search_box{
      height: 60px;
    line-height: 60px;
  }
}
</style>
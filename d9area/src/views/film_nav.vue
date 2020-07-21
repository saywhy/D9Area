<template>
  <div class="film_nav"
       id="film_nav"
       ref="film_nav"
       :class="navclass">
    <!-- :class="srcolltop?'showCont':'hiddenCont'" -->
    <div>
      <div class="main_container">
        <div class="logo_box"
             :class="srcolltop?'showImg':'hiddenImg'">
          <img class="logo"
               :class="srcolltop?'show_logo':'hidden_logo'"
               src="@/assets/images/home/D9-logo.png"
               alt />
        </div>
        <div>
          <el-menu :default-active="activeIndex"
                   :class="srcolltop?'show_menu':'hidden_menu'"
                   text-color="#F6F6F6"
                   active-text-color="#C9A562"
                   background-color="#000"
                   class="el_menu"
                   mode="horizontal"
                   @select="handleSelect">
            <el-menu-item index="1"
                          :class="srcolltop?'show_menu':'hidden_menu'">新闻</el-menu-item>
            <el-menu-item index="2"
                          :class="srcolltop?'show_menu':'hidden_menu'">简介</el-menu-item>
            <el-menu-item index="3"
                          :class="srcolltop?'show_menu':'hidden_menu'">影片展示</el-menu-item>
            <el-menu-item index="4"
                          :class="srcolltop?'show_menu':'hidden_menu'">影片申报</el-menu-item>
            <el-menu-item index="5"
                          :class="srcolltop?'show_menu':'hidden_menu'">电影基金</el-menu-item>
            <el-menu-item index="6"
                          :class="srcolltop?'show_menu':'hidden_menu'">Q&A</el-menu-item>
          </el-menu>
        </div>
        <div @mouseover="imghover"
             @mouseleave="imgleave"
             :class="srcolltop?'show_search':'hidden_search'"
             class="search_box">
          <img src="@/assets/images/film/search.png"
               class="img_hover"
               alt />
          <input type="text"
                 ref="input_search"
                 class="input_search"
                 id="input_search" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: "1",
      srcolltop: false,
      isshow: false,
      navclass: ''
    };
  },
  props: ["activenav"],
  mounted () {
    this.activeIndex = this.activenav;
    console.log(this.activenav);
    //首先，在mounted钩子window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleSelect (key, keyPath) {
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
    handleScroll () {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = document.querySelector("#film_nav").offsetTop;
      if (scrollTop < 5) {
        // console.log("我到顶部里");
        this.srcolltop = false;
        this.navclass = 'hiddenCont';
        // console.log(this.$refs.film_nav.hasClass('showCont'));
      } else if (scrollTop > 5) {
        // console.log("我滚动里");
        this.srcolltop = true;
        this.navclass = 'showCont';
      }
    },
    // 放大镜
    imghover () {
      console.log(1111);
      console.log(this.$refs.input_search);
      this.$refs.input_search.style.width = "250px";
      this.$refs.input_search.style.padding = "0 10px";
      // document.getElementById('input_search').animate({'width':'250px'})
    },
    imgleave () {
      console.log(this.$refs.input_search);
      this.$refs.input_search.style.width = "0";
      this.$refs.input_search.style.padding = "0";
      // document.getElementById('input_search').animate({'width':'250px'})
    }
  },
  //由于是在整个window中添加的事件，所以要在页面离开时摧毁掉，否则会报错
  beforeDestroy () {
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
  .logo_box {
    height: 120px;
    width: 120px;
    float: left;
    position: relative;
    .logo {
      width: 70px;
      height: 70px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
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
  .el_menu,
  .el_menu li {
    // margin: 1px 0;
    font-size: 16px;
    float: left;
    background: #000000;
    height: 116px;
    line-height: 116px;
    border-top: 1px solid #664c1b;
    border-bottom: 1px solid #664c1b;
  }
  .search_box {
    float: right;
    height: 120px;
    line-height: 120px;
  }
  .img_hover {
    width: 20px;
    height: 20px;
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
/*定义打开弹窗动画*/
.showCont {
  animation: showPopUp 0.5s;
  animation-fill-mode: forwards; /*保持动画后的状态*/
}
/*定义关闭弹窗动画*/
.hiddenCont {
  animation: hiddenPopUp 0.5s;
  animation-fill-mode: forwards;
}
.showImg {
  animation: showImg 0.5s;
  animation-fill-mode: forwards;
}
.hiddenImg {
  animation: hiddenImg 0.5s;
  animation-fill-mode: forwards;
}

.show_logo {
  animation: show_logo 0.5s;
  animation-fill-mode: forwards;
}
.hidden_logo {
  animation: hidden_logo 0.5s;
  animation-fill-mode: forwards;
}
.show_menu {
  animation: show_menu 0.5s;
  animation-fill-mode: forwards;
}
.hidden_menu {
  animation: hidden_menu 0.5s;
  animation-fill-mode: forwards;
}
.show_search {
  animation: show_search 0.5s;
  animation-fill-mode: forwards;
}
.hidden_search {
  animation: hidden_search 0.5s;
  animation-fill-mode: forwards;
}

@keyframes showPopUp {
  0% {
    height: 120px;
    top: 80px;
  }
  100% {
    height: 60px;
    top: 0;
  }
}
@keyframes hiddenPopUp {
  0% {
    height: 60px;
    top: 0;
  }
  100% {
    height: 120px;
    top: 80px;
  }
}

@keyframes showImg {
  0% {
    height: 120px;
    width: 120px;
  }
  100% {
    height: 60px;
    width: 60px;
  }
}
@keyframes hiddenImg {
  0% {
    height: 60px;
    width: 60px;
  }
  100% {
    height: 120px;
    width: 120px;
  }
}

@keyframes show_logo {
  0% {
    height: 70px;
    width: 70px;
  }
  100% {
    height: 35px;
    width: 35px;
  }
}
@keyframes hidden_logo {
  0% {
    height: 35px;
    width: 35px;
  }
  100% {
    height: 70px;
    width: 70px;
  }
}
@keyframes show_menu {
  0% {
    height: 116px;
    line-height: 116px;
  }
  100% {
    height: 56px;
    line-height: 56px;
  }
}
@keyframes hidden_menu {
  0% {
    height: 56px;
    line-height: 56px;
  }
  100% {
    height: 116px;
    line-height: 116px;
  }
}
@keyframes show_search {
  0% {
    height: 120px;
    line-height: 120px;
  }
  100% {
    height: 60px;
    line-height: 60px;
  }
}
@keyframes hidden_search {
  0% {
    height: 60px;
    line-height: 60px;
  }
  100% {
    height: 120px;
    line-height: 120px;
  }
}
</style>
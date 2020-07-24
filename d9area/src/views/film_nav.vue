<template>
  <div class="film_nav" v-cloak id="film_nav" ref="film_nav">
    <!-- 顶部导航 -->
    <div class="top_nav">
      <div class="nav_box">
        <el-menu
          :default-active="main_nav"
          text-color="#F6F6F6"
          active-text-color="#c8a461"
          background-color="#000"
          class="el_menu"
          mode="horizontal"
          @select="handleSelect_main_nav"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">动画电影周</el-menu-item>
          <el-menu-item index="3">在线观影</el-menu-item>
          <el-menu-item index="4">D9制片厂</el-menu-item>
        </el-menu>
        <span class="nav_right">
          <span :class="language=='cn'?'language_color':''">中文</span>
          <span>/</span>
          <span :class="language=='en'?'language_color':''">EN</span>
        </span>
        <span class="nav_right personl" v-if="personl_show">
          <span class="personl_name" @click="go_personl">永恒</span>
          <span>｜</span>
          <span @click="logout">退出</span>
        </span>
      </div>
    </div>
    <!-- 第二导航 -->
    <div class="sub_nav" :class="srcolltop?'sub_fixd':''" id="sub_nav">
      <div class="main_container">
        <div class="logo_box" :class="sub_nav.img">
          <img class="logo" :class="sub_nav.logo" src="@/assets/images/home/D9-logo.png" alt />
        </div>
        <div>
          <el-menu
            :default-active="activeIndex"
            :class="sub_nav.menu"
            text-color="#F6F6F6"
            active-text-color="#c8a461"
            background-color="#000"
            class="el_menu"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1" :class="sub_nav.menu">新闻</el-menu-item>
            <el-menu-item index="2" :class="sub_nav.menu">简介</el-menu-item>
            <el-menu-item index="3" :class="sub_nav.menu">影片展示</el-menu-item>
            <el-menu-item index="4" :class="sub_nav.menu">影片申报</el-menu-item>
            <el-menu-item index="5" :class="sub_nav.menu">电影基金</el-menu-item>
            <el-menu-item index="6" :class="sub_nav.menu">Q&A</el-menu-item>
          </el-menu>
        </div>
        <div
          @mouseover="imghover"
          @mouseleave="imgleave"
          :class="sub_nav.search"
          class="search_box"
        >
          <img src="@/assets/images/film/search.png" class="img_hover" alt />
          <input type="text" ref="input_search" class="input_search" id="input_search" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      main_nav: "2",
      activeIndex: "1",
      srcolltop: false,
      isshow: false,
      navclass: "",
      language: "cn",
      personl_show: false,
      sub_nav: {
        img: "",
        logo: "",
        menu: "",
        search: "",
      },
    };
  },
  props: ["activenav"],
  mounted() {
    this.activeIndex = this.activenav;
    console.log(this.activenav);
    if (sessionStorage.getItem("personal") == "true") {
      this.personl_show = true;
    }
    //首先，在mounted钩子window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleSelect_main_nav(key) {
      switch (key) {
        case "1":
          this.$router.push("/home");
          break;
        case "2":
          this.$router.push("/film_festival");
          break;
        case "3":
          this.$router.push("/online_login");
          break;
        case "4":
          this.$router.push("/login");
          break;
        default:
          break;
      }
    },
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
      let offsetTop = document.querySelector("#sub_nav").offsetTop;
      console.log(offsetTop);
      console.log(scrollTop);
      if (scrollTop <= offsetTop) {
        this.srcolltop = false;
            console.log(11111);
        this.sub_nav.img = "hiddenImg";
        this.sub_nav.logo = "hidden_logo";
        this.sub_nav.menu = "hidden_menu";
        this.sub_nav.search = "hidden_search";
      } else if (scrollTop > offsetTop) {
        this.srcolltop = true;
        this.sub_nav.img = "showImg";
        this.sub_nav.logo = "show_logo";
        this.sub_nav.menu = "show_menu";
        this.sub_nav.search = "show_search";
                console.log(2222);
      }
    },
    // 放大镜
    imghover() {
      this.$refs.input_search.style.width = "250px";
      this.$refs.input_search.style.padding = "0 10px";
    },
    imgleave() {
      console.log(this.$refs.input_search);
      this.$refs.input_search.style.width = "0";
      this.$refs.input_search.style.padding = "0";
    },
  },
  //由于是在整个window中添加的事件，所以要在页面离开时摧毁掉，否则会报错
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang='less' scoped>
[v-cloak] {
  display: none;
}
//   nav 导航
.film_nav {
  width: 100%;
  overflow: hidden;
  // 大导航
  .top_nav {
    height: 40px;
    .nav_box {
      text-align: left;
      width: 100%;
      background: #000;
      height: 40px;
      overflow: hidden;
      .nav_right {
        float: right;
        cursor: pointer;
        line-height: 40px;
        margin-right: 20px;
      }
      .personl {
        font-size: 16px;
        margin-right: 37px;
        .personl_name {
          color: #c8a461;
        }
      }
      .el_menu,
      .el_menu li {
        font-size: 16px;
        height: 38px;
        line-height: 38px;
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
      .language_color {
        color: #c8a461;
      }
    }
  }
  // 第二导航
  .sub_nav {
    border-top: 1px solid #292929;
    border-bottom: 1px solid #292929;
    overflow: hidden;
    width: 100%;
    background: #000;
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
      font-size: 16px;
      float: left;
      background: #000000;
      height: 118px;
        overflow: hidden;
      line-height: 118px;
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
  .sub_fixd {
    position: fixed;
    top: 0;
    z-index: 9999;
  }
}

.showImg {
  animation: showImg 1s;
  animation-fill-mode: forwards;
}
.hiddenImg {
  animation: hiddenImg 1s;
  animation-fill-mode: forwards;
}

.show_logo {
  animation: show_logo 1s;
  animation-fill-mode: forwards;
}
.hidden_logo {
  animation: hidden_logo 1s;
  animation-fill-mode: forwards;
}
.show_menu {
  animation: show_menu 1s;
  animation-fill-mode: forwards;
}
.hidden_menu {
  animation: hidden_menu 1s;
  animation-fill-mode: forwards;
}
.show_search {
  animation: show_search 1s;
  animation-fill-mode: forwards;
}
.hidden_search {
  animation: hidden_search 1s;
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
    height: 120px;
    line-height: 120px;
  }
  100% {
    height: 60px;
    line-height: 60px;
  }
}
@keyframes hidden_menu {
  0% {
    height: 60px;
    line-height: 60px;
  }
  100% {
    height: 120px;
    line-height: 120px;
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
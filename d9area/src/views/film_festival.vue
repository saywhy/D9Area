<template>
  <div class="container">
    <Nav></Nav>
    <div class="FilmFestival">
      <div class="FilmFestival_top">
        <div class="container_main">
          <div class="top_left">
            <img class="logo logo_left" width="117" src="@/assets/logo_2x.png" alt />
            <img class="logo logo_right" src="@/assets/images/home/logo.png" alt />
            <img class="logo logo_right" src="@/assets/images/home/logo.png" alt />
            <img class="logo logo_right" src="@/assets/images/home/logo.png" alt />
            <img class="logo" src="@/assets/images/home/logo.png" alt />
          </div>
          <div @mouseover="imghover" @mouseleave="imgleave" style="float: right;">
            <img src="@/assets/images/film/search.png" class="img_hover" width="54" height="54" alt />
            <input type="text" ref="input_search" class="input_search" id="input_search" />
          </div>
        </div>
      </div>
      <div class="FilmFestival_nav">
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
      <div class="FilmFestival_swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in img_list">
              <img :src="item.src" style="height: 100%; width: 100%;" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="FilmFestival_content">

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "FilmFestival",
  components: { Nav, Footer },
  data() {
    return {
      activeIndex: "1",
       img_list: [
        {
          src: require('@/assets/images/film/banner1.jpg'),
        },
        {
          src: require('@/assets/images/film/banner2.jpg'),
        }, {
          src: require('@/assets/images/film/banner3.jpg'),
        },
      ],
    };
  },
  mounted() {
      this.initSwiper()
  },
  methods: {
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
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
          this.$router.push("/about2");
          break;
        default:
          break;
      }
    },
     initSwiper () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        autoplay: false,//等同于以下设置
        // autoplay: {
        //   disableOnInteraction: false
        // }, //可选选项，自动滑动
        loop: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dragSize: 30
          // type: 'progress',
        }
      });
      // });
    },
  }
};
</script>
<style lang="less">
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.container_main {
  width: 1200px;
  margin: 0 auto;
}
.FilmFestival {
  margin-top: 114px;
  border: 1px solid red;
  .FilmFestival_top {
    height: 188px;
    padding: 28px 0;
    background: #0a0a0a;
    border: 1px solid red;
    height: 130px;
    line-height: 130px;
    .top_left {
      float: left;
      .logo {
        vertical-align: middle;
      }
      .logo_left {
        margin-right: 130px;
      }
      .logo_right {
        margin-right: 76px;
      }
    }
    .img_hover {
      cursor: pointer;
      vertical-align: middle;
    }
    .input_search {
      width: 0;
      height: 54px;
      font-size: 26px;
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

    .img_hover:hover {
    }
  }
  //   nav 导航
  .FilmFestival_nav {
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
  .FilmFestival_content{
      height: 2500px;
      background: #fff;
  }
}
</style>

<template>
  <div class="container">
    <Nav :mainnav="mainnav"></Nav>
    <div class="online">
      <div class="border">
        <div class="title_nav" :class="srcolltop?'nav_srcoll':''">
          <img class="logo" width="100" src="@/assets/images/home/D9-logo.png" alt />
          <el-menu
            :default-active="activeIndex"
            text-color="#F6F6F6"
            active-text-color="#C9A562"
            background-color="#000"
            class="el_menu"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">专题</el-menu-item>
            <el-menu-item index="3">系列</el-menu-item>
          </el-menu>
          <div @mouseover="imghover" @mouseleave="imgleave" class="search_box">
            <img src="@/assets/images/film/search.png" class="img_hover" width="28" height="28" alt />
            <input type="text" ref="input_search" class="input_search" id="input_search" />
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="banner_text">
          <p class="banner_title">水牛男孩</p>
          <p
            class="banner_content"
          >1860年，面对荷兰殖民势力的暗杀，阿拉纳带着哥哥的两个孩子逃到美国西部。多年后，两个孩子回来替父亲报仇，然而在他们看到家乡的境况后，复仇的意义好像改变了。</p>
          <div class="banner_btn_left">
            <img src="@/assets/images/online/start.png" alt />
            <span>播放</span>
          </div>
          <div class="banner_btn_right">
            <img src="@/assets/images/online/add.png" alt />
            <span>我的影片</span>
          </div>
        </div>
      </div>
      <div class="recommend_box">
        <!-- 继续观看 -->
        <div class="recommend_top">
          <p class="subtitle">继续观看</p>
          <div class="swiper_box">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in img_list">
                  <!-- 2323213 -->
                  <img :src="item.src" width="232" @click="choose_detail(index)" alt />
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-next"></div>
              <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
          </div>
        </div>
        <div class="detail_box" v-if="detail_show">dasdasdasdasdasd</div>
        <!-- D9区推荐 -->
        <div class="recommend_mid">
          <p class="subtitle_mid">D9区推荐</p>
          <div class="swiper_box">
            <div class="swiper_container_mid">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in img_list">
                  <!-- 2323213 -->
                  <img :src="item.src" width="232" @click="choose_detail(index)" alt />
                </div>
              </div>
              <div class="swiper-button-prev-mid"></div>
              <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-next-mid"></div>
              <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
          </div>
        </div>
        <!-- D9区热门 -->
        <div class="recommend_bom">
          <p class="subtitle_bom">D9区热门</p>
          <div class="swiper_box">
            <div class="swiper_container_bom">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in img_list">
                  <!-- 2323213 -->
                  <img :src="item.src" width="232" @click="choose_detail(index)" alt />
                </div>
              </div>
              <div class="swiper-button-prev-bom"></div>
              <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-next-bom"></div>
              <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
import Swiper from "swiper";
import filmTop from "@/views/film_top.vue";
export default {
  name: "Online",
  components: { Nav, Footer, filmTop },
  data() {
    return {
      search: "",
      activeIndex: "1",
      mainnav: "3",
      detail_show: false,
       srcolltop: false,
      img_list: [
        {
          src: require("@/assets/images/online/item1.png")
        },
        {
          src: require("@/assets/images/online/item2.png")
        },
        {
          src: require("@/assets/images/online/item3.png")
        },
        {
          src: require("@/assets/images/online/item1.png")
        },
        {
          src: require("@/assets/images/online/item2.png")
        },
        {
          src: require("@/assets/images/online/item3.png")
        },
        {
          src: require("@/assets/images/online/item1.png")
        }
      ]
    };
  },
  mounted() {
    this.initSwiper();
    this.initSwiper_mid();
    this.initSwiper_bom();
    //首先，在mounted钩子window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleSelect() {},
    initSwiper() {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        autoplay: false, //等同于以下设置
        slidesPerView: "auto",
        slidesPerView: 5,
        spaceBetween: 20,
        slidesOffsetBefore: 360,
        loop: false,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dragSize: 30
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // 点击事件
        on: {
          click: function() {
            let elem2 = Array.from(swiper.slides);
            elem2.forEach(element => {
              element.style.border = 0;
            });
            swiper.clickedSlide.style.border = "4px solid rgba(161,128,55,1)";
            this.detail_show = true;
          }
        },
        //然后在方法中，添加这个handleScroll方法来获取滚动的位置
        handleScroll() {
          let scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          let offsetTop = document.querySelector("#title_nav").offsetTop;

          if (scrollTop < 5) {
            console.log("我到顶部里");
            this.srcolltop = false;
          } else if (scrollTop > 5) {
            console.log("我滚动里");
            this.srcolltop = true;
          }
        },
        //由于是在整个window中添加的事件，所以要在页面离开时摧毁掉，否则会报错
        beforeDestroy() {
          window.removeEventListener("scroll", this.handleScroll);
        }
      });
    },
    initSwiper_mid() {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper_container_mid", {
        autoplay: false, //等同于以下设置
        slidesPerView: "auto",
        slidesPerView: 5,
        spaceBetween: 20,
        slidesOffsetBefore: 368,
        loop: false,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dragSize: 30
        },
        navigation: {
          nextEl: ".swiper-button-next-mid",
          prevEl: ".swiper-button-prev-mid"
        }
      });
    },
    initSwiper_bom() {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper_container_bom", {
        autoplay: false, //等同于以下设置
        slidesPerView: "auto",
        slidesPerView: 5,
        spaceBetween: 20,
        slidesOffsetBefore: 360,
        loop: false,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination-bom",
          clickable: true,
          dragSize: 30
        },
        navigation: {
          nextEl: ".swiper-button-next-bom",
          prevEl: ".swiper-button-prev-bom"
        }
      });
    },
    choose_detail(item) {
      console.log(item);
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
.online {
  margin-top: 80px;
  .top {
    width: 1200px;
    height: 130px;
    line-height: 130px;
    margin: 30px auto;
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
    .s_key {
      float: right;
      width: 380px;
      height: 54px;
    }
    .el-input__inner {
      color: rgb(246, 246, 246);
      caret-color: #fff;
      border: 0;
      background: rgba(85, 85, 84, 0.3);
      border-radius: 8px;
    }
  }
  .border {
    border-top: 1px solid #664c1b;
    border-bottom: 1px solid #664c1b;
  }
  .title_nav {
    height: 120px;
    width: 1200px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 120px;
    text-align: left;
    .logo {
      float: left;
      margin: 8px 36px 10px 0;
    }
    .el_menu,
    .el_menu li {
      text-align: left;
      font-size: 16px;
      height: 120px;
      line-height: 120px;
      float: left;
      background: #000000;
      &:nth-child(1) {
        padding-left: 0;
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
  .banner {
    height: 600px;
    background-image: url("../assets/images/online/banner.png");
    position: relative;
    .banner_text {
      width: 1200px;
      margin-bottom: 120px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      text-align: left;
      .banner_title {
        color: #c8a461;
        // height: 161px;
        font-size: 42px;
        font-weight: bold;
        // border: 1px solid green;
        margin: 104px 0 34px 0;
      }
      .banner_content {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        margin: 0;
        width: 546px;
        height: 76px;
        margin-bottom: 44px;
        line-height: 30px;
      }
      .banner_btn_left {
        width: 120px;
        height: 42px;
        background: rgba(200, 164, 97, 1);
        border-radius: 4px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        line-height: 42px;
        text-align: center;
        float: left;
        // vertical-align: middle;
        cursor: pointer;
        img {
          width: 16px;
          height: 18px;
          // vertical-align: sub;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      .banner_btn_right {
        cursor: pointer;
        width: 140px;
        height: 42px;
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 8px;
        font-size: 18px;
        font-weight: 400;
        // color: rgba(255, 255, 255, 1);
        background: #000;
        line-height: 42px;
        text-align: center;
        float: left;
        margin-left: 30px;
        vertical-align: middle;
        img {
          width: 16px;
          height: 16px;
          vertical-align: baseline;
          margin-right: 10px;
          border: 1px dashed #fff;
        }
      }
    }
  }
  .recommend_box {
    position: absolute;
    top: 300px;
    position: relative; //加这条样式
    width: 100%;
    overflow: hidden;
    margin-top: -480px;
    .subtitle {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 20px;
      text-align: left;
      font-size: 28px;
      font-weight: 500;
      color: #fff;
      //  position: absolute;
      // top: 0%;
      // left: 0%;
      // transform: translateY(-50%);
    }
    // 继续观看
    .recommend_top {
      .swiper_box {
        height: 132px;
        position: relative;
        .swiper-container {
          width: 100%;
          height: 132px;
          color: #fff;
          .swiper-wrapper {
            width: 100%;
          }
          .swiper-button-prev {
            width: 350px;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            background: rgba(0, 0, 0, 0.6);
            margin-top: 0;
            background-image: url("../assets/images/online/prev.png");
            background-repeat: no-repeat;
            background-position: center;
            z-index: 99999;
          }
          .swiper-button-next {
            width: 19.8%;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.6);
            margin-top: 0;
            background-image: url("../assets/images/online/next.png");
            background-repeat: no-repeat;
            background-position: center;
            z-index: 99999;
          }
          .swiper-button-disabled {
            opacity: 0;
          }
          .swiper-slide {
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          // .swiper-slide-active {
          //   width: 232.6px;
          //   margin-right: 10px;
          //   border: 1px dashed #fff;
          // }
        }
      }
      .swiper-slide {
        box-sizing: border-box;
      }
      .detail_box {
        height: 790px;
      }
    }

    // D9区推荐
    .recommend_mid {
      margin-top: 40px;
      .subtitle_mid {
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 20px;
        text-align: left;
        font-size: 28px;
        font-weight: 500;
        color: #fff;
      }
      .swiper_box {
        height: 132px;
        position: relative;
        .swiper_container_mid {
          width: 100%;
          height: 132px;
          color: #fff;
          .swiper-wrapper {
            width: 100%;
          }
          .swiper-button-prev-mid {
            width: 19.8%;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            background: rgba(0, 0, 0, 0.6);
            margin-top: 0;
            background-image: url("../assets/images/online/prev.png");
            background-repeat: no-repeat;
            background-position: center;
            z-index: 99999;
          }
          .swiper-button-next-mid {
            width: 19.8%;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.6);
            margin-top: 0;
            background-image: url("../assets/images/online/next.png");
            background-repeat: no-repeat;
            background-position: center;
            z-index: 99999;
          }
          .swiper-button-disabled {
            opacity: 0;
          }
          .swiper-slide {
            // width: 389px;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
      .swiper-slide {
        box-sizing: border-box;
      }
      .detail_box {
        height: 790px;
      }
    }

    // D9区热门
    .recommend_bom {
      margin-top: 60px;
      .subtitle_bom {
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 20px;
        text-align: left;
        font-size: 28px;
        font-weight: 500;
        color: #fff;
      }
      .swiper_box {
        height: 132px;
        position: relative;
        .swiper_container_bom {
          width: 100%;
          height: 132px;
          color: #fff;
          .swiper-wrapper {
            width: 100%;
          }
          .swiper-button-prev-bom {
            width: 19.8%;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            background: rgba(0, 0, 0, 0.6);
            margin-top: 0;
            background-image: url("../assets/images/online/prev.png");
            background-repeat: no-repeat;
            background-position: center;
            z-index: 99999;
          }
          .swiper-button-next-bom {
            width: 19.8%;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.6);
            margin-top: 0;
            background-image: url("../assets/images/online/next.png");
            background-repeat: no-repeat;
            background-position: center;
            z-index: 99999;
          }
          .swiper-button-disabled {
            opacity: 0;
          }
          .swiper-slide {
            // width: 389px;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
      .swiper-slide {
        box-sizing: border-box;
      }
      .detail_box {
        height: 790px;
      }
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

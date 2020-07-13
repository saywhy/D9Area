<template>
  <div class="container">
    <Nav :mainnav='mainnav'></Nav>
    <div class="online">
      <div class="top">
        <div class="top_left">
          <img class="logo logo_left"
               width="117"
               src="@/assets/logo_2x.png"
               alt />
          <img class="logo logo_right"
               src="@/assets/images/home/logo.png"
               alt />
          <img class="logo logo_right"
               src="@/assets/images/home/logo.png"
               alt />
          <img class="logo logo_right"
               src="@/assets/images/home/logo.png"
               alt />
          <img class="logo"
               src="@/assets/images/home/logo.png"
               alt />
        </div>
        <el-input class="s_key"
                  v-model="search"
                  clearable>
          <i slot="prefix"
             class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="title_nav">
        <el-menu :default-active="activeIndex"
                 text-color="#F6F6F6"
                 active-text-color="#C9A562"
                 background-color="#000"
                 class="el_menu"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">专题</el-menu-item>
          <el-menu-item index="3">系列</el-menu-item>
        </el-menu>
      </div>
      <div class="banner">
        <div class="banner_text">
          <p class="banner_title">水牛男孩</p>
          <p class="banner_content">1860年，面对荷兰殖民势力的暗杀，阿拉纳带着哥哥的两个孩子逃到美国西部。多年后，两个孩子回来替父亲报仇，然而在他们看到家乡的境况后，复仇的意义好像改变了。</p>
          <div class="banner_btn_left">
            <img src="@/assets/images/online/start.png"
                 alt />
            <span>播放</span>
          </div>
          <div class="banner_btn_right">
            <img src="@/assets/images/online/add.png"
                 alt />
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
                <div class="swiper-slide"
                     v-for="(item,index) in img_list">
                  <!-- 2323213 -->
                  <img :src="item.src"
                       width="350"
                       @click="choose_detail(index)"
                       alt />
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-next"></div>
              <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
          </div>
        </div>
        <div class="detail_box"
             v-if="detail_show">dasdasdasdasdasd</div>
        <!-- D9区推荐 -->
        <div class="recommend_mid">
          <p class="subtitle_mid">D9区推荐</p>
          <div class="swiper_box">
            <div class="swiper_container_mid">
              <div class="swiper-wrapper">
                <div class="swiper-slide"
                     v-for="(item,index) in img_list">
                  <!-- 2323213 -->
                  <img :src="item.src"
                       width="350"
                       @click="choose_detail(index)"
                       alt />
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
                <div class="swiper-slide"
                     v-for="(item,index) in img_list">
                  <!-- 2323213 -->
                  <img :src="item.src"
                       width="350"
                       @click="choose_detail(index)"
                       alt />
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
export default {
  name: "Online",
  components: { Nav, Footer },
  data () {
    return {
      search: "",
      activeIndex: "1",
      mainnav: "3",
      detail_show: false,
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
  mounted () {
    this.initSwiper();
    this.initSwiper_mid();
    this.initSwiper_bom();
  },
  methods: {
    handleSelect () { },
    initSwiper () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        autoplay: false, //等同于以下设置
        slidesPerView: "auto",
        slidesPerView: 5,
        spaceBetween: 20,
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
          click: function () {
            let elem2 = Array.from(swiper.slides);
            elem2.forEach(element => {
              element.style.border = 0;
            });
            swiper.clickedSlide.style.border = "4px solid rgba(161,128,55,1)";
            this.detail_show = true;
          }
        }
      });
    },
    initSwiper_mid () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper_container_mid", {
        autoplay: false, //等同于以下设置
        slidesPerView: "auto",
        slidesPerView: 5,
        spaceBetween: 20,
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
    initSwiper_bom () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper_container_bom", {
        autoplay: false, //等同于以下设置
        slidesPerView: "auto",
        slidesPerView: 5,
        spaceBetween: 20,
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
    choose_detail (item) {
      console.log(item);
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
  margin-top: 114px;
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
  .title_nav {
    height: 90px;
    width: 1200px;
    margin: 0 auto;
    font-size: 22px;
    line-height: 90px;
    text-align: left;
    .el_menu,
    .el_menu li {
      text-align: left;
      font-size: 22px;
      height: 90px;
      line-height: 90px;
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
  }
  .banner {
    height: 1192px;
    background-image: url('../assets/images/online/banner.png');
    // background-size: 100% 780px;
    position: relative;
    .banner_text {
      width: 1200px;
      height: 780px;
      // border: 1px solid green;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      text-align: left;
      .banner_title {
        color: #c8a461;
        height: 161px;
        font-size: 140px;
        font-weight: bold;
        // border: 1px solid green;
        margin: 65px 0 64px 0;
      }
      .banner_content {
        font-size: 36px;
        font-weight: 400;
        color: #fff;
        margin: 0;
        width: 760px;
        margin-bottom: 71px;
        line-height: 46px;
      }
      .banner_btn_left {
        width: 240px;
        height: 84px;
        background: rgba(200, 164, 97, 1);
        border-radius: 8px;
        font-size: 36px;
        font-weight: 400;
        color: #ffffff;
        line-height: 84px;
        text-align: center;
        float: left;
        cursor: pointer;
        img {
          vertical-align: sub;
          margin-right: 14px;
        }
      }
      .banner_btn_right {
        cursor: pointer;
        width: 318px;
        height: 84px;
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 8px;
        font-size: 36px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        background: rgba(200, 164, 97, 0.5);
        line-height: 84px;
        text-align: center;
        float: left;
        margin-left: 104px;
        vertical-align: middle;
        img {
          vertical-align: sub;
          margin-right: 14px;
        }
      }
    }
  }
  .recommend_box {
    // position: absolute;
    // top: 1076px;
    position: relative; //加这条样式
    width: 100%;
    overflow: hidden;
    margin-top: -480px;
    .subtitle {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 30px;
      text-align: left;
      font-size: 36px;
      font-weight: 500;
      color: #fff;
    }
    .recommend_top {
      .swiper_box {
        height: 220px;
        position: relative;
        .swiper-container {
          width: 100%;
          height: 220px;
          color: #fff;
          .swiper-wrapper {
            width: 100%;
          }
          .swiper-button-prev {
            width: 19.8%;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            background: rgba(0, 0, 0, 0.6);
            margin-top: 0;
            background-image: url('../assets/images/online/prev.png');
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
            background-image: url('../assets/images/online/next.png');
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
        }
      }
      .swiper-slide {
        box-sizing: border-box;
      }
      .detail_box {
        height: 790px;
      }
    }
    .recommend_mid {
      margin-top: 60px;
      .subtitle_mid {
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 30px;
        text-align: left;
        font-size: 36px;
        font-weight: 500;
        color: #fff;
      }
      .swiper_box {
        height: 220px;
        position: relative;
        .swiper_container_mid {
          width: 100%;
          height: 220px;
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
            background-image: url('../assets/images/online/prev.png');
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
            background-image: url('../assets/images/online/next.png');
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
    .recommend_bom {
      margin-top: 60px;
      .subtitle_bom {
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 30px;
        text-align: left;
        font-size: 36px;
        font-weight: 500;
        color: #fff;
      }
      .swiper_box {
        height: 220px;
        position: relative;
        .swiper_container_bom {
          width: 100%;
          height: 220px;
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
            background-image: url('../assets/images/online/prev.png');
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
            background-image: url('../assets/images/online/next.png');
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
</style>

<template>
  <div>
    <Nav></Nav>
    <div class="online">
      <div class="top">
        <div class="top_left">
          <img class="logo logo_left"
               width="117"
               src="@/assets/logo_2x.png"
               alt="">
          <img class="logo logo_right"
               src="@/assets/images/home/logo.png"
               alt="">
          <img class="logo logo_right"
               src="@/assets/images/home/logo.png"
               alt="">
          <img class="logo logo_right"
               src="@/assets/images/home/logo.png"
               alt="">
          <img class="logo"
               src="@/assets/images/home/logo.png"
               alt="">
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
                 text-color='#F6F6F6'
                 active-text-color='#C9A562'
                 background-color='#000'
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
                 alt="">
            <span>播放</span>
          </div>
          <div class="banner_btn_right">
            <img src="@/assets/images/online/add.png"
                 alt="">
            <span>我的影片</span>
          </div>
          <p class="subtitle">继续观看</p>
        </div>
      </div>
      <!-- 继续观看 -->
      <div class="swiper_box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for='item in img_list'>
              <div>
                <!-- 2323213 -->
                <img :src="item.src"
                     width="350"
                     alt="">
              </div>

            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next"></div>
          <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->

        </div>
      </div>
      <!-- D9区推荐 -->
      <div class="swiper_box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for='item in img_list'>
              <div>
                <!-- 2323213 -->
                <img :src="item.src"
                     width="350"
                     alt="">
              </div>

            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next"></div>
          <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->

        </div>
      </div>
      <!-- D9区热门 -->
      <div class="swiper_box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for='item in img_list'>
              <div>
                <!-- 2323213 -->
                <img :src="item.src"
                     width="350"
                     alt="">
              </div>

            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next"></div>
          <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->

        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>
<script>
import Nav from '@/views/nav.vue'
import Footer from '@/views/footer.vue'
import Swiper from 'swiper'
export default {
  name: 'Online',
  components: { Nav, Footer },
  data () {
    return {
      search: "",
      activeIndex: '1',
      img_list: [
        {
          src: require('@/assets/images/online/item1.png'),
        },
        {
          src: require('@/assets/images/online/item2.png'),
        },
        {
          src: require('@/assets/images/online/item3.png'),
        },
        {
          src: require('@/assets/images/online/item1.png'),
        },
        {
          src: require('@/assets/images/online/item2.png'),
        },
        {
          src: require('@/assets/images/online/item3.png'),
        },
        {
          src: require('@/assets/images/online/item1.png'),
        },
        {
          src: require('@/assets/images/online/item2.png'),
        },
        {
          src: require('@/assets/images/online/item3.png'),
        },
      ],
    }
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    handleSelect () {

    },
    initSwiper () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        autoplay: false,//等同于以下设置
        // autoplay: {
        //   disableOnInteraction: false
        // }, //可选选项，自动滑动
        slidesPerView: 'auto',
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: true,
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

  },

}
</script>
<style lang="less">
.online {
  .top {
    width: 1200px;
    height: 130px;
    line-height: 130px;
    margin: 30px auto;
    // border: 1px solid red;
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
    // border: 1px solid red;
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
    height: 780px;
    background-image: url('../assets/images/online/banner.png');
    // background-size: 100% 780px;
    background-clip: border-box;
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
      .subtitle {
        margin: 0;
        position: absolute;
        left: 0;
        bottom: 30px;
        font-size: 36px;
        font-weight: 500;
        color: #fff;
      }
    }
  }
  .swiper_box {
    height: 220px;
    border: 1px solid red;
    margin-bottom: 60px;
    .swiper-container {
      width: 100%;
      height: 220px;
      color: #fff;
      display: flex;
      .swiper-wrapper {
        display: flex;
        width: 100%;
      }
      //       .swiper-slide:nth-child(2n) {
      // width: 60%;
      // }
      .swiper-slide {
        width: 389px;
      }
    }
  }
}
</style>

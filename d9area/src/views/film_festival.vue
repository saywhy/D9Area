<template>
  <div class="container">
    <Nav :mainnav='mainnav'></Nav>
    <div class="FilmFestival">
      <div class="FilmFestival_top">
        <film-top></film-top>
      </div>
      <film-nav :activenav='Index'></film-nav>
      <div class="FilmFestival_swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="item in img_list">
              <img :src="item.src"
                   style="height: 100%; width: 100%;"
                   alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="FilmFestival_content">
        <div class="container_main"
             style="overflow: hidden;">
          <div class="top">
            <div class="left">
              <img src="@/assets/images/film/top_left.png"
                   width="760"
                   height="497"
                   alt />
              <p class="left_top_p">ICF国际CG动画电影周</p>
              <p>开启短片申报通道</p>
            </div>
            <div class="right">
              <div class="right_top">
                <img src="@/assets/images/film/top_right.png"
                     width="389"
                     height="240"
                     alt />
                <p>ICF短片申报规则说明</p>
              </div>
              <div class="right_bom">
                <img src="@/assets/images/film/top_right.png"
                     width="389"
                     height="240"
                     alt />
                <p>新闻发布会</p>
              </div>
            </div>
          </div>
          <div class="bom">
            <div class="left">
              <div class="left_top">
                <img src="@/assets/images/film/bom_left.png"
                     width="389"
                     height="240"
                     alt />
                <p>详细了解2020年官方评选影片</p>
              </div>
              <div class="left_bom">
                <img src="@/assets/images/film/bom_left.png"
                     width="389"
                     height="240"
                     alt />
                <p>详细了解2020年官方评选影片</p>
              </div>
            </div>
            <div class="right">
              <img src="@/assets/images/film/bom_right.png"
                   width="760"
                   height="497"
                   alt />
              <p class="right_top_p">头条视频</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
import filmNav from "@/views/film_nav.vue";
import filmTop from "@/views/film_top.vue";

export default {
  name: "FilmFestival",
  components: { Nav, Footer, filmNav, filmTop },
  data () {
    return {
      Index: "1",
      mainnav: "2",
      img_list: [
        {
          src: require("@/assets/images/film/banner1.jpg")
        },
        {
          src: require("@/assets/images/film/banner2.jpg")
        },
        {
          src: require("@/assets/images/film/banner3.jpg")
        }
      ]
    };
  },
  mounted () {
    this.initSwiper();
  },
  methods: {

    initSwiper () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        autoplay: false, //等同于以下设置
        // autoplay: {
        //   disableOnInteraction: false
        // }, //可选选项，自动滑动
        loop: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dragSize: 30
          // type: 'progress',
        }
      });
      // });
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
.container_main {
  width: 1200px;
  margin: 0 auto;
}
.FilmFestival {
  margin-top: 80px;
  .FilmFestival_content {
    background: #fff;
    padding-top: 60px;
    .top {
      overflow: hidden;
      .left {
        float: left;
        width: 760px;
        p {
          margin-top: 15px;
          font-size: 28px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
        .left_top_p {
          // margin-top: 63px;
        }
      }
      .right {
        float: right;
        width: 389px;
        p {
          margin-top: 6px;
          font-size: 22px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
        .right_bom {
          margin-top: 42px;
        }
      }
    }
    .bom {
      overflow: hidden;
      margin-top: 20px;
      .left {
        float: left;
        width: 389px;
        p {
          margin-top: 6px;
          font-size: 22px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
        .left_bom {
          margin-top: 58px;
        }
      }
      .right {
        float: right;
        width: 760px;
        p {
          margin-top: 15px;
          font-size: 28px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
        .right_top_p {
          // margin-top: 63px;
        }
      }
    }
  }
}
</style>

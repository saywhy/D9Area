<template>
  <div class="container">
    <film-nav :activenav="Index"></film-nav>
    <div class="FilmFestival">
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
        <div class="content_box"
             style="overflow: hidden;">
          <div class="top">
            <div class="left">
              <div class="big_img">
                <img src="@/assets/images/film/top_left.png"
                     alt />
              </div>
              <p class="left_top_p">ICF国际CG动画电影周</p>
              <p>开启短片申报通道</p>
            </div>
            <div class="right">
              <div class="right_top">
                <img src="@/assets/images/film/top_right.png"
                     class="smal_img"
                     alt />
                <p>ICF短片申报规则说明</p>
              </div>
              <div class="right_bom">
                <img src="@/assets/images/film/top_right.png"
                     class="smal_img"
                     alt />
                <p>新闻发布会</p>
              </div>
            </div>
          </div>
          <div class="bom">
            <div class="left">
              <div class="left_top">
                <img src="@/assets/images/film/bom_left.png"
                     class="smal_img"
                     alt />
                <p>详细了解2020年官方评选影片</p>
              </div>
              <div class="left_bom">
                <img src="@/assets/images/film/bom_left.png"
                     class="smal_img"
                     alt />
                <p>详细了解2020年官方评选影片</p>
              </div>
            </div>
            <div class="right">
              <img src="@/assets/images/film/bom_right.png"
                   class="big_img"
                   alt />
              <p class="right_top_p">ICF国际CG动画电影周</p>
              <p>开启短片申报通道</p>
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
.content_box {
  width: 998px;
  margin: 0 auto;
  padding-bottom: 40px;

  .big_img {
    width: 632px;
    height: 413px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .smal_img {
    width: 324px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.FilmFestival {
  .FilmFestival_content {
    background: #fff;
    padding-top: 40px;
    .top {
      overflow: hidden;
      .left {
        float: left;
        width: 632px;
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
        width: 324px;
        p {
          height: 64px;
          font-size: 18px;
          line-height: 64px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    .bom {
      overflow: hidden;
      margin-top: 20px;
      .left {
        float: left;
        width: 324px;
        p {
          height: 64px;
          font-size: 18px;
          line-height: 64px;
          font-size: 18px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
      }
      .right {
        float: right;
        width: 632px;
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

<template>
  <div class="body_box">
    <film-nav :activenav="Index"></film-nav>
    <div class="FilmFestival">
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
        <div class="content_box" style="overflow: hidden;">
          <!-- 上 -->
          <div class="top">
            <div class="left">
              <div class="big_img">
                <img src="@/assets/images/film/top_left.png" alt />
              </div>
              <p class="left_top_p">ICF国际CG动画电影周</p>
              <p>开启短片申报通道</p>
            </div>
            <div class="right">
              <div class="right_top">
                <img src="@/assets/images/film/top_right.png" class="smal_img" alt />
                <p>ICF短片申报规则说明</p>
              </div>
              <div class="right_bom">
                <img src="@/assets/images/film/top_right.png" class="smal_img" alt />
                <p>新闻发布会</p>
              </div>
            </div>
          </div>
          <!-- 中间轮播图 -->
          <div class="festival_mid">
            <div class="init_mid_Swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="xt in mid_Swiper_img">
                  <img :src="xt.src" style="height: 100%; width: 100%;" alt />
                </div>
              </div>
            </div>
          </div>
          <!-- 下 -->
          <div class="bom">
            <div class="left">
              <div class="left_top">
                <img src="@/assets/images/film/top_right.png" class="smal_img" alt />
                <p>ICF短片申报规则说明</p>
              </div>
              <div class="left_bom">
                <img src="@/assets/images/film/top_right.png" class="smal_img" alt />
                <p>新闻发布会</p>
              </div>
            </div>

            <div class="right">
              <img src="@/assets/images/film/top_left.png" alt />
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
  data() {
    return {
      Index: "1",
      mainnav: "2",
      img_list: [
        {
          src: require("@/assets/images/film/banner1.jpg"),
        },
        {
          src: require("@/assets/images/film/banner2.jpg"),
        },
        {
          src: require("@/assets/images/film/banner3.jpg"),
        },
      ],
      mid_Swiper_img: [
        {
          src: require("@/assets/images/film/mid_swiper_01.jpg"),
        },
        {
          src: require("@/assets/images/film/mid_swiper_02.jpg"),
        },
      ],
    };
  },
  mounted() {
    this.init_top_Swiper();
    this.init_mid_Swiper();
  },
  methods: {
    init_top_Swiper() {
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
          dragSize: 30,
          // type: 'progress',
        },
      });
      // });
    },
    init_mid_Swiper() {
      // this.$nextTick(() => {
      var swiper = new Swiper(".init_mid_Swiper", {
        autoplay: false, //等同于以下设置
        // autoplay: {
        //   disableOnInteraction: false
        // }, //可选选项，自动滑动
        loop: true,
        speed: 1000,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        //   dragSize: 30,
        //   // type: 'progress',
        // },
      });
      // });
    },
  },
};
</script>
<style lang="less" scoped>
/deep/ .content_box {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 70px;
  .big_img {
    width: 740px;
    height: 484px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .smal_img {
    width: 370px;
    height: 226px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

/deep/ .FilmFestival {
  .swiper-container {
    width: 100%;
    height: 640px;
    color: #fff;
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: #9b9b9b;
      opacity: 0.5;
      border-radius: 50%;
    }
    .swiper-pagination-bullet-active {
      width: 10px;
      height: 10px;
      background: #fff;
      opacity: 1;
    }
  }
  .FilmFestival_content {
    background: #fff;
    padding-top: 70px;

    .top {
      overflow: auto;
      .left {
        float: left;
        width: 740px;
        p {
          margin-top: 20px;
          font-size: 28px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
        .left_top_p {
          margin-top: 40px;
        }
      }
      .right {
        float: right;
        width: 370px;
        p {
          height: 64px;
          font-size: 18px;
          line-height: 64px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          margin-bottom: 30px;
        }
      }
    }

    .bom {
      // border: 1px solid red;
      .left {
        float: left;
        .left_top {
          .smal_img {
            width: 370px;
            height: 226px;
          }
          p {
            font-size: 18px;
            color: #000;
            margin: 30px 0 50px 0;
          }
          
        }
        .left_bom {
            .smal_img {
              width: 370px;
              height: 226px;
            }
            p {
              font-size: 18px;
              color: #000;
              margin-top: 30px;
            }
          }
      }
      .right {
        float: right;
        img {
          width: 740px;
          height: 484px;
        }
        .right_top_p {
          font-size: 28px;
          color: #000;
          margin:30px 0 15px 0;
        }
        p {
          font-size: 28px;
          color: #000;
           font-weight:400;
        }
      }
    }

    .festival_mid {
      // border: 1px solid red;
      margin-bottom: 70px;
      height: 380px;
    }
  }

  .init_mid_Swiper {
    width: 100%;
    height: 100%;
    color: #000;
  }
}
</style>

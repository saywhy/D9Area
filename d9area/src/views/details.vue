<template>
  <div class="detail">
    <!-- 返回按钮 -->

    <div class="return" @click="return_click">返回</div>
    <!-- 头部背景图 -->
    <div class="detail_top">
      <img src="../assets/images/detail/top_logo.png" alt />
      <p>北京国际CG动画电影周</p>
      <p>2020 入围影片</p>
    </div>

    <!-- 轮播图 -->
    <div class="swiper_box">
      <div class="swiper-container" id="top_swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in img_list">
            <div :class="item.class">
              <img :src="item.src" style="height: 100%; width: 100%;" alt />
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        <div class="swiper-button-prev swiper-button-white"></div>
        <!-- 白色 -->
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next swiper-button-white"></div>
        <!-- 白色 -->
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>

    <!--  视频 -->
    <div class="video_box">
      <div class="video">
        <img src="../assets/images/detail/video.png" alt />
        <div class="type_box">预告片</div>
        <div class="but_box">
          <img class="but" src="../assets/images/detail/but.png" alt />
        </div>
      </div>
    </div>

    <!--   影片详情 -->
    <div class="film">
      <div class="film_box">
        <div class="film_box_l">
          <div class="img_box">
            <img src="../assets/images/detail/tim.png" alt />
          </div>
          <div class="team">
            <p class="team_title">主创团队</p>

            <p>导演: 12345f</p>
            <p>编剧: 12345</p>
            <p>剪辑: 12345csdw</p>
            <p>艺术指导: 12345</p>
            <p>视效总监: 12345ff</p>
            <p>角色设计: 1234f5</p>
            <p>环境设计: 12345</p>
            <p>动效设计: 12345r</p>
            <p>技术总监: 12345</p>
          </div>
        </div>

        <div class="film_box_r">
          <div class="name_box">
            <p class="name_title">影片名称</p>
            <p class="name_work">影片入围奖项</p>

            <div class="time">
              <p>2020</p>
              <p>|</p>
              <p>10分钟</p>
              <p>|</p>
              <p>国家</p>
            </div>
          </div>
          <div class="brief">
            <p>影片简介:212314354622766666ff44454534545656563453534535353545435454545 85959485u8934589457893457983479837589438945793457894hh58475947594754958945u948u948u48935934ju</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部新闻资讯 -->
    <realFoot></realFoot>

    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import Footer from "../views/footer";
import realFoot from "../views/real_foot.vue";
export default {
  components: { Footer, realFoot },
  data() {
    return {
      img_list: [
        {
          src: require("../assets/images/detail/swip1.jpg"),
          class: "width338",
        },

        {
          src: require("../assets/images/detail/swip2.jpg"),
          class: "width843",
        },

        {
          src: require("../assets/images/detail/swip3.jpg"),
          class: "width740",
        },
        // {
        //   // src: require("../assets/images/detail/swip.png"),
        // },
      ],
    };
  },
  mounted() {
    this.init_Swiper();
  },
  methods: {
    init_Swiper() {
      // this.$nextTick(() => {
      var swiper = new Swiper("#top_swiper", {
        // autoplay: false, //等同于以下设置
        // autoplay: {
        //   disableOnInteraction: false,
        // }, //可选选项，自动滑动
        slidesPerView: "auto",
        loopedSlides: 5,
        // slidesOffsetBefore : 100,
        loop: true,
        speed: 1000,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        //   dragSize: 30,
        //   // type: "progress",
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      // });
    },
    return_click() {
      //  this.$router.push("/film_show");
      this.$router.go(-1); //返回上一层
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  height: 1000px;
  //  返回按钮

  .return {
    width: 63px;
    height: 36px;
    line-height: 36px;
    background: #c8a461;
    position: fixed;
    right: 0;
    bottom: 100px;
    cursor: pointer;
    z-index: 999999;
  }
  // border: 1px solid red;
  .detail_top {
    height: 150px;
    width: 100%;
    background: url(../assets/images/detail/top.png);
    img {
      width: 120px;
      height: 60px;
      margin-top: 20px;
    }
    p {
      font-size: 16px;
      color: #ac955f;
      margin-top: 6px;
    }
  }

  #top_swiper {
    height: 476px;
    .swiper-slide {
      width: auto; /*根据内容调整宽度*/
    }
    .swiper-button-prev {
      // width: 23px;
      height: 39px;
      left: 80px;
    }
    .swiper-button-next {
      // width: 23px;
      height: 39px;
      right: 80px;
    }
    .width338{
      width: 338px;
      height: 100%;
    }
     .width843{
      width: 843px;
       height: 100%;
    }
     .width740{
      width: 843px;
       height: 100%;
    }
  }
  //  视频
  .video_box {
    width: 100%;
    height: 844px;
    background: url(../assets/images/detail/bgt.png);
    padding-top: 82px;
    .video {
      width: 1200px;
      height: 680px;
      // border: 1px solid green;
      margin: 0 auto;

      position: relative;
      .type_box {
        position: absolute;
        width: 80px;
        height: 36px;
        background: #c8a461;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 36px;
        text-align: center;
        top: 40px;
        left: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .but_box {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        // background-color: #fff;
        opacity: 0.8;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .but {
          width: 70px;
          height: 70px;
        }
      }
    }
  }

  .film {
    height: 594px;
    background-color: #0a0a0a;
    padding-bottom: 70px;
    // border: 1px solid red;
    .film_box {
      height: 594px;
      width: 1200px;
      // border: 1px solid red;
      margin: 0 auto;

      .film_box_l {
        height: 594px;
        width: 600px;
        // border: 1px solid red;
        // position: relative;
        float: left;
        .img_box {
          width: 372px;
          height: 95px;
          margin: 60px 0 70px 0;
          // position: absolute;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .team {
          // height: 320px;
          // border: 1px solid green;

          .team_title {
            font-size: 20px;
            color: #554f39;
            text-align: left;
            margin-bottom: 30px;
          }
          p {
            font-size: 16px;
            text-align: left;
            line-height: 30px;
          }
        }
      }

      .film_box_r {
        height: 594px;
        width: 596px;
        // border: 1px solid red;
        float: right;
        text-align: left;
        .name_box {
          width: 163px;
          height: 90px;
          margin-top: 64px;
          line-height: 30px;
          .name_title {
            font-size: 20px;
            color: #fafafa;
          }
          .name_work {
            font-size: 16px;
            color: #998f66;
          }
          .time {
            // float: left;
            p {
              font-size: 16px;
              float: left;
            }
          }
        }

        .brief {
          font-size: 16px;
          width: 600px;
          height: 120px;
          margin-top: 70px;
          line-height: 30px;
          word-wrap: break-word;
          // border: 1px solid red;
        }
      }
    }
  }
}
</style>
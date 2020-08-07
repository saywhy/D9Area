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
                <img src="@/assets/images/film/top_left1.jpg" alt />
              </div>
              <p class="left_top_p">北京国际CG动画电影周</p>
              <p>开启短片申报通道</p>
            </div>
            <div class="right">
              <div class="right_top">
                <img src="@/assets/images/film/top_right.jpg" class="smal_img" alt />
                <p>申报章程</p>
              </div>
              <div class="right_bom">
                <img src="../assets/images/film/top_right_bottom.jpg" class="smal_img" alt />
                <p>媒体通道</p>
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
              <!-- 如果需要分页器 -->
              <!-- <div class="swiper-pagination"></div> -->
            </div>
          </div>
          <!-- 下 -->
          <div class="bom">
            <div class="bom_box_title">所有新闻</div>
            <div class="bom_box">
              <div class="bom_box_left">
                <!-- 下拉框 -->
                <el-select v-model="value" placeholder="2020">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <p class="awards">获奖作品</p>
                <div class="direction">
                  <div class="direction_l">
                    <p><</p>
                  </div>
                  <div class="direction_r">
                    <p>></p>
                  </div>
                </div>
                <!-- <div class="more">
                  <span>了解更多获奖作品</span>
                  <span>——></span>
                </div> -->
              </div>

              <div class="bom_box_right">
                <div class="box_img">
                  <div class="img_l"><img src="../assets/images/film/bottom_icf.png" alt=""></div> 
                  <div class="img_r"><img src="../assets/images/film/bottom_icf.png" alt=""></div> 
                </div>
                 <div class="box_img">
                  <div class="img_l"><img src="../assets/images/film/bottom_icf.png" alt=""></div> 
                  <div class="img_r"><img src="../assets/images/film/bottom_icf.png" alt=""></div> 
                </div>
              </div>
            </div>
          </div>

<!-- 底部 -->
          <div class="" >

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
      ],
      mid_Swiper_img: [
        {
          src: require("@/assets/images/film/mid_swiper_01.jpg"),
        },
        // {
        //   src: require("@/assets/images/film/mid_swiper_02.jpg"),
        // },
      ],
      options: [
        {
          value: "选项1",
          label: "2020",
        },
      ],
      value: ''
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
        // autoplay: false, //等同于以下设置
        // autoplay: {
        //   disableOnInteraction: false
        // }, //可选选项，自动滑动
        loop: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dragSize: 30,
          // type: "progress",
        },
      });
      // });
    },
    init_mid_Swiper() {
      this.$nextTick(() => {
        var swiper = new Swiper(".init_mid_Swiper", {
          // autoplay: false, //等同于以下设置
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
      });
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

    // 底部

    .bom {
      .bom_box_title {
        font-size: 18px;
        color: #000000;
        text-align: left;
        height: 100px;
        // border:1px solid red;
      }

      .bom_box {
        .bom_box_left {
          width: 150px;
          height: 700px;
          // border: 1px solid red;
          float: left;
          // .el-input el-input--suffix {
          //   width: 150px;
          //   height: 50px;
          //   background-color: #c8a461;
          // }
          .el-input__inner {
            width: 150px;
            height: 50px;
            background-color: #c8a461;
            font-size: 20px;
            color: red !important;
            border: 0;
            border-radius: 0;
            // margin-top: 60px;
          }
          .awards {
            font-size: 28px;
            color: #000;
            font-weight: 500;
            text-align: left;
            margin: 30px 0 36px 0;
          }
          .direction {
            overflow: hidden;
            .direction_l {
              border: 1px solid #9b9b9b;
              width: 56px;
              height: 56px;
              float: left;

              p {
                width: 10px;
                height: 18px;
                color: #9b9b9b;
                margin: 20px auto;
              }
            }
            .direction_r {
              border: 1px solid #9b9b9b;
              width: 56px;
              height: 56px;
              float: right;
              p {
                width: 10px;
                height: 18px;
                color: #9b9b9b;
                margin: 20px auto;
              }
            }
            // .more {
            //   margin-top: 60px;
            //   span {
            //     font-size: 16px;
            //     // color: #a5aaa9;
            //     color:#000;
            //   }
            
          }
        }

        .bom_box_right {
          width: 840px;
          height: 700px;
          float: right;
          
          .box_img{
            height: 280px;
            width:840px;
            margin-bottom: 16px;
            .img_l{
              width:410px;
               height: 280px;
               float: left;
            }
            .img_l{
              width:410px;
               height: 280px;
               float: right;
            }
          }
        }
      }
    }

    // 中间轮播图
    .festival_mid {
      // border: 1px solid red;
      width: 830px;
      height: 380px;
      margin-bottom: 70px;

      .init_mid_Swiper {
        width: 100%;
        height: 100%;
        color: #000;
        // border: 1px solid green;
      }
    }
  }
}
</style>

<template>
  <div class="body_box">
    <!-- <div class="background_box">
      <div class="award_img_box">
        <img src="../assets/images/film/award_set.png" alt />
      </div>

    </div>-->

    <film-nav :activenav="Index"></film-nav>

    <div class="background_box">
      <img src="../assets/images/film/award_set.png" alt />
    </div>
    <div class="FilmFestival">
      <div class="FilmFestival_swiper">
        <div class="swiper-container" id="top_swiper">
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
        <div class="back_fff">
          <div class="content_box">
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
            <!-- 中间图片加轮播图 -->
            <div class="mid_box">
              <div class="mid">
                <img src="@/assets/images/film/mid_swiper_01.jpg" alt height="100%" width="100%" />
              </div>
              <div class="mid_swiper">
                <!-- 轮播图 -->
                <div class="mid_swiper_top">
                  <div class="swiper-container" id="mid_Swiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="item in mid_swiper_list">
                        <p class="mid_swiper_title">{{item.title}}</p>
                        <p class="mid_swiper_content">{{item.content}}</p>
                      </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination mid-swiper-pagination"></div>
                  </div>
                </div>

                <div class="mid_swiper_bom">
                  <div class="bom_btn">所有新闻</div>
                </div>
              </div>
            </div>
            <!-- 下 -->
          </div>
        </div>
      </div>
    </div>
    <!-- 奖项设置 -->
    <div class="award_set">
      <p class="award_title">奖项设置</p>
    </div>

    <div class="form_box">
      <div class="form_container">
        <div class="left">
          <div class="form_left">
            <div class="form_item">
              <p class="item_title">最佳短片</p>
              <p class="item_font">></p>
            </div>
            <div class="form_item">
              <p class="item_title">最佳剪辑</p>
              <p class="item_font">></p>
            </div>
            <div class="form_item">
              <p class="item_title">最佳角色设计</p>
              <p class="item_font">></p>
            </div>
            <div class="form_item">
              <p class="item_title">最佳环境设计</p>
              <p class="item_font">></p>
            </div>
          </div>
          <div class="form_mid">
            <div class="form_item">
              <p class="item_title">最佳导演</p>
              <p class="item_font">></p>
            </div>
            <div class="form_item">
              <p class="item_title">最佳艺术指导</p>
              <p class="item_font">></p>
            </div>
            <div class="form_item">
              <p class="item_title">最佳动效设计</p>
              <p class="item_font">></p>
            </div>
            <div class="form_item">
              <p class="item_title">最佳技术贡献</p>
              <p class="item_font">></p>
            </div>
          </div>
          <div class="form_right">
            <div class="form_item">
              <p class="item_title">最佳编剧</p>
              <p class="item_font">></p>
            </div>
            <div class="form_item">
              <p class="item_title">最佳特效制作</p>
              <p class="item_font">></p>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/images/film/font.png" alt />
        </div>
      </div>
    </div>

    <div>
      <div class="award_content">
        <div class="award_form">asdasdasdasdas</div>
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
      mid_swiper_list: [
        {
          title: "2020年北京国际CG动画电影周",
          content:
            "首届ICF分为竞赛单元、展映单元、论坛单元、 D9区创投计划四大板块内容，首届主竞赛单元只接受CG电影短片、三维动画短片、VR短片三个方向， 面向全球CG动画电影创作者开放。",
        },
        {
          title: "2021年北京国际CG动画电影周",
          content:
            "首届ICF分为竞赛单元、展映单元、论坛单元、 D9区创投计划四大板块内容，首届主竞赛单元只接受CG电影短片、三维动画短片、VR短片三个方向， 面向全球CG动画电影创作者开放。",
        },
      ],
      value: "",
    };
  },
  mounted() {
    this.init_top_Swiper();
    this.init_mid_Swiper();
  },
  methods: {
    init_top_Swiper() {
      // this.$nextTick(() => {
      var swiper = new Swiper("#top_swiper", {
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
        var swiper = new Swiper("#mid_Swiper", {
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
  position: relative;
  z-index: 99;
  #top_swiper {
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
    padding-top: 100px;
    background: #fff;

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
    // 中间
    .mid_box {
      position: relative;
      height: 470px;
      .mid {
        height: 375px;
        position: relative;
      }
      .mid_swiper {
        background: #f7f7f7;
        width: 460px;
        height: 426px;
        position: absolute;
        right: 44px;
        top: 44px;
        .mid_swiper_top {
          height: 331px;
        }
        .mid_swiper_bom {
          height: 95px;
          position: relative;
          .bom_btn {
            cursor: pointer;
            width: 90px;
            height: 30px;
            line-height: 30px;
            color: #c7a361;
            border: 1px solid rgba(199, 163, 97, 1);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
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

          .box_img {
            height: 280px;
            width: 840px;
            margin-bottom: 16px;
            .img_l {
              width: 410px;
              height: 280px;
              float: left;
            }
            .img_l {
              width: 410px;
              height: 280px;
              float: right;
            }
          }
        }
      }
    }

    // 中间轮播图
    #mid_Swiper {
      border: 1px solid red;
      width: 460px;
      height: 331px;
      color: #000;
      .swiper-slide {
        padding: 0 45px;
      }
      .mid_swiper_title {
        font-size: 28px;
        font-weight: bold;
        color: #141414;
        line-height: 40px;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 20px;
        width: 307px;
      }
      .mid_swiper_content {
        font-size: 16px;
        font-weight: 400;
        color: rgba(131, 131, 131, 1);
        line-height: 30px;
      }
    }
    .mid-swiper-pagination {
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: #000;
        border-radius: 10px;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        width: 10px;
        height: 10px;
        border-radius: 15px;
        background: #fff;
        border: 3px solid #c7a361;
        opacity: 1;
      }
    }
  }
}

// 奖项设置
.award_set {
  color: #000;
  height: 120px;
  background: #fff;
  border: 1px solid red;
  position: relative;
  line-height: 120px;
  z-index: 99;
  .award_title {
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }
}
.form_box {
  width: 100%;
  height: 1000px;
  border: 1px solid red;
  position: relative;
  z-index: 99;
  .form_container {
    width: 1200px;
    height: 1000px;
    margin: 0 auto;
    position: relative;
    .left {
      height: 856px;
      width: 918px;
      border: 1px solid #c8a461;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      padding: 50px 0;
      display: flex;
      .form_item {
        height: 189px;
        margin-left: 114px;
        padding-top: 80px;
        p {
          text-align: left;
        }
        .item_title {
          font-size: 20px;
          margin-bottom: 10px;
          cursor: pointer;
        }
        .item_font {
          font-size: 15px;
          color: #c8a461;
          cursor: pointer;
        }
      }
      .form_left {
        flex: 1;
        border-right: 1px solid #c8a461;
      }
      .form_mid {
        flex: 1;
        border-right: 1px solid #c8a461;
      }
      .form_right {
        flex: 1;
      }
    }
    .right {
      position: absolute;
      height: 856px;
      width: 200px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.background_box {
  width: 100%;
  height: 1000px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  img {
    width: 100%;
    height: 1000px;
  }
}
</style>

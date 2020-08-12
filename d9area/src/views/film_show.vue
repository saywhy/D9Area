<template>
  <div class="body_box">
    <div class="container_box">
      <film-nav :activenav="Index"></film-nav>
      <div class="FilmShow_top">
        <img src="@/assets/images/film/show/banner_fixed.png" alt />
      </div>
      <div class="FilmShow_swiper">
        <div class="container">
          <div class="swiper-container" id="top_swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in demo_list">
                <div class="border_box"></div>
                <div class="cover_box">
                  <img src="@/assets/images/film/show/cover.png" alt />
                </div>
                <div class="info_box">
                  <p class="info_title">{{item.name}}</p>
                  <p
                    class="info_des"
                  >影片简介2312321312321332312323323213232131232323131232323232 34324324234343432432434342423432</p>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-button-prev left_prev"></div>
            <div class="swiper-button-next right_next"></div>
          </div>
        </div>
      </div>

      <!-- 内容 -->
      <div class="FilmShow_content">
        <div class="mid_box"></div>
        <div class="content_top">
          <div class="down_box">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                2020
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <!-- <el-dropdown-menu slot="dropdown"> -->
              <!-- <el-dropdown-item>2020</el-dropdown-item> -->
              <!-- </el-dropdown-menu> -->
            </el-dropdown>
          </div>
          <div class="top_item">
            <li>
              <p class="p_title">最佳短片</p>
              <p class="p_icon">></p>
            </li>
            <li>
              <p class="p_title">最佳剪辑</p>
              <p class="p_icon">></p>
            </li>
          </div>
          <div class="top_item">
            <li>
              <p class="p_title">最佳角色设计</p>
              <p class="p_icon">></p>
            </li>
            <li>
              <p class="p_title">最佳环境设计</p>
              <p class="p_icon">></p>
            </li>
          </div>
          <div class="top_item">
            <li>
              <p class="p_title">最佳导演</p>
              <p class="p_icon">></p>
            </li>
            <li>
              <p class="p_title">最佳艺术指导</p>
              <p class="p_icon">></p>
            </li>
          </div>
          <div class="top_item">
            <li>
              <p class="p_title">最佳动效设计</p>
              <p class="p_icon">></p>
            </li>
            <li>
              <p class="p_title">最佳技术贡献</p>
              <p class="p_icon">></p>
            </li>
          </div>
          <div class="top_item">
            <li>
              <p class="p_title">最佳编剧</p>
              <p class="p_icon">></p>
            </li>
            <li>
              <p class="p_title">最佳特效制作</p>
              <p class="p_icon">></p>
            </li>
          </div>
        </div>
        <!-- 电影列表 -->

        <div class="item_list_box">
          <div class="item_box" v-for="item in demo_list" @click="goDetail">
            <div class="img_box">
              <img src="@/assets/images/film/show/cover.png" alt />
            </div>
            <div class="time_box">{{item.time}}</div>
            <div class="name_box">
              <p>{{item.name}}</p>
            </div>
            <div class="item_des">
              <p>{{item.team}}</p>
              <!-- <p>{{item.company}}</p> -->
            </div>
          </div>
        </div>
      </div>
      <realFoot></realFoot>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
import filmNav from "@/views/film_nav.vue";
import filmSwiper from "@/views/film_swiper.vue";
import realFoot from "../views/real_foot.vue";
export default {
  name: "FilmShow",
  components: { Nav, Footer, filmNav, filmSwiper, realFoot },
  data() {
    return {
      Index: "3",
      selected_box: true,
      selected_box_2: true,
      detail_status: false,
      awards: "awards",
      selected: "selected",
      demo_list: [
        {
          img: "",
          name: "拯救计划",
          time: "01'20''",
          type_name: "复古文艺短片",
          team: "影片简介：ergdsrgsergr11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
          work: "ruwei",
        },
        {
          name: "杀手精英",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "影片简介：ergdsrgsergr11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
          work: "huojiang",
        },
        {
          name: "恐怖之夜",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "影片简介：ergdsrgsergr11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "永无止境永无止境永无止境永无止境永无止境永无止境永无止境",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "01' 20''",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
      ],
    };
  },
  mounted() {
    this.init_top_Swiper();
  },
  methods: {
    init_top_Swiper() {
      // this.$nextTick(() => {
      var swiper = new Swiper("#top_swiper", {
        // autoplay: false, //等同于以下设置
        autoplay: {
          disableOnInteraction: false,
        }, //可选选项，自动滑动
        loop: true,
        speed: 1000,
        // effect: "cube",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dragSize: 30,
          // type: "progress",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChangeTransitionStart: function () {
            //alert(this.activeIndex);
          },
          slideChangeTransitionEnd: function () {
            // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
      });
      // });
    },
    goDetail(){
     this.$router.push("/details");
    }
  },
};
</script>
<style lang="less" scoped>
.el-dropdown-menu {
  width: 140px;
  background: #141414;
  border: 1px solid#c8a461;
  padding: 2px 0;
  .el-dropdown-menu__item {
    color: #fff;
  }
  .el-popper[x-placement^="bottom"] .popper__arrow::after {
    border-bottom-color: #c8a461 !important;
  }
  .el-popper[x-placement^="bottom"] .popper__arrow {
    border-bottom-color: #c8a461 !important;
  }
  .popper__arrow::after {
    border-bottom-color: #c8a461 !important;
  }
}

.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #141414;
  color: #fff;
}

.FilmShow_top {
  width: 100%;
  height: 540px;
  position: fixed;
  // border: 1px solid red;
  z-index: 11;
  img {
    width: 100%;
    height: 100%;
  }
}

// 轮播图
.FilmShow_swiper {
  // border: 1px solid red;
  height: 360px;
  position: relative;
  z-index: 99;
  margin-top: 400px;
  .container {
    width: 1200px;
    margin: 0 auto;
    #top_swiper {
      width: 100%;
      height: 100%;
      // border: 1px solid green;
      color: #fff;
      .swiper-slide {
        padding: 0 45px;
        position: relative;
        .border_box {
          height: 277px;
          width: 222px;
          border: 1px solid #c8a461;
          position: absolute;
          left: 5px;
          top: 0;
        }
        .cover_box {
          height: 277px;
          width: 222px;
          position: absolute;
          left: 18px;
          top: 13px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info_box {
          // border: 1px solid red;
          margin-left: 345px;
          width: 520px;
          margin-top: 86px;
          text-align: left;
          .info_title {
            font-size: 28px;
            font-weight: 500;
            margin-bottom: 48px;
          }
          .info_des {
            font-size: 16px;
            font-weight: 400;
          }
        }
      }
      // 前进后退按钮
      .left_prev {
        border: 1px solid #c8a461;
        width: 50px;
        height: 50px;
        background-size: 10px 18px;
        background-image: url(../assets/images/film/show/left.png);
        margin-top: 0;
        left: initial;
        top: 0;
        right: 80px !important;
      }
      .right_next {
        border: 1px solid #4d4c4c;
        width: 50px;
        height: 50px;
        background-size: 10px 18px;
        background-image: url(../assets/images/film/show/right.png);
        margin-top: 0;
        left: initial;
        top: 0;
        right: 0;
      }
    }
  }
}

.FilmShow_content {
  // height: 1200px;
  background: #0a0a0a;
  position: relative;
  color: #fff;
  padding-top: 100px;
  z-index: 99;
  .mid_box {
    // border: 1px solid red;
    height: 162px;
    position: absolute;
    background-image: url(../assets/images/film/show/mid_banner.png);
    background-size: 100% 100%;
    width: 1861px;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .content_top {
    height: 144px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    z-index: 199;
    .down_box {
      width: 140px;
      height: 50px;
      border: 1px solid #c8a461;
      margin-right: 38px;
      .el-dropdown {
        width: 140px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        color: #c8a461;
      }
    }
    .top_item {
      // border: 1px solid red;
      flex: 1;
      border-left: 1px solid #c8a461;
      padding-left: 24px;
      li {
        height: 72px;
        // border: 1px solid red;
        text-align: left;
        padding-top: 15px;
        .p_title {
          font-size: 16px;
          cursor: pointer;
        }
        .p_icon {
          color: #c8a461;
          font-size: 15px;
          cursor: pointer;
        }
      }
    }
  }
  // 电影列表
  .item_list_box {
    margin: 0 auto;
    margin-top: 60px;
    min-height: 200px;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    position: relative;
    .item_box {
      height: 500px;
      flex: 0 0 calc(25% - 15px);
      align-items: flex-start;
      margin-bottom: 22px;
      position: relative;
        cursor: pointer;
      .time_box {
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 5px;
        font-size: 12px;
        color: #0a0a0a;
      }

      .name_box {
        position: absolute;
        width: 220px;
        height: 100px;
        right: 0;
        top: 282px;
        background: rgba(200, 164, 97, 0.64);
        p {
          position: absolute;
          top: 50%;
          left: 0;
          text-align: left;
          padding: 0 20px;
          font-size: 18px;
          transform: translateY(-50%);
        }
      }
      .img_box {
        height: 356px;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item_des {
        margin-top: 54px;
        text-align: left;
        width: 100%;
        height: 80px;
        padding: 0 20px;
      }
    }
  }
}
</style>

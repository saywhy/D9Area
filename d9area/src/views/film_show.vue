<template>
  <div class="body_box">
    <div class="container_box">
      <film-nav :activenav="Index"></film-nav>
      <div class="FilmShow_top">
        <img src="../assets/images/film/film_show1.jpg" width:540px alt />
      </div>
      <div class="FilmShow">
        <!-- 影片展示 -->
        <div class>
          <div>
            <!-- <p class="content_title">入围作品</p> -->
            <div class="content_top sub_container" :class="detail_status?'border_box':''">
              <div class="content_top_left" @click="show_detail_box">
                <span class="content_top_left_time">时长：1分20秒</span>
              </div>
              <div class="content_top_right">
                <div class="content_top_right_top">
                  <p class="film_name">拯救计划</p>
                  <p class="film_theme">VFX电影短片 | 战争</p>
                  <p
                    class="film_des"
                  >想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是f/T2.8，这部短片用四个原因告诉你，一起来涨知识吧！相信你一定有所提高！</p>
                </div>
                <div class="content_top_right_bom">
                  <p class="film_company">出品方：凉山重工</p>
                  <p class="film_author">主创团队：导演11111/编剧/制片……</p>
                </div>
              </div>
            </div>
            <!-- 弹出框 -->
            <div class="show_detail" v-if="detail_status">
              <div class="detail_box">
                <div class="img_box">
                  <img
                    class="X"
                    @click="closed_detail_box"
                    src="../assets/images/film_swiper/closed.png"
                    alt
                  />
                </div>

                <div class="detail_box_left">
                  <p class="title">恐怖之夜</p>
                  <div class="time">
                    <span>2020-06-23</span>
                    <span>1小时39分钟</span>
                  </div>
                  <p
                    class="des"
                  >罗德主持一个专门讨论恐怖的广播节目，有一天，播音员开始收到一个拼命求救的孩子的电话。起初，他认为这是一个笑话，后来他才意识到电话隐藏着一个黑暗的秘密。</p>
                  <div class="btn">
                    <div class="btn_left">
                      <img src="../assets/images/online/start.png" alt />
                      <span>播放</span>
                    </div>

                    <div class="btn_right">
                      <img src="../assets/images/online/add.png" alt />
                      <span>我的影片</span>
                    </div>
                  </div>

                  <p class>出品方：凉山童工</p>
                  <p>主创团队：导演11111/编剧222/制片111/艺术指导2222</p>
                </div>
              </div>
            </div>

            <div class="demo_box sub_container">
              <div
                class="demo_item_box"
                v-for="item in demo_list"
                :class="item.show?'display_none':''"
              >
                <div class="item_img">
                  <span class="item_time">{{item.time}}</span>
                </div>
                <div class="item_content">
                  <div class="item_content_top">
                    <p class="item_name">
                      <span>{{item.type_name}}</span>
                      <span>|</span>
                      <span>{{item.name}}</span>
                    </p>
                    <p class="item_author">{{item.team}}</p>
                  </div>
                  <div class="item_content_bom">
                    <p>
                      <span class="item_company">{{item.company}}</span>
                      <span class="item_theme">{{item.type}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!selected_box">
          <!-- <div class="sub_container">
            <p class="content_title">入围作品</p>
          </div>-->
          <!-- <film-swiper :id="selected"></film-swiper> -->
        </div>
        <!-- 获奖作品 -->
        <div v-if="!selected_box_2">
          <div class="sub_container">
            <p class="content_title">获奖作品</p>
          </div>
          <film-swiper :id="awards"></film-swiper>
        </div>
      </div>
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
export default {
  name: "FilmShow",
  components: { Nav, Footer, filmNav, filmSwiper },
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
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
          work: "ruwei",
        },
        {
          name: "杀手精英",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
          work: "huojiang",
        },
        {
          name: "恐怖之夜",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "永无止境",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
        {
          name: "拯救计划",
          time: "时长：1分20秒",
          type_name: "复古文艺短片",
          team: "主创团队：导演11111/编剧/制片......",
          company: "出品方：凉山重工",
          type: "VFX电影短片",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    show_detail_box() {
      this.detail_status = true;
    },
    closed_detail_box() {
      this.detail_status = false;
    },
  },
};
</script>
<style lang="less" scoped>
.FilmShow_top {
  width: 100%;
  height: 300px;
  position: fixed;
  img {
    width: 100%;
    height: 100%;
  }
}
.FilmShow {
  background: #0a0a0a;
  padding-bottom: 70px;
  margin-top: 300px;
  padding-top: 70px;
  position: relative;
  // 内容
  .sub_container {
    width: 1200px;
    margin: 0 auto;
  }
  .content_title {
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    margin: 70px 0 50px 0;
    text-align: left;
  }
  .content_top {
    overflow: hidden;
    background: #000;
    .content_top_left {
      width: 798px;
      float: left;
      height: 500px;
      background-image: url("../assets/images/film/show/main.png");
      background-size: 100% 100%;
      cursor: pointer;
      position: relative;
      .content_top_left_time {
        position: absolute;
        right: 14px;
        bottom: 12px;
        font-size: 14px;
      }
    }
    .content_top_right {
      width: 398px;
      float: left;
      text-align: left;
      .content_top_right_top {
        height: 380px;
        border-bottom: 1px solid #292929;
        padding: 44px 0 25px 34px;
        .film_name {
          font-size: 22px;
        }
        .film_theme {
          font-size: 16px;
          color: rgba(123, 124, 123, 1);
          margin: 26px 0;
        }
        .film_des {
          font-size: 14px;
          color: rgba(207, 207, 207, 1);
          margin: 0 20px 136px 0;
          line-height: 28px;
        }
      }
      .content_top_right_bom {
        padding: 32px 0px 28px 34px;
        .film_company {
          font-size: 14px;
          margin-bottom: 24px;
        }
        .film_author {
          font-size: 14px;
          color: rgba(123, 124, 123, 1);
        }
      }
    }
  }
  .border_box {
    border: 1px solid #c8a461;
  }
  .demo_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
  }

  .demo_item_box {
    flex: 0 0 calc(33.33% - 15px);
    margin-top: 32px;
    align-items: flex-start;
    height: 390px;
    align-self: flex-start;
    background: #000;
    .item_img {
      height: 226px;
      background-image: url("../assets/images/film/show/sub.png");
      background-size: 100% 100%;
      position: relative;
      .item_time {
        position: absolute;
        right: 30px;
        bottom: 18px;
        font-size: 14px;
      }
    }
    .item_content {
      text-align: left;
      .item_content_top {
        height: 100px;
        border-bottom: 1px solid rgba(10, 10, 10, 1);
        padding: 24px 16px;
        .item_name {
          font-size: 14px;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 12px;
        }
        .item_author {
          font-size: 12px;
          color: rgba(123, 124, 123, 1);
        }
      }
      .item_content_bom {
        height: 60px;
        line-height: 50px;
        padding: 0 16px;
        .item_company {
          font-size: 12px;
          color: rgba(255, 255, 255, 1);
          margin-right: 39px;
        }
        .item_theme {
          font-size: 12px;
          color: rgba(123, 124, 123, 1);
        }
      }
    }
  }
  .display_none {
    opacity: 0;
  }
  .show_detail {
    width: 100%;
    height: 646px;
    // border: 1px solid red;
    background: url(../assets/images/film_swiper/film_bg.png);
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 34px;
    padding-top: 30px;
    outline: none;
    .detail_box {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      .img_box {
        height: 32px;
        .X {
          width: 32px;
          height: 32px;
          float: right;
          cursor: pointer;
        }
      }
      .detail_box_left {
        width: 464px;
        height: 400px;
        // border: 1px solid red;
        margin-top: 66px;
        text-align: left;
        .title {
          font-size: 36px;
          color: #fff;
        }
        .time {
          margin: 32px 0 22px 0;
          span {
            font-size: 16px;
            font-weight: 400;
            margin-right: 30px;
          }
        }

        .des {
          font-size: 16px;
          color: #999;
          line-height: 30px;
        }

        .btn {
          height: 42px;
          // border: 1px solid red;
          margin: 30px 0;

          .btn_left {
            width: 120px;
            height: 42px;
            background-color: #c8a461;
            border-radius: 4px;
            // border: 1px solid tomato;
            text-align: center;
            line-height: 42px;
            float: left;
            cursor: pointer;
            img {
              width: 14px;
              height: 16px;
              vertical-align: middle;
              margin-right: 10px;
            }
            span {
              vertical-align: middle;
            }
          }

          .btn_right {
            width: 140px;
            height: 42px;
            border: 1px solid #fff;
            text-align: center;
            line-height: 40px;
            float: left;
            margin-left: 30px;
            cursor: pointer;
            background: #000000;
            border-radius: 8px;
            img {
              width: 16px;
              height: 16px;
              vertical-align: middle;
              margin-right: 10px;
            }
            span {
              vertical-align: middle;
            }
          }
        }
        p {
          font-size: 16px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>

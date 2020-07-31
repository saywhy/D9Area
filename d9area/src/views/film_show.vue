<template>
  <div class="body_box">
    <div class="container_box">
      <film-nav :activenav="Index"></film-nav>
      <div class="FilmShow">
        <div class="FilmShow_top">
          <img src="../assets/images/film/film_show1.jpg"
               width:540px
               alt />
        </div>
        <!-- 内容 -->
        <div class="sub_container">
          <div v-if="selected_box">
            <p class="content_title">入围作品</p>
            <div class="content_top">
              <div class="content_top_left"
                   @click="show_swiper('selected')">
                <span class="content_top_left_time">时长：1分20秒</span>
              </div>
              <div class="content_top_right">
                <div class="content_top_right_top">
                  <p class="film_name">拯救计划</p>
                  <p class="film_theme">VFX电影短片 | 战争</p>
                  <p class="film_des">想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是f/T2.8，这部短片用四个原因告诉你，一起来涨知识吧！相信你一定有所提高！</p>
                </div>
                <div class="content_top_right_bom">
                  <p class="film_company">出品方：凉山重工</p>
                  <p class="film_author">主创团队：导演11111/编剧/制片……</p>
                </div>
              </div>
            </div>
            <div class="content_bom">
              <div class="content_bom_item">
                <div class="item_img">
                  <span class="item_time">时长：1分20秒</span>
                </div>
                <div class="item_content">
                  <div class="item_content_top">
                    <p class="item_name">复古文艺短片 | 拯救计划</p>
                    <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                  </div>
                  <div class="item_content_bom">
                    <p>
                      <span class="item_company">出品方：凉山重工</span>
                      <span class="item_theme">VFX电影短片</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="space"></div>
              <div class="content_bom_item">
                <div class="item_img">
                  <span class="item_time">时长：1分20秒</span>
                </div>
                <div class="item_content">
                  <div class="item_content_top">
                    <p class="item_name">复古文艺短片 | 拯救计划</p>
                    <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                  </div>
                  <div class="item_content_bom">
                    <p>
                      <span class="item_company">出品方：凉山重工</span>
                      <span class="item_theme">VFX电影短片</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="space"></div>
              <div class="content_bom_item">
                <div class="item_img">
                  <span class="item_time">时长：1分20秒</span>
                </div>
                <div class="item_content">
                  <div class="item_content_top">
                    <p class="item_name">复古文艺短片 | 拯救计划</p>
                    <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                  </div>
                  <div class="item_content_bom">
                    <p>
                      <span class="item_company">出品方：凉山重工</span>
                      <span class="item_theme">VFX电影短片</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!selected_box">
          <div class="sub_container">
            <p class="content_title">入围作品</p>
          </div>
          <film-swiper :id="selected"></film-swiper>
        </div>
        <!-- 获奖作品 -->
        <div class="sub_container">
          <div v-if="selected_box_2">
            <p class="content_title">获奖作品</p>
            <div class="content_top">
              <div class="content_top_left"
                   @click="show_swiper('selected_box_2')">
                <span class="content_top_left_time">时长：1分20秒</span>
              </div>
              <div class="content_top_right">
                <div class="content_top_right_top">
                  <p class="film_name">拯救计划</p>
                  <p class="film_theme">VFX电影短片 | 战争</p>
                  <p class="film_des">想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是f/T2.8，这部短片用四个原因告诉你，一起来涨知识吧！相信你一定有所提高！</p>
                </div>
                <div class="content_top_right_bom">
                  <p class="film_company">出品方：凉山重工</p>
                  <p class="film_author">主创团队：导演11111/编剧/制片……</p>
                </div>
              </div>
            </div>
            <div class="content_bom">
              <div class="content_bom_item">
                <div class="item_img">
                  <span class="item_time">时长：1分20秒</span>
                </div>
                <div class="item_content">
                  <div class="item_content_top">
                    <p class="item_name">复古文艺短片 | 拯救计划</p>
                    <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                  </div>
                  <div class="item_content_bom">
                    <p>
                      <span class="item_company">出品方：凉山重工</span>
                      <span class="item_theme">VFX电影短片</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="space"></div>
              <div class="content_bom_item">
                <div class="item_img">
                  <span class="item_time">时长：1分20秒</span>
                </div>
                <div class="item_content">
                  <div class="item_content_top">
                    <p class="item_name">复古文艺短片 | 拯救计划</p>
                    <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                  </div>
                  <div class="item_content_bom">
                    <p>
                      <span class="item_company">出品方：凉山重工</span>
                      <span class="item_theme">VFX电影短片</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="space"></div>
              <div class="content_bom_item">
                <div class="item_img">
                  <span class="item_time">时长：1分20秒</span>
                </div>
                <div class="item_content">
                  <div class="item_content_top">
                    <p class="item_name">复古文艺短片 | 拯救计划</p>
                    <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                  </div>
                  <div class="item_content_bom">
                    <p>
                      <span class="item_company">出品方：凉山重工</span>
                      <span class="item_theme">VFX电影短片</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  data () {
    return {
      Index: "3",
      selected_box: true,
      selected_box_2: true,
      awards: 'awards',
      selected: 'selected'
    };
  },
  mounted () { },
  methods: {
    show_swiper (name) {
      switch (name) {
        case "selected":
          this.selected_box = false;
          break;
        case "selected_box_2":
          this.selected_box_2 = false;
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style lang="less">
.FilmShow {
  background: #0a0a0a;
  padding-bottom: 70px;
  .FilmShow_top {
    width: 100%;
    height: 540px;
    img {
      width: 100%;
      height: 100%;
    }
  }
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
    background: #000000;
    .content_top_left {
      width: 800px;
      float: left;
      height: 500px;
      background-image: url('../assets/images/film/show/main.png');
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
  .content_bom {
    margin-top: 40px;
    // height: 406px;
    width: 100%;
    display: flex;
    .space {
      width: 27px;
      // height: 406px
    }
    .content_bom_item {
      flex: 1;
      // height: 406px;
      background: #000;
      .item_img {
        height: 226px;
        background-image: url('../assets/images/film/show/sub.png');
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
  }
}
</style>

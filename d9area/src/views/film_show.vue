<template>
  <div class="container">
    <Nav></Nav>
    <film-nav :activenav="Index" class="top_nav"></film-nav>
    <div class="FilmShow">
      <div class="FilmShow_top"></div>
      <!-- 内容 -->
      <div class="main_container">
        <p class="content_title">入围作品</p>
        <div class="content_top">
          <div class="content_top_left">
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
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
import filmNav from "@/views/film_nav.vue";
export default {
  name: "FilmShow",
  components: { Nav, Footer, filmNav },
  data() {
    return {
      Index: "3"
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
.top_nav {
  margin-top: 114px;
}

.FilmShow {
  background: #0a0a0a;
  .FilmShow_top {
    height: 615px;
    background-image: url("../assets/images/film/film_show_bg.png");
    background-size: 100% 100%;
  }
  // 内容
  .content_title {
    font-size: 42px;
    font-weight: 500;
    color: #fff;
    margin: 70px 0 30px 0;
    text-align: left;
  }
  .content_top {
    height: 504px;
    background: #000000;
    .content_top_left {
      width: 800px;
      float: left;
      height: 504px;
      background-image: url("../assets/images/film/show/main.png");
      background-size: 100% 100%;
      cursor: pointer;
      position: relative;
      .content_top_left_time {
        position: absolute;
        right: 30px;
        bottom: 30px;
        font-size: 17px;
      }
    }
    .content_top_right {
      width: 400px;
      float: left;
      text-align: left;
      .content_top_right_top {
        height: 385px;
        border-bottom: 1px solid #a18037;
        padding: 30px 36px;
        .film_name {
          font-size: 38px;
        }
        .film_theme {
          font-size: 22px;
          color: rgba(123, 124, 123, 1);
          margin: 30px 0;
        }
        .film_des {
          font-size: 18px;
          color: rgba(207, 207, 207, 1);
        }
      }
      .content_top_right_bom {
        padding: 26px 36px;
        .film_company {
          font-size: 22px;
          margin-bottom: 16px;
        }
        .film_author {
          font-size: 18px;
          color: rgba(123, 124, 123, 1);
        }
      }
    }
  }
  .content_bom {
    margin-top: 30px;
    height: 406px;
    width: 100%;
    display: flex;
    .space {
      width: 32px;
      height: 406px;
    }
    .content_bom_item {
      flex: 1;
      height: 406px;
      background: #000;
      .item_img {
        height: 227px;
        background-image: url("../assets/images/film/show/sub.png");
        background-size: 100% 100%;
        position: relative;
        .item_time {
          position: absolute;
          right: 15px;
          bottom: 16px;
          font-size: 17px;
        }
      }
      .item_content {
        text-align: left;
        .item_content_top {
          height: 110px;
          border-bottom: 1px solid rgba(10, 10, 10, 1);
          padding: 26px 19px;
          .item_name {
            font-size: 21px;
            color: rgba(255, 255, 255, 1);
            margin-bottom: 20px;
          }
          .item_author {
            font-size: 14px;
            color: rgba(123, 124, 123, 1);
          }
        }
        .item_content_bom {
             padding: 26px 19px;
          .item_company {
            font-size: 17px;
            color: rgba(255, 255, 255, 1);
            margin-right: 39px;
          }
          .item_theme {
            font-size: 16px;
            color: rgba(123, 124, 123, 1);
          }
        }
      }
    }
  }
}
</style>

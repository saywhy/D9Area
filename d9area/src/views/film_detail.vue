<template>
  <div class="body_box">
    <Nav :mainnav="mainnav"></Nav>
    <div class="FilmDetail">
      <!-- 背景图 -->
      <div class="detail_top"></div>
      <div class="video"></div>
      <!-- 内容 -->
      <div class="detail_box">
        <div class="content">
          <div class="hr">
            <div class="content_l">
              <p class="title">
                <span>复古文艺短片</span>
                <span>I</span>
                <span>拯救计划</span>
              </p>
              <p class="time">
                <span class="right">VFX电影短片</span>
                <span>2020-06-22 15:30</span>
              </p>
              <p class="out">
                <span class="right">出品方：凉山童工</span>
                <span>主创院队：导演：11123/编剧：1123/监制：1123/美术指导：1234/音乐总监：123</span>
              </p>
            </div>
            <div class="content_r">
              <img src="../assets/images/film_detail/tx.png" alt />
              <div class="info">
                <span class="name">古德奈特</span>
                <p class="ch">北京，中国</p>
              </div>
            </div>
          </div>
          <p class="introduce">
            简介：想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是f/T2.8，这部短片用四个原因告诉你，一起来涨知识吧！相信你一定有所提高！From：wolfcrow；
            想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是f/T2.8，这部短片用四个原因告诉你，一起来涨知识吧！相信你一定有所提高！From：wolfcrow.From：wolfcrow
          </p>
          <div class="poster">
            <img src="../assets/images/film_detail/poster.png" alt />
            <span class="poster_title">海报</span>
          </div>
          <div class="bottom">
            <img src="../assets/images/film_detail/bottom.png" alt />
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "FilmDetail",
  components: { Nav, Footer },
  data() {
    return {
      mainnav: ""
    };
  },
  methods: {},
  computed: {}
};
</script>
<style lang='less'>
.FilmDetail {
  background: #0a0a0a0a;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
  .detail_top {
    height: 756px;
    width: 100%;
    background-image: url("../assets/images/film_detail/detail_bg.png");
    background-size: 100% 100%;
 
    position: absolute;
    left: 0;
    top: 0;
  }
  .video {
    width: 1000px;
    height: 540px;
    border: 1px solid red;
    margin: 0 auto;
    margin-top: 40px;
  }

  .detail_box {
    width: 1200px;
    margin: 0 auto;
    margin-top: 64px;
    padding-bottom: 70px;
    .content {
      .hr {
        height: 150px;
        border-bottom: 1px solid #1b1305;

        .content_l {
          float: left;
          text-align: left;
          .title {
            font-size: 22px;
          }
          .time {
            font-size: 16px;
            color: #7b7c7b;
            margin-top: 30px;
            .right {
              margin-right: 60px;
            }
          }
          .out {
            font-size: 16px;
            color: #7b7c7b;
            margin-top: 30px;
            .right {
              margin-right: 60px;
            }
          }
        }
        .content_r {
          float: right;
          img {
            width: 100px;
            height: 100px;
            border: 1px dashed #fff;
            margin-right: 44px;
            float: left;
          }
          .info {
            float: right;
            margin-top: 30px;
            .name {
              font-size: 18px;
            }
            .ch {
              font-size: 14px;
              margin-top: 14px;
            }
          }
        }
      }
      .introduce {
        font-size: 16px;
        color: #7b7c7b;
        text-align: left;
        margin-top: 30px;
      }
      .poster {
        width: 90px;
        height: 50px;
        margin-top: 50px;
        img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
          margin-right: 16px;
        }
        .poster_title {
          font-size: 20px;
          color: #c8a461;
          vertical-align: middle;
        }
      }
      .bottom {
        width: 1200px;
        height: 1580px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
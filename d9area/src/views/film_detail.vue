<template>
  <div class="body_box">
    <Nav :mainnav="mainnav"></Nav>
    <div class="FilmDetail">
      <div class="detail_top">
        <div class="video"></div>

        <div class="container_main">
          <div class="middle_l">
            <p class="title">复古文艺短片 I 拯救计划</p>
            <p class="vfx">
              <span>VFX电影短片</span>
              <span>2020-06-22 15:30</span>
            </p>
            <p class="out">
              <span>出品方：凉山童工</span>
              <span>主创院队：导演：11123/编剧：1123/监制：1123/美术指导：1234/音乐总监：123</span>
            </p>
          </div>
          <div class="middle_r">
            <img src="@/assets/images/film_detail/tx.png" alt />
            <div class="region">
              <p class="name">古德奈特</p>
              <p class="Ch">北京，中国</p>
            </div>
          </div>
        </div>
        <div class="hr"></div>
        <p class="des">
          简介：想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是简介：想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是f/T2.8，
          这部短片用四个原因告诉你，一起来涨知识吧！
          相信你一定有所提高！From：wolfcrow；想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是f/T2.8，
          这部短片用四个原因告诉你，一起来涨知识吧！相信你一定有所提高！From：wolfcrow.From：wolfcrow
        </p>
        <div class="poster">
          <img src="../assets/images/film_detail/poster.png" alt />
          <span>海报</span>
        </div>
        <div class="bottom">
          <img src="../assets/images/film_detail/bottom.png" alt />
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
  // border: 1px solid red;
  margin-top: 80px;
  .detail_top {
    // height: 1000px;
    background-image: url("../assets/images/film_detail/detail_bg.png");
    background-size: 100% 100%;
    padding-top: 40px;
    .video {
      width: 1000px;
      height: 540px;
      border: 1px solid green;
      margin: 0 auto;
    }
    .container_main {
      width: 1200px;
      height: 150px;
      margin: 0 auto;
      margin-top: 64px;
      //  background-color: hotpink;

      .middle_l {
        float: left;
        .title {
          font-size: 20px;
          text-align: left;
          margin-bottom: 30px;
        }
        .vfx {
          font-size: 14px;
          text-align: left;
          span {
            margin-right: 60px;
          }
        }
        .out {
          font-size: 14px;
          text-align: left;
          margin: 30px 0 30px 0;
          span {
            margin-right: 60px;
          }
        }
      }
      .middle_r {
        float: right;
        // overflow: hidden;
        padding-right: 60px;
        img {
          width: 100px;
          height: 100px;
          border: 1px dashed #fff;
        }
        .region {
          float: right;
          text-align: center;
          .name {
            font-size: 16px;
            margin: 30px 0 10px 44px;
          }
          .Ch {
            font-size: 12px;
            margin-left: 44px;
          }
        }
      }
    }
    .hr {
      width: 1200px;
      margin: 0 auto;
      margin-top: 10px;
      border-bottom: 1px solid #1b1305;
    }
    .des {
      width: 1200px;
      margin: 0 auto;
      margin-top: 28px;
      text-align: left;
      font-size: 14px;
    }
    .poster {
      width: 1200px;
      //  margin:0 auto;
      text-align: left;
      margin: 28px 0 24px 0;

      img {
        margin-left: 360px;
        vertical-align: middle;
      }
      span {
        font-size: 16px;
        color: #c8a461;
        vertical-align: middle;
        margin-left: 16px;
      }
    }
    .bottom {
      width: 1200px;
      height: 1580px;
      margin: 0 auto;
      margin-bottom: 70px;
      border: 1px dashed #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
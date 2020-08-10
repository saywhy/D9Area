<template>
  <div class="detail">
    <!-- 返回按钮 -->

    <div class="return">
       返回
    </div>
    <!-- 头部背景图 -->
    <div class="detail_top">
      <img src="../assets/images/detail/top_logo.png" alt />
      <p>北京国际CG动画电影周</p>
      <p>2020 入围影片</p>
    </div>

    <!-- 轮播图 -->
    <div class="swip_box"></div>

    <!--  视频 -->
    <div class="video_box">
      <div class="video">
        <img src="../assets/images/detail/video.png" alt />
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
    <div class="real">
      <div class="real_box">
        <div class="real_top">
          <p class="up" v-show="up" @click="toTop"> 返回顶部 ^</p>
          </div>

        <div class="real_bom">
          <p class="real_bom_title">新 闻 资 讯</p>
          <p>电影节新闻</p>

          <div class="input_box">
            <input type="text" placeholder="请输入您的电子邮箱" />
            <div class="subscribe">订阅</div>
          </div>
        </div>
      </div>
    </div>


    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../views/footer";
export default {
  components: { Footer },
  data() {
    return {
      up: true,
    };
  },
    methods:{
      
    // 回到顶部

  handleScroll(e) {
      let scrolltop = e.target.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
    }
};
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  height: 1000px;
  //  返回按钮

  .return{
    width:63px;
    height:36px;
    line-height: 36px;
    background: #C8A461;
    position: fixed;
    right: 0;
    bottom: 100px;
    cursor: pointer;
    
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

  .swip_box {
    height: 476px;
    // border: 1px solid red;
  }
  //  视频
  .video_box {
    width: 100%;
    height: 844px;
    border: 1px solid green;
    background: url(../assets/images/detail/bgt.png);
    .video {
      width: 1200px;
      height: 680px;
      // border: 1px solid green;
      margin: 0 auto;
      margin-top: 82px;
      position: relative;
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
        transform: translate(-50%,-50%);
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
          margin-top:70px;
          line-height: 30px;
          word-wrap:break-word; 
          // border: 1px solid red;
        }
      }
    }
  }


  //底部新闻资讯

.real {
  width: 100%;
  height: 220px;
  background-color: #141414;
  position: relative;
  z-index: 999;

  // border: 1px solid green;

  .real_box {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #141414;
    // border: 1px solid green;
    .real_top {
      height: 40px;
      width: 100%;
      border-bottom: 1px solid #292929;
      .up{
      font-size: 14px;
      color: #c8a461;
      text-align: right;
      line-height: 40px;
      margin-right: 30px;
      cursor: pointer;
   }
    }
    .real_bom {
      height: 150px;
      width: 100%;
      border-bottom: 1px solid #292929;
      .real_bom_title {
        margin: 30px 0 14px 0;
        font-size: 18px;
      }

      .input_box {
        height: 30px;
        // border: 1px solid green;
        margin-top: 30px;
        input {
          width: 1020px;
          height: 30px;
          float: left;
        }
        .subscribe {
          width: 150px;
          height: 30px;
          float: right;
          line-height: 30px;
          cursor: pointer;
          border: 1px solid #292929;
        }
      }
    }
  }
}
}
</style>
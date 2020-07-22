<template>
  <div class="details">
    <Nav></Nav>
    <div class="details_box">
      <div class="details_box_big">
        <!-- 视频 -->
        <!-- <div class="box_big_l">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>-->
        <div class="video_box">
          <div class="video_swiper_container">
            <div class="sider_video_box">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                @play="onPlayerPlay($event,index)"
                @pause="onPlayerPause($event,index)"
                :playsinline="true"
                :options="playerOptions"
              ></video-player>
              <img
                :src="suspend"
                @click="img_play(index)"
                v-if="suspend_show"
                class="suspend_box"
                alt
              />
            </div>
          </div>
          <!-- <div class="swiper-button-prev_video"></div> -->
          <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <!-- <div class="swiper-button-next_video"></div> -->
          <!-- 右箭头。如果放置在swiper-container外面，需要自定义样式。 -->
        </div>

        <div class="box_big_r">
          <p class="title">恐怖之夜</p>
          <div class="sroll">
            <div class="hr"></div>
            <p class="content">罗德主持一个专门讨论恐怖的广播节目，有一天，播音员开始收到一个拼命求救的孩子的电话。起初，他认为这是一个笑话，后来他才......</p>
            <p class="out">出品方：凉山童工</p>
            <p class="host">主创团队：导演11111/编剧222 /制片111/艺术指导2222</p>
            <p class="poster">海报</p>
            <div class="poster_tp"></div>
            <div class="poster_tp"></div>
            <div class="poster_tp"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "../views/nav";
import Footer from "../views/footer";
export default {
  components: { Nav, Footer },
  data() {
    return {
      count: 0,

      suspend_show: true,
      suspend: require("@/assets/images/home/suspend.png"),
      img: require("@/assets/images/home/bh2.png"),
      // 视频播放
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        height: "600px",
        // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //url地址
          }
        ],
        poster: require("@/assets/images/home/bh2.png"), //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  mounted() {
    // this.initSwiper_video();
  },
  methods: {
    load() {
      // this.count += 2;
    },
    initSwiper_video() {
      // var video_list = this.video_list;
      // let that = this;
      // // var that = _this
      // var beforeIndex = 0;
      // // this.$nextTick(() => {
      // var swiper = new Swiper(".video_swiper_container", {
      //   autoplay: false, //等同于以下设置
      //   // loop: true,
      //   speed: 1000,
      //   observer: true, //修改swiper自己或子元素时，自动初始化swiper
      //   observeParents: true, //修改swiper的父元素时，自动初始化swiper
      //   navigation: {
      //     nextEl: ".swiper-button-next_video",
      //     prevEl: ".swiper-button-prev_video"
      //   },
      //   on: {
      //     slidePrevTransitionStart: function(index) {
      //       console.log("1111");
      //       console.log(this.activeIndex);
      //       //stopVideo:停止视频; pauseVideo:暂停; playVideo:播放视频
      //       that.$refs.videoPlayer[this.activeIndex + 1].player.pause();
      //     },
      //     slideNextTransitionStart: function(index) {
      //       console.log("1111");
      //       console.log(this.activeIndex);
      //       //stopVideo:停止视频; pauseVideo:暂停; playVideo:播放视频
      //       that.$refs.videoPlayer[this.activeIndex - 1].player.pause();
      //     }
      //   }
      // });
    },
    onPlayerPlay(event, index) {
      // this.video_list[index].suspend_show = false;
    },
    onPlayerPause(event, index) {
      console.log(index);
      // this.video_list[index].suspend_show = true;
    },
    img_play(index) {
      // var name = 'videoPlayer' + index
      // console.log(name);
      // console.log(this.$refs.videoPlayer);
      this.$refs.videoPlayer.player.play();
      // this.video_list[index].suspend_show = false;
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .details_box {
  padding-top: 80px;
  width: 100%;
  padding-bottom: 156px;
  background-color: #0a0a0a;
  .details_box_big {
    width: 1200px;
    height: 650px;
    margin: 0 auto;
    margin-top: 84px;
    background-color: #0a0a0a;

    // 视频部分
    .video_box {
      position: relative;
      width: 874px;
      // margin-top: 60px;
      height: 650px;
      overflow: hidden;
      float: left;
      background-color: #000;
      &:hover .swiper-button-next_video {
        display: block;
      }
      &:hover .swiper-button-prev_video {
        display: block;
      }
      .vjs-poster {
        height: 650px;
        // background-position: 0 0;
        background-size: 100% 100%;
      }
      .video-js.vjs-ended .vjs-big-play-button {
        display: none !important;
      }
      .vjs-big-play-button {
        display: none !important;
      }
      video {
        outline: none;
      }
      .vjs-poster {
        // border:1px solid red;
      }
    }
    .video_swiper_container {
      width: 100%;
      height: 100%;
      color: #fff;
      position: absolute;
      top: -9%;
      .sider_video_box {
        height: 100%;
        position: relative;
        .video-player {
          height: 100%;
        }
      }
    }

    .suspend_box {
      width: 90px;
      height: 90px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /*修改滚动条样式*/
    .box_big_r::-webkit-scrollbar {
      width: 0;
      height: 10px;
      /**/
    }
    .box_big_r::-webkit-scrollbar-track {
      background: rgb(239, 239, 239);
      border-radius: 2px;
    }
    .box_big_r::-webkit-scrollbar-thumb {
      background: #bfbfbf;
      border-radius: 10px;
    }
    .box_big_r::-webkit-scrollbar-thumb:hover {
      background: #333;
    }
    .box_big_r::-webkit-scrollbar-corner {
      background: #179a16;
    }

    .box_big_r {
      width: 298px;
      height: 650px;
      float: right;
      // overflow: hidden;
      overflow-y: scroll;
      // border: 1px solid green;
      background-color: #000;
      .title {
        height: 76px;
        font-size: 22px;
        line-height: 76px;
        text-align: left;
        margin-left: 26px;
      }
      .hr {
        border-bottom: 1px solid #171717;
      }
      .content {
        font-size: 16px;
        text-align: left;
        margin: 18px 28px 32px 24px;
      }
      .out {
        font-size: 14px;
        text-align: left;
        margin: 0 0 26px 26px;
      }
      .host {
        font-size: 14px;
        text-align: left;
        margin: 0 80px 26px 26px;
      }
      .poster {
        font-size: 16px;
        text-align: left;
        margin: 0 0 20px 26px;
      }
      .poster_tp {
        width: 246px;
        height: 140px;
        border: 1px solid red;
        margin: 0 auto;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
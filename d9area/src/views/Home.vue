<template>
  <div class="container"
       v-cloak>
    <Nav :mainnav="mainnav"></Nav>
    <full-page :options="options"
               id="fullpage"
               ref="fullpage">
      <div class="section">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="item in img_list">
              <img :src="item.src"
                   style="height: 100%; width: 100%;"
                   alt />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="section"
           style="position:relative; background:#0a0a0a">
        <div class="setion_bom">

          <!-- <img :src="img3"
             alt=""> -->

          <div class="video_box">
            <div class="video_swiper_container">
              <div class="swiper-wrapper swiper-no-swiping">
                <div class="swiper-slide"
                     v-for="(item,index) in video_list">
                  <div class="sider_video_box">
                    <video-player class="video-player vjs-custom-skin"
                                  ref="videoPlayer"
                                  @play="onPlayerPlay($event,index)"
                                  @pause="onPlayerPause($event,index)"
                                  :playsinline="true"
                                  :options="item.playerOptions"></video-player>
                    <img :src="item.suspend"
                         @click="img_play(index)"
                         v-if="item.suspend_show"
                         class="suspend_box"
                         alt />
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev_video"></div>
            <div class="swiper-button-next_video"></div>
          </div>
          <Footer style="position:absolute;bottom:0"></Footer>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import img3 from '@/assets/images/home/bh2.png'
import { img2 } from '@/assets/images/home/bg2.jpg'
import { img1 } from '@/assets/images/home/bg1.jpg'
import Swiper from "swiper";
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "Home",
  components: { Nav, Footer },
  data () {
    return {
      mainnav: "1",
      img_list: [
        {
          src: require("@/assets/images/home/bg1.jpg")
        },
        {
          src: require("@/assets/images/home/bg2.jpg")
        }
      ],
      img3: require("@/assets/images/home/bh2.png"),
      video_list: [
        {
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
            // height: "600px",
            // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [
              {
                type: "video/mp4",
                src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //url地址
              }
            ],
            poster: img3, //你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true, //当前时间和持续时间的分隔符
              durationDisplay: true, //显示持续时间
              remainingTimeDisplay: false, //是否显示剩余时间功能
              fullscreenToggle: true //全屏按钮
            }
          }
        },
        {
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
            // width: "100%",
            // height: "600px",
            language: "zh-CN",
            //aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [
              {
                type: "video/mp4",
                src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //url地址
              }
            ],
            poster: require("@/assets/images/home/bh2.png"), //你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true, //当前时间和持续时间的分隔符
              durationDisplay: true, //显示持续时间
              remainingTimeDisplay: false, //是否显示剩余时间功能
              fullscreenToggle: true //全屏按钮
            }
          }
        }
      ],
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          '#0a0a0a',
        ]
      }
    };
  },
  mounted () {
    this.initSwiper();
    this.initSwiper_video();


  },
  methods: {
    afterLoad (origin, destination, direction) {
      console.log('After load....');
      console.log(destination);
    },

    initSwiper () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        autoplay: false, //等同于以下设置
        autoplay: {
          disableOnInteraction: false
        }, //可选选项，自动滑动
        // effect: 'cube',
        loop: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dragSize: 30
          // type: 'progress',
        }
      });
      // });
    },
    initSwiper_video () {
      var video_list = this.video_list;
      let that = this;
      // var that = _this
      var beforeIndex = 0;
      // this.$nextTick(() => {
      var swiper = new Swiper(".video_swiper_container", {
        autoplay: false, //等同于以下设置
        // loop: true,
        speed: 1000,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        navigation: {
          nextEl: ".swiper-button-next_video",
          prevEl: ".swiper-button-prev_video"
        },
        on: {
          slidePrevTransitionStart: function (index) {
            console.log("1111");
            console.log(this.activeIndex);
            //stopVideo:停止视频; pauseVideo:暂停; playVideo:播放视频
            that.$refs.videoPlayer[this.activeIndex + 1].player.pause();
          },
          slideNextTransitionStart: function (index) {
            console.log("1111");
            console.log(this.activeIndex);
            //stopVideo:停止视频; pauseVideo:暂停; playVideo:播放视频
            that.$refs.videoPlayer[this.activeIndex - 1].player.pause();
          }
        }
      });
    },
    onPlayerPlay (event, index) {
      this.video_list[index].suspend_show = false;
    },
    onPlayerPause (event, index) {
      console.log(index);
      this.video_list[index].suspend_show = true;
    },
    img_play (index) {
      // var name = 'videoPlayer' + index
      // console.log(name);
      // console.log(this.$refs.videoPlayer);
      this.$refs.videoPlayer[index].player.play();
      this.video_list[index].suspend_show = false;
    }
  }
};
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0a0a0a;
  /deep/ .swiper-container {
    width: 100%;
    height: ~'calc(100% - 80px)';
    color: #fff;
    margin-top: 80px;
  }
  /deep/ .swiper-pagination {
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
  // 视频部分
  /deep/ .setion_bom {
    // height: 100%;
    height: ~'calc(100% - 80px)';
    margin-top: 80px;
    position: relative;
  }
  /deep/ .video_box {
    position: relative;
    height: ~'calc(100% - 180px)';
    overflow: hidden;
    &:hover .swiper-button-next_video {
      display: block;
    }
    &:hover .swiper-button-prev_video {
      display: block;
    }
    .vjs-poster {
      // height: 600px;
      height: 100%;
      background-position: 0 0;
      background-size: 100% 100%;
    }
    .video-js.vjs-ended .vjs-big-play-button {
      display: none !important;
    }
    .vjs-custom-skin > .video-js {
      height: 100%;
    }
    .vjs-big-play-button {
      display: none !important;
    }
    video {
      outline: none;
    }
  }
  /deep/ .video_swiper_container {
    width: 100%;
    height: 100%;
    color: #fff;
    .swiper-slide {
      // height: 920px;
    }
    .sider_video_box {
      height: 100%;
      position: relative;
      .video-player {
        height: 100%;
      }
    }
  }

  /deep/ .suspend_box {
    width: 90px;
    height: 90px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /deep/ .swiper-button-next_video {
    display: none;
    cursor: pointer;
    width: 64px;
    height: 140px;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
    margin-top: 0;
    background-image: url('../assets/images/online/next.png');
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 99999;
    outline: none;
  }
  /deep/ .swiper-button-prev_video {
    display: none;
    cursor: pointer;
    outline: none;
    width: 64px;
    height: 140px;
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
    margin-top: 0;
    background-image: url('../assets/images/online/prev.png');
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 99999;
  }
}
.home {
  margin-top: 80px;
  padding-bottom: 70px;
  background-color: #0a0a0a;
}
</style>

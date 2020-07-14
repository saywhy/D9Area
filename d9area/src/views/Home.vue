<template>
  <div class="container">
    <Nav :mainnav='mainnav'></Nav>
    <div class="home">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for='item in img_list'>
            <img :src="item.src"
                 style="height: 100%; width: 100%;"
                 alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 视频 -->
      <div class="video_box">
        <div class="video_swiper_container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for='(item,index) in video_list'>
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
                     alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev_video"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next_video"></div>
        <!-- 右箭头。如果放置在swiper-container外面，需要自定义样式。 -->
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Swiper from 'swiper'
import Nav from '@/views/nav.vue'
import Footer from '@/views/footer.vue'
export default {
  name: 'Home',
  components: { Nav, Footer },
  data () {
    return {
      mainnav: '1',
      img_list: [
        {
          src: require('@/assets/images/home/bg1.jpg'),
        },
        {
          src: require('@/assets/images/home/bg2.jpg'),
        },
      ],
      video_list: [
        {
          suspend_show: true,
          suspend: require('@/assets/images/home/suspend.png'),
          img: require('@/assets/images/home/bh2.png'),
          // 视频播放
          playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            // width: '100%',
            // height: '600px',
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4",
              src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'//url地址
            }],
            poster: require('@/assets/images/home/bh2.png'), //你的封面地址
            width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,//当前时间和持续时间的分隔符
              durationDisplay: true,//显示持续时间
              remainingTimeDisplay: false,//是否显示剩余时间功能
              fullscreenToggle: true  //全屏按钮
            }
          }
        },
         {
          suspend_show: true,
          suspend: require('@/assets/images/home/suspend.png'),
          img: require('@/assets/images/home/bh2.png'),
          // 视频播放
          playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            // width: '100%',
            // height: '600px',
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4",
              src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'//url地址
            }],
            poster: require('@/assets/images/home/bh2.png'), //你的封面地址
            width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,//当前时间和持续时间的分隔符
              durationDisplay: true,//显示持续时间
              remainingTimeDisplay: false,//是否显示剩余时间功能
              fullscreenToggle: true  //全屏按钮
            }
          }
        },
      ],
    }
  },
  mounted () {
    this.initSwiper()
    this.initSwiper_video()
  },
  methods: {
    initSwiper () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        autoplay: false,//等同于以下设置
        // autoplay: {
        //   disableOnInteraction: false
        // }, //可选选项，自动滑动
        loop: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dragSize: 30
          // type: 'progress',
        }
      });
      // });
    },
    initSwiper_video () {
      // this.$nextTick(() => {
      var swiper = new Swiper(".video_swiper_container", {
        autoplay: false,//等同于以下设置
        // loop: true,
        speed: 1000,
          navigation: {
      nextEl: '.swiper-button-next_video',
      prevEl: '.swiper-button-prev_video',
    },
      });
      // });
    },
    onPlayerPlay (event, index) {
      this.video_list[index].suspend_show = false;
    },
    onPlayerPause (event, index) {
      console.log(index);
      this.video_list[index].suspend_show = true;
    },
    img_play (index) {
      console.log(index);
      // var name = 'videoPlayer' + index
      // console.log(name);
      console.log(this.$refs.videoPlayer);
      this.$refs.videoPlayer[index].player.play()
      this.video_list[index].suspend_show = false;
    }
  },

}
</script>
<style lang="less">
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.home {
  margin-top: 80px;
}
.swiper-container {
  width: 100%;
  height: 540px;
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
// 视频部分
.video_box {
  position: relative;
  width: 100%;
  margin-top: 60px;
  height: 600px;
  overflow: hidden;
  .vjs-poster {
    height: 600px;
    background-position: 0 0;
    background-size: 100% 100%;
  }
}
.video_swiper_container {
  width: 100%;
  height: 600px;
  color: #fff;
  .swiper-slide {
    // height: 920px;
  }
  .sider_video_box {
    height: 600px;
    position: relative;
  }
}
.vjs-big-play-button {
  display: none !important;
}
.suspend_box {
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
// .swiper-button-next_video{
//         width: 96px;
//         height: 188px;
//         position: absolute;
//         right: 10%;
//         top: 50%;
//         transform: translateY(-50%);
//         background: rgba(0, 0, 0, 0.6);
//         margin-top: 0;
//         background-image: url("../assets/images/online/next.png");
//         background-repeat: no-repeat;
//         background-position: center;
//         z-index: 99999;
// }
 


</style>

<template>
  <div class="recommend_top">
    <div class="swiper_box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in img_list">
            <!-- 2323213 -->
            <img :src="item.src" width="350" alt />
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="detail_box" v-if="detail_show">
        <div class="main_container">
          <p class="detail_title">
            恐怖之夜
            <img
              src="@/assets/images/film_swiper/closed.png"
              @click="closed_detail"
              class="detail_closed"
              alt
            />
          </p>
          <p class="detail_time">
            <span class="detail_date">2020-06-23</span>
            <span>1小时39分钟</span>
          </p>
          <p
            class="detail_des"
          >罗德主持一个专门讨论恐怖的广播节目，有一天，播音员开始收到一个拼命求救的孩子的电话。起初，他认为这是一个笑话，后来他才意识到电话隐藏着一个黑暗的秘密</p>
          <div class="detail_btn">
            <div class="banner_btn_left">
              <img src="@/assets/images/online/start.png" alt />
              <span>播放</span>
            </div>
            <div class="banner_btn_right">
              <img src="@/assets/images/online/add.png" alt />
              <span>我的影片</span>
            </div>
          </div>
          <p class="detail_company">出品方：凉山童工</p>
          <p class="detail_team">主创团队：导演11111/编剧222/制片111/艺术指导2222</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      swiper: {},
      detail_show: false,
      img_list: [
        {
          src: require("@/assets/images/online/item1.png")
        },
        {
          src: require("@/assets/images/online/item2.png")
        },
        {
          src: require("@/assets/images/online/item3.png")
        },
        {
          src: require("@/assets/images/online/item1.png")
        },
        {
          src: require("@/assets/images/online/item2.png")
        },
        {
          src: require("@/assets/images/online/item3.png")
        },
        {
          src: require("@/assets/images/online/item1.png")
        }
      ]
    };
  },
  mounted() {
    this.initSwiper();
    let _this = this;
    this.swiper.on("click", function() {
      console.log(this.clickedIndex);
      // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
      const clickedIndex = this.clickedIndex;
      _this.handleSelect(clickedIndex);
    });
  },
  methods: {
    initSwiper() {
      // this.$nextTick(() => {
      this.swiper = new Swiper(".swiper-container", {
        autoplay: false, //等同于以下设置
        slidesPerView: "auto",
        slidesPerView: 5,
        spaceBetween: 20,
        loop: false,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dragSize: 30
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // 点击事件
        on: {
          click: function() {
            // let elem2 = Array.from(swiper.slides);
            // elem2.forEach(element => {
            //   element.style.border = 0;
            // });
            // swiper.clickedSlide.style.border = "4px solid rgba(161,128,55,1)";
            // this.detail_show = true;
          }
        }
      });
    },
    handleSelect(clickedIndex) {
      this.detail_show = true;
      console.log(clickedIndex);
      let elem2 = Array.from(this.swiper.slides);
      elem2.forEach(element => {
        element.style.border = 0;
      });
      this.swiper.clickedSlide.style.border = "4px solid rgba(161,128,55,1)";
    },
    closed_detail() {
      this.detail_show = false;
      this.swiper.clickedSlide.style.border = "0";
    }
  }
};
</script>

<style lang="less">
.recommend_top {
  .swiper_box {
    height: 220px;
    position: relative;
    .swiper-container {
      width: 100%;
      height: 220px;
      color: #fff;
      .swiper-wrapper {
        width: 100%;
      }
      .swiper-button-prev {
        width: 19.8%;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        margin-top: 0;
        background-image: url("../assets/images/online/prev.png");
        background-repeat: no-repeat;
        background-position: center;
        z-index: 99999;
      }
      .swiper-button-next {
        width: 19.8%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.6);

        margin-top: 0;
        background-image: url("../assets/images/online/next.png");
        background-repeat: no-repeat;
        background-position: center;
        z-index: 99999;
      }
      .swiper-button-disabled {
        opacity: 0;
      }
      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
  .swiper-slide {
    box-sizing: border-box;
  }
  .detail_box {
    height: 790px;
    background-image: url("../assets/images/film_swiper/film_bg.png");
    background-size: 100% 100%;
    text-align: left;
    .detail_title {
      font-size: 80px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      padding-top: 95px;
      .detail_closed {
        float: right;
        vertical-align: middle;
        cursor: pointer;
      }
    }
    .detail_time {
      font-size: 32px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin: 48px 0 26px 0;
      .detail_date {
        margin-right: 53px;
      }
    }
    // 详情
    .detail_des {
      font-size: 28px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      width: 810px;
      margin-bottom: 50px;
    }
    .detail_btn {
      height: 84px;
    }
    .detail_company {
      font-size: 32px;
      margin: 43px 0 47px 0;
    }
    .detail_team {
      font-size: 32px;
    }
    .banner_btn_left {
      width: 240px;
      height: 84px;
      background: rgba(200, 164, 97, 1);
      border-radius: 8px;
      font-size: 36px;
      font-weight: 400;
      color: #ffffff;
      line-height: 84px;
      text-align: center;
      float: left;
      cursor: pointer;
      img {
        vertical-align: sub;
        margin-right: 14px;
      }
    }
    .banner_btn_right {
      cursor: pointer;
      width: 318px;
      height: 84px;
      border: 2px solid rgba(255, 255, 255, 1);
      border-radius: 8px;
      font-size: 36px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 84px;
      text-align: center;
      float: left;
      margin-left: 104px;
      vertical-align: middle;
      img {
        vertical-align: sub;
        margin-right: 14px;
      }
    }
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
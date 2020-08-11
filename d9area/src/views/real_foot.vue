<template>
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
</template>

<script>
export default {

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

<style lang="less">
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
</style >
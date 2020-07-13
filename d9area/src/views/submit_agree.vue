<template>
  <div class="body_box">
    <Nav :mainnav='mainnav'></Nav>
    <div class="submit_agree">
      <div class="agree_banner">
        <img src="@/assets/images/film/film_show_bg.png"
             alt="">
      </div>
      <div class="main_container">
        <p class="agree_title">影片提交协议</p>
        <div class="agree_content">
          <p>(一)提交时间：</p>
          <p>2020年6月14日0:00～2020年8月15日24:00，提正片及预告片。</p>
          <p>(二)奖项设立：</p>
          <p>最佳影片奖、最佳导演奖、最佳编剧奖、最佳艺术指导奖、最佳视效指导奖、最佳角色设计奖、最佳环境设计奖、最佳动效设计奖、最佳技术贡献奖、最佳音乐制作奖、评审团特别奖</p>
          <p>(三)提交步骤：</p>
          <p>上传申报作品 → 填写作品资料 → 提交作品等待审核 </p>
        </div>
        <div class="remember">
          <el-checkbox v-model="checked"
                       @change="agree_type">我已阅读并同意遵守条例</el-checkbox>
        </div>
        <p class="submit_btn"
           :class="checked==true?'add_true':''"
           @click="declare">开始申报</p>
      </div>
    </div>
    <Footer></Footer>

  </div>
</template>
<script>
import Nav from '@/views/nav.vue'
import Footer from '@/views/footer.vue'
export default {
  name: 'SubmitAgree',
  components: { Nav, Footer },
  data () {
    return {
      mainnav: '4',
      checked: false
    }
  },
  methods: {
    declare () {
      if (!this.checked) {
        return false
      }
      this.$router.push('/upload')
    },
    agree_type (val) {
      console.log(val);

    }
  },
  computed: {}
}
</script>
<style lang="less">
.submit_agree {
  margin-top: 114px;
  background: #0a0a0a;
  min-height: 2500px;
  .agree_banner {
    width: 100%;
  }
  .agree_title {
    margin: 80px 0 40px 0;
    font-size: 38px;
    font-weight: 500;
    color: rgba(161, 128, 55, 1);
  }
  .agree_content {
    text-align: left;
    padding: 50px;
    background: #000;
    p {
      margin-bottom: 10px;
      font-size: 22px;
    }
  }
  .remember {
    margin: 100px 0 70px 0;
  }
  .submit_btn {
    margin: 0 auto;
    width: 280px;
    height: 66px;
    font-size: 26px;
    line-height: 66px;
    background: #3b3b3b;
    border-radius: 8px;
  }
  .add_true {
    background: rgba(161, 128, 55, 1);
    cursor: pointer;
  }
}
</style>
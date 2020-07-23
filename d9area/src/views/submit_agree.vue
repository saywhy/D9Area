<template>
  <div class="body_box">
    <Nav :mainnav="mainnav"></Nav>
    <div class="submit_agree">
      <div class="agree_banner">
        <img src="@/assets/images/film/film_show_bg1.jpg"
             alt />
      </div>
      <div class="main_container">
        <!-- <p class="agree_title">影片提交协议</p> -->
        <div class="hr"></div>
        <div class="agree_content">
          <p class="title">(一)提交时间：</p>
          <p>2020年6月14日0:00～2020年8月15日24:00，提正片及预告片。</p>
          <p class="title2">(二)奖项设立：</p>
          <p class="height">最佳影片奖、最佳导演奖、最佳编剧奖、最佳艺术指导奖、最佳视效指导奖、最佳角色设计奖、最佳环境设计奖、最佳技术贡献奖、最佳音乐制作奖、评审团特别奖、最佳环境设计奖、最佳技术贡献奖、最佳音乐制作奖、评审团特别奖</p>
          <p class="title2">(三)提交步骤：</p>
          <p>上传申报作品 → 填写作品资料 → 提交作品等待审核</p>
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
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "SubmitAgree",
  components: { Nav, Footer },
  data () {
    return {
      mainnav: "4",
      checked: false
    };
  },
  created () {
    console.log(this.$route.params);
  },
  methods: {
    declare () {
      if (!this.checked) {
        return false;
      }
      switch (this.$route.query.type) {
        case 'online':
          this.$router.push("/online_steps");
          break;
        case 'film':
          this.$router.push("/upload_steps");
          break;
        default:
          break;
      }
    },
    agree_type (val) {
      console.log(val);
    }
  },
  computed: {}
};
</script>
<style lang="less">
.submit_agree {
  padding-top: 80px;
  background: #0a0a0a;
  padding-bottom: 180px;
  .agree_banner {
    width: 100%;
    height: 540px;
    img {
      width: 100%;
      height: 540px;
    }
  }
  .main_container {
    .hr {
      border-bottom: 2px solid #1b1305;
    }
    .agree_content {
      text-align: left;
      // padding: 50px;
      background: #0a0a0a;

      .title {
        font-size: 22px;
        color: #c8a461;
        margin-top: 40px;
      }
      .title2 {
        margin-top: 30px;
        font-size: 22px;
        color: #c8a461;
      }
      p {
        margin-bottom: 10px;
        font-size: 16px;
      }
      .height {
        line-height: 30px;
      }
    }
    .remember {
      margin: 40px 0 40px 0;
      .el-checkbox__label {
        font-size: 16px;
      }
    }
    .submit_btn {
      margin: 0 auto;
      width: 200px;
      height: 58px;
      font-size: 18px;
      line-height: 58px;
      background: #3b3b3b;
      border-radius: 8px;
      // margin-bottom:20px;
    }
    .add_true {
      background: #c8a461;
      cursor: pointer;
    }
  }
}
</style>
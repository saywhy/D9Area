<template>
  <div class="body_box" style="height: auto;">
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
         <p class="category">首届D9区国际CG动画电影周竞赛单元只接受短片，分为以下三个类别：VFX电影短片、CG动画短片、VR短片。</p>
          <p class="title2">(一)注册报名与作品提交时间：</p>
          <p class="height">2020年8月10日～2020年10月30日。</p>
          <p class="title2">(二)首届D9区国际CG动画电影周奖项设置：</p>
          <p class="height">最佳短片奖、最佳导演奖、最佳编剧奖、最佳剪辑奖、最佳艺术指导奖、最佳特效制作奖、最佳角色设计奖、最佳环境设计奖、最佳动效设计奖、最佳技术贡献奖</p>
          <p class="title2">(三)作品提交须知与规则</p>
          <div class="rule">
            <p class="height">1.所有类别的短片时长要求5-15min；</p>
            <p>2.题材类型不限，须全CG三维制作；</p>
            <p>3.字幕至少包含中文或英文字幕；</p>
            <p>4.申报作品需是在近两年内完成的；</p>
            <p>5.申报作品提交成功后，组委会原则上不再接受新的版本。如果报名信息有重大变化，请及时联系组委会；</p>
            <p>6.申报作品必须为原创短片项目，要体现原创性、创新性、艺术性，要有较高的思想艺术内涵与价值；</p>
            <p>7.申报者须保证拥有该作品的全部版权或持有版权方授权许可证明，证明其有权在ICF上宣传、放映和参加相关活动。因申报作品著作权、商标权及其他知识产权所产生的任何法律纠纷或经济损失，由申报者承担全部法律责任，主办方及活动组织方免责；</p>
            <p>8.申报者须确保作品的申报符合所在国家/地区的法律法规要求，因申报方违反其所在国家/地区的法律法规所产生的任何法律纠纷或经济损失，由申报者承担全部法律责任，主办方及活动组织方免责；</p>
            <p>9.申报作品的所有资料等应按主办方的要求提交，申报者同意并授权主办方无偿使用申报作品提供的所有材料，进行推广宣传、展映活动、媒体的各种媒介宣传使用的权利，仅限于对本活动和本片的宣传（如主办方要求，申报者需承诺提供相应授权文件）；</p>
            <p>10.申报者所提交的所有材料均不可退还，请务必保留原件，并且一旦申请者接受提名，则不能退出评选，最终入围选手须给予主办方至少一次在北京区放映影片的权利；</p>
            <p>11.入围作品的导演（制片人或制作团队的其他代表）将被邀请到北京参加为期一周的电影周及其他相关活动，包括映后谈、ICF论坛、青年导演扶持计划、颁奖典礼等。最终入围者需要独立承担赴中旅游签和旅游保险，主办方可根据需求提供邀请函；</p>
            <p>12.本活动的最终解释权归主办方所有，主办方有权不经预先通知根据实际情况对推选活动章程中所涉及到的各项条款进行适当调整;</p>
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
  
      .title2 {
        margin-top: 30px;
        font-size: 22px;
        color: #c8a461;
      }
       .height {
        margin-top: 10px;
        color: #f6f6f6;
      }
   
        .rule {
      line-height: 30px;
      text-align: left;
      p {
        font-size: 14px;
        color: #f6f6f6;
      }
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
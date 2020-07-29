<template>
  <div class="body_box">
    <div class="container_box">
      <film-nav :activenav="Index" class="top_nav"></film-nav>
      <div class="QA">
        <div class="QA_bg">
          <img src="../assets/images/QA/QA.png" alt />
        </div>
        <div class="QA_box">
          <div class="QA_min">
            <p class="tite">关于报名</p>
            <p class="problem">影片报名的截止日期是？</p>
            <p class="key">报名金爵奖、亚洲新人奖、国际影片展映的影片评选的截至时间为2019年3月31号。</p>
            <p class="problem">一部影片可以同时申报多个单元吗?</p>
            <p
              class="key"
            >可以！一部影片可以同时申报多个单元，但是请务必仔细阅读各个单元的章程，以确保影片符合所申报单元的章程要求。此外,金爵奖国际影片评选与亚洲新人奖影片评选不能同时申报。</p>
            <p class="problem">影片报名成功后，会有确认信息吗？</p>
            <p class="key">是的！电影节审核并通过报名信息后，您会收到受理报名邮件提醒。</p>
            <p class="tite">关于样片</p>
            <p class="problem">影片报名的截止日期是？</p>
            <p class="key">报名金爵奖、亚洲新人奖、国际影片展映的影片评选的截至时间为2019年3月31号。</p>
            <p class="problem">一部影片可以同时申报多个单元吗？</p>
            <p
              class="key"
            >可以！一部影片可以同时申报多个单元，但是请务必仔细阅读各个单元的章程，以确保影片符合所申报单元的章程要求。此外,金爵奖国际影片评选与亚洲新人奖影片评选不能同时申报。</p>
            <p class="problem">影片报名成功后，会有确认信息吗？</p>
            <p class="key">是的！电影节审核并通过报名信息后，您会收到受理报名邮件提醒。</p>
            <p class="tite">关于入围</p>
            <p class="problem">影片报名的截止日期是？</p>
            <p class="key">报名金爵奖、亚洲新人奖、国际影片展映的影片评选的截至时间为2019年3月31号。</p>
            <p class="problem">一部影片可以同时申报多个单元吗？</p>
            <p
              class="key"
            >可以！一部影片可以同时申报多个单元，但是请务必仔细阅读各个单元的章程，以确保影片符合所申报单元的章程要求。此外,金爵奖国际影片评选与亚洲新人奖影片评选不能同时申报。</p>
            <p class="problem">影片报名成功后，会有确认信息吗？</p>
            <p class="key">是的！电影节审核并通过报名信息后，您会收到受理报名邮件提醒。</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
   
<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
import filmNav from "@/views/film_nav.vue";
export default {
  components: { Nav, Footer, filmNav },
  data() {
    return {
      Index: "6",
      mainnav: "2",
    };
  },
};
</script>
   
<style lang="less">
.QA {
  background-color: #fff;
  // padding-bottom: 180px;
  .QA_bg img {
    width: 100%;
    height: 540px;
  }
  .QA_box {
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
    .QA_min {
      background-color: #fff;
      text-align: left;
      padding: 40px 100px;

      .tite {
        font-size: 24px;
        color:#000;
        margin-bottom: 50px;
      }
      .problem {
        font-size: 18px;
        color:#141414;
        margin-bottom: 20px;
        // color: #c8a461;
      }
      .key {
        font-size: 16px;
        color:#666666;
        margin-bottom: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>

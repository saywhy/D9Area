<template>
  <div class="QA">
    <Nav></Nav>
    <div class="QA_bg">
      <img src="../assets/images/QA/QA.jpg"
           alt="">
    </div>
    <div class="QA_box">
      <div class="QA_min">
        <span>关于报名</span>
        <p class="problem">影片报名的截止日期是？</p>
        <p class="key">报名金爵奖、亚洲新人奖、国际影片展映的影片评选的截至时间为2019年3月31号。</p>
        <p class="problem">一部影片可以同时申报多个单元吗?</p>
        <p class="key">可以！一部影片可以同时申报多个单元，但是请务必仔细阅读各个单元的章程，以确保影片符合所申报单元的章程要求。此外,金爵奖国际影片评选与亚洲新人奖影片评选不能同时申报。</p>
        <p class="problem">影片报名成功后，会有确认信息吗？</p>
        <p class="key">是的！电影节审核并通过报名信息后，您会收到受理报名邮件提醒。</p>
        <span>关于样片</span>
        <p class="problem">影片报名的截止日期是？</p>
        <p class="key">报名金爵奖、亚洲新人奖、国际影片展映的影片评选的截至时间为2019年3月31号。</p>
        <p class="problem">一部影片可以同时申报多个单元吗？</p>
        <p class="key">可以！一部影片可以同时申报多个单元，但是请务必仔细阅读各个单元的章程，以确保影片符合所申报单元的章程要求。此外,金爵奖国际影片评选与亚洲新人奖影片评选不能同时申报。</p>
        <p class="problem">影片报名成功后，会有确认信息吗？</p>
        <p class="key">是的！电影节审核并通过报名信息后，您会收到受理报名邮件提醒。 </p>
        <span>关于入围</span>
        <p class="problem"> 影片报名的截止日期是？</p>
        <p class="key"> 报名金爵奖、亚洲新人奖、国际影片展映的影片评选的截至时间为2019年3月31号。</p>
        <p class="problem">一部影片可以同时申报多个单元吗？</p>
        <p class="key">可以！一部影片可以同时申报多个单元，但是请务必仔细阅读各个单元的章程，以确保影片符合所申报单元的章程要求。此外,金爵奖国际影片评选与亚洲新人奖影片评选不能同时申报。</p>
        <p class="problem">影片报名成功后，会有确认信息吗？</p>
        <p class="key">是的！电影节审核并通过报名信息后，您会收到受理报名邮件提醒。</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";

export default {
  components: { Nav, Footer },
}
</script>

<style lang="less">
.QA {
  background-color: #0a0a0a;
  .QA_bg img {
    height: 844px;
    width: 100%;
  }
  .QA_box {
    width: 1200px;

    margin: 0 auto;
    // border: 1px solid red;
    // background-color: #fff;
    margin-top: 73px;
    .QA_min {
      height: 2587px;

      background-color: #000;
      text-align: left;
      padding-left: 67px;
      padding-top: 20px;
      padding-right: 170px;

      span {
        font-size: 32px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 67px;
      }
      .problem {
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(200, 164, 97, 1);
        line-height: 67px;
      }
      .key {
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 67px;
      }
    }
  }
}
</style>
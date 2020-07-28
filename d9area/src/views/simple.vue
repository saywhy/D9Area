<template>
  <div class="body_box">
    <div class="container_box">
      <film-nav :activenav="Index"></film-nav>
      <div class="simple_box">
        <div>
          <img src="@/assets/images/simple/jj.png" alt class="jj" />
        </div>
        <div class="simple_box_min">
          <!-- <img src="@/assets/images/simple/tc.png" alt class="tc" /> -->
          <p class="question">CG动画电影周的使命是什么？</p>
          <p
            class="key"
            align="left"
          >首届D9区国际CG动画电影周分为竞赛单元、论坛单元、展映单元、青年动画导演扶持计划四大板块内容，首届主竞赛单元只接受VFX电影短片、三维动画短片、VR短片三个方向，面向全球CG短片创作者开放，邀请国内外影视、动画行业领军人士和著名导演担任评委，评选并奖励优秀CG短片的创作，发现、扶持有理想、有激情、有创造力的动画团队和人才，孵化优质短片项目，
          促进国际文化交流与合作，创建CG短片创作、汇聚、交流、交易的国际化平台。
          </p>
          <p class="question">CG动画电影周的使命是什么？</p>
          <p
            class="key"
            align="left"
          >这个单元旨在通过多个个性鲜明的评选环节来凸显电影创作的多样化特点。一些入围竞赛单元的影片是“大众化作者电影”优秀的阐释，而一种注目单元则着重作品意图和审美的独特性，以通过全球荧幕来展示一种低调却强有力的美学风格。官方评选也涉及非竞赛单元（Hors Compétition）、特别场（Séances Spéciales）和午夜场（Séances de minuit），以及展现电影历史财富的戛纳经典（Cannes Classics） 和电影学校电影基金会（Cinéfondation） 评选。最重要的是，这个评选需要保持创意与地理区域的平衡，具有能够反映当代电影产业的代表性。</p>
          <p class="question">CG动画电影周的使命是什么？</p>
          <p
            class="key"
            align="left"
          >这个单元旨在通过多个个性鲜明的评选环节来凸显电影创作的多样化特点。一些入围竞赛单元的影片是“大众化作者电影”优秀的阐释，而一种注目单元则着重作品意图和审美的独特性，以通过全球荧幕来展示一种低调却强有力的美学风格。官方评选也涉及非竞赛单元（Hors Compétition）、特别场（Séances Spéciales）和午夜场（Séances de minuit），以及展现电影历史财富的戛纳经典（Cannes Classics） 和电影学校电影基金会（Cinéfondation） 评选。最重要的是，这个评选需要保持创意与地理区域的平衡，具有能够反映当代电影产业的代表性。</p>
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
import filmTop from "@/views/film_top.vue";
export default {
  components: { Nav, Footer, filmTop, filmNav },
  data() {
    return {
      Index: "2",
      mainnav: "2",
    };
  },
};
</script>

<style lang="less">
.nav_margin_top {
  background-color: #000;
}
.simple_box {
  background: #fff;
  padding-bottom: 80px;
  width: 100%;
  .jj {
    width: 100%;
    height: 540;
  }
  .simple_box_min {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 40px;
  }
  .tc {
    width: 1000px;
    height: 380px;
    margin-bottom: 40px;
  }
  .question {
    text-align: left;
    font-size: 22px;
    font-family: SimHei;
    // font-weight: 500;
    color: #cfbd44;
    font-weight:bold;
    margin-bottom: 18px;
  }
  .key {
    font-size: 18px;
    margin-bottom: 40px;
    font-family: SimHei;
    font-weight: 400;
    color: #000;
    line-height: 30px;
    text-indent:35px;
  }
}
</style>
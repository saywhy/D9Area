<template>
  <div class="simple">
    <Nav :mainnav="mainnav"></Nav>
    <film-nav :activenav="Index"></film-nav>
    <!-- <film-top class="nav_margin_top"></film-top> -->

    <div class="simple_box">
      <div>
        <img src="@/assets/images/simple/jj.jpg" alt class="jj" />
      </div>
      <div class="simple_box_min">
        <img src="@/assets/images/simple/tc.png" width="1000" height="380" alt class="tc" />
        <p class="question">电影节的使命是什么？</p>
        <p
          class="key"
          align="left"
        >为了使活动常办常新，戛纳电影节一直忠实于它最初的信念：发掘并弘扬影片来促进电影发展，扶持世界电影业并成为第七艺术国际性的盛事。直至今日，这个信念依然是戛纳电影节活动规则的首条宗旨.</p>
        <p class="question">“官方评选”（Sélection officielle ）是什么？</p>
        <p
          class="key"
          align="left"
        >这个单元旨在通过多个个性鲜明的评选环节来凸显电影创作的多样化特点。一些入围竞赛单元的影片是“大众化作者电影”优秀的阐释，而一种注目单元则着重作品意图和审美的独特性，以通过全球荧幕来展示一种低调却强有力的美学风格。官方评选也涉及非竞赛单元（Hors Compétition）、特别场（Séances Spéciales）和午夜场（Séances de minuit），以及展现电影历史财富的戛纳经典（Cannes Classics） 和电影学校电影基金会（Cinéfondation） 评选。最重要的是，这个评选需要保持创意与地理区域的平衡，具有能够反映当代电影产业的代表性。</p>
        <p class="question">“官方评选”（Sélection officielle ）是什么？</p>
        <p
          class="key"
          align="left"
        >这个单元旨在通过多个个性鲜明的评选环节来凸显电影创作的多样化特点。一些入围竞赛单元的影片是“大众化作者电影”优秀的阐释，而一种注目单元则着重作品意图和审美的独特性，以通过全球荧幕来展示一种低调却强有力的美学风格。官方评选也涉及非竞赛单元（Hors Compétition）、特别场（Séances Spéciales）和午夜场（Séances de minuit），以及展现电影历史财富的戛纳经典（Cannes Classics） 和电影学校电影基金会（Cinéfondation） 评选。最重要的是，这个评选需要保持创意与地理区域的平衡，具有能够反映当代电影产业的代表性。</p>
      </div>
    </div>
    <Footer></Footer>
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
      mainnav: "2"
    };
  }
};
</script>

<style lang="less">
.simple {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.nav_margin_top {
  background-color: #000;
}
.simple_box {
  background: #0a0a0a;
  margin-top: 200px;
  width: 100%;
  .jj {
    width: 100%;
  }
  .simple_box_min {
    width: 1000px;
    // height: 1919px;
    margin: 0 auto;
    background-color: #0a0a0a;
    margin-top: 40px;
  }
  .tc {
    // height: 594px;
    margin-bottom: 40px;
  }
  .question {
    text-align: left;
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(200, 164, 97, 1);
    margin-bottom: 18px;
  }
  .key {
    font-size: 16px;

    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    margin-bottom: 40px;
  }
}
</style>
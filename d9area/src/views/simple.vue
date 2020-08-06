<template>
  <div class="body_box">
    <div class="container_box">
      <film-nav :activenav="Index"></film-nav>
      <div class="simple_box">
        <div class="simple_img_box">
          <img src="@/assets/images/simple/jj.jpg" alt />
        </div>
        <SimpleNav @selected="selected"></SimpleNav>
        <div class="simple_box_min">
          <!-- <img src="@/assets/images/simple/tc.png" alt class="tc" /> -->
          <simple-film v-if="defult_selected=='1'"></simple-film>
          <simple-rules v-if="defult_selected=='2'"></simple-rules>
          <!-- <p class="question">CG动画电影周的使命是什么？</p>
          <p
            class="key"
          >D9区国际CG动画电影周（以下简称ICF）将评选并奖励优秀CG短片的创作，发现、扶持有理想、有激情、有创造力的动画团队和人才，孵化优质短片项目，促进国际文化交流与合作，创建CG短片创作、汇聚、交流、交易的国际化平台。</p>
          <p class="question">首届ICF会有哪些内容板块？</p>
          <p
            class="key"
          >首届ICF分为竞赛单元、展映单元、论坛单元、创投计划四大板块内容，首届主竞赛单元只接受VFX电影短片、三维动画短片、VR短片三个方向，面向全球CG短片创作者开放。</p>
          <p class="question">竞赛单元的评选标准是什么？</p>
          <p
            class="key1"
          >通过全CG三维制作的影片你要体现完整的叙事结构、独特的视角、鲜明的视觉风格和制作技术的突破。入围竞赛单元的影片将会是“全新时代CG影片”优秀的阐释，不仅着重用视觉讲故事，阐述作品意图和审美的独特性，以通过全CG三维制作来展示一种强有力的美学风格。获奖作品将会进入ICF电影基金会的创投计划中，以挖掘高品质影片创作为宗旨。</p>

          <p
            class="key"
          >该单元将邀请国内外影视、动画行业领军人士和著名导演担任评委，首届D9区国际CG动画电影周的国际评审主席是彼得.拉姆齐（Peter Ramsey），他是《蜘蛛侠.平行宇宙》的导演，该作品获得奥斯卡最佳动画片奖。</p>
          <p class="question">展映单元由什么组成？</p>
          <p class="key">由ICF竞赛单元入围影片和主题展映邀约两部分组成。</p>-->
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
import SimpleNav from "@/views/simple_nav.vue";
import simpleFilm from "@/views/simple_film.vue";
import simpleRules from "@/views/simple_rules.vue";
export default {
  components: {
    Nav,
    Footer,
    filmTop,
    filmNav,
    SimpleNav,
    simpleFilm,
    simpleRules,
  },
  data() {
    return {
      Index: "2",
      mainnav: "2",
      defult_selected: "1",
    };
  },
  methods: {
    selected(childValue) {
      this.defult_selected = childValue;
    },
  },
};
</script>

<style lang="less" scoped>
.nav_margin_top {
  background-color: #000;
}
.simple_box {
  background: #fff;
  padding-bottom: 80px;
  width: 100%;
  .simple_img_box {
    width: 100%;
    height: 300px;
    position: fixed;
    z-index: 1;
    img {
      width: 100%;
      height: 300px;
    }
  }
  .simple_box_min {
    background-color: #fff;
    margin-top: 340px;
    position: relative;
    z-index: 999;
  }
}
</style>
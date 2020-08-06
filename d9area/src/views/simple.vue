<template>
  <div class="body_box">
    <div class="container_box">
      <film-nav :activenav="Index"></film-nav>
      <div class="simple_img_box">
        <img src="@/assets/images/simple/jj.jpg" alt />
      </div>

      <div id="simpie_nav" :class="srcolltop?'fixed_nav':''">
        <SimpleNav @selected="selected"></SimpleNav>
      </div>

      <div class="simple_box">
        <div class="simple_box_min">
          <!-- <img src="@/assets/images/simple/tc.png" alt class="tc" /> -->
          <simple-film v-if="defult_selected=='1'"></simple-film>
          <simple-rules v-if="defult_selected=='2'"></simple-rules>
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
      srcolltop: false,
    };
  },
  mounted() {
    //首先，在mounted钩子window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    selected(childValue) {
      this.defult_selected = childValue;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = document.querySelector("#simpie_nav").offsetTop;
      console.log(offsetTop);
      console.log(scrollTop);
      if (scrollTop >= 280) {
        console.log(" 执行固定定位");
        // 执行固定定位
        // this.srcolltop = true;
      }
      // else
      // if(scrollTop-offsetTop) {
      //   this.srcolltop = false;
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.nav_margin_top {
  background-color: #000;
}
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
.simple_box {
  position: relative;
  background: #fff;
  padding-bottom: 80px;
  width: 100%;
  padding-top: 30px;
  z-index: 9099;

  .simple_box_min {
    background-color: #fff;
    // margin-top: 340px;
    position: relative;
    z-index: 999;
  }
}

.fixed_nav {
  position: fixed !important;
  z-index: 99999 !important;
  // top: 61px !important;
  margin-top: 0 !important;
}
</style>
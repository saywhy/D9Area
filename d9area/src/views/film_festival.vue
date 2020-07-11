<template>
  <div class="container">
    <Nav></Nav>
    <div class="FilmFestival">
      <div class="FilmFestival_top">
        <div class="container_main">
          <div class="top_left">
            <img class="logo logo_left" width="117" src="@/assets/logo_2x.png" alt />
            <img class="logo logo_right" src="@/assets/images/home/logo.png" alt />
            <img class="logo logo_right" src="@/assets/images/home/logo.png" alt />
            <img class="logo logo_right" src="@/assets/images/home/logo.png" alt />
            <img class="logo" src="@/assets/images/home/logo.png" alt />
          </div>
          <div @mouseover="imghover" @mouseleave="imgleave" style="float: right;">
            <img src="@/assets/images/film/search.png" class="img_hover" width="54" height="54" alt />
            <input type="text" ref="input_search" class="input_search" id="input_search" />
          </div>

          <!-- <el-input class="s_key" v-model="search" clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>-->
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "FilmFestival",
  components: { Nav, Footer },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    imghover() {
      console.log(1111);
      console.log(this.$refs.input_search);
      this.$refs.input_search.style.width = "250px";
         this.$refs.input_search.style.padding = "0 10px";
      // document.getElementById('input_search').animate({'width':'250px'})
    },
    imgleave() {
      console.log(this.$refs.input_search);
      this.$refs.input_search.style.width = "0";
         this.$refs.input_search.style.padding = "0";
      // document.getElementById('input_search').animate({'width':'250px'})
    }
  }
};
</script>
<style lang="less">
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.container_main {
  width: 1200px;
  margin: 0 auto;
}
.FilmFestival {
  margin-top: 114px;
  height: 1000px;
  border: 1px solid red;
  .FilmFestival_top {
    height: 188px;
    padding: 28px 0;
    background: #0a0a0a;
    border: 1px solid red;
    height: 130px;
    line-height: 130px;
    .top_left {
      float: left;
      .logo {
        vertical-align: middle;
      }
      .logo_left {
        margin-right: 130px;
      }
      .logo_right {
        margin-right: 76px;
      }
    }
    .img_hover {
      cursor: pointer;
      vertical-align: middle;
    }
    .input_search {
      width: 0;
      height: 54px;
      font-size: 26px;
      color: rgb(246, 246, 246);
      caret-color: #fff;
      border: 0;
      background: rgba(85, 85, 84, 0.3);
      border-radius: 8px;
      outline: none;
      vertical-align: middle;
      &:hover,
      &:focus {
        border: 0;
        outline: none;
      }
    }

    .img_hover:hover {
    }
  }
}
</style>

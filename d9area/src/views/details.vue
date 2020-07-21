<template>
  <div class="details">
    <Nav></Nav>
    <div class="details_box">
      <div class="details_box_big">
        <div class="box_big_l"></div>
        <div class="box_big_r">
          <p class="title">恐怖之夜</p>
          <div class="sroll">
            <div class="hr"></div>
            <p class="content">罗德主持一个专门讨论恐怖的广播节目，有一天，播音员开始收到一个拼命求救的孩子的电话。起初，他认为这是一个笑话，后来他才......</p>
            <p class="out">出品方：凉山童工</p>
            <p class="host">主创团队：导演11111/编剧222 /制片111/艺术指导2222</p>
            <p class="poster">海报</p>
            <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
            </ul>-->
            <div class="poster_tp"></div>
            <div class="poster_tp"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "../views/nav";
import Footer from "../views/footer";
export default {
  components: { Nav, Footer },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    load() {
      this.count += 2;
    }
  }
};
</script>

<style lang="less">
.details_box {
  padding-top: 80px;
  width: 100%;
  padding-bottom: 156px;
  background-color: #0a0a0a;
  .details_box_big {
    width: 1200px;
    height: 660px;
    margin: 0 auto;
    margin-top: 84px;
    background-color: #000;
    .box_big_l {
      width: 876px;
      height: 650px;
      float: left;
      border: 1px solid red;
    }

/*修改滚动条样式*/
.box_big_r::-webkit-scrollbar{
  width:0;
  height:10px;
  /**/
}
.box_big_r::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
.box_big_r::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:10px;
}
.box_big_r::-webkit-scrollbar-thumb:hover{
  background: #333;
}
.box_big_r::-webkit-scrollbar-corner{
  background: #179a16;
}







    .box_big_r {
      width: 298px;
      height: 650px;
      float: right;
      // overflow: hidden;
      overflow-y: scroll;
      border: 1px solid green;
      .title {
        height: 76px;
        font-size: 22px;
        line-height: 76px;
        text-align: left;
        margin: 24px 0 32px 24px;
      }
      .sroll {
      }
      .hr {
        border-bottom: 1px solid #171717;
      }
      .content {
        font-size: 16px;
        text-align: left;
        margin: 18px 28px 32px 24px;
      }
      .out {
        font-size: 14px;
        text-align: left;
        margin: 0 0 26px 26px;
      }
      .host {
        font-size: 14px;
        text-align: left;
        margin: 0 80px 26px 26px;
      }
      .poster {
        font-size: 16px;
        text-align: left;
        margin: 0 0 20px 26px;
      }
      .poster_tp {
        width: 246px;
        height: 140px;
        border: 1px solid red;
        margin: 0 auto;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
<template>
  <div class="body_box">
    <Nav :mainnav='mainnav'></Nav>
    <film-nav :activenav="Index"></film-nav>
    <div class="UploadSteps">
      <div class="main_container">
        <div class="steps_top">
          <div class="steps_box">
            <el-steps :active="stpes_active"
                      finish-status="success"
                      align-center>
              <el-step title="基本信息">
              </el-step>
              <el-step title="预告片信息"></el-step>
              <el-step title="正片信息"></el-step>
              <el-step title="联系人信息"></el-step>
              <el-step title="信息确认"></el-step>
            </el-steps>
          </div>

        </div>
        <div class="content">

        </div>
      </div>
    </div>
    <Footer></Footer>

  </div>

</template>
<script>
import Nav from '@/views/nav.vue'
import Footer from '@/views/footer.vue'
import filmNav from "@/views/film_nav.vue";
export default {
  name: 'UploadSteps',
  components: { Nav, Footer, filmNav },
  data () {
    return {
      Index: "4",
      mainnav: "2",
      stpes_active: 0,
    }
  },
  methods: {},
  computed: {}
}
</script>
<style lang="less">
.UploadSteps {
  margin-top: 200px;
  border: 1px solid red;
  background: #0a0a0a;
  padding-top: 43px;
  .steps_top {
    background: #000;
    padding: 48px 0;
    .steps_box {
      // border: 1px solid red;
      .el-step__title {
        position: absolute;
        left: 137px;
        top: -7px;
        font-size: 16px;
        color: #919191;
      }
      .el-step.is-horizontal .el-step__line {
        top: 10px;
        left: 230px;
        right: -90px;
        background: #919191;
        height: 1px;
      }
      .el-step__title.is-process {
        color: #c8a461;
      }
      //
      .el-step__icon {
        background: #000;
      }
      .el-step__icon.is-text {
        color: #919191;
        border-color: #919191;
      }
      // 进行中
      .el-step__head.is-process {
        .el-step__icon.is-text {
          color: #fff;
          background: #c8a461;
          border-color: #c8a461;
        }
      }
      // 已完成
      .el-step__title.is-success {
        color: #c8a461;
        border-color: #c8a461;
      }
      .el-step__head.is-success {
        .el-step__icon.is-text {
          color: #c8a461;
          border-color: #c8a461;
        }
      }
    }
  }
}
</style>
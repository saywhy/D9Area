<template>
  <div class="Onlineview">
    <Nav></Nav>
    <div class="view_box">
      <el-steps :active="0" finish-status="finish" align-center>
        <el-step title="基本信息"></el-step>
         <el-step title="基本信息"></el-step>
      </el-steps>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  components: { Nav, Footer },
  data() {
    return {};
  },
};
</script>

<style lang="less">
.Onlineview {
  background-color: #0a0a0a;

  .view_box {
    width: 1200px;
    height: 732px;
    margin: 0 auto;
    background-color: #000;
    padding-top:100px;
    margin-bottom: 70px;
  }
}
</style>
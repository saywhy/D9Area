<template>
  <div class="simpie_nav">
    <div class="simpie_nav_box">
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#080808"
        text-color="#fff"
        active-text-color="#C8A461"
      >
        <el-menu-item index="1" >电影周</el-menu-item>
        <el-menu-item index="2" >章程</el-menu-item>
        <el-menu-item index="3" >评审委员会</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      sim_nav: {},
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "1":
          this.$emit('selected', '1')
          break;
        case "2":
          this.$emit('selected', '2')
          break;
        case "3":
          this.$emit('selected', '3')
          break;
      }
    },
  },
};
</script>

<style scoped lang="less">
.simpie_nav {
  background-color: #141414;
  height: 40px;
  width: 100%;
  margin-top: 0;

  .simpie_nav_box {
    width: 1200px;
    margin: 0 auto;
    background-color: red;
    height: 40px;
  }

   .el-menu.el-menu--horizontal {
    border-bottom: 0;

    .el-menu-demo el-menu--horizontal el-menu {
      height: 40px;
    }

    .el-menu-item is-active {
      border-bottom: 0;
      background-color: #141414;
    }

    .el-menu-item {
      height: 40px;
      line-height: 40px;
      border-bottom: 0;
      background-color: #141414 !important;
    }
  }

  //---------------------------
  /deep/
  .el-menu.el-menu--horizontal {
      border: 0;
       background-color: #141414 !important;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      border: 0;
    }
    .el-menu--horizontal > .el-menu-item {
      border: 0;
    }





}
</style>
<template>
  <div class="simpie_nav">
    <div class="simpie_nav_box">
      <el-menu
        :default-active="activeIndex"
        :class="sim_nav.menu"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#080808"
        text-color="#fff"
        active-text-color="#C8A461"
      >
        <el-menu-item index="1" :class="sim_nav.menu">处理中心</el-menu-item>
        <el-menu-item index="2" :class="sim_nav.menu">处理中心</el-menu-item>
        <el-menu-item index="3" :class="sim_nav.menu">处理中心</el-menu-item>
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
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.$router.push();
          break;
        case "2":
          this.$router.push();
          break;
        case "3":
          this.$router.push();
          break;
      }
    },
  },
};
</script>

<style lang="less">
.simpie_nav {
  background-color: #080808;
  height: 40px;
  width: 100%;

  .simpie_nav_box {
    background-color: #080808;
    height: 40px;
    width: 600px;
    margin: 0 auto;

    .el-menu.el-menu--horizontal {
      border-bottom: 0;
    }

    .el-menu-demo el-menu--horizontal el-menu {
      height: 40px;
    }
    .el-menu-item is-active {
       border-bottom: 0;
        border-bottom-color: #080808;
    }
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      border-bottom: 0;
    }
  }
}
</style>
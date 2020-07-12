<template>
  <div class="body_box">
    <Nav></Nav>
    <div class="messages_box">
      <div class="msg_top"></div>
      <div class="main_container">
        <div class="main_box">
          <!-- 左边 -->
          <div class="nav_left">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-vertical-demo"
              @select="handleSelect"
              background-color="#000"
              text-color="#fff"
              active-text-color="#fff"
            >
              <el-menu-item index="1">
                <span slot="title">用户协议</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">隐私政策</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">使用帮助</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">联系我们</span>
              </el-menu-item>
            </el-menu>
          </div>
          <!-- 右边 -->
          <div class="nav_right">
            <p class="nav_right_top">{{nav_list[activeIndex-1].name}}</p>
            <!-- 下面具体内容 -->
            <!-- 用户协议 -->
            <div v-if="activeIndex=='1'">用户协议</div>
            <!-- 隐私政策 -->
            <div v-if="activeIndex=='2'">隐私政策</div>
            <!-- 使用帮助 -->
            <div v-if="activeIndex=='3'">使用帮助</div>
            <!-- 联系我们 -->
            <div v-if="activeIndex=='4'">联系我们</div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "Messages",
  components: { Nav, Footer },
  data() {
    return {
      activeIndex: "1",
      nav_list: [
        { name: "用户协议" },
        { name: "隐私政策" },
        { name: "使用帮助" },
        { name: "联系我们" }
      ]
    };
  },
  mounted () {
    console.log(this.$route.query.name ); 
    switch (this.$route.query.name) {
        case 'contact':
             this.activeIndex='4'
            break;
    
        default:
            break;
    }
  },
  methods: {
    handleSelect(index) {
      console.log(index);
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="less">
.messages_box {
  margin-top: 114px;
  background: #0a0a0a;
  .msg_top {
    height: 844px;
    background-image: url("../assets/images/film/film_show_bg.png");
    background-size: 100% 100%;
  }
  .main_box {
    padding-top: 70px;
    overflow: auto;
  }
  .nav_left {
    float: left;
    .el-menu-vertical-demo {
      width: 277px;
      border-radius: 8px;
      overflow: hidden;
    }
    .el-menu {
      border: 0;
    }
    .el-menu-item {
      border: 4px solid #000;
      padding: 0 !important;
      transition: none;
      font-size: 28px;
      height: 100px;
      line-height: 100px;
      span {
        line-height: 100px;
        height: 100px;
        display: block;
      }
    }
    .el-menu-item.is-active {
      color: #409eff;
      border-left: 4px solid #c8a461;
    }
    .el-menu.el-menu--horizontal {
      border: 0;
    }
  }
  .nav_right {
    float: right;
    border-radius: 8px;
    width: 843px;
    height: 1400px;
    background: #000;
    border: 1px solid red;
    text-align: left;
    .nav_right_top {
      height: 114px;
      border-bottom: 2px solid #533a05;
      padding-left: 40px;
      font-size: 32px;
      line-height: 114px;
    }
  }
}
</style>
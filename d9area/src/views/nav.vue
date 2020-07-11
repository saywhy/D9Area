<template>
  <div id="nav">
    <div class="nav_box">
      <img class="logo"
           width="70"
           src="@/assets/images/home/D9-logo.png"
           alt="">
      <el-menu :default-active="activeIndex"
               text-color='#F6F6F6'
               active-text-color='#C9A562'
               background-color='#000'
               class="el_menu"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="1">
          首页
        </el-menu-item>
        <el-menu-item index="2">
          ICF电影节
        </el-menu-item>
        <el-menu-item index="3">在线观影</el-menu-item>
        <el-menu-item index="4">D9制片厂</el-menu-item>
        <el-menu-item index="5">Q&A</el-menu-item>
      </el-menu>
      <span class="nav_right">
        <span @click="change_language('cn')"
              :class="language=='cn'?'language_color':''">中文 </span>
        <span>/</span>
        <span @click="change_language('en')"
              :class="language=='en'?'language_color':''"> EN</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      activeIndex: '1',
      language: 'cn'
    };
  },
  mounted () {
    // this.$i18n.locale = 'en'
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case '1':
          this.$router.push('/home')
          break;
        case '2':
          this.$router.push('/film_festival')
          break;
        case '3':
          this.$router.push('/online_login')
          break;
        case '4':
          this.$router.push('/about2')
          break;
        default:
          break;
      }

    },
    change_language (name) {
      switch (name) {
        case 'cn':
          // this.$i18n.locale = 'cn'
          this.language = 'cn'
          break;
        case 'en':
          // this.$i18n.locale = 'en'
          this.language = 'en'
          break;

        default:
          break;
      }
    }
  }
}
</script>


<style lang="less">
#nav {
  position: relative;
  width: 100%;
  height: 114px;
  // border: 1px solid red;
  background: #000000;
  font-size: 22px;
  position: fixed;
  z-index: 9999999;
}
.nav_box {
  text-align: left;
  width: 1200px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // border: 1px solid green;
  .logo {
    float: left;
  }
  .nav_right {
    float: right;
    cursor: pointer;
    line-height: 70px;
  }
  .el_menu,
  .el_menu li {
    font-size: 22px;
    height: 70px;
    line-height: 70px;
    float: left;
    background: #000000;
  }
  .el-menu.el-menu--horizontal {
    border: 0;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border: 0;
  }
  .el-menu--horizontal > .el-menu-item {
    border: 0;
  }
  .language_color {
    color: #c9a562;
  }
}
.foot_box {
  width: 100%;
  height: 196px;
  background: #0a0a0a;
  // position: fixed;
  bottom: 0;
  .foot_box_main {
    height: 196px;
    // border: 1px solid red;
    width: 530px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    ul {
      margin-top: 50px;
      display: flex;
    }

    li {
      flex: 1;
      font-size: 22px;
      font-weight: 400;
      color: rgba(188, 188, 188, 1);
      position: relative;
      .line {
        position: absolute;
        right: 0;
        width: 2px;
        height: 16px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(188, 188, 188, 1);
      }
    }
    .bottom {
      li {
        color: rgba(142, 142, 142, 1);
      }
      .line {
        background: rgba(142, 142, 142, 1);
      }
    }
  }
}
</style>

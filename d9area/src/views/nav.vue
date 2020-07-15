<template>
  <div id="nav_home">
    <div class="nav_box" :class="activeIndex=='2'? 'widht100':''">
      <img class="logo"
      v-if="activeIndex !='2'"
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
          动画电影周
        </el-menu-item>
        <el-menu-item index="3">在线观影</el-menu-item>
        <el-menu-item index="4">D9制片厂</el-menu-item>
      </el-menu>
      <span class="nav_right">
        <span @click="change_language('cn')"
              :class="language=='cn'?'language_color':''">中文 </span>
        <span>/</span>
        <span @click="change_language('en')"
              :class="language=='en'?'language_color':''"> EN</span>
      </span>
      <span class="nav_right personl"
            v-if="personl_show">
        <span class="personl_name"
              @click="go_personl">永恒</span>
        <span>｜</span>
        <span @click="logout">退出</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      activeIndex: '',
      language: 'cn',
      personl_show: false
    };
  },
  props: ["mainnav"],
  mounted () {
    this.activeIndex = this.mainnav;
    // this.$i18n.locale = 'en'
    console.log(sessionStorage.getItem('personal'));
    if (sessionStorage.getItem('personal') == 'true') {
      this.personl_show = true
    }
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
          this.$router.push('/login')
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
    },
    logout () {
      this.personl_show = false
      sessionStorage.setItem('personal', 'false')
    },
    go_personl () {
      this.$router.push('/personal')
    }
  }
}
</script>


<style lang="less">
#nav_home {
  position: relative;
  width: 100%;
  height: 80px;
  // border: 1px solid red;
  background: #000000;
  font-size: 16px;
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
  .personl {
    font-size: 16px;
    margin-right: 37px;
    .personl_name {
      color: #c9a562;
    }
  }
  .el_menu,
  .el_menu li {
    font-size: 16px;
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
.widht100{
  width: 100%;
  padding-right: 30px;
}
</style>

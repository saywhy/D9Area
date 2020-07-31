<template>
  <div id="nav_home">
    <!-- :class="srcolltop?'showCont':'hiddenCont'"> -->
    <div class="nav_box"
         :class="activeIndex=='2'? 'widht100':''||activeIndex=='3'? 'widht100':''">
      <div class="logo_box">
        <img class="logo"
             v-if="activeIndex =='1'|| activeIndex =='4' ||activeIndex ==undefined "
             src="@/assets/images/home/D9-logo.png"
             alt="">
      </div>

      <el-menu :default-active="activeIndex"
               text-color='#F6F6F6'
               active-text-color='#c8a461'
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
      personl_show: false,
      srcolltop: true
    };
  },
  props: ["mainnav"],
  mounted () {
    this.activeIndex = this.mainnav;
    if (sessionStorage.getItem('personal') == 'true') {
      this.personl_show = true
    }
    //首先，在mounted钩子window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
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
          // this.$router.push('/online_login')
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
    },
    //然后在方法中，添加这个handleScroll方法来获取滚动的位置
    handleScroll () {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = document.querySelector("#nav_home").offsetTop;


      if (scrollTop < 5 && this.activeIndex == '2') {
        console.log("我到顶部里");
        this.srcolltop = true;
      } else if (scrollTop > 5 && this.activeIndex == '2') {
        console.log("我滚动里");
        this.srcolltop = false;
      }
    },
  }
}
</script>


<style lang="less" scoped>
#nav_home {
  position: relative;
  width: 100%;
  height: 80px;
  // border: 1px solid red;
  background: #080808;
  font-size: 16px;
  position: fixed;
  top: 0;
  z-index: 9999999;
}
.nav_box {
  text-align: left;
  width: 1200px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // border: 1px solid green;
  .logo_box {
    width: 44px;
    height: 80px;
    float: left;
    position: relative;
  }
  .logo {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .nav_right {
    float: right;
    cursor: pointer;
    line-height: 80px;
  }
  .personl {
    font-size: 16px;
    margin-right: 37px;
    .personl_name {
      color: #c8a461;
    }
  }
  .el_menu,
  .el_menu li {
    font-size: 16px;
    height: 80px;
    line-height: 80px;
    float: left;
    background: #080808 !important;
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
    color: #c8a461;
  }
}
.widht100 {
  width: 100%;
  padding-right: 30px;
}

/*定义打开弹窗动画*/
.showCont {
  animation: showPopUp 1s;
  animation-fill-mode: forwards; /*保持动画后的状态*/
}
/*定义关闭弹窗动画*/
.hiddenCont {
  animation: hiddenPopUp 1s;
  animation-fill-mode: forwards;
}

@keyframes showPopUp {
  0% {
    height: 80px;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
}
@keyframes hiddenPopUp {
  0% {
    height: 0;
  }
  100% {
    height: 80px;
  }
}
</style>

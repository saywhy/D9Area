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
            <div v-if="activeIndex=='1'" class="user_box">
            <p class="privacy_box_p1">更新日期:2019年4月24日</p>
              <p>生效日期:2019年5月1日</p>
              <p>欢迎您使用站酷（ZCOOL）服务（以下简称本服务），您在使用本服务前请认真阅读以下协议（以下简称本协议）。</p>
              <p class="privacy_box_p2">一、站酷用户协议的接受</p>
              <p>
                当您在注册程序过程中在“已阅读，同意本《用户协议》”处打勾“✓”并按照注册程序成功注册为站酷（ZCOOL）用户，或您以其他站酷（ZCOOL）允许的方式实际使用站酷（ZCOOL）服务时，即表示您已充分阅读、理解并接受本协议的全部内容，并与站酷（ZCOOL）达成协议。
                <span class="color">请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，请您重点阅读并理解加粗提示条款。</span>如您对本协议项下任何条款有异议，请停止使用站酷服务。
              </p>
              <p class="privacy_box_p2">二、本协议的变更和修改</p>
              <p  class="color">站酷（ZCOOL）有权随时对本协议进行修改，并且一旦发生协议条款的变动，站酷（ZCOOL）将在相关页面上提示修改的内容；用户如果不同意本协议的修改，可以放弃使用或访问本网站或取消已经获得的服务；如果用户选择在本协议变更后继续访问或使用本网站，则视为用户已经接受本协议的修改。</p>
            <p class="privacy_box_p2">三、服务说明</p>
            <p>1、站酷（ZCOOL）是一个向广大用户提供信息存储空间，供用户上传、分享原创设计的交流平台。</p>
            <p>2、站酷（ZCOOL）运用自己的系统通过互联网向用户提供服务，除非另有明确规定，增强或强化目前服务的任何新功能，包括新产品以及新增加的服务，均无条件地适用本协议。</p>
            </div>
            <!-- 隐私政策 -->
            <div v-if="activeIndex=='2'" class="privacy_box">
              <p class="privacy_box_p1">更新日期:2019年4月24日</p>
              <p>生效日期:2019年5月1日</p>
              <p>欢迎您使用站酷（ZCOOL）服务（以下简称本服务），您在使用本服务前请认真阅读以下协议（以下简称本协议）。</p>
              <p class="privacy_box_p2">一、站酷用户协议的接受</p>
              <p>
                当您在注册程序过程中在“已阅读，同意本《用户协议》”处打勾“✓”并按照注册程序成功注册为站酷（ZCOOL）用户，或您以其他站酷（ZCOOL）允许的方式实际使用站酷（ZCOOL）服务时，即表示您已充分阅读、理解并接受本协议的全部内容，并与站酷（ZCOOL）达成协议。
                <span class="color">请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，请您重点阅读并理解加粗提示条款。</span>如您对本协议项下任何条款有异议，请停止使用站酷服务。
              </p>
              <p class="privacy_box_p2">二、本协议的变更和修改</p>
              <p  class="color">站酷（ZCOOL）有权随时对本协议进行修改，并且一旦发生协议条款的变动，站酷（ZCOOL）将在相关页面上提示修改的内容；用户如果不同意本协议的修改，可以放弃使用或访问本网站或取消已经获得的服务；如果用户选择在本协议变更后继续访问或使用本网站，则视为用户已经接受本协议的修改。</p>
            <p class="privacy_box_p2">三、服务说明</p>
            <p>1、站酷（ZCOOL）是一个向广大用户提供信息存储空间，供用户上传、分享原创设计的交流平台。</p>
            <p>2、站酷（ZCOOL）运用自己的系统通过互联网向用户提供服务，除非另有明确规定，增强或强化目前服务的任何新功能，包括新产品以及新增加的服务，均无条件地适用本协议。</p>
            </div>
            <!-- 使用帮助 -->
            <div v-if="activeIndex=='3'" class="help_box">
              <p class="yelloe">一、关于账号、手机号、登录和用户名:</p>
              <p class>1. 我可以注销账号吗？</p>
              <div class="help_box_bg">
                <p>站酷暂不支持自行注销账号。若要注销账号，请使用账号绑定的邮箱联系 service@zcool.com.cn</p>
              </div>
              <p class="help_box_p1">2. 绑定手机号为什么显示手机号已注册？</p>
              <p>3. 为什么无法登录站酷？</p>
              <p>4. 如何修改用户名？</p>
              <p>5. 为什么我的个人主页显示“该用户待审核”？</p>
              <div class="help_box_hr"></div>
              <p class="yelloe">二、关于上传、审核、编辑和删除内容:</p>
              <p>1. 为什么我上传了作品后，在发现页找不到我的作品？</p>
              <p>2. 站酷的审核机制是什么？</p>
              <p>3. 审核需要多久？</p>
              <p>4. “审核”与“推荐”的区别是什么？</p>
              <p>5. 我可以编辑/删除我上传的内容吗？</p>
              <p>6. 删除自己上传的内容会扣除积分吗？</p>
            </div>
            <!-- 联系我们 -->
            <div v-if="activeIndex=='4'" class="us_box">
              <p>邮箱：cfada_1984@sina.com</p>
              <p>电话：13718491278</p>
              <div class="us_box_wx">
                <span>关注微信：</span>
                <img src="../assets/images/messages/wx.png" alt class="wx_img" />
              </div>
            </div>
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
      session: "",
      activeIndex: "1",
      nav_list: [
        { name: "用户协议" },
        { name: "隐私政策" },
        { name: "常见问题" },
        { name: "联系我们" }
      ]
    };
  },
  mounted() {
    switch (this.$route.query.name) {
      case "contact":
        this.activeIndex = "4";
        break;
      case "user":
        this.activeIndex = "1";
        break;
      case "help":
        this.activeIndex = "3";
        break;
      case "privacy":
        this.activeIndex = "2";
        break;

      default:
        break;
    }
  },
  // 监听器监听路由参数变化
  watch: {
    $route: "swtch_router"
  },
  methods: {
    handleSelect(index) {
      console.log(index);
      this.activeIndex = index;
    },
    swtch_router() {
      switch (this.$route.query.name) {
        case "contact":
          this.activeIndex = "4";
          break;
        case "user":
          this.activeIndex = "1";
          break;
        case "help":
          this.activeIndex = "3";
          break;
        case "privacy":
          this.activeIndex = "2";
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less">
.messages_box {
  margin-top: 80px;
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
    height: 1450px;
    background: #000;

    // border: 1px solid red;
    text-align: left;
    .nav_right_top {
      height: 114px;
      border-bottom: 2px solid #533a05;
      padding-left: 40px;
      font-size: 32px;
      line-height: 114px;
    }
    .user_box{
       margin-left: 42px;
      line-height: 2em;
      font-size: 26px;
      .privacy_box_p1 {
        padding-top: 20px;
      }
      .privacy_box_p2 {
        color: #c7a361;
        font-size: 28px;
        margin-top: 15px;
      }
      .color{
        color:#C7A361;
      }
    }
    .privacy_box {
      margin-left: 42px;
      line-height: 2em;
      font-size: 26px;
      .privacy_box_p1 {
        padding-top: 20px;
      }
      .privacy_box_p2 {
        color: #c7a361;
        font-size: 28px;
        margin-top: 15px;
      }
      .color{
        color:#C7A361;
      }
    }
    .help_box {
      margin-left: 42px;
      font-size: 26px;
      line-height: 2em;
      .yelloe {
        font-size: 28px;
        color: #c7a361;
        margin-top: 20px;
      }
      .help_box_bg {
        width: 760px;
        height: 110px;
        background-color: #151414;
        font-size: 20px;
        padding-left: 27px;
        margin-top: 7px;
      }
      .help_box_p1 {
        margin-top: 15px;
      }
      .help_box_hr {
        height: 2px;
        background-color: #533905;
        margin: 20px 28px 20px 0;
      }
    }
    .us_box {
      margin-left: 42px;
      font-size: 26px;
      line-height: 2em;
      p {
        margin-top: 20px;
      }
      .wx_img {
        vertical-align: middle;
      }
    }
  }
}
</style>
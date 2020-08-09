<template>
  <div class="body_box">
    <Nav></Nav>
    <div class="messages_box">
      <div class="msg_top"></div>
      <div class="message_container">
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
            <div class="hr2"></div>
            <!-- 下面具体内容 -->
            <!-- 用户协议 -->
            <div v-if="activeIndex=='1'" class="user_box">
              <p class="user_box_p1">更新日期:2019年4月24日</p>
              <p>生效日期:2019年5月1日</p>
              <p>欢迎您使用站酷（ZCOOL）服务（以下简称本服务），您在使用本服务前请认真阅读以下协议（以下简称本协议）。</p>
              <p class="user_box_p2">一、站酷用户协议的接受</p>
              <p>
                当您在注册程序过程中在“已阅读，同意本《用户协议》”处打勾“✓”并按照注册程序成功注册为站酷（ZCOOL）用户，或您以其他站酷（ZCOOL）允许的方式实际使用站酷（ZCOOL）服务时，即表示您已充分阅读、理解并接受本协议的全部内容，并与站酷（ZCOOL）达成协议。
                <span
                  class="color"
                >请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，请您重点阅读并理解加粗提示条款。</span>如您对本协议项下任何条款有异议，请停止使用站酷服务。
              </p>
              <div class="user_box_hr"></div>
              <p class="user_box_p2">二、本协议的变更和修改</p>
              <p
                class="color1"
              >站酷（ZCOOL）有权随时对本协议进行修改，并且一旦发生协议条款的变动，站酷（ZCOOL）将在相关页面上提示修改的内容；用户如果不同意本协议的修改，可以放弃使用或访问本网站或取消已经获得的服务；如果用户选择在本协议变更后继续访问或使用本网站，则视为用户已经接受本协议的修改。</p>
              <div class="user_box_hr"></div>
              <p class="user_box_p2">三、服务说明</p>
              <p>1、站酷（ZCOOL）是一个向广大用户提供信息存储空间，供用户上传、分享原创设计的交流平台。</p>
              <p>2、站酷（ZCOOL）运用自己的系统通过互联网向用户提供服务，除非另有明确规定，增强或强化目前服务的任何新功能，包括新产品以及新增加的服务，均无条件地适用本协议。</p>
            </div>
            <!-- 隐私政策 -->
            <div v-if="activeIndex=='2'" class="privacy_box">
              <p class="privacy_box_p1">更新日期:2019年4月24日</p>
              <p class="privacy_box_p1">生效日期:2019年5月1日</p>
              <p class="privacy_box_p1">欢迎您使用站酷（ZCOOL）服务（以下简称本服务），您在使用本服务前请认真阅读以下协议（以下简称本协议）。</p>
              <p class="privacy_box_p2">一、站酷用户协议的接受</p>

              <p>
                当您在注册程序过程中在“已阅读，同意本《用户协议》”处打勾“✓”并按照注册程序成功注册为站酷（ZCOOL）用户，或您以其他站酷（ZCOOL）允许的方式实际使用站酷（ZCOOL）服务时，即表示您已充分阅读、理解并接受本协议的全部内容，并与站酷（ZCOOL）达成协议。
                <span
                  class="color"
                >请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，请您重点阅读并理解加粗提示条款。</span>如您对本协议项下任何条款有异议，请停止使用站酷服务。
              </p>
              <div class="privac_box_hr"></div>
              <p class="privacy_box_p2">二、本协议的变更和修改</p>

              <p
                class="color1"
              >站酷（ZCOOL）有权随时对本协议进行修改，并且一旦发生协议条款的变动，站酷（ZCOOL）将在相关页面上提示修改的内容；用户如果不同意本协议的修改，可以放弃使用或访问本网站或取消已经获得的服务；如果用户选择在本协议变更后继续访问或使用本网站，则视为用户已经接受本协议的修改。</p>
              <div class="privac_box_hr"></div>
              <p class="privacy_box_p2">三、服务说明</p>
              <p>1、站酷（ZCOOL）是一个向广大用户提供信息存储空间，供用户上传、分享原创设计的交流平台。</p>
              <p>2、站酷（ZCOOL）运用自己的系统通过互联网向用户提供服务，除非另有明确规定，增强或强化目前服务的任何新功能，包括新产品以及新增加的服务，均无条件地适用本协议。</p>
            </div>
            <!-- 使用帮助 -->
            <div v-if="activeIndex=='3'" class="help_box">
              <p class="yelloe">一、关于账号、手机号、登录和用户名:</p>
              <p>1. 我可以注销账号吗？</p>
              <div class="help_box_bg">
                <p class="bg_word">站酷暂不支持自行注销账号。若要注销账号，若要注销账号，请使用账号绑定的邮箱联系 service@zcool.com.cn</p>
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
        { name: "使用帮助" },
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
  // margin-top: 80px;
  background: #0a0a0a;
  .msg_top {
    height: 220px;
    background-image: url("../assets/images/messages/user.jpg");
    background-size: 100% 100%;
  }
  .message_container {
    width: 1200px;
    margin: 0 auto;
  }
  .main_box {
    padding: 40px 0 70px 0;
    overflow: auto;
  }
  .nav_left {
    float: left;
    .el-menu-vertical-demo {
      width: 230px;
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
      font-size: 16px;
      height: 80px;
      line-height: 26px;
      span {
        line-height: 80px;
        height: 80px;
        display: block;
      }
    }
    .el-menu-item.is-active {
      color: #409eff;
      // border-left: 3px solid #c8a461;
      // border: 0;
      &::after {
        content: "";
        color: blue;
        background: #c8a461;
        position: absolute;
        left: -4px;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 38px;
      }
    }
    .el-menu.el-menu--horizontal {
      border: 0;
    }
  }
  .nav_right {
    float: right;
    border-radius: 8px;
    width: 940px;
    // height: 734px;
    padding-bottom: 74px;
    background: #000;

    // border: 1px solid red;
    text-align: left;
    .nav_right_top {
      height: 100px;

      margin-left: 30px;
      font-size: 20px;
      line-height: 100px;
    }
    .hr2 {
      border-bottom: 1px solid #292929;
    }
    .user_box {
      margin: 30px 34px 42px 30px;
      display: none;
      p {
        line-height: 34px;
      }
      .user_box_p1 {
        font-size: 16px;
        line-height: 34px;
      }
      .user_box_p2 {
        color: #c8a461;
        font-size: 20px;
        margin-top: 40px;
      }

      .color {
        color: #c8a461;
        font-size: 16px;
        line-height: 34px;
      }
      .color1 {
        color: #c8a461;
        font-size: 16px;
        line-height: 34px;
      }
      .user_box_hr {
        border: 1px solid #292929;
        margin: 40px 0 40px 0;
      }
    }
    .privacy_box {
      margin: 30px 34px 42px 30px;
      display: none;
      p {
        line-height: 34px;
      }
      .privacy_box_p1 {
        font-size: 16px;
        line-height: 34px;
      }
      .privacy_box_p2 {
        color: #c8a461;
        font-size: 20px;
        margin-top: 40px;
      }
      .color {
        color: #c8a461;
        font-size: 16px;
        line-height: 34px;
      }
      .color1 {
        color: #c8a461;
        font-size: 16px;
        line-height: 34px;
      }
      .privac_box_hr {
        border: 1px solid #292929;
        margin: 40px 0 40px 0;
      }
    }
    .help_box {
      margin: 30px 0 0 30px;
      display: none;
      .yelloe {
        font-size: 20px;
        color: #c8a461;
        line-height: 35px;
      }
      p {
        line-height: 35px;
        font-size: 16px;
      }
      .help_box_bg {
        width: 880px;
        background-color: #151515;
        margin: 4px 0 8px 0;
        .bg_word {
          font-size: 16px;
          padding: 22px 34px 22px 20px;
        }
      }

      .help_box_hr {
        border: 1px solid #292929;
        margin: 44px 30px 40px 0;
      }
    }
  }
  .us_box {
     display: none;
    font-size: 16px;
    height: 634px;
    margin: 40px 0 0px 30px;
   
    p {
      margin-bottom: 30px;
    }

    .us_box_wx {
      .wx_img {
        vertical-align: middle;
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
<template>
  <div class="body_box">
    <div class="container_box">
      <Nav :mainnav="mainnav"></Nav>
      <div class="login">
        <div class="login_box">
          <div class="login_top">
            <div class="top_left">
              <img src="@/assets/images/login/user.png"
                   alt />
              <p>我的账号</p>
            </div>
            <div class="top_right">
              <p>登录 / 创建账号</p>
            </div>
          </div>
          <div class="login_bom">
            <div class="bom_left">
              <p class="bom_title">我已有D9区账号了</p>
              <div class="bom_content">
                <p class="select_type">
                  <span class="type_account">账号登录</span>
                  <span>/</span>
                  <span class="type_mobile">手机号登录</span>
                </p>
                <p class="email_box">
                  <span class="email">邮箱</span>
                  <span>:</span>
                  <input type="email"
                         v-model="account.email" />
                </p>
                <p class="pswd_box">
                  <span class="pswd">密码</span>
                  <span>:</span>
                  <input type="password"
                         v-model="account.pswd" />
                </p>
                <p class="forget">
                  <span @click="find_pswd">忘记密码?</span>
                </p>

                <p class="remember">
                  <el-checkbox v-model="checked">记住密码</el-checkbox>
                </p>
                <p class="login_btn"
                   @click="login_go">登录</p>
              </div>
            </div>
            <div class="bom_right">
              <p class="bom_title">我没有D9区账号</p>
              <div class="bom_content">
                <p>欢迎</p>
                <p>请创建一个帐户：</p>
                <p>• D9区影视</p>
                <p>• D9区上传作品的正片在线下进行放映；</p>
                <p>• 请您遵循审核过程</p>
                <p class="creat_box"
                   @click="creat_account">创建</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 找回密码弹窗 -->
        <el-dialog title="找回密码"
                   :visible.sync="find_pswd_box">
          <div class="content">
            <span class="title1">邮箱：</span>
            <input class="email_input"
                   type="email" />
          </div>
          <div>
            <p class="sure_box"
               @click="ok_btn">确定</p>
          </div>
        </el-dialog>

        <!-- 创建账号 -->
        <el-dialog title="欢迎！请创建一个账号："
                   class="creat_account_box"
                   :visible.sync="creat_box">
          <div class="content">
            <div class="creat_item">
              <span class="title2">姓名：</span>
              <input class="email_input"
                     type="email" />
            </div>
            <div class="creat_item">
              <span class="title2">邮箱：</span>
              <input class="email_input"
                     type="email" />
            </div>
            <div class="creat_item">
              <span class="title2">密码：</span>
              <input class="email_input"
                     type="password" />
            </div>
            <div class="creat_item">
              <span class="title2">手机号：</span>
              <input class="email_input"
                     type="text" />
            </div>
            <div class="creat_item">
              <span class="title2">验证码：</span>
              <img src="../assets/images/login/picture.png"
                   class="code"
                   alt />
              <input class="email_input"
                     type="text" />
            </div>
          </div>
          <div>
            <p class="sure_box2"
               @click="creat_btn">创建</p>
          </div>
        </el-dialog>
      </div>

      <div id="player-con"></div>

      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "Login",
  components: { Nav, Footer },
  data () {
    return {
      mainnav: "4",
      checked: true,
      find_pswd_box: false,
      creat_box: false,
      account: {
        email: "",
        pswd: "",
      },
    };
  },
  mounted () {
    var player = new Aliplayer({
      id: "player-con",
      source: "//player.alicdn.com/video/editor.mp4",
      width: "100%",
      height: "500px",
      cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
      /* To set an album art, you must set 'autoplay' and 'preload' to 'false' */
      autoplay: false,
      preload: false,
      isLive: false
    }, function (player) {
      console.log("The player is created");
    });
  },
  methods: {
    find_pswd () {
      this.find_pswd_box = true;
    },
    ok_btn () {
      this.find_pswd_box = false;
    },
    creat_account () {
      this.creat_box = true;
    },
    creat_btn () {
      this.creat_box = false;
    },
    login_go () {
      this.axios.get('/user/userLogin', {
        params: {
          mobilephone: '',
          userpassword: ''
        }
      })
        .then(response => {
          console.log(response);
          console.log('ok')
        })
        .catch(function (error) {
          console.log(error)
        })

      if (this.account.email == "admin" || this.account.pswd == "12345") {
        // this.$router.push("/personal");
        this.$message({
          message: "登录成功",
          type: "success",
        });
        this.$router.push("/submit_type");
        sessionStorage.setItem("personal", "true");
      } else {
        // this.$router.push("/submit_type");
        this.$message.error("账号密码错误，请重新输入");
      }
    },
  },

  computed: {},
};
</script>
<style lang='less'>
.login {
  background-color: #0a0a0a;
  padding: 210px 0;
  color: #333;
  .login_box {
    height: 640px;
    width: 1000px;
    background: #fff;
    margin: 0 auto;
    .login_top {
      height: 118px;
      border-bottom: 2px solid #c8a461;
      .top_left {
        float: left;
        width: 100px;
        background: #c8a461;
        height: 118px;
        padding-top: 30px;
        img {
          width: 36px;
          height: 34px;
        }
        p {
          font-size: 14px;
          color: #fff;
        }
      }
      .top_right {
        float: left;
        padding-left: 30px;
        p {
          font-size: 28px;
          color: #c8a461;
          line-height: 118px;
        }
      }
    }
    .login_bom {
      padding: 38px 60px 40px 60px;
      .bom_title {
        text-align: left;
        padding-left: 18px;
        height: 44px;
        line-height: 44px;
        background: #000;
        font-size: 12px;
        color: #fff;
      }

      .bom_left {
        width: 414px;
        float: left;
        border: 1px solid rgba(0, 0, 0, 1);
        .bom_content {
          position: relative;
          height: 400px;
          padding-top: 48px;
          text-align: center;
          .select_type {
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 40px;
            .type_account {
              color: #c8a461;
            }
          }

          input {
            width: 170px;
            outline: none;
            border: none;
            border-bottom: 1px solid #000;
            margin-left: 5px;
            padding-left: 5px;
            font-size: 14px;
            background-color: #fff;
            &:focus {
              outline: none;
              border: none;
              border-bottom: 1px solid #000;
              background-color: #fff;
            }
          }
          .email_box {
            .email {
              font-size: 16px;
              font-weight: 400;
            }
          }
          .pswd_box {
            margin: 30px 0;
            .pswd {
              font-size: 16px;
              font-weight: 400;
            }
          }
          .forget {
            cursor: pointer;
            font-size: 12px;
            text-align: right;
            padding-right: 95px;
            color: rgba(200, 164, 97, 1);
            margin-bottom: 34px;
          }
          .remember {
            .el-checkbox__input.is-checked + .el-checkbox__label {
              color: rgba(200, 164, 97, 1);
            }
            .el-checkbox__input.is-checked .el-checkbox__inner,
            .el-checkbox__input.is-indeterminate .el-checkbox__inner {
              background-color: rgba(200, 164, 97, 1);
              border-color: rgba(200, 164, 97, 1);
            }
            .el-checkbox__inner:hover {
              border-color: rgba(200, 164, 97, 1);
            }
          }
          .login_btn {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 50px;
            cursor: pointer;
            width: 166px;
            height: 38px;
            line-height: 38px;
            background: #c8a461;
            border-radius: 8px;
            color: #fff;
            font-size: 16px;
          }
        }
      }
      .bom_right {
        width: 414px;
        float: right;
        border: 1px solid rgba(0, 0, 0, 1);
        .bom_content {
          height: 400px;
          padding: 58px 52px;
          text-align: left;
          position: relative;
          p {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 10px;
          }
          .creat_box {
            margin: 0;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 50px;
            cursor: pointer;
            width: 166px;
            height: 38px;
            line-height: 38px;
            background: #c8a461;
            border-radius: 8px;
            color: #fff;
            font-size: 16px;
            text-align: center;
          }
        }
      }
    }
  }

  // 弹出密码框
  .el-dialog__wrapper {
    top: 0;
    .el-dialog {
      position: absolute;
      width: 700px;
      // height: 512px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0 !important;
      // margin-top:200px;
    }
    .el-icon-close:before {
      font-size: 24px;
      font-weight: 400;
    }
    .find_pswd_box {
      width: 24px;
      height: 24px;
    }
    .el-dialog__header {
      padding: 54px 0 0px 54px;
    }
    .el-dialog__title {
      font-size: 20px;
      font-weight: 400;
      word-spacing: 80px;
    }
    .el-dialog__headerbtn .el-dialog__close {
      width: 24px;
      height: 24px;
      color: #000;
      margin: 36px 24px 0 0;
      font-weight: bold;
    }
    .content {
      // height:40px;
      text-align: center;
      margin: 100px 0;

      .title1 {
        font-size: 18px;
        color: #000;
        font-weight: 400;
        margin-left: 6px;
        word-spacing: 80px;
      }
    }
    .email_input {
      width: 340px;
      height: 40px;
      outline: none;
      border: none;
      border-bottom: 1px dashed #000;
      padding-left: 10px;
      font-size: 16px;
      &:focus {
        outline: none;
        border: none;
        border-bottom: 1px dashed #000;
      }
    }
    .sure_box {
      text-align: center;
      margin: 0 auto;
      margin-bottom: 54px;
      cursor: pointer;
      width: 214px;
      height: 46px;
      line-height: 46px;
      background: #c8a461;
      border-radius: 8px;
      color: #fff;
      font-size: 18px;
    }
  }
  // 创建账号
  .creat_account_box {
    .el-dialog__body {
      padding: 0;
    }
    .creat_item {
      margin-bottom: 40px;
      height: 60px;
      position: relative;
      input {
        height: 40px;
      }
    }
    .title2 {
      font-size: 18px;
      color: #000;
      height: 60px;
      line-height: 60px;
    }
    .code {
      width: 122px;
      height: 50px;
      position: absolute;
      right: 145px;
      // transform: translateY(-50%);
    }
    .sure_box2 {
      text-align: center;
      margin: 0 auto;
      margin-top: 102px;
      margin-bottom: 54px;
      cursor: pointer;
      width: 214px;
      height: 46px;
      line-height: 46px;
      background: #c8a461;
      border-radius: 8px;
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>
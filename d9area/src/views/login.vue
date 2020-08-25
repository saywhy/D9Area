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
                  <span class="type_account"
                        @click="change_login('e-mail')"
                        :class="login_type?'login_color':''">邮箱登录</span>
                  <span>/</span>
                  <span class="type_mobile"
                        @click="change_login('mobile')"
                        :class="login_type?'':'login_color'">手机号登录</span>
                </p>
                <!-- 邮箱登录 -->
                <div v-if="login_type">
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
                           v-model="account.email_pswd" />
                  </p>
                </div>
                <!-- 手机号登录 -->
                <div v-if="!login_type">
                  <p class="email_box">
                    <span class="email">手机</span>
                    <span>:</span>
                    <input type="email"
                           v-model="account.mobilephone" />
                  </p>
                  <p class="pswd_box">
                    <span class="pswd">密码</span>
                    <span>:</span>
                    <input type="password"
                           v-model="account.mobilephone_pswd" />
                  </p>
                  <p @click="get_code">获取验证码</p>
                </div>
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
                   :close-on-click-modal="false"
                   :visible.sync="creat_box">
          <div class="content">
            <div class="content_title">
              <span @click="change_ebh('email')"
                    :class="ebh_type?'ebh_color':''">邮箱创建</span>
              <span>/</span>
              <span @click="change_ebh('mobile')"
                    :class="ebh_type?'':'ebh_color'">手机号创建</span>
            </div>

            <!-- 邮箱创建 -->
            <div v-if="ebh_type">
              <div class="creat_item">
                <span class="title2">姓名：</span>
                <input class="email_input"
                       placeholder="请输入姓名"
                       v-model="creat.email.name"
                       type="text" />
              </div>
              <div class="creat_item">
                <span class="title2">邮箱：</span>
                <input class="email_input"
                       placeholder="请输入邮箱"
                       v-model="creat.email.email"
                       type="email" />
              </div>
              <div class="creat_item">
                <span class="title2">密码：</span>
                <input class="email_input"
                       placeholder="请输入密码"
                       v-model="creat.email.pswd"
                       type="password" />
              </div>
              <!-- <div class="creat_item">
              <span class="title2">手机号：</span>
              <input class="email_input" type="text" />
              </div>-->
              <!-- <div class="creat_item">
                <span class="title2">验证码：</span>
                <img src="../assets/images/login/picture.png" class="code" alt />
                <input class="email_input" type="text" />
              </div>-->
            </div>

            <!-- 手机号创建 -->
            <div v-if="!ebh_type">
              <div class="creat_item">
                <span class="title2">姓名：</span>
                <input class="email_input"
                       placeholder="请输入姓名"
                       v-model="creat.mobile.name"
                       type="email" />
              </div>
              <div class="creat_item">
                <span class="title2">手机：</span>
                <input class="email_input"
                       placeholder="请输入手机号"
                       v-model="creat.mobile.mobilephone"
                       type="text" />
              </div>
              <div class="creat_item">
                <span class="title2">密码：</span>
                <input class="email_input"
                       placeholder="请输入密码"
                       v-model="creat.mobile.pswd"
                       type="password" />
              </div>

              <!-- <div class="creat_item">
                <span class="title2">验证码：</span>
                <img src="../assets/images/login/picture.png" class="code" alt />
                <input class="email_input" type="text" />
              </div>-->
            </div>
            <div></div>

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

import { LOGINM } from "@/apis/login.js";
export default {
  name: "Login",
  components: { Nav, Footer },
  data () {
    return {
      mainnav: "4",
      checked: true,
      find_pswd_box: false,
      creat_box: false,
      // 登录
      account: {
        email: "",
        email_pswd: "",
        mobilephone: "",
        mobilephone_pswd: "",
      },

      login_type: true,

      // 创建
      creat: {
        email: {
          name: "",
          email: "",
          pswd: "",
        },
        mobile: {
          name: "",
          mobilephone: "",
          pswd: "",
        },
      },

      ebh_type: true,
    };
  },
  mounted () { },
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


    // 获取手机验证码
    get_code () {
      // http://47.94.20.54:8080/d9time/user/sms?phoneNumber=15237304009
      this.axios
        // .post("/d9time/user/sms?phoneNumber=15237304009")
        // .post("http://33310y89m5.wicp.vip/user/sms?phoneNumber=15237304009")
        // .post("/d9time/user/sms?",{})
        .get("/d9time/user/sms?phoneNumber=15237304009")
        .then((response) => {
          console.log(response);
          console.log("ok");
        })
        .catch(function (error) {
          console.log(error);
        });


    },
    // 创建账号
    creat_btn () {
      // this.creat_box = false;
      if (this.ebh_type) {
        //  邮箱创建
        let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        if (!reg.test(this.creat.email.email)) {
          console.log("走到这里说明手机号不合格");
          this.$message({
            message: "邮箱格式不正确",
            type: "warning",
          });
          // 走到这里说明手机号不符合
          return false;
        }
        if (this.creat.email.pswd.length < 6) {
          this.$message({
            message: "密码最小为6位",
            type: "warning",
          });
          return false;
        }

        // 所有的验证全部通过之后，请求接口注册
        this.axios
          .get("/user/emailRegister", {
            params: {
              email: this.creat.email.email,
              userpassword: this.creat.email.pswd,
            },
          })
          .then((response) => {
            console.log(response);
            console.log("ok");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        //  手机号创建
        // console.log(this.user_mobile);
        let telRegex = /^1[3456789]\d{9}$/;
        if (!telRegex.test(this.creat.mobile.mobilephone)) {
          console.log("走到这里说明手机号不合格");
          this.$message({
            message: "手机号码格式不正确",
            type: "warning",
          });
          // 走到这里说明手机号不符合
          return false;
        }
        if (this.creat.mobile.pswd.length < 6) {
          this.$message({
            message: "密码最小为6位",
            type: "warning",
          });
          return false;
        }

        // 所有的验证全部通过之后，请求接口注册
        //http://33310y89m5.wicp.vip/user/userRegister?mobilephone=15237304009&userpassword=w123456
        this.axios
          .post("/d9time/user/userRegister", {
            data: {
              mobilephone: this.creat.mobile.mobilephone,
              userpassword: this.creat.mobile.pswd,
            },
          })
          .then((response) => {
            console.log(response);
            console.log("ok");
            if (response.data.code == 200) {
              this.$message({
                message: response.data.message,
                type: "success",
              });
              // 注册成功后提示 并关闭弹窗
              this.creat_box = false;
            }
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(123213);
      }
    },
    // 登录
    login_go () {
      // this.$router.push("/submit_type");
      // sessionStorage.setItem("personal", "true");

      if (this.login_type) {
        //  邮箱登录
        let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;

        if (!reg.test(this.account.email)) {
          console.log("走到这里说明手机号不合格");
          this.$message({
            message: "邮箱码格式不正确",
            type: "warning",
          });
          // 走到这里说明手机号不符合
          return false;
        }

        this.axios
          .get("/user/emailLogin", {
            params: {
              email: this.account.email,
              userpassword: this.account.email_pswd,
            },
          })
          .then((response) => {
            console.log(response);
            console.log("ok");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        // 手机号登录
        let telRegex = /^1[3456789]\d{9}$/;
        if (!telRegex.test(this.account.mobilephone)) {
          console.log("走到这里说明手机号不合格");
          this.$message({
            message: "手机号码格式不正确",
            type: "warning",
          });
          // 走到这里说明手机号不符合
          return false;
        }

        //  =======/user/userLogin?mobilephone=15237304009&userpassword=w123456

        // let user_login = await LOGINM({
        //    mobilephone: this.account.mobilephone,
        //   userpassword: this.account.mobilephone_pswd,
        // })

        console.log(user_login);
        this.axios
          .get("/user/userLogin", {
            params: {
              mobilephone: this.account.mobilephone,
              userpassword: this.account.mobilephone_pswd,
            },
          })
          .then((response) => {
            console.log(response);
            if (response.data.code == 400) {
              this.$message({
                message: response.data.message,
                type: "warning",
              });
            }
            console.log("ok");
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      // if (this.account.email == "admin" || this.account.pswd == "12345") {
      //   // this.$router.push("/personal");
      //   this.$message({
      //     message: "登录成功",
      //     type: "success",
      //   });
      //   this.$router.push("/submit_type");
      //   sessionStorage.setItem("personal", "true");
      // } else {
      //   // this.$router.push("/submit_type");
      //   this.$message.error("账号密码错误，请重新输入");
      // }
    },
    change_login (name) {
      switch (name) {
        case "e-mail":
          this.login_type = true;
          break;
        case "mobile":
          this.login_type = false;
          break;

        default:
          break;
      }
    },

    change_ebh (name) {
      switch (name) {
        case "email":
          this.ebh_type = true;
          break;
        case "mobile":
          this.ebh_type = false;
          break;
        default:
          break;
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
              // color: #c8a461;
              cursor: pointer;
            }
            .type_mobile {
              cursor: pointer;
            }
          }
          .login_color {
            color: #c8a461;
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
          padding: 0px 52px;
          text-align: left;
          position: relative;
          padding-top: 46px;
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
      margin: 30px 0 100px 0;

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

    .content_title {
      font-size: 18px;
      font-weight: 400;
      color: #000;
      margin: 50px 0 30px 0;
      cursor: pointer;
    }
    .ebh_color {
      color: #c8a461;
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
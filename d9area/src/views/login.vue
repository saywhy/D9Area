<template>
  <div class="body_box">
    <Nav :mainnav='mainnav'></Nav>
    <div class='login'>
      <div class="main_container">
        <div class="login_box">
          <div class="login_top">
            <div class="top_left">
              <img src="@/assets/images/login/user.png"
                   width="64"
                   height="64"
                   alt="">
              <p>我的账号</p>
            </div>
            <div class="top_right">
              <p>登录 / 创建账号</p>
            </div>
          </div>
          <div class="login_bom">
            <div class="bom_left">
              <p class="bom_title">
                我已有D9区账号了
              </p>
              <div class="bom_content">
                <p class="select_type">
                  <span class="type_account">账号登录</span>
                  <span> / </span>
                  <span class="type_mobile">手机号登录</span>
                </p>
                <p class="email_box">
                  <span class="email">邮箱</span>
                  <span>:</span>
                  <input type="email">
                </p>
                <p class="pswd_box">
                  <span class="pswd">密码</span>
                  <span>:</span>
                  <input type="password">
                </p>
                <p class="forget">
                  <span @click="find_pswd">忘记密码</span>
                </p>

                <p class="remember">
                  <el-checkbox v-model="checked">记住密码</el-checkbox>
                </p>
                <p class="login_btn"
                   @click="login_go">登录</p>
              </div>
            </div>
            <div class="bom_right">
              <p class="bom_title">
                我没有D9区账号
              </p>
              <div class="bom_content">
                <p>欢迎</p>
                <p> 请创建一个帐户： </p>
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
            <span class="title">邮箱：</span>
            <input class="email_input"
                   type="email">
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
              <span class="title">姓名：</span>
              <input class="email_input"
                     type="email">
            </div>
            <div class="creat_item">
              <span class="title">邮箱：</span>
              <input class="email_input"
                     type="email">
            </div>
            <div class="creat_item">
              <span class="title">密码：</span>
              <input class="email_input"
                     type="password">
            </div>
            <div class="creat_item">
              <span class="title">手机号：</span>
              <input class="email_input"
                     type="text">
            </div>
            <div class="creat_item">
              <span class="title">验证码：</span>
              <input class="email_input"
                     type="text">
            </div>

          </div>
          <div>
            <p class="sure_box"
               @click="creat_btn">创建</p>
          </div>
        </el-dialog>
      </div>
      <!-- 登录页面 -->

    </div>
    <Footer></Footer>
  </div>

</template>
<script>
import Nav from '@/views/nav.vue'
import Footer from '@/views/footer.vue'
export default {
  name: 'Login',
  components: { Nav, Footer },
  data () {
    return {
      mainnav: '4',
      checked: true,
      find_pswd_box: false,
      creat_box: false,
    }
  },
  methods: {
    find_pswd () {
      this.find_pswd_box = true
    },
    ok_btn () {
      this.find_pswd_box = false
    },
    creat_account () {
      this.creat_box = true
    },
    creat_btn () {
      this.creat_box = false
    },
    login_go () {
      this.$router.push('/submit_type')
    }

  },

  computed: {}
}
</script>
<style lang='less'>
.login {
  margin-top: 200px;
  height: 1000px;
  color: #333;
  .login_box {
    height: 893px;
    background: #fff;
    .login_top {
      height: 172px;
      border-bottom: 2px solid #c8a461;
      .top_left {
        float: left;
        width: 147px;
        background: #c8a461;
        height: 100%;
        line-height: 100%;
        padding: 32px 10px;
        p {
          margin-top: 15px;
          font-size: 22px;
          color: #fff;
        }
      }
      .top_right {
        float: left;
        padding-left: 50px;
        p {
          font-size: 48px;
          color: rgba(200, 164, 97, 1);
          line-height: 172px;
        }
      }
    }
    .login_bom {
      padding: 86px 70px 0 70px;
      .bom_title {
        text-align: left;
        padding-left: 20px;
        height: 52px;
        line-height: 52px;
        background: #000;
        font-size: 14px;
        color: #fff;
      }

      .bom_left {
        width: 496px;
        float: left;
        border: 1px solid rgba(0, 0, 0, 1);
        .bom_content {
          height: 439px;
          padding: 58px 120px;
          text-align: center;
          .select_type {
            text-align: center;
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 47px;
            .type_account {
              color: #c8a461;
            }
          }
          input {
            width: 200px;
            outline: none;
            border: none;
            border-bottom: 1px dashed #000;
            margin-left: 10px;
            padding-left: 10px;
            font-size: 18px;
            &:focus {
              outline: none;
              border: none;
              border-bottom: 1px dashed #000;
            }
          }
          .email_box {
            .email {
              font-size: 18px;
              font-weight: 400;
            }
          }
          .pswd_box {
            margin: 30px 0;
            .pswd {
              font-size: 18px;
              font-weight: 400;
            }
          }
          .forget {
            cursor: pointer;
            font-size: 14px;
            text-align: right;
            color: rgba(200, 164, 97, 1);
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
            margin: 0 auto;
            margin-top: 50px;
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
      .bom_right {
        width: 496px;
        float: right;
        border: 1px solid rgba(0, 0, 0, 1);
        .bom_content {
          height: 439px;
          padding: 58px 52px;
          text-align: left;
          p {
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 10px;
          }
          .creat_box {
            margin: 0 auto;
            margin-top: 112px;
            cursor: pointer;
            width: 214px;
            height: 46px;
            line-height: 46px;
            background: #c8a461;
            border-radius: 8px;
            color: #fff;
            font-size: 18px;
            text-align: center;
          }
        }
      }
    }
  }
  .el-dialog__wrapper {
    top: 0;
    .el-dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0 !important;
    }
    .content {
      text-align: center;
      margin: 100px 0;
      .title {
        font-size: 18px;
        font-weight: 400;
      }
    }
    .email_input {
      width: 340px;
      outline: none;
      border: none;
      border-bottom: 1px dashed #000;
      margin-left: 10px;
      padding-left: 10px;
      font-size: 18px;
      &:focus {
        outline: none;
        border: none;
        border-bottom: 1px dashed #000;
      }
    }
    .sure_box {
      text-align: center;
      margin: 0 auto;
      margin-top: 50px;
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
  .creat_account_box {
    .creat_item {
      margin-bottom: 50px;
    }
  }
}
</style>
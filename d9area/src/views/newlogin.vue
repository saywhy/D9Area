<template>
  <div class="newlogin">
    <Nav></Nav>
    <div class="newlogin_min">
      <div class="min_card">
        <!-- 顶部 -->
        <div class="min_card_top">
          <div class="card_top_left">
            <img src="../assets/images/login/user.png" alt />
            <span>我的账号</span>
          </div>
          <div class="card_top_r">
            <span>登录 / 创建账号</span>
          </div>
        </div>
        <!-- 登录框 -->
        <div class="min_card_foot">
          <div class="card_foot_l">
            <div class="foot_l_nav">我已有D9区账号了</div>
            <p class="title">
              <span>账号登录</span>
              <span>/</span>
              <span>手机号登录</span>
            </p>
            <p class="Em">
              <span>邮箱：</span>
              <el-input v-model="input"></el-input>
            </p>
            <p class="password">
              <span>密码：</span>
              <el-input v-model="input"></el-input>
            </p>
            <p class="no_password">忘记密码？</p>
            <p class="remember">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </p>
            <p class="login_but">登录</p>
          </div>
          <div class="card_foot_r">
            <div class="foot_r_nav">我没有D9区账号</div>
            <div class="tips">
              <p>欢迎！</p>
              <p>请创建一个帐户：</p>
              <p>• D9区影视；</p>
              <p>• D9区上传作品的正片在线下进行放映；</p>
              <p>• 请您遵循审核过程；</p>
              <p class="login_but_r" @click="establish">创建</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 弹出层——————登录 -->
      <el-dialog title="提示" :visible.sync="show" width="30%" >
        <span>欢迎！请创建一个账号：</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "Newlogin",
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      input: "",
      show:false
    };
  },
  methods: {
    establish() {
      this.establish = false;
    },
    dialogVisible(){

    },
    
  }
};
</script>

<style lang="less">
.newlogin_min {
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;
  padding: 205px 0 125px 0;

  .min_card {
    width: 1000px;
    height: 640px;
    background-color: #ffffff;
    margin: 0 auto;
    .min_card_top {
      height: 118px;
      .card_top_left {
        float: left;
        width: 100px;
        height: 118px;
        background-color: #c8a461;
        img {
          width: 36px;
          height: 34px;
          margin: 31px 32px 5px 32px;
        }
      }
    }
    .card_top_r {
      width: 900px;
      height: 118px;
      font-size: 28px;
      color: #c8a461;
      float: right;
      line-height: 118px;
      padding-left: 30px;
      text-align: left;
      border-bottom: 2px solid #c8a461;
    }
    .min_card_foot {
      width: 1000px;
      .card_foot_l {
        width: 412px;
        height: 440px;
        float: left;
        border: 1px solid #000;
        margin: 38px 58px 0px 58px;
      }
      .card_foot_r {
        width: 412px;
        height: 440px;
        float: left;
        border: 1px solid #000;
        margin-top: 38px;
      }
      .foot_l_nav {
        height: 44px;
        background-color: #000;
        font-size: 12px;
        font-weight: 400px;
        color: rgba(255, 255, 255, 1);
        line-height: 44px;
        text-align: left;
        padding-left: 18px;
        letter-spacing: 2px;
      }
      .title {
        font-size: 16px;
        color: #c8a461;
        margin-top: 48px;
      }
      .Em {
        font-size: 16px;
        color: #000;
        margin-top: 40px;
      }
      .el-input {
        width: 170px;
      }
      .password {
        font-size: 16px;
        color: #000;
        margin-top: 4px;
      }
      .el-input {
        width: 170px;
      }
      //  .el-input__inner{
      //    border-bottom: 1px solid #000;
      //  }
      .no_password {
        font-size: 12px;
        color: #c8a461;
        margin: 20px 98px 0 0;
        text-align: right;
      }
      .remember {
        margin-top: 34px;
      }
      .login_but {
        width: 166px;
        height: 38px;
        background-color: #c8a461;
        font-size: 16px;
        line-height: 38px;
        margin: 40px 124px 50px 124px;
      }
      .card_foot_r {
        .foot_r_nav {
          height: 44px;
          background-color: #000;
          font-size: 12px;
          font-weight: 400px;
          color: rgba(255, 255, 255, 1);
          line-height: 44px;
          text-align: left;
          padding-left: 18px;
          letter-spacing: 2px;
        }
        .tips {
          width: 276px;
          height: 144px;
          // border:1px solid red;
          margin: 50px 96px 0px 44px;
        }
        p {
          font-size: 14px;
          color: #000;
          font-weight: 2px;
          text-align: left;
          line-height: 30px;
        }
        .login_but_r {
          width: 166px;
          height: 38px;
          background-color: #c8a461;
          font-size: 16px;
          color: #fff;
          text-align: center;
          margin: 120px 48px auto;
          line-height: 38px;
        }
      }
    }
  }
}
</style>
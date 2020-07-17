<template>
  <div class="body_box">
    <Nav :mainnav='mainnav'></Nav>
    <div class='submit'>
        <div class="submit_box">
          <div class="submit_top">
            <div class="top_left">
              <img src="@/assets/images/login/user.png"
                   width="34"
                   height="32"
                   alt="">
              <p>我的账号</p>
            </div>
            <div class="top_right">
              <p>作品提交方式</p>
            </div>
          </div>
          <div class="submit_bom">
            <div class="bom_left">
              <p class="bom_title">
                提交ICF电影节作品
              </p>
              <div class="bom_content">
                <p>ICF电影节：</p>
                <p>• D9区影视；</p>
                <p>• D9区上传作品的正片在线下进行放映；</p>
                <p>• 请您遵循审核过程</p>
                <p class="remember">
                  <el-checkbox v-model="checked">我已阅读并同意遵守条例</el-checkbox>
                </p>
                <p class="submit_btn"
                   @click="declare">开始申报</p>
              </div>
            </div>
            <div class="bom_right">
              <p class="bom_title">
                提交在线观影作品
              </p>
              <div class="bom_content">
                <p> 在线观影：</p>
                <p>• D9区影视；</p>
                <p>• D9区上传作品的正片在线下进行放映；</p>
                <p>• 请您遵循审核过程</p>
                <p class="remember">
                  <el-checkbox v-model="checked2">我已阅读并同意遵守条例</el-checkbox>
                </p>
                <p class="submit_btn"
                   @click="declare">开始申报</p>
              </div>
            </div>
          </div>
        </div>
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
      checked2: true,
    }
  },
  methods: {
    declare () {
      this.$router.push('/submit_agree')
    }
  },

  computed: {}
}
</script>
<style lang='less'>
.submit {
  margin-top: 100px;
  background: #0a0a0a;
  padding: 120px 0 126px 0;
  color: #333;
  .submit_box {
    width:1000px;
    height: 640px;
    margin:0 auto;
   
    background: #fff;
    .submit_top {
      height: 116px;
      border-bottom: 1px solid #c8a461;
      .top_left {
        float: left;
        width: 110px;
        background: #c8a461;
        height: 100%;
        line-height: 100%;
        padding: 32px 10px;
        p {
          margin-top: 6px;
          font-size: 14px;
          color: #fff;
        }
      }
      .top_right {
        float: left;
        padding-left: 40px;
        p {
          font-size: 28px;
          color: rgba(200, 164, 97, 1);
          line-height: 116px;
        }
      }
    }
    .submit_bom {
      padding: 45px  58px 0 58px;
      .bom_title {
        text-align: left;
        padding-left: 20px;
        height: 43px;
        line-height: 43px;
        background: #000;
        font-size: 12px;
        color: #fff;
      }
      .bom_left {
        width: 412px;
        float: left;
        border: 1px solid rgba(0, 0, 0, 1);
      }
      .bom_right {
        width: 412px;
        float: right;
        border: 1px solid rgba(0, 0, 0, 1);
      }
      .bom_content {
        // height: 256px;
        padding: 38px 44px 40px 60px;
        text-align: left;
        p {
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 10px;
          text-align: left;
        }
        .remember {
          margin-top: 90px;
          text-align: center;
        }
        .submit_btn {
          text-align: center;
          margin: 0 auto;
          margin-top: 30px;
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
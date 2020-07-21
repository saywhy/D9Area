<template>
  <div class="online_login">
    <div class="online_btn_box">
      <el-button type="primary"
                 class="vip_btn">会员登录</el-button>
      <el-button type="primary"
                 @click="go_online"
                 class="free_btn">免费试用</el-button>

    </div>
  </div>
</template>
<script>

export default {
  name: 'Online_login',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    go_online () {
      this.$router.push('/online')
    }

  },

}
</script>
<style lang="less">
.online_login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('../assets/images/online/bg1.png');
  background-size: 100% 100%;
  .online_btn_box {
    width: 590px;
    height: 66px;
    position: absolute;
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);
    .vip_btn {
      width: 230px;
      height: 66px;
      float: left;
      font-size: 24px;
      font-family:SimHei;
      font-weight: normal;
      // color: rgba(200, 164, 97, 1);
       background: rgba(215, 159, 86, 1);
      background-image: url('../assets/images/online/vip_btn.png');
      background-size: 100% 100%;
      background-color: transparent;
    }
    .free_btn {
      width: 230px;
      height: 66px;
      float: right;
      background: rgba(215, 159, 86, 1);
      border-radius: 8px;
      font-size: 24px;
      font-family: SimHei;
      font-weight: normal;
     background-image: url('../assets/images/online/vip_btn.png');
      background-size: 100% 100%;
      background-color: transparent;
    }
    .el-button--primary {
      border: 0;
    }
  }
}
</style>

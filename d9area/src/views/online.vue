<template>
  <div class="online">
      <div class="online_btn_box">
        <el-button type="primary" class="vip_btn">会员登录</el-button>
        <el-button type="primary" class="free_btn">免费试用</el-button>

      </div>
  </div>
</template>
<script>

export default {
  name: 'Online',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
   
  },

}
</script>
<style lang="less">
.online{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url('../assets/images/online/bg.png');
        background-size: 100% 100%;
    .online_btn_box{
        width: 860px;
        height: 115px;
        position: absolute;
        left: 50%;
        bottom: 120px;
        transform: translateX(-50%);
        .vip_btn{
            width: 330px;
            height: 115px;
            float: left;
            font-size:39px;
            font-family:Adobe Heiti Std;
            font-weight:normal;
            color:rgba(200,164,97,1);
              background-image: url('../assets/images/online/vip_btn.png');
            background-size: 100% 100%;
           background-color:transparent;  
        }
        .free_btn{
            width: 330px;
            height: 115px;
            float: right;
            background:rgba(215,159,86,1);
            border-radius:8px;
            font-size:39px;
            font-family:Adobe Heiti Std;
            font-weight:normal;
            color:rgba(255,255,255,1);
        }
        .el-button--primary{
            border:0;
        }

    }
}
</style>

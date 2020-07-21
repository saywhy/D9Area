<template>
  <div class="body_box">
    <Nav :mainnav='mainnav'></Nav>
    <div class="upload">
      <div class="upload_banner">
        <img src="@/assets/images/submit/upload_bg.jpg"
             alt="">
      </div>
      <!-- 上传 -->
      <div class="main_container">
        <div class="upload_nav">
          <el-menu :default-active="active_type"
                   text-color="#F6F6F6"
                   active-text-color="#c8a461"
                   background-color="#0a0a0a"
                   class="el_menu"
                   mode="horizontal"
                   @select="handleSelect">
            <el-menu-item index="1">上传预告片</el-menu-item>
            <el-menu-item index="2">上传正片</el-menu-item>
          </el-menu>
        </div>
        <div class="upload_item">
          <span class="upload_title">上传作品：</span>
        </div>
        <div class="upload_item">
          <span class="upload_title">作品名称：</span>
          <input class="upload_input"
                 placeholder="请填写作品名称"
                 type="text">
        </div>
        <div class="upload_item">
          <span class="upload_title">影片类目：</span>
          <div class="upload_radio">
            <el-radio v-model="radio"
                      label="1">VFX电影短片</el-radio>
            <el-radio v-model="radio"
                      label="2">CG动画短片</el-radio>
            <el-radio v-model="radio"
                      label="3">VR短片</el-radio>
          </div>
        </div>
        <div class="upload_item">
          <span class="upload_title">作品简介：</span>
          <input class="upload_input"
                 placeholder="请填写作品简介"
                 type="text">
        </div>
        <div class="upload_item">
          <span class="upload_title">出品方：</span>
          <input class="upload_input"
                 placeholder="请填写出品方"
                 type="text">
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
  name: 'Upload',
  components: { Nav, Footer },
  data () {
    return {
      mainnav: '4',
      active_type: '1',
      radio: '1'

    }
  },
  methods: {
    handleSelect () {

    },
    changeTheme () {

    }
  },
  computed: {}
}
</script>
<style lang="less">
.upload {
  margin-top: 80px;
  background: #0a0a0a;
  .upload_banner {
    width: 100%;
  }
  .upload_nav {
    text-align: center;
    height: 100px;
    margin-bottom: 70px;
    .el_menu,
    .el_menu li {
      font-size: 38px;
      height: 90px;
      line-height: 90px;
      float: left;
      background: #0a0a0a;
    }
    .el-menu.el-menu--horizontal {
      border-bottom: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      span {
        display: block;
        height: 100%;
      }
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      background: #0a0a0a !important;
      border: 0;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        border-radius: 2px;
        left: 50%;
        transform: translateX(-50%);
        height: 4px;
        width: 70px;
        background-color: #c8a461;
      }
    }
    .el-menu--horizontal > .el-menu-item {
      border: 0;
         background: #0a0a0a !important;
    }
  }

  .upload_item {
    margin-bottom: 52px;
    display: flex;
    min-height: 66px;
    .upload_title {
      line-height: 66px;
      font-size: 22px;
      font-weight: 400;
      width: 130px;
    }
    .upload_input {
      flex: 1;
      height: 66px;
      outline: none;
      border: none;
      background: #000;
      border-radius: 8px;
      padding: 0 26px;
      font-size: 18px;
      color: #fff;
    }
    .upload_radio {
      line-height: 66px;
      font-size: 26px;
      .el-radio__inner {
        height: 26px;
        width: 26px;
      }
      .el-radio__inner::after {
        width: 14px;
        height: 14px;
      }
      .el-radio {
        margin-right: 70px;
      }
      .el-radio__label {
        font-size: 26px;
        color: #fff;
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: #c8a461;
        background: #c8a461;
      }
      .el-radio__input.is-checked + .el-radio__label {
        color: #c8a461;
      }
      .el-radio__input {
        vertical-align: sub;
      }
    }
  }
}
</style>
 <template>
  <div class="foot_box">
    <ul class="foot_top_ul">
      <li class="cursor"
          @click="go_message('contact')">
        联系我们
        <span class="line"></span>
      </li>
      <li class="cursor"
          @click="go_message('user')">
        用户协议
        <span class="line"></span>
      </li>
      <li class="cursor"
          @click="go_message('help')">
        使用帮助
        <span class="line"></span>
      </li>
      <li class="cursor"
          @click="go_message('privacy')">隐私协议</li>
    </ul>
    <div class="foot_bom_ul">
      <ul class="foot_box_ul">
        <li>
          京ICP备06050721号
          <span class="line"></span>
        </li>
        <li>网络出版服务许可证</li>
      </ul>
    </div>
  </div>
</template>
 <script>
export default {
  name: "Footer",
  data () {
    return {};
  },
  mounted () {


  },
  methods: {
    go_message (name) {
      this.$router.push({
        path: "/messages",
        query: { name: name }
      });
    }
  }
};
</script>
 <style lang="less">
.foot_box {
  width: 100%;
  height: 110px;
  background: #000;
  bottom: 0;
  padding: 25px 0;
  z-index: 9999;
  ul {
    height: 30px;
    margin: 0;
    padding: 0;
    line-height: 30px;
    margin: 0 auto;
    display: inline-block;
    li {
      float: left;
      padding: 0 20px;
      position: relative;
      font-size: 14px;
      .line {
        position: absolute;
        right: 0;
        width: 2px;
        height: 16px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .foot_top_ul {
    li {
      color: #fff;
      cursor: pointer;
      .line {
        background: rgba(188, 188, 188, 1);
      }
    }
  }
  .foot_bom_ul {
    li {
      color: rgba(142, 142, 142, 1);
    }
    .line {
      background: rgba(142, 142, 142, 1);
    }
  }
  // .foot_box_main {
  //   height: 110px;
  //   // border: 1px solid red;
  //   width: 530px;
  //   position: absolute;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   ul {
  //   }
  //   .cursor {
  //     cursor: pointer;
  //   }
  //   li {
  //     flex: 1;
  //     font-size: 14px;
  //     line-height: 55px;
  //     font-weight: 400;
  //     color: #fff;
  //     position: relative;
  //     .line {
  //       position: absolute;
  //       right: 0;
  //       width: 2px;
  //       height: 16px;
  //       top: 50%;
  //       transform: translateY(-50%);
  //       background: rgba(188, 188, 188, 1);
  //     }
  //   }
  //   .bottom {
  //     li {
  //       color: rgba(142, 142, 142, 1);
  //     }
  //     .line {
  //       background: rgba(142, 142, 142, 1);
  //     }
  //   }
  // }
}
</style>

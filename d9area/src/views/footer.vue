 <template>
  <div class="foot_box">
    <div class="foot_box_main">
      <ul>
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
      <ul class="bottom">
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
  height: 196px;
  background: #0a0a0a;
  // position: fixed;

  bottom: 0;
  .foot_box_main {
    height: 196px;
    // border: 1px solid red;
    width: 530px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    ul {
      margin-top: 50px;
      display: flex;
    }
    .cursor {
      cursor: pointer;
    }
    li {
      flex: 1;
      font-size: 22px;
      font-weight: 400;
      color: rgba(188, 188, 188, 1);
      position: relative;
      .line {
        position: absolute;
        right: 0;
        width: 2px;
        height: 16px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(188, 188, 188, 1);
      }
    }
    .bottom {
      li {
        color: rgba(142, 142, 142, 1);
      }
      .line {
        background: rgba(142, 142, 142, 1);
      }
    }
  }
}
</style>

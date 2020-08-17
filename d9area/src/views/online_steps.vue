<template>
  <div class="body_box">
    <Nav :mainnav="mainnav"></Nav>
    <div class="OnlineSteps">
      <div class="main_container main_box">
        <div class="steps_top">
          <div class="steps_box">
            <el-steps :active="stpes_active" finish-status="success" align-center>
              <el-step title="基本信息"></el-step>
              <el-step title="预告片信息"></el-step>
              <el-step title="正片信息"></el-step>
              <el-step title="联系人信息"></el-step>
              <!-- <el-step title="信息确认"></el-step> -->
            </el-steps>
          </div>
        </div>
        <!-- 基础信息 -->
        <div class="content" v-if="stpes_active==0">
          <div class="content_item">
            <span class="item_title">影片类目：</span>
            <div class="upload_radio">
              <el-checkbox-group v-model="checkedCities" :max="3">
                <el-checkbox
                  v-for="city in cities"
                  :label="city.name"
                  :key="city.name"
                >{{city.name}}</el-checkbox>
              </el-checkbox-group>
              <p>注：影片类目可选择三类</p>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">作品名称：</span>
            <div class="item_right">
              <el-input v-model="base.name" placeholder="请填写作品名称"></el-input>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">作品简介：</span>
            <div class="item_right">
              <el-input
                type="textarea"
                placeholder="请填写作品简介"
                :autosize="{ minRows: 3, maxRows: 1000}"
                v-model="base.des"
                maxlength="1000"
                show-word-limit
              ></el-input>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">出品方：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请填写出品方"></el-input>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">主创团队：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请注明职务与姓名"></el-input>
            </div>
          </div>
        </div>
        <!-- 预告片信息 -->
        <div class="content" v-if="stpes_active==1">
          <div class="content_item">
            <span class="item_title">上传作品：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p>尺寸240*180 不超过4G</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">上传海报：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p>支持jpg/gif/png格式RGB模式</p>
                  <p>尺寸240*180不超过10M</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">上传封面：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p>支持jpg/gif/png格式RGB模式</p>
                  <p>尺寸240*180不超过10M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 正片信息 -->
        <div class="content" v-if="stpes_active==2">
          <div class="content_item">
            <span class="item_title">上传作品：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p>尺寸240*180 不超过4G</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">上传海报：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p>支持jpg/gif/png格式RGB模式</p>
                  <p>尺寸240*180不超过10M</p>
                  <p>1-3张</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">上传图片：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p>支持jpg/gif/png格式</p>
                  <p>尺寸240*180不超过10M</p>
                  <p>（美术概念设定）</p>
                </div>
              </div>
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p>支持jpg/gif/png格式</p>
                  <p>尺寸240*180不超过10M</p>
                  <p>（故事版分镜）</p>
                </div>
              </div>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">上传封面：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p>支持jpg/gif/png格式</p>
                  <p>尺寸240*180不超过10M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 联系人信息 -->
        <div class="content" v-if="stpes_active==3">
          <div class="content_item">
            <span class="item_title">姓名：</span>
            <div class="item_right">
              <el-input v-model="base.name" placeholder="请输入联系人姓名"></el-input>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">手机号：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请输入联系人手机号"></el-input>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">地址：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请输入联系人地址"></el-input>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">邮箱：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请输入联系人邮箱"></el-input>
            </div>
          </div>
        </div>
        <!-- 信息确认 -->
        <!-- <div class="info" v-if="stpes_active==4">
          <p class="top_info">
            <img src="@/assets/images/upload/warning.png" alt />
            <span>请检查内容是否正确，提交后不可再次修改</span>
          </p>
          <p class="top_info_title">基本信息：</p>
          <div class="content info_item_margin">
            <div class="content_item">
              <span class="item_title">影片类目：</span>
              <div class="upload_radio">
                <el-checkbox-group v-model="checkedCities" :max="3">
                  <el-checkbox
                    v-for="city in cities"
                    :label="city.name"
                    :key="city.name"
                  >{{city.name}}</el-checkbox>
                </el-checkbox-group>
                <p>注：影片类目可选择三类</p>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">作品名称：</span>
              <div class="item_right">
                <el-input v-model="base.name" placeholder="请填写作品名称"></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">作品简介：</span>
              <div class="item_right">
                <el-input
                  type="textarea"
                  placeholder="请填写作品简介"
                  :autosize="{ minRows: 2, maxRows: 1000}"
                  v-model="base.des"
                  maxlength="120"
                  show-word-limit
                ></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">出品方：</span>
              <div class="item_right">
                <el-input v-model="base.des" placeholder="请填写出品方"></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">主创团队：</span>
              <div class="item_right">
                <el-input v-model="base.des" placeholder="请注明职务与姓名"></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">剧本大纲：</span>
              <div class="item_right">
                <el-input type="textarea"
                          placeholder="请填写剧本大纲（非必填）"
                          :autosize="{ minRows: 2, maxRows: 1000}"
                          v-model="base.des"
                          maxlength="1000"
                          show-word-limit></el-input>
              </div>
            </div>
          </div>
          <p class="top_info_title">预告片信息：</p>
          <div class="content">
            <div class="content_item">
              <span class="item_title">上传作品：</span>
              <div class="item_right">
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p>尺寸240*180 不超过4G</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">上传海报：</span>
              <div class="item_right">
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p>支持jpg/gif/png格式RGB模式</p>
                    <p>尺寸240*180不超过10M</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">上传封面：</span>
              <div class="item_right">
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p>支持jpg/gif/png格式RGB模式</p>
                    <p>尺寸240*180不超过10M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="top_info_title">正片信息：</p>
          <div class="content">
            <div class="content_item">
              <span class="item_title">上传作品：</span>
              <div class="item_right">
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p>尺寸240*180 不超过4G</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">上传海报：</span>
              <div class="item_right">
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p>支持jpg/gif/png格式RGB模式</p>
                    <p>尺寸240*180不超过10M</p>
                    <p>1-3张</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">上传图片：</span>
              <div class="item_right">
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p>支持jpg/gif/png格式RGB模式</p>
                    <p>尺寸240*180不超过10M</p>
                    <p>（美术概念设定）</p>
                  </div>
                </div>

                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p>支持jpg/gif/png格式RGB模式</p>
                    <p>尺寸240*180不超过10M</p>
                    <p>（故事版分镜）</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="content_item">
              <span class="item_title">上传封面：</span>
              <div class="item_right">
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p>支持jpg/gif/png格式RGB模式</p>
                    <p>尺寸240*180不超过10M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="top_info_title">联系人信息：</p>
          <div class="content">
            <div class="content_item">
              <span class="item_title">姓名：</span>
              <div class="item_right">
                <el-input v-model="base.name" placeholder="请输入联系人姓名"></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">手机号：</span>
              <div class="item_right">
                <el-input v-model="base.des" placeholder="请输入联系人手机号"></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">地址：</span>
              <div class="item_right">
                <el-input v-model="base.des" placeholder="请输入联系人地址"></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">邮箱：</span>
              <div class="item_right">
                <el-input v-model="base.des" placeholder="请输入联系人邮箱"></el-input>
              </div>
            </div>
          </div>
        </div> 

        <!-- 保存 上一步下一步 -->
        <div class="btn_box">
          <span class="next btn_common" @click="next_click" v-if="stpes_active!=3">下一页</span>
          <span class="save btn_common" v-if="stpes_active!=3">保存</span>
          <span class="save btn_common" v-if="stpes_active==3">提交</span>
          <span class="pre btn_common" v-if="stpes_active!=0" @click="pre_click">上一页</span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "OnlineSteps",
  components: { Nav, Footer },
  data() {
    return {
      mainnav: "4",
      stpes_active: 0,
      base: {
        name: "",
        type: "1",
        des: "",
      },
      checked: true,
      checkedCities: [],
      cities: [
        { name: "战争" },
        { name: "动作" },
        { name: "科幻" },
        { name: "冒险" },
        { name: "犯罪" },
        { name: "灾难" },
        { name: "魔幻" },
        { name: "悬疑" },
        { name: "剧情" },
        { name: "恐怖" },
        { name: "西部" },
        { name: "喜剧" },
        { name: "动画" },
        { name: "纪录片" },
      ],
    };
  },
  methods: {
    next_click() {
      console.log(this.stpes_active);
      this.stpes_active += 1;
    },

    pre_click() {
      console.log(this.stpes_active);
      this.stpes_active -= 1;
    },
  },
  computed: {},
};
</script>
<style scoped lang="less">
.OnlineSteps {
  // border: 1px solid red;
  min-height: 860px;
  background: #fff;
  padding: 150px 0 80px;
  /deep/ .main_box {
    background: #fff;
    overflow: hidden;
    .steps_top {
      width: 1200px;
      background: #fff;
      margin: 0 auto;
      margin-left: -108px;
      // border: 1px solid red;
      .steps_box {
        // border: 1px solid red;
         margin-left: -25px;
        .el-step.is-horizontal {
          position: relative;
        }
        .el-step__title {
          position: absolute;
          top: 0;
          left: 180px;
          font-size: 16px;
          line-height: 24px;
          color: #999;
        }
        .el-step.is-horizontal .el-step__line {
          top: 10px;
          left: 270px;
          right: -90px;
          background: #999;
          height: 1px;
        }
        .el-step__title.is-process {
          color: #c8a461;
        }
        //
        .el-step.is-horizontal {
          .el-step__icon {
            background: #fff;
            width: 24px;
            height: 24px;
          }
        }

        .el-step__icon.is-text {
          color: #999;
          border-color: #999;
          border: 1px solid;
        }
        .el-step__icon-inner {
          font-weight: 400;
        }
        // 进行中
        .el-step__head.is-process {
          .el-step__icon.is-text {
            color: #fff;
            background: #c8a461;
            border-color: #c8a461;
          }
        }
        // 已完成
        .el-step__title.is-success {
          color: #c8a461;
          border-color: #c8a461;
        }
        .el-step__head.is-success {
          color: #c8a461;
          border-color: #c8a461;
          .el-step__icon.is-text {
            color: #c8a461;
            border-color: #c8a461;
          }
          .el-step__line {
            background: #c8a461;
          }
        }
        .el-step__head.is-success {
        }
      }
    }
    // 基本信息
    .content {
      width: 800px;
      margin-left: 30px;
      margin-top: 50px;
      input::-webkit-input-placeholder {
        color: #999;
      }
      input::-moz-input-placeholder {
        color: #999;
      }
      input::-ms-input-placeholder {
        color: #999;
      }
      textarea::-webkit-input-placeholder {
        color: #999;
      }
      textarea::-moz-input-placeholder {
        color: #999;
      }
      textarea::-ms-input-placeholder {
        color: #999;
      }

      .content_item {
        display: flex;
        // border: 1px solid red;
        min-height: 48px;
        margin-bottom: 30px;
        .item_title {
          width: 120px;
          text-align: right;
          font-size: 14px;
          line-height: 48px;
          color: #000;
          margin-left: -80px;
        }
        .el-input__inner {
          flex: 1;
          height: 48px;
          background: #fff;
          border: 1px solid #999999;
          color: #333;
          border-radius: 0;
        }
        .el-textarea__inner {
          flex: 1;
          height: 48px;
          background: #fff;
          border: 1px solid #999;
          color: #333;
          border-radius: 0;
        }
        .el-input__count {
          background: #fff;
          color: #999;
        }
        .upload_radio {
          flex: 1;
          line-height: 48px;
          font-size: 14px;
          text-align: left;
          p {
            font-size: 14px;
            color: #999;
          }
          // checkbox
          .el-checkbox__inner {
            border: 1px solid #999;
            background-color: #fff;
            border-radius: 0;
          }
          .el-checkbox__label {
            color: #141414;
            font-size: 14px;
          }
          .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: #c8a461;
            .el-checkbox__inner::after {
              border: 1px solid #000;
            }
          }
          .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #c8a461;
          }
        }
        .item_right {
          flex: 1;
          line-height: 32px;
          font-size: 14px;
          text-align: left;
        }
      }
    }

    // 保存
    .btn_box {
      width: 1200px;
      // margin: 40px auto 70px;
      margin-top: 70px;
      height: 40px;
      .btn_common {
        height: 40px;
        width: 70px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: #999;
        border: 1px solid #999;
        // border-radius: 4px;
        margin-left: 10px;
        display: inline-block;
        float: right;
        cursor: pointer;
        &:hover{
           color: #c8a461;
        border: 1px solid #c8a461;
        }
      }
    }
    // 预告片信息
    .upload_box {
      width: 240px;
      height: 180px;
      // border: 1px solid red;
      // float: left;
      margin-bottom: 20px;
      background: #fff;
      border: 1px solid #999;
      position: relative;
      cursor: pointer;
      .upload_img_box {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: rgba(119, 119, 119, 1);
      }
      .add_img {
        width: 30px;
        height: 30px;
      }
    }
    // 正片信息
    // 信息确认
    .info {
      .top_info {
        border: 1px solid #c8a461;
        width: 1200px;
        height: 38px;
        margin: 0 auto;
        margin-top: 46px;
        color: #141414;
        text-align: left;
        line-height: 38px;
        img {
          vertical-align: sub;
          margin: 0 10px;
        }
      }

      .top_info_title {
        font-size: 18px;
        font-weight: 400;
        color: rgba(200, 164, 97, 1);
        line-height: 22px;
        width: 750px;
        // margin: 0 auto;
        margin-top: 60px;
        text-align: left;
      }
      .info_item_margin {
        margin-top: 30px;
      }
    }
  }
}
</style>
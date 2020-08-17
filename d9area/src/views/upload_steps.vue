<template>
  <div class="body_box">
    <film-nav :activenav="Index"></film-nav>
    <div class="UploadSteps">
      <div class="step_box">
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
            <span class="item_title_direction">影片方向：</span>
            <div class="upload_radio">
              <el-radio v-model="upload_info.base.type" label="1">VFX电影短片</el-radio>
              <el-radio v-model="upload_info.base.type" label="2">三维动画短片</el-radio>
              <el-radio v-model="upload_info.base.type" label="3">VR短片</el-radio>
            </div>
          </div>
          <!-- 片名 -->
          <div class="content_item">
            <span class="item_title">中文片名：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.name" placeholder="请填写中文片名"></el-input>
            </div>
            <span class="red">*</span>
          </div>
          <div class="content_item">
            <span class="item_title">英文片名：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.name" placeholder="请填写英文片名"></el-input>
            </div>
            <span class="fff">*</span>
          </div>
          <!-- 简介 -->
          <div class="content_item">
            <span class="item_title">影片中文简介：</span>
            <div class="item_right">
              <el-input
                type="textarea"
                placeholder="请填写中文简介"
                :autosize="{ minRows: 3, maxRows: 1000}"
                v-model="upload_info.base.des"
                maxlength="1000"
                show-word-limit
              ></el-input>
            </div>
            <span class="red_ch">*</span>
          </div>
          <div class="content_item">
            <span class="item_title">影片英文简介：</span>
            <div class="item_right">
              <el-input
                type="textarea"
                placeholder="请填写英文简介"
                :autosize="{ minRows: 3, maxRows: 1000}"
                v-model="upload_info.base.des"
                maxlength="1000"
                show-word-limit
              ></el-input>
            </div>
            <span class="fff">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">出品方：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.company" placeholder="拥有影片版权方，不得超过三家"></el-input>
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">制片国家/地区：</span>
            <div class="item_right">
              <el-cascader placeholder="请选择制片国家/地区" :options="area_data" filterable></el-cascader>
              <!-- <el-input v-model="upload_info.base.company" placeholder="请选择制片国家/地区"></el-input> -->
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">对白语言：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.company" placeholder="请输入对白语言"></el-input>
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">字幕语言：</span>
            <div class="item_right">
              <!-- <el-input v-model="upload_info.base.company" placeholder="请选择字幕语言"></el-input> -->
              <el-select v-model="value" placeholder="请选择字幕语言">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <span class="item_title_long">片长：</span>
            <div class="item_slice_box">
              <el-input v-model="upload_info.base.company" placeholder="请输入时长"></el-input>

              <div class="notes">（注：5-17分钟之间） *</div>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">制作完成日期：</span>
            <div class="item_right">
              <!-- <el-input v-model="upload_info.base.company"></el-input> -->
              <div class="block">
                <!-- <span class="demonstration">默认</span> -->
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              </div>
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">主创团队：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.team" placeholder="请注明职务与姓名"></el-input>
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <div class="tips">注：*星号为必填项</div>
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
                  <p class="info_p">尺寸240*180 不超过1G</p>
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
                  <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                  <p class="info_p">尺寸240*180不超过10M</p>
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
                  <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                  <p class="info_p">尺寸240*180不超过10M</p>
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
                  <p class="info_p">尺寸240*180 不超过4G</p>
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
                  <p class="info_p">支持jpg/gif/png格式</p>
                  <p class="info_p">尺寸240*180不超过10M</p>
                  <p class="info_p">1-3张</p>
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
                  <p class="info_p">支持jpg/gif/png格式</p>
                  <p class="info_p">尺寸240*180不超过10M</p>
                  <p class="info_p">（美术概念设定）</p>
                </div>
              </div>
              <div class="upload_box">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p class="info_p">支持jpg/gif/png格式</p>
                  <p class="info_p">尺寸240*180不超过10M</p>
                  <p class="info_p">（故事版分镜）</p>
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
                  <p class="info_p">支持jpg/gif/png格式</p>
                  <p class="info_p">尺寸240*180不超过10M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 联系人信息 -->
        <div class="content" v-if="stpes_active==3">
          <div class="content_item">
            <span class="item_title">申报人姓名：</span>
            <div class="item_right">
              <el-input v-model="base.name" placeholder="请输入联系人姓名"></el-input>
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">公司名称：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请输入公司名称"></el-input>
            </div>
            <span class="fff">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">手机号：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请输入联系人手机号"></el-input>
              <!-- <span class="red">*</span> -->
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">邮箱：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请输入联系人邮箱"></el-input>
            </div>
            <span class="red">*</span>
          </div>

          <div class="content_item">
            <span class="item_title">收件地址：</span>
            <div class="item_right">
              <el-input v-model="base.des" placeholder="请填输入收件地址"></el-input>
            </div>
            <span class="red">*</span>
          </div>
          <div class="content_item">
            <div class="tips">注：*星号为必填项</div>
          </div>
        </div>

        <!-- 信息确认 -->
        <div class="info" v-if="stpes_active==4">
          <p class="top_info">
            <img src="@/assets/images/upload/warning.png" alt />
            <span>请检查内容是否正确，提交后不可再次修改</span>
          </p>
          <p class="top_info_title">基本信息：</p>
          <div class="content info_item_margin">
            <div class="content_item">
              <span class="item_title">影片方向：</span>
              <div class="upload_radio">
                <el-radio v-model="upload_info.base.type" label="1">VFX电影短片</el-radio>
                <el-radio v-model="upload_info.base.type" label="2">三维动画短片</el-radio>
                <el-radio v-model="upload_info.base.type" label="3">VR短片</el-radio>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">作品名称：</span>
              <div class="item_right">
                <el-input v-model="upload_info.base.name" placeholder="请填写作品名称"></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">作品简介：</span>
              <div class="item_right">
                <el-input
                  type="textarea"
                  placeholder="请填写作品简介"
                  :autosize="{ minRows: 3, maxRows: 1000}"
                  v-model="upload_info.base.des"
                  maxlength="1000"
                  show-word-limit
                ></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">出品方：</span>
              <div class="item_right">
                <el-input v-model="upload_info.base.company" placeholder="请填写出品方"></el-input>
              </div>
            </div>
            <div class="content_item">
              <span class="item_title">主创团队：</span>
              <div class="item_right">
                <el-input v-model="upload_info.base.team" placeholder="请注明职务与姓名"></el-input>
              </div>
            </div>
            <!-- <div class="content_item">
              <span class="item_title">剧本大纲：</span>
               <div class="item_right"> 
                <el-input
                  type="textarea"
                  placeholder="请填写剧本大纲（非必填）"
                  :autosize="{ minRows: 2, maxRows: 1000}"
                  v-model="base.des"
                  maxlength="1000"
                  show-word-limit
                ></el-input>
            </div>-->
            <!-- </div> -->
          </div>

          <p class="top_info_title">预告片信息：</p>
          <div class="content">
            <div class="content_item">
              <span class="item_title">上传作品：</span>
              <div class="item_right">
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p class="info_p">尺寸240*180 不超过4G</p>
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
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
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
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
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
                    <p class="info_p">尺寸240*180 不超过4G</p>
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
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">1-3张</p>
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
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">（美术概念设定）</p>
                  </div>
                </div>
                <div class="upload_box">
                  <div class="upload_img_box">
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">（故事版分镜）</p>
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
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
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
          <span class="save btn_common" v-if="stpes_active!=3" @click="save_info">保存</span>
          <span class="save btn_common" v-if="stpes_active==3">提交</span>
          <span class="pre btn_common" v-if="stpes_active!=0" @click="pre_click">上一页</span>
        </div>
      </div>
    </div>
    <!-- 底部新闻资讯 -->

    <realFoot></realFoot>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
import filmNav from "@/views/film_nav.vue";
import realFoot from "../views/real_foot.vue";
import mapaData from "@/assets/js/data.js";
import country from "@/assets/js/country.js";
export default {
  name: "UploadSteps",
  components: { Nav, Footer, filmNav, realFoot },
  data() {
    return {
      Index: "4",
      mainnav: "2",
      stpes_active: 0,
      base: {
        name: "",
        type: "1",
        des: "",
      },
      checked: true,

      upload_info: {
        // 基础信息
        base: {
          type: "1",
          name: "",
          des: "",
          company: "",
          team: "",
        },
        // 预告片
        trailer: {},
        // 正片信息
        positive: {},
        // 联系人
        contacts: {},
      },
      //  字幕语言
      options: [
        {
          value: "选项1",
          label: "中文",
        },
        {
          value: "选项2",
          label: "English",
        },
      ],
      value: "",
      // 选择日期
      //    pickerOptions: {
      //       disabledDate(time) {
      //         return time.getTime() > Date.now();
      //       },
      // },
      value1: "",
      area_data:[]
     
    };
  },

  mounted() {
    this.area_data = country
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
    // 保存
    save_info() {
      console.log(this.upload_info);
    },
  },
  computed: {},
};
</script>
<style lang="less">
.UploadSteps {
  // border: 1px solid red;
  min-height: 780px;
  background: #fff;
  padding-top: 70px;
  .step_box {
    background: #fff;
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
  }
  .steps_top {
    background: #fff;
    // padding: 48px 0;

    .steps_box {
      // border: 1px solid red;
      margin-left: -100px;
      .el-step.is-horizontal {
        position: relative;
      }
      .el-step__title {
        position: absolute;
        top: 0;
        left: 170px;
        font-size: 16px;
        line-height: 24px;
        color: #919191;
      }
      .el-step__icon-inner {
        font-weight: 400;
      }
      .el-step.is-horizontal .el-step__line {
        top: 10px;
        left: 280px;
        right: -95px;
        background: #919191;
        height: 1px;
      }
      .el-step__title.is-process {
        color: #c8a461;
        margin-left: 10px;
      }
      .el-step__head.is-wait {
        margin-left: 10px;
      }
      .el-step__title.is-wait {
        // color: #c0c4cc;
        margin-left: 16px;
        // margin-right: 10px;
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
        color: #919191;
        border-color: #919191;
        border: 1px solid;
      }
      // 进行中
      .el-step__head.is-process {
        .el-step__icon.is-text {
          color: #fff;
          background: #c8a461;
          border-color: #c8a461;
          // font-size: 12px;
        }
      }
      // 已完成
      .el-step__title.is-success {
        color: #c8a461;
        border-color: #c8a461;
        margin-left: 5px;
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
    }
  }
  // 基本信息
  .content {
    width: 800px;
    // margin-left: 30px;
    // margin: 0 auto;
    // border: 1px solid red;
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
        width: 140px;
        text-align: right;
        font-size: 16px;
        line-height: 48px;
        color: #000;

        //  border: 1px solid green;
      }

      .item_title_direction {
        width: 130px;
        text-align: right;
        font-size: 16px;
        line-height: 48px;
        color: #000;
        margin-left: -1px;
      }

      .item_title_long {
        width: 140px;
        text-align: right;
        font-size: 16px;
        line-height: 48px;
        color: #000;
        margin-left: -12px;
      }

      .el-input__inner {
        flex: 1;
        height: 48px;
        background: #fff;
        border: 1px solid #999999;
        color: #333;
        border-radius: 0;
        font-size: 16px;
      }
      .el-textarea__inner {
        flex: 1;
        height: 96px;
        background: #fff;
        border: 1px solid #999999;
        color: #333;
        border-radius: 0;
        font-size: 16px;
      }
      .el-input__count {
        margin-top: 2px;
        background: #fff;
        color: #999;
      }
      .upload_radio {
        flex: 1;
        line-height: 48px;
        font-size: 16px;
        text-align: left;
        .el-radio__inner:hover {
          border-color: #c8a461;
        }
        .el-radio__input {
          .el-radio__inner {
            background: #fff;
            width: 16px;
            height: 16px;
            border-radius: 0;
            &:after {
              width: 0;
              height: 0;
            }
          }
          &.is-checked {
            .el-radio__inner {
              border: 0;
              background-position: -1px -1px;
              background-repeat: no-repeat;
              background-size: 20px;
              background-image: url("../assets/images/upload/check.png");
            }
          }
        }
        .el-radio__label {
          font-size: 14px;
          color: #000;
        }
        &.is-checked {
          .el-radio__label {
            color: #000;
          }
        }
      }
      .item_right {
        // flex: 1;
        width: 700px;
        float: right;
        font-size: 14px;
        text-align: left;
      }
      .red {
        font-size: 16px;
        color: #f83e48;
        height: 48px;
        line-height: 48px;
        margin-left: 20px;
        // float: right;
      }
      .red_ch {
        font-size: 16px;
        color: #f83e48;
        height: 80px;
        line-height: 80px;
        margin-left: 20px;
      }
      .fff {
        font-size: 16px;
        color: #fff;
        height: 48px;
        line-height: 48px;
        margin-left: 20px;
      }
      .tips {
        text-align: left;
        font-size: 16px;
        color: #f83e48;
        margin-left: 130px;
      }
      .el-input__inner {
        width: 640px;
      }
      .item_slice_box {
        width: 600px;

        text-align: left;
        position: relative;

        .el-input__inner {
          width: 240px;
        }
        .notes {
          height: 48px;
          line-height: 48px;
          width: 200px;
          font-size: 16px;
          color: #f83e48;
          // float: right;
          margin: 0 0 0 0;
          // border: 1px solid green;
          position: absolute;
          left: 254px;
          top: 0;
        }
      }
    }
  }

  // 保存
  .btn_box {
    width: 1100px;
    margin: 40px auto 70px;
    height: 40px;
    .btn_common {
      height: 40px;
      width: 70px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      color: #999;
      border: 1px solid #999;
      margin-left: 10px;
      display: inline-block;
      float: right;
      cursor: pointer;
      &:hover {
        color: #c8a461;
        border: 1px solid #c8a461;
      }
    }
  }
  // 预告片信息
  .upload_box {
    width: 240px;
    height: 180px;
    border: 1px solid #999;
    background: #fff;
    position: relative;
    margin-bottom: 20px;
    // float: left;
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
    .info_p {
      line-height: 24px;
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
      width: 1100px;
      height: 38px;
      // margin: 0 auto;
      margin-top: 40px;
      margin-left: 50px;
      text-align: left;
      line-height: 38px;
      img {
        vertical-align: sub;
        margin: 0 10px;
      }
      span {
        font-size: 14px;
        color: #141414;
        font-weight: 400;
      }
    }

    .top_info_title {
      font-size: 18px;
      font-weight: 400;
      color: rgba(200, 164, 97, 1);
      line-height: 22px;
      width: 1100px;
      margin: 0 auto;
      margin-top: 50px;
      text-align: left;
    }
    .info_item_margin {
      margin-top: 30px;
    }
  }
}
</style>
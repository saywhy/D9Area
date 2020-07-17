<template>
  <div class="body_box">
    <Nav :mainnav='mainnav'></Nav>
    <div class="personal">
      <div class="personal_top">
        <img src="../assets/images/personal/core.jpg"
            height="540"
            width="100%"
             alt="">
        <div class="container_main header_box">
          <div class="head_img_box">
            <img src="@/assets/images/personal/head.png"
                 :class="edit_head_img?'edit_head_img':''"
                 @mouseover='mouseOver'
                 width="80"
                 height="80"
                 alt="">
          </div>
          <div class="head_edit_img_box"
               @mouseout='mouseLeave'
               v-if="edit_head_img">
            <img src="@/assets/images/personal/head_edit.png"
                 class="head_edit_img"
                 @click="change_head"
                 alt="">
          </div>
          <p class="head_name">古德奈特</p>
          <p class="head_des">我有一只小毛驴我从来也不骑</p>
          <p class="head_position">北京，中国</p>
        </div>
      </div>
      <div class="personal_nav">
        <el-menu :default-active="personal_active"
                 text-color="#F6F6F6"
                 active-text-color="#C9A562"
                 background-color="#000"
                 class="el_menu"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">作品</el-menu-item>
          <el-menu-item index="2">资料</el-menu-item>
          <el-menu-item index="3">
            <img src="@/assets/images/personal/edit.png"
                 width="20"
                 height="20"
                 alt="">
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 作品 -->
      <div class="personal_works"
           v-if="personal_active=='1'">
        <div class="main_container">
          <div class="content_top">
            <div class="content_top_left"
                 @click="go_film_detail">
              <span class="content_top_left_time">时长：1分20秒</span>
            </div>
            <div class="content_top_right">
              <div class="content_top_right_top">
                <p class="film_name">拯救计划</p>
                <p class="film_theme">VFX电影短片 | 战争</p>
                <p class="film_des">想知道好莱坞电影摄影师是如何运用光圈的？想知道最佳光圈为什么是f/T2.8，这部短片用四个原因告诉你，一起来涨知识吧！相信你一定有所提高！</p>
              </div>
              <div class="content_top_right_bom">
                <p class="film_company">出品方：凉山重工</p>
                <p class="film_author">主创团队：导演11111/编剧/制片……</p>
              </div>
            </div>
          </div>
          <div class="content_bom">
            <div class="content_bom_item">
              <div class="item_img">
                <span class="item_time">时长：1分20秒</span>
              </div>
              <div class="item_content">
                <div class="item_content_top">
                  <p class="item_name">复古文艺短片 | 拯救计划</p>
                  <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                </div>
                <div class="item_content_bom">
                  <p>
                    <span class="item_company">出品方：凉山重工</span>
                    <span class="item_theme">VFX电影短片</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="space"></div>
            <div class="content_bom_item">
              <div class="item_img">
                <span class="item_time">时长：1分20秒</span>
              </div>
              <div class="item_content">
                <div class="item_content_top">
                  <p class="item_name">复古文艺短片 | 拯救计划</p>
                  <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                </div>
                <div class="item_content_bom">
                  <p>
                    <span class="item_company">出品方：凉山重工</span>
                    <span class="item_theme">VFX电影短片</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="space"></div>
            <div class="content_bom_item">
              <div class="item_img">
                <span class="item_time">时长：1分20秒</span>
              </div>
              <div class="item_content">
                <div class="item_content_top">
                  <p class="item_name">复古文艺短片 | 拯救计划</p>
                  <p class="item_author">主创团队：导演11111/编剧/制片......</p>
                </div>
                <div class="item_content_bom">
                  <p>
                    <span class="item_company">出品方：凉山重工</span>
                    <span class="item_theme">VFX电影短片</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 资料 -->
      <div class="personal_info"
           v-if="personal_active=='2'">
        <div class="personal_info_container">
          <p class="personal_info_item">用户名：古德奈特</p>
          <p class="personal_info_item">性别：男</p>
          <p class="personal_info_item">生日：1990-09-09</p>
          <p class="personal_info_item">职业：动画设计师</p>
          <p class="personal_info_item">所在地：北京，中国</p>
          <p class="personal_info_item">签名：我有一只小毛驴我从来也不骑</p>
          <p class="personal_info_item">简介：我有一只小毛驴我从来也不骑，我有一只小毛驴我从来也不骑，我有一只小毛驴我从来也不骑</p>
          <p class="personal_info_item">教育背景：北京电影学院</p>
          <p class="personal_info_item">邮箱：123121231@qq.com</p>
          <p class="personal_info_item">QQ/微信：123456789</p>
        </div>
      </div>
      <!-- 修改 -->
      <div class="personal_edit"
           v-if="personal_active=='3'">
        <div class="personal_edit_container">
          <div class="edit_item">
            <span class="edit_title">用户名：</span>
            <el-input class="edit_right"
                      v-model="edit_data.name"
                      placeholder="请输入内容"></el-input>
          </div>
          <div class="edit_item">
            <span class="edit_title">性别：</span>
            <div class="upload_radio edit_right">
              <el-radio v-model="edit_data.sex"
                        label="1">男</el-radio>
              <el-radio v-model="edit_data.sex"
                        label="2">女</el-radio>
            </div>
          </div>
          <div class="edit_item">
            <span class="edit_title">职业：</span>
            <el-input class="edit_right"
                      v-model="edit_data.occupation"
                      placeholder="请输入内容"></el-input>
          </div>
          <div class="edit_item">
            <span class="edit_title">签名：</span>
            <el-input class="edit_right"
                      v-model="edit_data.autograph"
                      maxlength="27"
                      show-word-limit
                      placeholder="请输入内容"></el-input>
          </div>
          <div class="edit_item">
            <span class="edit_title">简介：</span>
            <el-input class="edit_right"
                      v-model="edit_data.des"
                      maxlength="27"
                      show-word-limit
                      placeholder="请输入内容"></el-input>
          </div>
          <div class="edit_item">
            <span class="edit_title">所在地：</span>
            <el-input class="edit_right"
                      v-model="edit_data.position"
                      placeholder="请输入内容"></el-input>
          </div>
          <div class="edit_item">
            <span class="edit_title">学校名称：</span>
            <el-input class="edit_right"
                      v-model="edit_data.school"
                      placeholder="请输入内容"></el-input>
          </div>
          <div class="edit_item">
            <span class="edit_title">邮箱：</span>
            <el-input class="edit_right"
                      v-model="edit_data.email"
                      placeholder="请输入内容"></el-input>
          </div>
          <div class="edit_item">
            <span class="edit_title">QQ/微信：</span>
            <el-input class="edit_right"
                      v-model="edit_data.qq"
                      placeholder="请输入内容"></el-input>
          </div>
          <!-- 保存修改 -->
          <div class="save_btn">
            保存修改
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
  name: 'Personal',
  components: { Nav, Footer },
  data () {
    return {
      mainnav: '',
      personal_active: '1',
      radio: '1',
      edit_head_img: false,
      edit_hover: false,
      edit_data: {
        name: '92845389',
        sex: '1',
        occupation: '动画设计设计师',
        autograph: '我有一只小毛驴我从来也不骑',
        des: '我有一只小毛驴我从来也不骑',
        position: '北京，中国',
        school: '德州科技职业学院',
        email: '12345678@qq.com',
        qq: '12345678',
      }
    }
  },
  methods: {
    handleSelect (val) {
      this.personal_active = val
    },
    change_head () {

    },
    mouseOver () {
      this.edit_head_img = true
    },
    mouseLeave () {
      this.edit_head_img = false
    },
    go_film_detail () {
      this.$router.push('/film_detail')
    }
  },
  computed: {}
}
</script>
<style lang="less">
.personal {
  background: #0a0a0a;
  .personal_top {
    position: relative;
    .header_box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .edit_head_img {
        opacity: 0.6;
      }
      .head_edit_img_box {
        cursor: pointer;
        height: 180px;
        width: 180px;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        .head_edit_img {
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .head_name {
        margin-top: 22px;
        font-size: 22px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      .head_des {
        margin: 16px 0;
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .head_position {
        font-size: 16px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .personal_nav {
    height: 74px;
    background: #0a0a0a;
    text-align: center;
    border-bottom: 1px solid rgba(161, 128, 55, 1);
    .el_menu,
    .el_menu li {
      margin: 0 auto;
      font-size: 16px;
      // height: 74px;
      display: inline-block;
      line-height: 74px;
      background: #0a0a0a !important;
      padding: 0 60px;
    }
    .el-menu.el-menu--horizontal {
      border: 0;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      border: 0;
    }
    .el-menu--horizontal > .el-menu-item {
      border: 0;
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      color: rgba(161, 128, 55, 1) !important;
      font-weight: bold;
    }
  }
  // 作品
  .personal_works {
    width:1000px;
    margin:0 auto;
     margin-top: 30px;
     padding-bottom: 70px;
    .main_container{
      width:1000px;
    }
    .content_top {
      height: 418px;
      background: #000000;
      .content_top_left {
        width: 667px;
        float: left;
        height: 418px;
        background-image: url('../assets/images/film/show/main.png');
        background-size: 100% 100%;
        cursor: pointer;
        position: relative;
        .content_top_left_time {
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-size: 12px;
        }
      }
      .content_top_right {
        width: 330px;
        float: left;
        text-align: left;
        .content_top_right_top {
          height: 330px;
          border-bottom: 1px solid #a18037;
          padding: 35px 36px;
          .film_name {
            font-size: 24px;
          }
          .film_theme {
            font-size: 14px;
            color: rgba(123, 124, 123, 1);
            margin: 20px 0;
          }
          .film_des {
            font-size: 14px;
            color: rgba(207, 207, 207, 1);
          }
        }
        .content_top_right_bom {
          padding:16px 0 0 28px;
          .film_company {
            font-size: 14px;
            margin-bottom: 16px;
          }
          .film_author {
            font-size: 14px;
            color: rgba(123, 124, 123, 1);
          }
        }
      }
    }
    .content_bom {
      margin-top: 30px;
      height: 406px;
      width: 100%;
      display: flex;
      .space {
        width: 32px;
        height: 406px;
      }
      .content_bom_item {
        flex: 1;
        height: 189px;
        background: #000;
        .item_img {
          height: 189px;
          background-image: url('../assets/images/film/show/sub.png');
          background-size: 100% 100%;
          position: relative;
          .item_time {
            position: absolute;
            right: 27px;
            bottom: 12px;
            font-size: 12px;
          }
        }
        .item_content {
          text-align: left;
          background-color: #000;
          .item_content_top {
            height: 110px;
            border-bottom: 1px solid rgba(10, 10, 10, 1);
            padding: 26px 19px;
            .item_name {
              font-size: 14px;
              color: rgba(255, 255, 255, 1);
              margin-bottom: 20px;
            }
            .item_author {
              font-size: 12px;
              color: rgba(123, 124, 123, 1);
            }
          }
          .item_content_bom {
            padding: 26px 19px;
            .item_company {
              font-size: 12px;
              color: rgba(255, 255, 255, 1);
              margin-right: 30px;
            }
            .item_theme {
              font-size: 12px;
              color: rgba(123, 124, 123, 1);
            }
          }
        }
      }
    }
  }
  // 资料信息
  .personal_info {
    margin-top: 30px;
    padding-bottom: 70px;
    .personal_info_container {
      width: 800px;
      margin: 0 auto;
      text-align: left;
      .personal_info_item {
        margin-bottom: 30px;
        font-size: 14px;
        color: #ebeae9;
      }
    }
  }
  // 修改
  .personal_edit {
    margin-top: 40px;
    padding-bottom:170px;
    .personal_edit_container {
      width: 800px;
      margin: 0 auto;
    }
    .edit_item {
      height: 32px;
      margin-bottom: 30px;
      line-height: 32px;
      display: flex;
      .edit_title {
        font-size: 14px;
        font-weight: 400;
        width: 150px;
        text-align: right;
        margin-right: 8px;
      }

      .edit_right {
        flex: 1;
        .el-input__inner {
          height: 32px;
          background: #000;
          color: #fff;
          border: 0;
          border-radius: 8px;
          font-size: 12px;
          // padding-left: 26px;
        }
      }
      .upload_radio {
        text-align: left;
        line-height: 32px;
        font-size: 16px;
        .el-radio__inner {
          height: 16px;
          width: 16px;
          background: #000;
          border-color: #c8a461;
        }
       
        .el-radio__inner::after {
          width: 14px;
          height: 14px;
          background: #c8a461;
        }
        .el-radio {
          margin-right: 30px;
        }
        .el-radio__label {
          font-size: 16px;
          color: #fff;
        }
        .el-radio__input.is-checked .el-radio__inner {
          border-color: #c8a461;
          background: #000;
        }
        .el-radio__input.is-checked + .el-radio__label {
          color: #c8a461;

        }
        .el-radio__input {
          vertical-align: sub;
        }
      }
    }
    .save_btn {
      cursor: pointer;
      // margin-top: 60px;
      width: 100px;
      height: 40px;
      border-radius: 8px;
      line-height: 40px;
      font-size: 14px;
      border:1px solid rgba(200,164,97,1);
      background-color: #000;
      float:right;
    }
  }
}
</style>
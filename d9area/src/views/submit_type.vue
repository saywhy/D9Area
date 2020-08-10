<template>
  <div class="body_box">
    <Nav :mainnav="mainnav"></Nav>
    <div style="height:100%;background: #0a0a0a;">
      <div class="submit">
        <div class="submit_box">
          <div class="submit_top">
            <div class="top_left">
              <img src="@/assets/images/login/user.png" width="34" height="32" alt />
              <p>我的账号</p>
            </div>
            <div class="top_right">
              <p>作品提交方式</p>
            </div>
          </div>
          <div class="submit_bom">
            <div class="bom_left">
              <p class="bom_title">提交电影周竞赛单元作品</p>
              <div class="bom_content">
                <p>ICF电影节：</p>
                <p>• D9区影视；</p>
                <p>• D9区上传作品的正片在线下进行放映；</p>
                <p>• 请您遵循审核过程；</p>
                <!-- <p class="remember">
                  <el-checkbox v-model="checked">我已阅读并同意遵守条例</el-checkbox>
                </p>-->
                <p class="submit_btn" @click="declare_ICF">开始申报</p>
              </div>
            </div>
            <div class="bom_right">
              <p class="bom_title">提交创投计划作品</p>
              <div class="bom_content">
                <p>在线观影：</p>
                <p>• D9区影视；</p>
                <p>• D9区上传作品的正片在线下进行放映；</p>
                <p>• 请您遵循审核过程；</p>
                <!-- <p class="remember">
                  <el-checkbox v-model="checked2">我已阅读并同意遵守条例</el-checkbox>
                </p>-->
                <p class="submit_btn" @click="declare_online">开始申报</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ICF弹框 -->
      <el-dialog title class="declare_ICF_box" :lock-scroll="true" :visible.sync="submit_btn">
        <div class="regulations">
          <div class="border">
            <p class="title_main">北京国际CG动画电影周章程2020年</p>
            <p class="titles">第一条</p>
            <p class="paragraph">本章程适用于报名参加第一届D9区国际CG动画电影周（以下简称“ICF”）主竞赛单元的影片。</p>
            <p class="titles">第二条</p>
            <p class="paragraph">
              北京国际CG动画电影周，是由北京国际设计周组委会与中国电影美术学会CG艺术专委会联合主办的专业电影文化交流活动。
              电影周的宗旨是鼓励全球范围内优秀CG电影的创作和CG技术创新，发现和激励有有创造力的电影、动画团队和艺术家，搭建CG电影创作新理念与最前沿动画制作技术交流合作的国际化平台。
            </p>
            <!-- 第三条 -->
            <p class="titles">第三条</p>
            <p class="paragraph">ICF每年9月开始提交作品，12月举办颁奖典礼。</p>
            <!-- 第四条 -->
            <p class="titles">第四条</p>

            <!-- 标准 -->
            <p class="paragraph">主竞赛单元申报影片应符合下列标准：</p>
            <div class="content">
              <p>1．首届主竞赛单元只接受VFX电影短片、三维动画短片、VR短片三个方向；</p>
              <p>2．2018年8月1日以后制作完成的原创短片项目；</p>
              <p>3．所有类别的短片时长要求5-17min；</p>
              <p>4．题材类型不限，须全CG三维制作；</p>
              <p>5．字幕至少包含中文或英文字幕；</p>
              <p>6．申报作品提交内容：</p>
            </div>

            <!-- 内容 -->
            <div class="content1">
              <p>（1）作品正片：5-17min；</p>
              <p>（2）作品预告片/花絮：45-150s;</p>
              <p>（3）作品制作解析：不限时长；</p>
              <p>（4）作品简介：200字以内；</p>
              <p>（5）作品海报：1-3张；</p>
              <p>（6）作品封面（视频的封面显示）：1张；</p>
              <p>（7）作品概念设定图：不限数量；</p>
              <p>（8）作品故事板分镜图：不限数量。</p>
            </div>
            <p class="standard_4">7.申报作品提交格式</p>
            <p class="standard_4">（1）CG电影短片与三维动画短片：</p>
            <p class="standard4">a.视频mp4格式，容量小于4G;</p>
            <p class="standard4">b.所有图片jpg/gif/png格式，像素小于10M；</p>
            <p class="standard_4">（2）VR短片：</p>
            <p
              class="standard4"
            >a.视频360°全景mp4格式，容量小于4G，要求4K，可在PC或MAC平台上 使用UtoVR、VR Player、PotPlayer 、爱奇艺VR等支持本地播放的VR播放器 播放器观看；</p>
            <p class="standard4">b. 所有图片jpg/gif/png格式，像素小于10M；</p>

            <p class="standard_4">8．受邀参加ICF展映的影片，DCP须符合电影节数字拷贝技术标准。</p>
            <p
              class="standard_4"
            >9． 申报者须保证拥有该作品的全部版权或持有版权方授权许可证明，证明其有权在ICF上宣传、放映和参加相关活动。因申报作品著作权、商标权及其他知识产权所产生的任何法律纠纷或经济损失，由申报者承担全部法律责任，主办方及活动组织方免责；</p>
            <p
              class="standard_4"
            >10． 申报者须确保作品的申报符合所在国家/地区的法律法规要求，因申报方违反其所在国家/地区的法律法规所产生的任何法律纠纷或经济损失，由申报者承担全部法律责任，主办方及活动组织方免责；</p>

            <p class="titles">第五条</p>
            <p
              class="paragraph"
            >请登录ICF网站www.di9qu.com，通过“影片申报”模块进行在线报名，并逐项填写申报影片的必填项信息。申报影片的截止日期为2020年11月30日。</p>

            <p
              class="paragraph"
            >ICF只接受官网在线申报影片，不接受其他移动储存介质或在线样片链接。申报影片的所有资料等应按主办方的要求提交，申报者同意并授权主办方无偿使用申报作品提供的所有材料，进行推广宣传、展映活动、媒体的各种媒介宣传使用的权利，ICF组委会承诺：申报影片的作有资料仅限于对本活动和本影片的宣传（如主办方要求，申报者需承诺提供相应授权文件)。</p>

            <p class="titles">第六条</p>
            <p class="paragraph">
              申报作品提交成功后，组委会原则上不再接受新的版本。如果报名信息有重大变化，请及时联系组委会。
              申报者所提交的所有材料均不退还，请务必保留原件，申报影片在主竞赛单元入围后，即不得以任何理由擅自撤回影片，退出评选。
              如需撤回影片，ICF组委会有权根据实际情况决定是否接受。如因申报方提出撤回影片申请给ICF或ICF组委会造成任何损失的，申报方应当赔偿由此造成的一切经济损失及名誉损失，包括但不限于支付赔偿金，向电影周出具书面致歉信及在公众平台公开道歉等。最终进入展映单元的作品必须参加主办方举办的放映活动。
            </p>

            <p class="titles">第七条</p>
            <p class="paragraph">入围的影片，申报方需提供完整的中英文字幕台本。</p>
            <p class="paragraph">少数民族语言或方言对白的华语影片，申报方须提供中英文字幕拷贝。</p>
            <p class="paragraph">影片放映时配有电子中文字幕显示，英译中的翻译和字幕机操作由电影周负责。</p>

            <p class="titles">第八条</p>
            <p
              class="paragraph"
            >ICF邀请国内外电影专家组成主竞赛单元的评审委员会，对申报影片进行评选。入围影片将在颁奖典礼前公布，获奖作品的最终结果将在颁奖典礼上公布。评委不能与竞赛影片的制作或商业开发有关。</p>
            <p class="paragraph">ICF的奖杯造型为黑豹首人型身体的设计；</p>
            <p class="paragraph">可简称：ICF黑豹奖。</p>

            <p class="standard_4">评委会将评出下列奖项：</p>
            <div class="content1">
              <p>最佳短片奖</p>
              <p>最佳导演奖</p>
              <p>最佳编剧奖</p>
              <p>最佳剪辑奖</p>
              <p>最佳艺术指导奖</p>
              <p>最佳特效制作奖</p>
              <p>最佳角色设计奖</p>
              <p>最佳环境设计奖</p>
              <p>最佳动效设计奖</p>
              <p>最佳技术贡献奖</p>
            </div>
            <p class="titles">第九条</p>
            <p
              class="paragraph"
            >入围ICF竞赛单元作品的导演（制片人或制作团队的其他代表）将被邀请到北京参加为期一周的电影周及其他相关活动，包括映后谈、ICF论坛、D9区创投计划、颁奖典礼等。最终入围者需要独立承担赴中旅游签和旅游保险，主办方可根据需求提供邀请函。</p>

            <p class="titles">第十条</p>
            <p class="paragraph">凡申报影片参加北京国际CG动画电影周，即被视为承认并接受本章程。申报方有义务确保影片选送ICF的合法性。</p>

            <p class="titles">第十一条</p>
            <p class="paragraph">北京国际CG动画电影周组委会保留对本章程条款的最终解释权，并有权处理本章程未涉及的一切事项。</p>

            <p class="titles">第十二条</p>
            <p class="paragraph_13">北京国际CG动画电影周组委会联系方式：</p>
            <p class="paragraph13">邮箱：111</p>
            <p class="paragraph13">电话：111</p>
          </div>
        </div>
        <!-- 按钮 -->
        <p class="remember">
          <el-checkbox v-model="checked_icf">我已阅读并同意以上章程</el-checkbox>
        </p>
        <p
          class="submit_btn"
          :class="!checked_icf?'submit_btn_gery':''"
          @click="declare('ICF')"
        >阅读并同意</p>
      </el-dialog>






      <!-- 在线申报弹框 -->
      <el-dialog
        title
        class="declare_ICF_box"
        :lock-scroll="true"
        :visible.sync="online_dialog_box"
      >
       <div class="regulations">
          <div class="border">
            <p class="title_main">北京国际CG动画电影周章程2020年</p>
            <p class="titles">第一条</p>
            <p class="paragraph">本章程适用于报名参加第一届D9区国际CG动画电影周（以下简称“ICF”）主竞赛单元的影片。</p>
            <p class="titles">第二条</p>
            <p class="paragraph">
              北京国际CG动画电影周，是由北京国际设计周组委会与中国电影美术学会CG艺术专委会联合主办的专业电影文化交流活动。
              电影周的宗旨是鼓励全球范围内优秀CG电影的创作和CG技术创新，发现和激励有有创造力的电影、动画团队和艺术家，搭建CG电影创作新理念与最前沿动画制作技术交流合作的国际化平台。
            </p>
            <!-- 第三条 -->
            <p class="titles">第三条</p>
            <p class="paragraph">ICF每年9月开始提交作品，12月举办颁奖典礼。</p>
            <!-- 第四条 -->
            <p class="titles">第四条</p>

            <!-- 标准 -->
            <p class="paragraph">主竞赛单元申报影片应符合下列标准：</p>
            <div class="content">
              <p>1．首届主竞赛单元只接受VFX电影短片、三维动画短片、VR短片三个方向；</p>
              <p>2．2018年8月1日以后制作完成的原创短片项目；</p>
              <p>3．所有类别的短片时长要求5-17min；</p>
              <p>4．题材类型不限，须全CG三维制作；</p>
              <p>5．字幕至少包含中文或英文字幕；</p>
              <p>6．申报作品提交内容：</p>
            </div>

            <!-- 内容 -->
            <div class="content1">
              <p>（1）作品正片：5-17min；</p>
              <p>（2）作品预告片/花絮：45-150s;</p>
              <p>（3）作品制作解析：不限时长；</p>
              <p>（4）作品简介：200字以内；</p>
              <p>（5）作品海报：1-3张；</p>
              <p>（6）作品封面（视频的封面显示）：1张；</p>
              <p>（7）作品概念设定图：不限数量；</p>
              <p>（8）作品故事板分镜图：不限数量。</p>
            </div>
            <p class="standard_4">7.申报作品提交格式</p>
            <p class="standard_4">（1）CG电影短片与三维动画短片：</p>
            <p class="standard4">a.视频mp4格式，容量小于4G;</p>
            <p class="standard4">b.所有图片jpg/gif/png格式，像素小于10M；</p>
            <p class="standard_4">（2）VR短片：</p>
            <p
              class="standard4"
            >a.视频360°全景mp4格式，容量小于4G，要求4K，可在PC或MAC平台上 使用UtoVR、VR Player、PotPlayer 、爱奇艺VR等支持本地播放的VR播放器 播放器观看；</p>
            <p class="standard4">b. 所有图片jpg/gif/png格式，像素小于10M；</p>

            <p class="standard_4">8．受邀参加ICF展映的影片，DCP须符合电影节数字拷贝技术标准。</p>
            <p
              class="standard_4"
            >9． 申报者须保证拥有该作品的全部版权或持有版权方授权许可证明，证明其有权在ICF上宣传、放映和参加相关活动。因申报作品著作权、商标权及其他知识产权所产生的任何法律纠纷或经济损失，由申报者承担全部法律责任，主办方及活动组织方免责；</p>
            <p
              class="standard_4"
            >10． 申报者须确保作品的申报符合所在国家/地区的法律法规要求，因申报方违反其所在国家/地区的法律法规所产生的任何法律纠纷或经济损失，由申报者承担全部法律责任，主办方及活动组织方免责；</p>

            <p class="titles">第五条</p>
            <p
              class="paragraph"
            >请登录ICF网站www.di9qu.com，通过“影片申报”模块进行在线报名，并逐项填写申报影片的必填项信息。申报影片的截止日期为2020年11月30日。</p>

            <p
              class="paragraph"
            >ICF只接受官网在线申报影片，不接受其他移动储存介质或在线样片链接。申报影片的所有资料等应按主办方的要求提交，申报者同意并授权主办方无偿使用申报作品提供的所有材料，进行推广宣传、展映活动、媒体的各种媒介宣传使用的权利，ICF组委会承诺：申报影片的作有资料仅限于对本活动和本影片的宣传（如主办方要求，申报者需承诺提供相应授权文件)。</p>

            <p class="titles">第六条</p>
            <p class="paragraph">
              申报作品提交成功后，组委会原则上不再接受新的版本。如果报名信息有重大变化，请及时联系组委会。
              申报者所提交的所有材料均不退还，请务必保留原件，申报影片在主竞赛单元入围后，即不得以任何理由擅自撤回影片，退出评选。
              如需撤回影片，ICF组委会有权根据实际情况决定是否接受。如因申报方提出撤回影片申请给ICF或ICF组委会造成任何损失的，申报方应当赔偿由此造成的一切经济损失及名誉损失，包括但不限于支付赔偿金，向电影周出具书面致歉信及在公众平台公开道歉等。最终进入展映单元的作品必须参加主办方举办的放映活动。
            </p>

            <p class="titles">第七条</p>
            <p class="paragraph">入围的影片，申报方需提供完整的中英文字幕台本。</p>
            <p class="paragraph">少数民族语言或方言对白的华语影片，申报方须提供中英文字幕拷贝。</p>
            <p class="paragraph">影片放映时配有电子中文字幕显示，英译中的翻译和字幕机操作由电影周负责。</p>

            <p class="titles">第八条</p>
            <p
              class="paragraph"
            >ICF邀请国内外电影专家组成主竞赛单元的评审委员会，对申报影片进行评选。入围影片将在颁奖典礼前公布，获奖作品的最终结果将在颁奖典礼上公布。评委不能与竞赛影片的制作或商业开发有关。</p>
            <p class="paragraph">ICF的奖杯造型为黑豹首人型身体的设计；</p>
            <p class="paragraph">可简称：ICF黑豹奖。</p>

            <p class="standard_4">评委会将评出下列奖项：</p>
            <div class="content1">
              <p>最佳短片奖</p>
              <p>最佳导演奖</p>
              <p>最佳编剧奖</p>
              <p>最佳剪辑奖</p>
              <p>最佳艺术指导奖</p>
              <p>最佳特效制作奖</p>
              <p>最佳角色设计奖</p>
              <p>最佳环境设计奖</p>
              <p>最佳动效设计奖</p>
              <p>最佳技术贡献奖</p>
            </div>
            <p class="titles">第九条</p>
            <p
              class="paragraph"
            >入围ICF竞赛单元作品的导演（制片人或制作团队的其他代表）将被邀请到北京参加为期一周的电影周及其他相关活动，包括映后谈、ICF论坛、D9区创投计划、颁奖典礼等。最终入围者需要独立承担赴中旅游签和旅游保险，主办方可根据需求提供邀请函。</p>

            <p class="titles">第十条</p>
            <p class="paragraph">凡申报影片参加北京国际CG动画电影周，即被视为承认并接受本章程。申报方有义务确保影片选送ICF的合法性。</p>

            <p class="titles">第十一条</p>
            <p class="paragraph">北京国际CG动画电影周组委会保留对本章程条款的最终解释权，并有权处理本章程未涉及的一切事项。</p>

            <p class="titles">第十二条</p>
            <p class="paragraph_13">北京国际CG动画电影周组委会联系方式：</p>
            <p class="paragraph13">邮箱：111</p>
            <p class="paragraph13">电话：111</p>
          </div>
        </div>

         <!-- 按钮 -->
        <p class="remember">
          <el-checkbox v-model="checked_online">我已阅读并同意以上章程</el-checkbox>
        </p>
        <p
          class="submit_btn"
          :class="!checked_online?'submit_btn_gery':''"
          @click="declare('online')"
        >阅读并同意</p>
      </el-dialog>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/views/nav.vue";
import Footer from "@/views/footer.vue";
export default {
  name: "Login",
  components: { Nav, Footer },
  data() {
    return {
      mainnav: "4",
      checked: true,
      checked2: true,
      submit_btn: false,
      checked_icf: false,
      online_dialog_box: false,
      checked_online: false,
    };
  },
  methods: {
    declare_ICF() {
      this.submit_btn = true;
    },
    declare_online() {
      this.online_dialog_box = true;
    },
    declare(name) {
      switch (name) {
        case "ICF":
          if (this.checked_icf) {
            this.$router.push("/upload_steps");
          }
          break;
        case "online":
          if (this.checked_online) {
            this.$router.push("/online_steps");
          }
          break;

        default:
          break;
      }
    },
  },

  computed: {},
};
</script>
<style lang='less' scoped>
.submit {
  background: #0a0a0a;
  color: #333;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .submit_box {
    width: 1000px;
    height: 640px;
    margin: 0 auto;

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
      padding: 45px 58px 0 58px;
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
        height: 380px;
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
          margin-top: 130px;
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
// 章程2020年
/deep/ .declare_ICF_box {
  .el-dialog {
    width: 700px;
    height: 750px;
    overflow: hidden;
    .el-dialog__body {
      // padding: 24px 56px;
      padding-bottom: 56px;
      width: 700px;
      height: 750px;
      overflow-y: scroll;
      
    }
  }

  .regulations {
    color: #141414;
    text-align: left;
    // margin-top: 80px;
    .border {
      width: 600px;
      height: 3780px;
      margin: 0 auto;
      border: 1px solid #9b9b9b;
      border-radius: 4px;
      overflow-y: scroll;
      
    }
    .title_main {
      font-size: 26px;
      text-align: center;
      font-weight: 700;
      margin-top: 15px;
    }
    .titles {
      font-size: 20px;
      margin: 60px 0 10px 0;
      text-indent: 2em;
    }
    .paragraph {
      font-size: 18px;
      color: #666;
      line-height: 30px;
      text-indent: 2em;
      // margin-bottom: 20px;
    }
    .paragraph3 {
      font-size: 18px;
      color: #666;
      margin-bottom: 10px;
      text-indent: 2em;
    }
    .standard {
      font-size: 16px;
      color: #666;
      line-height: 30px;
      margin-bottom: 20px;
      text-indent: 2em;
    }
    .content {
      font-size: 16px;
      color: #666;
      line-height: 30px;
      text-indent: 2em;
      // margin-bottom: 5px;
    }
    .content1 {
      font-size: 16px;
      color: #666;
      line-height: 30px;
      margin-bottom: 10px;
      text-indent: 2em;
    }
    .standard4 {
      font-size: 16px;
      color: #666;
      line-height: 30px;
      margin-left: 15px;
      text-indent: 2em;
    }
    .standard_4 {
      font-size: 16px;
      color: #666;
      line-height: 30px;
      text-indent: 2em;
      // margin-top:10px;
    }
    .paragraph_13 {
      font-size: 16px;
      color: #666;
      line-height: 30px;
      text-indent: 2em;
    }
    .paragraph13 {
      font-size: 16px;
      color: #666;
      line-height: 30px;
      text-indent: 2em;
    }
  }
  .remember {
    margin-top: 50px;
    text-align: center;
  }
  .submit_btn {
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
    cursor: pointer;
    width: 314px;
    height: 46px;
    line-height: 46px;
    background: #c8a461;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
  }
  .submit_btn_gery {
    background: #9b9b9b;
  }

  .el-icon-close:before {
    font-size: 24px;
  }
}
</style>
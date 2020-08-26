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
            <span class="item_title">影片方向：</span>
            <div class="upload_radio">
              <el-radio v-model="upload_info.base.filmtype" label="0">VFX电影短片</el-radio>
              <el-radio v-model="upload_info.base.filmtype" label="1">三维动画短片</el-radio>
              <el-radio v-model="upload_info.base.filmtype" label="2">VR短片</el-radio>
            </div>
          </div>
          <!-- 片名 -->
          <div class="content_item">
            <span class="item_title">中文片名：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.filmname" placeholder="请填写中文片名"></el-input>
              <span class="red">*</span>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">英文片名：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.enfilmname" placeholder="请填写英文片名"></el-input>
              <span class="fff">*</span>
            </div>
          </div>
          <!-- 简介 -->
          <div class="content_item">
            <span class="item_title">影片中文简介：</span>
            <div class="item_right">
              <el-input
                type="textarea"
                placeholder="请填写中文简介"
                :autosize="{ minRows: 3, maxRows: 1000}"
                v-model="upload_info.base.synopsis"
                maxlength="1000"
                show-word-limit
              ></el-input>
              <span class="red_ch">*</span>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">影片英文简介：</span>
            <div class="item_right">
              <el-input
                type="textarea"
                placeholder="请填写英文简介"
                :autosize="{ minRows: 3, maxRows: 1000}"
                v-model="upload_info.base.ensynopsis"
                maxlength="1000"
                show-word-limit
              ></el-input>
            </div>
            <span class="fff">*</span>
          </div>
          <div class="content_item">
            <span class="item_title">出品方：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.producer" placeholder="拥有影片版权方，不得超过三家"></el-input>
              <span class="red">*</span>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">制片国家/地区：</span>
            <div class="item_right">
              <el-cascader
                placeholder="请选择制片国家/地区"
                :options="area_data"
                v-model="upload_info.base.productarea"
                filterable
              ></el-cascader>
              <span class="red">*</span>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">对白语言：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.dialogue" placeholder="请输入对白语言"></el-input>
              <span class="red">*</span>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">字幕语言：</span>
            <div class="item_right">
              <el-select v-model="upload_info.base.subtitle " placeholder="请选择字幕语言">
                <el-option
                  v-for="item in subtitle_list"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span class="red">*</span>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">片长：</span>
            <div class="item_right">
              <div class="item_slice_box">
                <!-- <el-input v-model="upload_info.base.filmetime" placeholder="请输入时长"></el-input> -->
                <el-input-number
                  v-model="upload_info.base.filmetime"
                  @change="handleChange"
                  :min="5"
                  :max="17"
                  label="请输入时长"
                ></el-input-number>
                <div class="notes">（注：5-17分钟之间） *</div>
              </div>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">制作完成日期：</span>
            <div class="item_right">
              <!-- <el-input v-model="upload_info.base.company"></el-input> -->
              <div class="block">
                <!-- <span class="demonstration">默认</span> -->
                <el-date-picker
                  v-model="upload_info.base.time"
                  type="date"
                  value-format="timestamp"
                  placeholder="选择日期"
                ></el-date-picker>
                <span class="red">*</span>
              </div>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">主创团队：</span>
            <div class="item_right">
              <el-input v-model="upload_info.base.creators" placeholder="请注明职务与姓名"></el-input>
              <span class="red">*</span>
            </div>
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
              <div class="upload_box" style="position:relative;">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p class="info_p">尺寸240*180 不超过1G</p>
                </div>
                <input
                  type="file"
                  id="fileUpload"
                  style="opacity:0;width:100%;height:100%;position:absolute;top:0;left:0;cursor: pointer;"
                  @change="fileChange_product($event)"
                />
              </div>
              <div class="upload_box" v-for="item in upload_info.product.video_list">
                <!-- <p style="color:red;">{{ upload_info.product.authProgress+'%'}}</p> -->
                <el-progress :percentage="upload_info.product.authProgress"></el-progress>
              </div>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">上传海报：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <el-upload
                    class="avatar-uploader"
                    action="http://47.94.20.54:8080/d9time/fileUpload/uploadImg"
                    :on-success="product_str_success"
                    :on-change="product_str_change"
                    :on-exceed="product_str_exceed"
                    :limit="3"
                    :show-file-list="false"
                    name="file"
                  >
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">1-3张</p>
                  </el-upload>
                </div>
              </div>
              <div class="upload_box" v-for="item in product_str_fileList">
                <img :src="item.imageUrl" alt />
              </div>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">上传封面：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <el-upload
                    class="avatar-uploader"
                    action="http://47.94.20.54:8080/d9time/fileUpload/uploadImg"
                    :on-success="product_cover_success"
                    :on-change="product_cover_change"
                    :on-exceed="product_cover_exceed"
                    :limit="1"
                    :show-file-list="false"
                    name="file"
                  >
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">1张</p>
                  </el-upload>
                </div>
              </div>
              <div class="upload_box" v-for="item in product_cover_fileList">
                <img :src="item.imageUrl" alt />
              </div>
            </div>
          </div>
        </div>
        <!-- 正片信息 -->
        <div class="content" v-if="stpes_active==2">
          <div class="content_item">
            <span class="item_title">上传作品：</span>
            <div class="item_right">
              <div class="upload_box" style="position:relative;">
                <div class="upload_img_box">
                  <img class="add_img" src="@/assets/images/upload/add.png" alt />
                  <p class="info_p">尺寸240*180 不超过4G</p>
                </div>
                <input
                  type="file"
                  id="fileUpload_1"
                  style="opacity:0;width:100%;height:100%;position:absolute;top:0;left:0;cursor: pointer;"
                  @change="fileChange_positive($event)"
                />
              </div>
              <div class="upload_box" v-for="item in upload_info.positive.video_list">
                <!-- <p style="color:red;">{{ upload_info.product.authProgress+'%'}}</p> -->
                <el-progress :percentage="upload_info.positive.authProgress"></el-progress>
              </div>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">上传海报：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <!-- 
                   positive: {
                  posters-->
                  <el-upload
                    class="avatar-uploader"
                    action="http://47.94.20.54:8080/d9time/fileUpload/uploadImg"
                    :on-success="positive_posters_success"
                    :on-change="positive_posters_change"
                    :on-exceed="positive_posters_exceed"
                    :limit="3"
                    :show-file-list="false"
                    name="file"
                  >
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">1-3张</p>
                  </el-upload>
                </div>
              </div>
              <div class="upload_box" v-for="item in positive_posters_fileList">
                <img :src="item.imageUrl" alt />
              </div>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">上传图片：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <el-upload
                    class="avatar-uploader"
                    action="http://47.94.20.54:8080/d9time/fileUpload/uploadImg"
                    :on-success="positive_concepts_success"
                    :on-change="positive_concepts_change"
                    :on-exceed="positive_concepts_exceed"
                    :limit="3"
                    :show-file-list="false"
                    name="file"
                  >
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">（美术概念设定1-3张）</p>
                  </el-upload>
                </div>
              </div>
              <div class="upload_box" v-for="item in positive_concepts_fileList">
                <img :src="item.imageUrl" alt />
              </div>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title"></span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <el-upload
                    class="avatar-uploader"
                    action="http://47.94.20.54:8080/d9time/fileUpload/uploadImg"
                    :on-success="positive_storys_success"
                    :on-change="positive_storys_change"
                    :on-exceed="positive_storys_exceed"
                    :limit="3"
                    :show-file-list="false"
                    name="file"
                  >
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">（故事版分镜1-3张）</p>
                  </el-upload>
                </div>
              </div>
              <div class="upload_box" v-for="item in positive_storys_fileList">
                <img :src="item.imageUrl" alt />
              </div>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">上传封面：</span>
            <div class="item_right">
              <div class="upload_box">
                <div class="upload_img_box">
                  <el-upload
                    class="avatar-uploader"
                    action="http://47.94.20.54:8080/d9time/fileUpload/uploadImg"
                    :on-success="positive_tooling_success"
                    :on-change="positive_tooling_change"
                    :on-exceed="positive_tooling_exceed"
                    :limit="1"
                    :show-file-list="false"
                    name="file"
                  >
                    <img class="add_img" src="@/assets/images/upload/add.png" alt />
                    <p class="info_p">支持jpg/gif/png格式RGB模式</p>
                    <p class="info_p">尺寸240*180不超过10M</p>
                    <p class="info_p">1张</p>
                  </el-upload>
                </div>
              </div>

              <div class="upload_box" v-for="item in positive_tooling_fileList">
                <img :src="item.imageUrl" alt />
              </div>
            </div>
          </div>
        </div>
        <!-- 联系人信息 -->
        <div class="content" v-if="stpes_active==3">
          <div class="content_item">
            <span class="item_title">申报人姓名：</span>
            <div class="item_right">
              <el-input v-model="upload_info.contacts.Realname" placeholder="请输入联系人姓名"></el-input>
              <span class="red">*</span>
            </div>
          </div>
          <div class="content_item">
            <span class="item_title">公司名称：</span>
            <div class="item_right">
              <el-input v-model="upload_info.contacts.Company" placeholder="请输入公司名称"></el-input>
              <span class="fff">*</span>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">手机号：</span>
            <div class="item_right">
              <el-input v-model="upload_info.contacts.Phone" placeholder="请输入联系人手机号"></el-input>
              <span class="red">*</span>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">邮箱：</span>
            <div class="item_right">
              <el-input v-model="upload_info.contacts.Email" placeholder="请输入联系人邮箱"></el-input>
              <span class="red">*</span>
            </div>
          </div>

          <div class="content_item">
            <span class="item_title">收件地址：</span>
            <div class="item_right">
              <el-input v-model="upload_info.contacts.Address" placeholder="请填输入收件地址"></el-input>
              <span class="red">*</span>
            </div>
          </div>
          <div class="content_item">
            <div class="tips">注：*星号为必填项</div>
          </div>
        </div>
        <!-- 保存 上一步下一步 -->
        <div class="btn_box">
          <span class="next btn_common" @click="next_click" v-if="stpes_active!=3">下一页</span>
          <span class="save btn_common" v-if="stpes_active!=3" @click="save_info">保存</span>
          <span class="save btn_common" v-if="stpes_active==3" @click="save_info">提交</span>
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
import axios from "axios";
export default {
  name: "UploadSteps",
  components: { Nav, Footer, filmNav, realFoot },
  data() {
    return {
      Index: "4",
      mainnav: "2",
      stpes_active: 0,
      // 联系人
      base: {
        name: "",
        type: "1",
        des: "",
        mobile: "",
        email: "",
        addres: "",
      },
      checked: true,

      upload_info: {
        // 基础信息
        base: {
          filmtype: "0", //影片方向
          filmname: "", //中文片名
          enfilmname: "", //英文片名
          synopsis: "", //中文简介
          ensynopsis: "", //英文简介
          producer: "", //出品方
          dialogue: "", //对白语言
          filmetime: "5", // 电影时长  片长
          creators: "", //出品团队
          subtitle: "", //字幕语言
          productarea: "", //制片国家地区
          time: "", //制作完成时间
        },
        // 预告片
        product: {
          production: "",
          file: null,
          uploader: null,
          video_list: [],
          authProgress: "0",
          videoId: "",
          str: [], //海报
          cover: [], //海报
        },
        // 正片信息
        positive: {
          Video: "",
          file: null,
          uploader: null,
          video_list: [],
          authProgress: "0",
          videoId: "",
          posters: [],
          concepts: [],
          storys: [],
          tooling: [],
        },
        // 联系人
        contacts: {
          Realname: "", //姓名
          Company: "", // 公司名称
          Phone: "", //手机号
          Email: "", //邮箱
          Address: "", // 地址
        },
      },
      //  字幕语言
      subtitle_list: [
        {
          value: "中文",
          label: "中文",
        },
        {
          value: "English",
          label: "English",
        },
      ],
      value: "",
      // 选择日期
      value1: "",
      area_data: [],
      imageUrl: "",
      fileList: [],
      // 预告片
      product_str_fileList: [], //海报数组
      product_cover_fileList: [], //封面

      positive_posters_fileList: [], //正片海报数组
      positive_concepts_fileList: [], //美术概念
      positive_storys_fileList: [], //故事分镜
      positive_tooling_fileList: [], //故事分镜
    };
  },

  mounted() {
    this.area_data = country;
  },
  methods: {
    // 上传预告片视频
    fileChange_product(e) {
      this.upload_info.product.video_list = [];
      this.upload_info.product.file = e.target.files[0];
      if (!this.upload_info.product.file) {
        alert("请先选择需要上传的文件!");
        return;
      }
      var Title = this.upload_info.product.file.name;
      var userData = '{"Vod":{}}';
      if (this.upload_info.product.uploader) {
        this.upload_info.product.uploader.stopUpload();
        this.upload_info.product.authProgress = 0;
        this.statusText = "";
      }
      this.upload_info.product.uploader = this.createUploader_product();
      this.upload_info.product.video_list.push(this.upload_info.product.file);
      console.log(userData);
      this.upload_info.product.uploader.addFile(
        this.upload_info.product.file,
        null,
        null,
        null,
        userData
      );
      this.uploadDisabled = false;
      this.pauseDisabled = true;
      this.resumeDisabled = true;
      this.upload_info.product.uploader.startUpload();
    },
    createUploader_product(type) {
      let self = this;
      let uploader = new AliyunUpload.Vod({
        timeout: 60000,
        partSize: 1048576,
        parallel: 5,
        retryCount: 3,
        retryDuration: 2,
        region: "cn-shanghai",
        userId: "1805191102790951",
        // 添加文件成功
        addFileSuccess: function (uploadInfo) {
          self.uploadDisabled = false;
          self.resumeDisabled = false;
          self.statusText = "添加文件成功, 等待上传...";
          console.log("addFileSuccess: " + uploadInfo.file.name);
        },
        // 开始上传
        onUploadstarted: function (uploadInfo) {
          // 如果是 UploadAuth 上传方式, 需要调用 uploader.setUploadAuthAndAddress 方法
          // 如果是 UploadAuth 上传方式, 需要根据 uploadInfo.videoId是否有值，调用点播的不同接口获取uploadauth和uploadAddress
          // 如果 uploadInfo.videoId 有值，调用刷新视频上传凭证接口，否则调用创建视频上传凭证接口
          // 注意: 这里是测试 demo 所以直接调用了获取 UploadAuth 的测试接口, 用户在使用时需要判断 uploadInfo.videoId 存在与否从而调用 openApi
          // 如果 uploadInfo.videoId 存在, 调用 刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)
          // 如果 uploadInfo.videoId 不存在,调用 获取视频上传地址和凭证接口(https://help.aliyun.com/document_detail/55407.html)
          if (!uploadInfo.videoId) {
            // let createUrl = '/d9time/movie/createUploadVideo?title=15237304009'
            let createUrl =
              "/d9time/movie/createUploadVideo?title=111&filename=sasa.mp4";
            axios.get(createUrl).then(({ data }) => {
              let uploadAuth = data.UploadAuth;
              let uploadAddress = data.UploadAddress;
              let videoId = data.VideoId;
              console.log("文件开始上传...");
              console.log(data);
              console.log("------------------------------------------------");
              uploader.setUploadAuthAndAddress(
                uploadInfo,
                uploadAuth,
                uploadAddress,
                videoId
              );
            });
            self.statusText = "文件开始上传...";
            console.log(
              "onUploadStarted:" +
                uploadInfo.file.name +
                ", endpoint:" +
                uploadInfo.endpoint +
                ", bucket:" +
                uploadInfo.bucket +
                ", object:" +
                uploadInfo.object
            );
          } else {
            // 如果videoId有值，根据videoId刷新上传凭证
            // https://help.aliyun.com/document_detail/55408.html?spm=a2c4g.11186623.6.630.BoYYcY
            // let refreshUrl = '/d9time/movie/createUploadVideo?title=15237304009'
            let url_refres11 = "/d9time/movie/refreshUploadVideo";
            axios.get(refreshUrl).then(({ data }) => {
              let uploadAuth = data.UploadAuth;
              let uploadAddress = data.UploadAddress;
              let videoId = data.VideoId;
              uploader.setUploadAuthAndAddress(
                uploadInfo,
                uploadAuth,
                uploadAddress,
                videoId
              );
            });
          }
        },
        // 文件上传成功
        onUploadSucceed: function (uploadInfo) {
          console.log(uploadInfo.videoId);
          self.upload_info.product.production = uploadInfo.videoId;

          console.log(
            "onUploadSucceed: " +
              uploadInfo.file.name +
              ", endpoint:" +
              uploadInfo.endpoint +
              ", bucket:" +
              uploadInfo.bucket +
              ", object:" +
              uploadInfo.object
          );
          self.statusText = "文件上传成功!";
          self.$message({
            message: "上传成功",
            type: "success",
          });
        },
        // 文件上传失败
        onUploadFailed: function (uploadInfo, code, message) {
          console.log(
            "onUploadFailed: file:" +
              uploadInfo.file.name +
              ",code:" +
              code +
              ", message:" +
              message
          );
          self.statusText = "文件上传失败!";
        },
        // 取消文件上传
        onUploadCanceled: function (uploadInfo, code, message) {
          console.log(
            "Canceled file: " +
              uploadInfo.file.name +
              ", code: " +
              code +
              ", message:" +
              message
          );
          self.statusText = "文件已暂停上传";
        },
        // 文件上传进度，单位：字节, 可以在这个函数中拿到上传进度并显示在页面上
        onUploadProgress: function (uploadInfo, totalSize, progress) {
          console.log(
            "onUploadProgress:file:" +
              uploadInfo.file.name +
              ", fileSize:" +
              totalSize +
              ", percent:" +
              Math.ceil(progress * 100) +
              "%"
          );
          let progressPercent = Math.ceil(progress * 100);
          self.upload_info.product.authProgress = progressPercent;
          self.statusText = "文件上传中...";
        },
        // 上传凭证超时
        onUploadTokenExpired: function (uploadInfo) {
          // 上传大文件超时, 如果是上传方式一即根据 UploadAuth 上传时
          // 需要根据 uploadInfo.videoId 调用刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)重新获取 UploadAuth
          // 然后调用 resumeUploadWithAuth 方法, 这里是测试接口, 所以我直接获取了 UploadAuth
          let refreshUrl = "/d9time/movie/createUploadVideo?title=15237304009";
          axios.get(refreshUrl).then(({ data }) => {
            let uploadAuth = data.UploadAuth;
            uploader.resumeUploadWithAuth(uploadAuth);
            console.log(
              "upload expired and resume upload with uploadauth " + uploadAuth
            );
          });
          self.statusText = "文件超时...";
        },
        // 全部文件上传结束
        onUploadEnd: function (uploadInfo) {
          console.log("onUploadEnd: uploaded all the files");
          self.statusText = "文件上传完毕";
        },
      });
      return uploader;
    },
    // 上传正片视频
    fileChange_positive(e) {
      this.upload_info.positive.video_list = [];
      this.upload_info.positive.file = e.target.files[0];
      if (!this.upload_info.positive.file) {
        alert("请先选择需要上传的文件!");
        return;
      }
      var Title = this.upload_info.positive.file.name;
      var userData = '{"Vod":{}}';
      if (this.upload_info.positive.uploader) {
        this.upload_info.positive.uploader.stopUpload();
        this.upload_info.positive.authProgress = 0;
        this.statusText = "";
      }
      this.upload_info.positive.uploader = this.createUploader_positive();
      this.upload_info.positive.video_list.push(this.upload_info.positive.file);
      console.log(userData);
      this.upload_info.positive.uploader.addFile(
        this.upload_info.positive.file,
        null,
        null,
        null,
        userData
      );
      this.uploadDisabled = false;
      this.pauseDisabled = true;
      this.resumeDisabled = true;
      this.upload_info.positive.uploader.startUpload();
    },
    createUploader_positive(type) {
      let self = this;
      let uploader = new AliyunUpload.Vod({
        timeout: 60000,
        partSize: 1048576,
        parallel: 5,
        retryCount: 3,
        retryDuration: 2,
        region: "cn-shanghai",
        userId: "1805191102790951",
        // 添加文件成功
        addFileSuccess: function (uploadInfo) {
          self.uploadDisabled = false;
          self.resumeDisabled = false;
          self.statusText = "添加文件成功, 等待上传...";
          console.log("addFileSuccess: " + uploadInfo.file.name);
        },
        // 开始上传
        onUploadstarted: function (uploadInfo) {
          // 如果是 UploadAuth 上传方式, 需要调用 uploader.setUploadAuthAndAddress 方法
          // 如果是 UploadAuth 上传方式, 需要根据 uploadInfo.videoId是否有值，调用点播的不同接口获取uploadauth和uploadAddress
          // 如果 uploadInfo.videoId 有值，调用刷新视频上传凭证接口，否则调用创建视频上传凭证接口
          // 注意: 这里是测试 demo 所以直接调用了获取 UploadAuth 的测试接口, 用户在使用时需要判断 uploadInfo.videoId 存在与否从而调用 openApi
          // 如果 uploadInfo.videoId 存在, 调用 刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)
          // 如果 uploadInfo.videoId 不存在,调用 获取视频上传地址和凭证接口(https://help.aliyun.com/document_detail/55407.html)
          if (!uploadInfo.videoId) {
            // let createUrl = '/d9time/movie/createUploadVideo?title=15237304009'
            let createUrl =
              "/d9time/movie/createUploadVideo?title=111&filename=sasa.mp4";
            axios.get(createUrl).then(({ data }) => {
              let uploadAuth = data.UploadAuth;
              let uploadAddress = data.UploadAddress;
              let videoId = data.VideoId;
              console.log("文件开始上传...");
              console.log(data);
              console.log("------------------------------------------------");
              uploader.setUploadAuthAndAddress(
                uploadInfo,
                uploadAuth,
                uploadAddress,
                videoId
              );
            });
            self.statusText = "文件开始上传...";
            console.log(
              "onUploadStarted:" +
                uploadInfo.file.name +
                ", endpoint:" +
                uploadInfo.endpoint +
                ", bucket:" +
                uploadInfo.bucket +
                ", object:" +
                uploadInfo.object
            );
          } else {
            // 如果videoId有值，根据videoId刷新上传凭证
            // https://help.aliyun.com/document_detail/55408.html?spm=a2c4g.11186623.6.630.BoYYcY
            // let refreshUrl = '/d9time/movie/createUploadVideo?title=15237304009'
            let url_refres11 = "/d9time/movie/refreshUploadVideo";
            axios.get(refreshUrl).then(({ data }) => {
              let uploadAuth = data.UploadAuth;
              let uploadAddress = data.UploadAddress;
              let videoId = data.VideoId;
              uploader.setUploadAuthAndAddress(
                uploadInfo,
                uploadAuth,
                uploadAddress,
                videoId
              );
            });
          }
        },
        // 文件上传成功
        onUploadSucceed: function (uploadInfo) {
          console.log(uploadInfo.videoId);
          self.upload_info.positive.Video = uploadInfo.videoId;
          console.log(self.upload_info);

          console.log(
            "onUploadSucceed: " +
              uploadInfo.file.name +
              ", endpoint:" +
              uploadInfo.endpoint +
              ", bucket:" +
              uploadInfo.bucket +
              ", object:" +
              uploadInfo.object
          );
          self.statusText = "文件上传成功!";
          self.$message({
            message: "上传成功",
            type: "success",
          });
        },
        // 文件上传失败
        onUploadFailed: function (uploadInfo, code, message) {
          console.log(
            "onUploadFailed: file:" +
              uploadInfo.file.name +
              ",code:" +
              code +
              ", message:" +
              message
          );
          self.statusText = "文件上传失败!";
        },
        // 取消文件上传
        onUploadCanceled: function (uploadInfo, code, message) {
          console.log(
            "Canceled file: " +
              uploadInfo.file.name +
              ", code: " +
              code +
              ", message:" +
              message
          );
          self.statusText = "文件已暂停上传";
        },
        // 文件上传进度，单位：字节, 可以在这个函数中拿到上传进度并显示在页面上
        onUploadProgress: function (uploadInfo, totalSize, progress) {
          console.log(
            "onUploadProgress:file:" +
              uploadInfo.file.name +
              ", fileSize:" +
              totalSize +
              ", percent:" +
              Math.ceil(progress * 100) +
              "%"
          );
          let progressPercent = Math.ceil(progress * 100);
          self.upload_info.positive.authProgress = progressPercent;
          self.statusText = "文件上传中...";
        },
        // 上传凭证超时
        onUploadTokenExpired: function (uploadInfo) {
          // 上传大文件超时, 如果是上传方式一即根据 UploadAuth 上传时
          // 需要根据 uploadInfo.videoId 调用刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)重新获取 UploadAuth
          // 然后调用 resumeUploadWithAuth 方法, 这里是测试接口, 所以我直接获取了 UploadAuth
          let refreshUrl = "/d9time/movie/createUploadVideo?title=15237304009";
          axios.get(refreshUrl).then(({ data }) => {
            let uploadAuth = data.UploadAuth;
            uploader.resumeUploadWithAuth(uploadAuth);
            console.log(
              "upload expired and resume upload with uploadauth " + uploadAuth
            );
          });
          self.statusText = "文件超时...";
        },
        // 全部文件上传结束
        onUploadEnd: function (uploadInfo) {
          console.log("onUploadEnd: uploaded all the files");
          self.statusText = "文件上传完毕";
        },
      });
      return uploader;
    },

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
      // 这个地方先做基本信息的保存请求接口
      // 当点击保存时候，获取输入的信息

      this.axios
        .post("/d9time/movie/addMovie", {
          userid: "ss111s",
          filmtype: this.upload_info.base.filmtype, //影片类型
          filmname: this.upload_info.base.filmname, //作品名称
          enfilmname: this.upload_info.base.enfilmname, //作品名称
          synopsis: this.upload_info.base.synopsis, //简介
          producer: this.upload_info.base.producer, //出品方
          productarea: this.upload_info.base.productarea[0], //制作地区
          dialogue: this.upload_info.base.dialogue, //对白语言
          subtitle: this.upload_info.base.subtitle, //字幕语言
          filmetime: this.upload_info.base.filmetime, //片长：
          //缺少制作完成日期字段
          creators: this.upload_info.base.creators, //出品团队
          // 预告片信息
          production: this.upload_info.product.production,
          cover: this.upload_info.product.cover,
          str: this.upload_info.product.str,

          // 正片信息
          Video: this.upload_info.positive.Video,
          posters: this.upload_info.positive.posters, //海报
          concepts: this.upload_info.positive.concepts, //美术概念
          storys: this.upload_info.positive.storys, //故事分镜
          Tooling: this.upload_info.positive.tooling, //封面

          //  联系人字段
          Realname: this.upload_info.contacts.Realname, //姓名
          Company: this.upload_info.contacts.Company, // 公司名称
          Phone: this.upload_info.contacts.Phone, //手机号
          Email: this.upload_info.contacts.Email, //邮箱
          Address: this.upload_info.contacts.Address, // 地址
        })
        .then((response) => {
          console.log(response);
          console.log("ok");
          if (response.data.code == "200") {
            this.$message({
              message: response.data.message,
              type: "success",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      // if (
      //   this.upload_info.base.filmname == "" ||
      //   this.upload_info.base.synopsis == "" ||
      //   this.upload_info.base.producer == "" ||
      //   this.upload_info.base.productarea==""||
      //   this.upload_info.base.dialogue==""||
      //   this.upload_info.base.subtitle==""||
      //   this.upload_info.base.filmetime=="" ||
      //   this.upload_info.base.time==""||
      //   this.upload_info.base.creators==""
      // ) {
      //   this.$message({
      //     message: "*星号为必填项,不能为空",
      //     type: "warning",
      //   });
      //   // 走到这里说明不符合
      //   return false;
      // }
    },
    handleAvatarSuccess(res, file, fileList) {
      console.log("----------------------------------------");
      console.log("handleAvatarSuccess");
      console.log(res);
      console.log(file);
      console.log(fileList);

      console.log("----------------------------------------");
    },
    beforeAvatarUpload(file) {
      console.log("----------------------------------------");
      console.log(file);
      console.log("beforeAvatarUpload");
      console.log("----------------------------------------");
    },
    handleChange(file, fileList) {
      console.log("----------------------------------------");
      console.log("handleChange");
      console.log(file);
      // this.imageUrl = URL.createObjectURL(file.raw);
      console.log(fileList);
      this.fileList = fileList;
      this.fileList.map((item) => {
        item.imageUrl = URL.createObjectURL(item.raw);
      });
      console.log("----------------------------------------");
    },

    // 预告片海报上传
    product_str_success(res, file, fileList) {
      console.log(res);
      this.upload_info.product.str.push(res.data[0].fileUrl);
    },
    product_str_change(file, fileList) {
      this.product_str_fileList = fileList;
      this.product_str_fileList.map((item) => {
        item.imageUrl = URL.createObjectURL(item.raw);
      });
    },
    product_str_exceed(file, fileList) {
      this.$message({
        message: "图片最多上传3张",
        type: "warning",
      });
    },
    // 预告片封面
    product_cover_success(res, file, fileList) {
      console.log(res);
      this.upload_info.product.cover.push(res.data[0].fileUrl);
    },
    product_cover_change(file, fileList) {
      this.product_cover_fileList = fileList;
      this.product_cover_fileList.map((item) => {
        item.imageUrl = URL.createObjectURL(item.raw);
      });
    },
    product_cover_exceed(file, fileList) {
      this.$message({
        message: "图片最多上传1张",
        type: "warning",
      });
    },

    // 正片海报上传
    positive_posters_success(res, file, fileList) {
      console.log(res);
      this.upload_info.positive.posters.push(res.data[0].fileUrl);
    },
    positive_posters_change(file, fileList) {
      this.positive_posters_fileList = fileList;
      this.positive_posters_fileList.map((item) => {
        item.imageUrl = URL.createObjectURL(item.raw);
      });
    },
    positive_posters_exceed(file, fileList) {
      this.$message({
        message: "图片最多上传3张",
        type: "warning",
      });
    },

    // 美术概念
    positive_concepts_success(res, file, fileList) {
      console.log(res);
      this.upload_info.positive.concepts.push(res.data[0].fileUrl);
    },
    positive_concepts_change(file, fileList) {
      this.positive_concepts_fileList = fileList;
      this.positive_concepts_fileList.map((item) => {
        item.imageUrl = URL.createObjectURL(item.raw);
      });
    },
    positive_concepts_exceed(file, fileList) {
      this.$message({
        message: "图片最多上传3张",
        type: "warning",
      });
    },
    // 故事分镜
    positive_storys_success(res, file, fileList) {
      console.log(res);
      this.upload_info.positive.storys.push(res.data[0].fileUrl);
    },
    positive_storys_change(file, fileList) {
      this.positive_storys_fileList = fileList;
      this.positive_storys_fileList.map((item) => {
        item.imageUrl = URL.createObjectURL(item.raw);
      });
    },
    positive_storys_exceed(file, fileList) {
      this.$message({
        message: "图片最多上传3张",
        type: "warning",
      });
    },
    // 正片封面
    positive_tooling_success(res, file, fileList) {
      console.log(res);
      this.upload_info.positive.tooling.push(res.data[0].fileUrl);
    },
    positive_tooling_change(file, fileList) {
      this.positive_tooling_fileList = fileList;
      this.positive_tooling_fileList.map((item) => {
        item.imageUrl = URL.createObjectURL(item.raw);
      });
    },
    positive_tooling_exceed(file, fileList) {
      this.$message({
        message: "图片最多上传1张",
        type: "warning",
      });
    },

    // 文件上传超出提示
    onExceed(file, fileList) {
      this.$message({
        message: "图片最多上传3张",
        type: "warning",
      });
    },
  },
  computed: {},
  // 片长
  handleChange(filmetime) {
    console.log(filmetime);
  },
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
        margin-right: 10px;
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
    width: 1200px;
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
        height: 48px;
        background: #fff;
        border: 1px solid #999999;
        color: #333;
        border-radius: 0;
        font-size: 16px;
      }
      .el-textarea {
        width: 640px;
      }
      .el-textarea__inner {
        width: 640px;
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
        flex: 1;
        // width: 700px;
        float: right;
        font-size: 14px;
        text-align: left;
        display: flex;
        // border: 1px solid red;
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
      .el-input {
        width: 640px;
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
      .el-input-number__decrease.is-disabled {
        display: none;
      }
      .el-input-number__increase {
        display: none;
      }
      .el-input-number__decrease {
        display: none;
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
    border: 1px solid red;
    width: 240px;
    height: 180px;
    border: 1px solid #999;
    background: #fff;
    position: relative;
    margin-bottom: 20px;
    margin-right: 10px;
    // float: left;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
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
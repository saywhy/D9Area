<template>
  <div class="body_box">
    <div class="film_fund">
      <film-nav :activenav="Index"></film-nav>
      <div class="img_box">
        <img src="@/assets/images/simple_fund/banner.jpg" alt class="jj" />
      </div>
      <div class="film_fund_box">
        <div class="container_box">
          <p class="sub_title">人才猎头</p>
          <p class="content">为才华横溢的CG影片创作者提供一个展示自我的机遇，为年轻导演的CG电影项目提供支持以及国际化的展示平台，并帮助他们寻找项目启动所需的资金赞助。</p>
          <p class="sub_title">项目评选</p>
          <p class="content_project">旨在挖掘并扶持新兴人才，每年都会从D9区国际CG动画电影周的竞赛单元入围作品中遴选出优秀的原创CG短片作品。</p>
          <p
            class="content_project"
          >电影基金会评选单元是D9区国际CG动画电影周竞赛单元评选的一个重要环节，电影基金会与竞赛单元的评审团会在颁奖典礼上为3部最佳影片颁奖。</p>
          <p class="sub_title">电影公寓</p>
          <p class="content_project">每年评选出6位优秀的导演，让他们在中国写下自己的故事。</p>
          <p
            class="content_project"
          >电影公寓的6位导演，将从ICF电影周的竞赛单元中入围作品的导演中筛选出来，每一位导演将开始从已有的短片作品中开始规划自己的首部或者第二部长片计划。电影公寓分两期举办，每期时长3个月。</p>
          <p
            class="content_project"
          >ICF组委会将为他们提供与ICF合作城市的中心地带的一栋公寓，此外还有帮助他们撰写剧本的个性化活动以及能与电影界专业人士近距离接触的团体活动。</p>
          <p class="sub_title">工作坊</p>
          <p
            class="content"
          >ICF委托电影基金会创立工作坊，展现电影周鼓励CG影片创作的坚定意愿。工作坊每年都将会在全球范围内评选10个长片制作项目，并邀请其导演前来ICF电影周，与专业人士展开接触。项目的质量和品质以及项目资金的进展情况是工作坊展开评选的主要指标。所有入选的导演都将获得一项国际资助，以加快其制作进程。</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/views/footer.vue";
import filmNav from "@/views/film_nav.vue";
export default {
  components: { Footer, filmNav },
  data() {
    return {
      Index: "5",
      mainnav: "2",
    };
  },
};
</script>

<style lang="less" scoped>
.img_box {
  width: 100%;
  height: 300px;
  position: fixed;
  z-index: 1;
  img {
    width: 100%;
    height: 300px;
  }
}

.film_fund_box {
  background: #fff;
  position: relative;
  z-index: 999;
  margin-top: 300px;
  padding-bottom: 70px;
  .container_box {
    background: #fff;
    width: 1200px;
    margin: 0 auto;
    padding-top: 70px;
  }
}
.sub_title {
  margin:40px 0 10px 0;
  font-size: 22px;
  color: #cfbd44;
  text-align: left;
  font-weight: bold;
}
.content_project {
  text-align: left;
  font-size: 18px;
  color: #000;
  text-indent: 2em;
  line-height: 40px;
}
.content {
  text-align: left;
  font-size: 18px;
  color: #000;
  text-indent: 2em;
  line-height: 30px;
  margin-bottom: 20px;
}
</style>
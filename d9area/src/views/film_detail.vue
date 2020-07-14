<template>
  <div class="body_box">
    <Nav :mainnav='mainnav'></Nav>
    <div class="FilmDetail">
      <div class="detail_top">

      </div>
      <div class="detail_content">
        <div class="container_main">
          dsadasdsa
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
  name: 'FilmDetail',
  components: { Nav, Footer },
  data () {
    return {
      mainnav: '',
    }
  },
  methods: {},
  computed: {}
}
</script>
<style lang='less'>
.FilmDetail {
  background: #0a0a0a0a;
  border: 1px solid red;
  margin-top: 80px;
  .detail_top {
    height: 797px;
    background-image: url('../assets/images/film_detail/detail_bg.png');
    background-size: 100% 100%;
  }
}
</style>
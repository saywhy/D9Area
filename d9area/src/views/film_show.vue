<template>
  <div class="container">
    <Nav></Nav>
    <div class="FilmShow">
        <div  class="FilmShow_top"> 

        </div>
    
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Swiper from 'swiper'
import Nav from '@/views/nav.vue'
import Footer from '@/views/footer.vue'
export default {
  name: 'FilmShow',
  components: { Nav, Footer },
  data () {
    return {
  
    }
  },
  mounted () {

  },
  methods: {

  },

}
</script>
<style lang="less">
.FilmShow{
    .FilmShow_top{
        height: 615px;
         background-image: url("../assets/images/film/film_show_bg.png");
    }

}

</style>

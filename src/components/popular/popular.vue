<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '正在热映'}" v-tabbar-menu-index="0">
    <div class="page-content">
      <film-list></film-list>
    </div>
  </div>
</template>

<script>
  import filmList from '../filmList/filmList'

  export default{
    data () {
      return {}
    },
    computed: {

    },
    methods: {
      back () {
        $router.back({ path: '/popular' })
      }
    },
    created () {

    },
    components: {
      filmList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

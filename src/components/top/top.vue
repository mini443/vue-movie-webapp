<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '最具口碑'}" v-tabbar-menu-index="2">
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
    components: {
      filmList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

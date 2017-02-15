<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '即将上映'}" v-tabbar-menu-index="1">
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

    },
    created () {

    },
    components: {
      filmList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

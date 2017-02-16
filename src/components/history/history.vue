<template>
  <div class="page has-navbar" v-nav="{ title: '浏览历史', showBackButton: true }">
    <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
    <div class="page-content">
      <div class="tab-content">

        <div class="null-tip">
          <i class="null-icon cell-item-icon icon ion-ios-bookmarks-outline"></i>
          <div class="null-txt">
            亲，找不到{{tabs[tabIndex]}}的浏览记录
          </div>
          <router-link to="/" class="null-action">去逛逛</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        tabs: [
          '电影',
          '人物'
        ],
        tabIndex: 0
      }
    },
    methods: {
      onTabClick (index) {
        console.log(index)
        this.tabIndex = index
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab-content
    .null-tip
      width: 100%
      text-align: center
      padding: 80px 0 0 0
      .null-icon
        font-size: 80px
        color: #42b983
      .null-txt
        margin-top: 30px
        font-size: 15px
        color: #999
      .null-action
        display: block
        margin: 30px auto
        width: 100px
        height: 40px
        line-height: 40px
        text-align: center
        border: 1px solid #42b983
        color: #42b983
        border-radius: 4px
</style>

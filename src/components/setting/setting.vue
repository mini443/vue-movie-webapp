<template>
  <div class="page has-navbar" v-nav="{ title: '设置', showBackButton: true }">
    <div class="page-content setting-list" style="padding-top: 54px;">

      <router-link to="/userInfo" class="item item-icon-right thin-border item-group">
        个人资料
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </router-link>

      <div class="list list-ios item-group" thin-border>
        <div class="item item-ios item-icon-right">
          手机信息
          <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
        </div>
        <div class="item item-ios item-icon-right" @click="clearStorage">
          清除缓存
          <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
        </div>
      </div>

      <router-link to="/userInfo" class="item item-icon-right thin-border item-group">
        更新位置
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </router-link>

      <router-link to="/userInfo" class="item item-icon-right thin-border item-group">
        关于
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </router-link>

    </div>

  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    methods: {
      clearStorage () {
        $dialog.confirm({
          title: '是否清除',
          content: '清除缓存会删除浏览历史和收藏及个人资料',
          cancelText: '取消',
          okText: '清除'
        }).then((res) => {
          console.log('confirm result: ', res)

          if (!res) return
          $loading.show('正在清除..').then(() => {
            console.log('loading showed')
            $loading.hide(2000).then(() => {
              console.log('loading hide')
            })
          })
        })
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .setting-list
    background-color: #f4f4f4
    .item-group
      margin-bottom: 8px
</style>

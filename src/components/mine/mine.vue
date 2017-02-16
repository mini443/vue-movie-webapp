<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '我的'}" v-tabbar-menu-index="3">
    <div class="page-content">

      <div class="user-info"
           style="background-image: url(https://static.sesine.com/wechat-weapp-movie/images/user_bg_2.jpg)">
        <router-link to="/skin" class="user-skin icon ion-tshirt"></router-link>
        <img class="user-avatar"
             src="http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ2ibFME7vKuDSTToBJLR2WfAkkwic0md5byls8fLF7uYXVIGiaqaeDkHwkRKgrJXZDzAr2dkQD6Wl3w/0">
        <div class="user-nickname">
          Gesneriana
          <i class="user-sex-male icon ion-male"></i>
        </div>
        <div class="user-location">Hubei,Wuhan</div>
      </div>

      <div class="cell">

        <router-link to="/collection" class="cell-item" :style=" {height: cellItemHeight}">
          <i class="cell-item-icon icon ion-android-star"></i>
          <div class="cell-item-title">收藏</div>
        </router-link>

        <router-link to="/history" class="cell-item" :style=" {height: cellItemHeight}">
          <i class="cell-item-icon icon ion-android-list"></i>
          <div class="cell-item-title">浏览记录</div>
        </router-link>

        <div class="cell-item" :style=" {height: cellItemHeight}">
          <i class="cell-item-icon icon ion-android-phone-portrait"></i>
          <div class="cell-item-title">摇一摇</div>
        </div>

        <div class="cell-item" :style=" {height: cellItemHeight}">
          <i class="cell-item-icon icon ion-images"></i>
          <div class="cell-item-title">相册</div>
        </div>

        <router-link to="/setting" class="cell-item" :style=" {height: cellItemHeight}">
          <i class="cell-item-icon icon ion-android-settings"></i>
          <div class="cell-item-title">设置</div>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      cellItemHeight: function () {
        return document.body.clientWidth / 3 + 'px'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .user-info
    position: relative
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    text-align: center
    padding: 20px 0
    .user-skin
      position: absolute
      top: 10px
      right: 10px
      display: inline-block
      width: 30px
      height: 30px
      line-height: 30px
      text-align: center
      font-size: 18px
      color: #fff
      border: 2px solid #fff
      border-radius: 50%
    .user-avatar
      width: 100px
      height: 100px
      border-radius: 50%
      box-shadow: 0 0 150px 50px rgba(255, 255, 255, .2), 0 1px 0 rgba(255, 255, 255, 0.4)
    .user-nickname
      margin: 5px 0
      color: #fff
      font-size: 20px
      text-shadow: 1px 1px 0 rgba(0, 0, 0, .6)
      .user-sex-male
        color: #69c
        font-size: 20px
    .user-location
      font-size: 12px
      color: #eee
      text-shadow: 1px 1px 0 rgba(0, 0, 0, .6)

  .cell
    width: 100%
    font-size: 0
    display: flex
    flex-wrap: wrap
    .cell-item
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      position: relative
      width: 33.3333%
      height: 100px
      font-size: 15px
      &:before
        content: ''
        pointer-events: none
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 1px
        background-color: #ccc
        transform: scaleY(0.4)
      &:after
        content: ''
        pointer-events: none
        position: absolute
        top: 0
        right: 0
        width: 1px
        height: 100%
        background-color: #ccc
        transform: scaleX(0.4)
    for idx in 3 6 9
      .cell-item:nth-child({idx})
        &:after
          width: 0
      .cell-item-icon
        font-size: 40px
        color: #47a86c
      .cell-item-title
        margin-top: 10px
        color: #666
</style>

<template>
  <div class="page has-navbar" v-nav="{ title: 'About', showBackButton: true }">
    <div class="page-content">

      <div class="pd-hd">
        <div class="pd-hd-bg"
             style="background-image: url(https://img3.doubanio.com/img/celebrity/medium/23782.jpg)"></div>
        <div class="ph-intro">
          <div class="pd-avatar"
               style="background-image: url(https://img3.doubanio.com/img/celebrity/medium/23782.jpg)"></div>
          <div class="pd-name-cn">艾米·亚当斯</div>
          <div class="pd-name-en">Amy Adams</div>
          <div class="pd-address">意大利,阿维亚诺</div>
        </div>
        <div class="pd-favorite">
          <i class="icon ion-ios-star"></i>
          收藏
        </div>
      </div>

      <div class="pd-bd">

        <div class="work-item-wrapper">
          <div class="work-item">
            <img src="https://img3.doubanio.com/lpic/s4010863.jpg" alt="" class="work-img">
            <div class="work-intro">
              <div class="work-title">白宫风云 第四季</div>
              <div class="work-roles">担任：演员</div>
            </div>
          </div>
        </div>

        <div class="work-item-wrapper">
          <div class="work-item">
            <img src="https://img3.doubanio.com/lpic/s4010863.jpg" alt="" class="work-img">
            <div class="work-intro">
              <div class="work-title">白宫风云 第四季</div>
              <div class="work-roles">担任：演员</div>
            </div>
          </div>
        </div>

        <div class="work-item-wrapper">
          <div class="work-item">
            <img src="https://img3.doubanio.com/lpic/s4010863.jpg" alt="" class="work-img">
            <div class="work-intro">
              <div class="work-title">白宫风云 第四季</div>
              <div class="work-roles">担任：演员</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    computed: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pd-hd
    position: relative
    overflow: hidden
    width: 100%
    height: 300px
    &::before
      content: ''
      display: block
      position: absolute
      z-index: 1
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, .6)
    .pd-hd-bg
      position: absolute
      z-index: 0
      width: 100%
      height: 100%
      background-repeat: no-repeat
      background-position: center top
      background-size: cover
      filter: blur(7px)
    .ph-intro
      display: flex
      align-items: center
      flex-direction: column
      justify-content: center
      position: absolute
      z-index: 2
      width: 100%
      height: 100%
      color: #fff
      .pd-avatar
        width: 140px
        height: 140px
        border-radius: 50%
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        overflow: hidden
        box-shadow: 0 0 80px rgba(255, 255, 255, .6)
      .pd-name-cn
        padding: 5px 10px
        margin-top: 15px
        background-color: rgba(0, 0, 0, .2)
        border-radius: 16px
        box-shadow: 0 0 10px rgba(0, 0, 0, .2) inset, 1px 1px 0 rgba(255, 255, 255, .1)
      .pd-name-en
        margin-top: 5px
        font-size: 12px
      .pd-address
        margin-top: 10px
        font-size: 12px
    .pd-favorite
      position: absolute
      z-index: 3
      top: 15px
      right: 15px
      padding: 5px 15px
      font-size: 16px
      line-height: 1
      border-radius: 15px
      border: 1px solid #fff
      color: #fff
      transition: color .3s, background-image .3s
      .ion-ios-star
        font-size: 18px

  .pd-bd
    width: 100%
    padding: 5px 0 0 5px
    font-size: 0
    .work-item-wrapper
      display: inline-block
      width: 50%
      padding: 0 5px 5px 0
      .work-item
        width: 100%
        overflow: hidden
        background-color: #f8f8f8
        border: 1px solid #eee
        border-radius: 5px
        .work-img
          width: 100%
        .work-intro
          padding: 5px
          text-align: center
          .work-title
            font-size: 16px
            color: #333
          .work-roles
            margin-top: 5px
            font-size: 14px
            color: #666
</style>

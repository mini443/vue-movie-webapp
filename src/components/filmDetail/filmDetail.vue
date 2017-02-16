<template>
  <div class="page has-navbar" v-nav="{ title: '电影详情', showBackButton: true }">
    <div class="page-content">


      <div class="fd-head">
        <div class="fd-head-bg"></div>
        <div class="fd-head-container">
          <img class="fd-head-pic" src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2408407697.jpg">
          <div class="fd-head-info">
            <div class="info-title">乘风破浪</div>
            <div class="info-text">导演：韩寒</div>
            <div class="info-text">演员：邓超 / 彭于晏 / 赵丽颖 / 董子健</div>
            <div class="info-text">豆瓣评分：7分</div>
            <div class="info-text">上映年份：2017年</div>
          </div>
        </div>
        <div class="fd-favorite">收藏</div>
      </div>

      <div class="fd-data">
        <div class="fd-data-item">
          <div class="fd-data-num">160000</div>
          <div class="fd-data-title">看过</div>
        </div>
        <div class="fd-data-item">
          <div class="fd-data-num">20071</div>
          <div class="fd-data-title">想看</div>
        </div>
        <div class="fd-data-item">
          <div class="fd-data-num">154227</div>
          <div class="fd-data-title">评分人数</div>
        </div>
      </div>

      <div class="fd-bd">
        <div class="fd-bd-title">剧情简介</div>
        <div class="fd-bd-intro">赛车手阿浪（邓超 饰）一直对父亲（彭于晏
          饰）反对自己的赛车事业耿耿于怀，在向父亲证明自己的过程中，阿浪却意外卷入了一场奇妙的冒险。他在这段经历中结识了一群兄弟好友，一同闯过许多奇幻的经历，也对自己的身世有了更多的了解。
        </div>
        <div class="fd-bd-title">导演 / 演员</div>
        <div class="fd-bd-person">
          <div class="fd-bd-person-wrapper">
            <img src="https://img3.doubanio.com/img/celebrity/medium/1385100761.5.jpg">
            <img src="https://img3.doubanio.com/img/celebrity/medium/1385100761.5.jpg">
            <img src="https://img3.doubanio.com/img/celebrity/medium/1385100761.5.jpg">
            <img src="https://img3.doubanio.com/img/celebrity/medium/1385100761.5.jpg">
            <img src="https://img3.doubanio.com/img/celebrity/medium/1385100761.5.jpg">
            <img src="https://img3.doubanio.com/img/celebrity/medium/1385100761.5.jpg">
            <img src="https://img3.doubanio.com/img/celebrity/medium/1385100761.5.jpg">
          </div>
        </div>
        <div class="fd-bd-title">标签</div>
        <div class="fd-bd-tag"></div>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fd-head
    position: relative
    width: 100%
    overflow: hidden
    &::before
      content: ''
      display: block
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: 1
      background-color: rgba(0, 0, 0, .6)
    .fd-head-bg
      position: absolute
      left: 0
      top: 0
      z-index: 0
      width: 100%
      height: 100%
      background-image: url('https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2408407697.jpg')
      background-size: cover
      background-position: center
      filter: blur(15px)
      transform: scale(1.2)

    .fd-head-container
      display: flex
      align-items: flex-start
      padding: 30px 20px 10px
      position: relative
      z-index: 2
      .fd-head-pic
        display: block
        width: 50%
        border-radius: 3px
        box-shadow: 0 15px 75px rgba(255, 255, 255, .3)
      .fd-head-info
        margin-left: 20px
        color: #fff
        .info-title
          margin: 10px 0 15px 0
          font-size: 21px
        .info-text
          margin-bottom: 10px
          font-size: 14px
          line-height: 1.2
    .fd-favorite
      width: 80px
      font-size: 15px
      line-height: 1
      border: 1px solid #fff
      border-radius: 15px
      padding: 5px 5px 5px 25px
      margin: 0 0 10px 16%
      color: #fff
      text-align: center
      background-position: 10px center
      background-repeat: no-repeat
      background-image: url('../../assets/img/star24_off@2x.png')
      background-size: 20px
      transition: margin .3s, color .3s, background-image .3s

  .fd-data
    display: flex
    height: 80px
    padding: 20px 0
    border-bottom: 1px solid #f4f4f4
    .fd-data-item
      flex: 1
      text-align: center
      border-right: 1px solid #f4f4f4
      &:last-child
        border: none
      .fd-data-num
        font-size: 20px
        font-weight: 100
        color: #444
      .fd-data-title
        margin-top: 3px
        color: #999

  .fd-bd
    padding: 0 20px 20px
    .fd-bd-title
      padding-left: 10px
      margin-top: 20px
      margin-bottom: 20px
      font-size: 16px
      font-weight: bold
      color: #444
      border-left: 5px solid #47a86c
    .fd-bd-intro
      text-align: justify
      line-height: 1.2
      color: #666
    .fd-bd-person
      width: 100%
      overflow-x: scroll
      overflow-y: hidden
      .fd-bd-person-wrapper
        font-size: 0
        width: 1200px
        &>img
          margin-left: 10px
          &:first-child
            margin: 0
</style>

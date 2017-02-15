<template>
  <div class="page has-navbar" v-nav="{ title: '收藏', showBackButton: true }">
    <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
    <div class="page-content">
      <div class="tab-content">

        <div v-if="tabIndex === 0" class="col-content col-movie">
          <div class="movie-item">
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2425658570.jpg" class="movie-img">
            <div class="movie-info">
              <div class="movie-txt movie-title">爱乐之城</div>
              <div class="movie-txt">导演：达米安·沙泽勒</div>
              <div class="movie-txt">演员： 瑞恩·高斯林 / 艾玛·斯通 / 约翰·传奇 / J·K·西蒙斯</div>
              <div class="movie-txt">豆瓣评分： 8.7分</div>
              <div class="movie-txt">上映年份：2016年</div>
            </div>
          </div>
          <div class="movie-item">
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2425658570.jpg" class="movie-img">
            <div class="movie-info">
              <div class="movie-txt movie-title">爱乐之城</div>
              <div class="movie-txt">导演：达米安·沙泽勒</div>
              <div class="movie-txt">演员： 瑞恩·高斯林 / 艾玛·斯通 / 约翰·传奇 / J·K·西蒙斯</div>
              <div class="movie-txt">豆瓣评分： 8.7分</div>
              <div class="movie-txt">上映年份：2016年</div>
            </div>
          </div>
        </div>

        <div v-else class="col-content col-person">

          <router-link to="/personDetail" class="person-item">
            <div class="person-intro">
              <div class="person-img" style="background-image: url(https://img3.doubanio.com/img/celebrity/medium/23782.jpg)">
              </div>
              <div class="person-info">
                <div class="person-txt person-name">艾米·亚当斯</div>
                <div class="person-txt">Amy Adams</div>
                <div class="person-txt">意大利,阿维亚诺</div>
                <div class="person-txt">主要作品： 吉米·鸡毛逊毙了！马达翻身当主持 、 白宫风云 第四季 、 70年代秀 第二季 、 办公室 第二季 、 70年代秀 第一季</div>
              </div>
            </div>
          </router-link>

          <div class="person-item">
            <div class="person-intro">
              <div class="person-img" style="background-image: url(https://img3.doubanio.com/img/celebrity/medium/23782.jpg)">
              </div>
              <div class="person-info">
                <div class="person-txt person-name">艾米·亚当斯</div>
                <div class="person-txt">Amy Adams</div>
                <div class="person-txt">意大利,阿维亚诺</div>
                <div class="person-txt">主要作品： 吉米·鸡毛逊毙了！马达翻身当主持 、 白宫风云 第四季 、 70年代秀 第二季 、 办公室 第二季 、 70年代秀 第一季</div>
              </div>
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
    width: 100%
    margin-top: 52px
    padding: 15px
    .col-content
      .movie-item
        display: flex
        align-items: flex-start
        margin-bottom: 20px
        .movie-img
          display: block
          width: 42%
          box-shadow: 5px 5px 15px rgba(0, 0, 0, .2)
          border-radius: 3px
          margin-right: 10px
        .movie-info
          padding-top: 5px
          .movie-txt
            margin-bottom: 8px
            font-size: 14px
            line-height: 1.2
            color: #666
          .movie-title
            font-size: 20px
            color: #333
      .person-item
        display: block
        padding: 20px
        margin-bottom: 20px
        background-color: #fff
        border: 1px solid #e1e1e1
        border-radius: 10px
        box-shadow: 0 5px 15px rgba(0, 0, 0, .1)
        .person-intro
          width: 100%
          display: flex
          align-items: center
          justify-content: space-between
          .person-img
            width: 42%
            padding-bottom: 42%
            background-position: center
            background-repeat: no-repeat
            background-size: cover
            border-radius: 50%
            box-shadow: 0 10px 30px rgba(0, 0, 0, .1)
          .person-info
            width: 50%
            .person-txt
              margin-bottom: 5px
              color: #999
              font-size: 14px
              line-height: 1.2
            .person-name
              font-size: 20px
              color: #666
</style>

<template>
  <div class="page has-navbar" v-nav="{ title: '背景卡', showBackButton: true }">
    <div class="page-content">

      <div class="skin-list">
        <div class="skin-item" :class="{'skin-item-active':index === selected}" :style="{height: skinItemHeight}"
             v-for="(item,index) in skinList"
             @click="choose(index)">
          <img class="skin-img" :src="item.imgUrl">
          <div class="skin-title">{{item.title}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import config from '../../api/config'

  export default {
    data () {
      return {
        skinList: config.skinList,
        selected: 0
      }
    },
    computed: {
      skinItemHeight: () => (document.body.clientWidth - 20) * 400 / 750 + 'px'
    },
    methods: {
      choose: function (index) {
        this.selected = index
        console.log(index)
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .skin-list
    padding: 0 10px 10px 10px
    overflow: hidden
    .skin-item
      position: relative
      margin-top: 10px
      border-radius: 10px
      overflow: hidden
      border: 3px solid transparent
      .skin-img
        width: 100%
        height: 100%
      .skin-title
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        height: 40px
        line-height: 40px
        padding: 0 20px
        background-color: rgba(0, 0, 0, .6)
        border-radius: 0 0 10px 10px
        color: #fff

    .skin-item-active
      border: 3px solid #47a86c
      &::before
        content: ''
        display: block
        position: absolute
        top: -40px
        right: -40px
        z-index: 4
        width: 80px
        height: 80px
        transform: rotate(45deg)
        background-color: #47a86c
      &::after
        content: '在用'
        display: block
        position: absolute
        top: 5px
        right: 3px
        z-index: 4
        text-align: center
        transform: rotate(45deg)
        color: #fff
</style>

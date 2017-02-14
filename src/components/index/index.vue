<template>
  <div class="page"
       v-tabbar="{'menus': menus, menuColor: '#686868', activeMenuColor: '#47a86c', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        menus: [
          {
            iconOn: 'ion-ios-videocam',
            iconOff: 'ion-ios-videocam-outline',
            text: '热映',
            path: '/popular'
          },
          {
            iconOn: 'ion-ios-timer',
            iconOff: 'ion-ios-timer-outline',
            text: '待映',
            path: '/coming'
          },
          {
            iconOn: 'ion-ios-star',
            iconOff: 'ion-ios-star-outline',
            text: '口碑',
            path: '/top'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
            path: '/mine'
          }
        ]
      }
    },

    methods: {
      menuClicked (menuIndex) {
        console.log(menuIndex)
      }
    },

    beforeDestroy () {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>
<style>
  h2 {
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
    color: #888;
  }

  .page.has-navbar .page-content {
    padding-top: 44px;
  }

  .navbar {
    background-color: #47a86c;
    color: #fff
  }

  a.button .icon:before, a.button.icon:before, a.button.icon-left:before, a.button.icon-right:before {
    color: #fff;
  }
</style>

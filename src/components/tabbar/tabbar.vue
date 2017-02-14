<template>
  <div class="page" v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '热映',
            path: '/popular'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '待映',
            path: '/coming'
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
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
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    },

    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }

  .page.has-navbar .page-content {
    padding-top: 45px;
  }
</style>

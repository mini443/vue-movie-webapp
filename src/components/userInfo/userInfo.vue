<template>
  <div class="page has-navbar" v-nav="{ title: '个人资料', showBackButton: true }">
    <div class="page-content">
      <div class="item item-divider">编辑个人资料:</div>

      <von-input type="text" v-model="username" placeholder="请输入姓名" label="姓名" floating-label="true"></von-input>
      <von-input type="text" v-model="nickname" placeholder="请输入昵称" label="昵称" floating-label="true"></von-input>

      <div class="gender-wrapper">
        <von-input type="text" v-model="gender" placeholder="请选择性别" label="性别" floating-label="true"></von-input>
        <div class="genderPicker item item-icon-right thin-border" @click="showActionSheet('weixin')">
        </div>
      </div>

      <div class="birthday-wrapper">
        <von-input type="text" v-model="birthday" placeholder="请选择生日" label="生日" floating-label="true"></von-input>
        <datepicker class="birthdayPicker" v-model="birthday" label="生日" date-format="yyyy-mm-dd"></datepicker>
      </div>

      <von-input type="text" v-model="constellation" placeholder="请选择星座" label="星座" floating-label="true"></von-input>

      <von-input type="text" v-model="company" placeholder="请输入公司名" label="公司" floating-label="true"></von-input>
      <von-input type="text" v-model="school" placeholder="请输入学校名" label="学校" floating-label="true"></von-input>
      <von-input type="text" v-model="phone" placeholder="请输入手机号" label="手机号" floating-label="true"></von-input>
      <von-input type="text" v-model="email" placeholder="请输入邮箱" label="邮箱" floating-label="true"></von-input>

      <von-input type="text" v-model="intro" placeholder="个性签名" label="个性签名" floating-label="true"></von-input>



      <div class="padding">
        <button class="button button-royal button-block">保存</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        username: '',
        nickname: '',
        gender: '',
        birthday: '',
        constellation: '',

        company: '',
        school: '',
        phone: '',
        email: '',

        intro: ''
      }
    },
    methods: {
      showActionSheet (theme) {
        $actionSheet.show({
          theme: theme || '',
          title: '性别',
          buttons: {
            '男': () => {
              this.gender = '男'
            },
            '女': () => {
              this.gender = '女'
            }
          }
        })
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .button-royal
    background-color: #47a86c !important

  .birthday-wrapper,
  .gender-wrapper
    position: relative
    .birthdayPicker,
    .genderPicker
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      opacity: 0

</style>

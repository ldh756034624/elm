<template>

  <header id="head-top">
    <slot name="logo"></slot>
    <section class="head-go-back" v-if="goBack" @click="$router.go(-1)">
      <svg class="back-icon" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2px"/>
      </svg>
    </section>

    <section class="title-head" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span></section>

    <router-link :to="userInfo? '/profile':'/login'" v-if="signUp" class="header-login">
      <svg class="user-avatar" v-if="userInfo">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span class="login-span" v-else>注册|登录</span>
    </router-link>
  </header>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Header',
  props: ['goBack', 'headTitle', 'signUp'],
  data: function () {
    return {}
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped lang="scss">

  @import '../../style/mixin.scss';

  #head-top {
    background-color: $blue;
    position: fixed;
    left: 0;
    right: 0;
    @include wh(100%, 2rem);
    line-height: 2rem;

  }

  .header-login {
    @include sc(0.65rem, #fff);
    .login-span {
      @include centerOfY;
      color: #fff;
      right: 0.55rem;
    }
    .user-avatar {
      right: 0.55rem;
      fill: #fff;
      @include centerOfY;
      @include wh(.8rem, .8rem)
    }
  }

  .head-go-back {
    @include wh(40px, 100%);
  }

  .back-icon {
    @include centerOfY;
    left: .4rem;
  }

  .back-icon {
    position: absolute;
    top: 50%;
  }

  .title-head {
    @include center;
    text-align: center;
    .title_text {
      @include sc(.8rem, #fff);
      font-weight: bold;
    }
  }

</style>

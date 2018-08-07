<template>
  <div class="loginContainer">
    <head-top :goBack="true" :head-title="'密码登录'" :signUp="true"></head-top>

    <form v-if="smsLogin" class="loginForm">
      <section class="input-container">
        <input placeholder="账号" type="text"/>
      </section>

      <section class="input-container">
        <input placeholder="密码" type="text"/>
        <div class="button-switch">
          <div class="circle-button"></div>
          <span>abc</span>
          <span>...</span>
        </div>
      </section>
      <section class="input-container">
        <input placeholder="验证码" type="text"/>
      </section>

    </form>

  </div>
</template>

<script>
import headTop from '../../components/header/Header'

export default {
  name: 'Login',
  components: {
    headTop
  },
  data: function () {
    return {smsLogin: true}
  }
}
</script>

<style scoped lang="scss">
  @import '../../style/mixin.scss';

  .loginForm {
    background-color: #fff;

    .input-container {
      border-bottom: solid 1px #f1f1f1;
      padding: .55rem .8rem;
      display: flex;
      justify-content: space-between;
      input {
        @include sc(.7rem, #666);
        outline: none;
      }
    }
  }

  .loginContainer {
    padding-top: 1.9rem;

  }

  .button-switch{
    display: flex;
    background-color:#ccc;
    justify-content:center;
    @include wh(2rem,.7rem);
    padding: 0 .2rem;
    border: 1px;
    border-radius:.5rem;
    position:relative;
    .circle-button{
      top: -0.2rem;
      left: -0.3rem;
      position:absolute;
      @include wh(1.2rem, 1.2rem);
      background-color: #f1f1f1;
      border-radius: 50%;
      z-index: 1;
    }
    span{
      @include sc(.45rem, #fff);
      line-height:.6rem;
    }
  }
</style>

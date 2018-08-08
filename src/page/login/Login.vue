<template>
  <div class="loginContainer">
    <head-top :goBack="true" :head-title="'密码登录'" :signUp="true"></head-top>

    <form v-if="smsLogin" class="loginForm">
      <section class="input-container">
        <input placeholder="账号" type="text" v-model="userName"/>
      </section>

      <section class="input-container">
        <input placeholder="密码" :type="showPassword? 'text':'password'" v-model="password"/>
        <div class="button-switch" :class="{'button-switch-bg':showPassword}" @click="pwdShowStyle">
          <div class="circle-button" :class="{'transform-x':showPassword}"></div>
          <span>abc</span>
          <span>...</span>
        </div>
      </section>
      <section class="input-container">
        <input placeholder="验证码" type="text" v-model="verifyCode"/>
        <div class="verify-code-wrap">
          <img v-if="captchaCodeImg" :src="captchaCodeImg" @click="changeImg">
          <div class="change-img" @click="changeImg">
            <P>看不清</P>
            <P>换一张</P>
          </div>
        </div>
      </section>

      <section class="tip-wrap">
        <p class="login-tip">温馨提示：未注册过的账号，登录时将自动注册</p>
        <p class="login-tip">注册过的用户可凭账号密码登录</p>

      </section>

      <div class="login-button" @click="goLogin">登录</div>
    </form>

    <router-link class="forgetPwd" to="/fd">重置密码</router-link>

    <alert-tip v-show="showTip" :tipTitle="tipTitle" @closeTip="closeTip"></alert-tip>
  </div>
</template>

<script>
import headTop from '../../components/header/Header'
import {getImgCode} from '../../service/Api'
import alertTip from '../../components/common/AlertTip'

export default {
  name: 'Login',
  components: {
    headTop, alertTip
  },
  data: function () {
    return {
      smsLogin: true,
      showPassword: false,
      password: null,
      captchaCodeImg: null,
      userName: null,
      verifyCode: null,
      tipTitle: '请输入',
      showTip: false
    }
  },
  // eslint-disable-next-line
  created() {
    this.changeImg()
  },
  methods: {
    pwdShowStyle: function () {
      this.showPassword = !this.showPassword
    },
    changeImg: function () {
      getImgCode().then(res => {
        console.log('code: ' + res.code)
        this.captchaCodeImg = res.code
      })
    },
    valid: function (msg, input) {
      if (!input) {
        this.showTip = true
        this.tipTitle = msg
      }
    },
    goLogin: function () {
      this.valid('请输入账号', this.userName)
      this.valid('请输入密码', this.password)
      this.valid('请输入验证码', this.verifyCode)
    },
    closeTip: function () {
      this.showTip = false
    }
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

  .button-switch {
    display: flex;
    background-color: #ccc;
    justify-content: center;
    @include wh(2rem, .7rem);
    padding: 0 .2rem;
    border: 1px;
    border-radius: .5rem;
    position: relative;
    .circle-button {
      top: -0.2rem;
      left: 0rem;
      position: absolute;
      @include wh(1.2rem, 1.2rem);
      background-color: #f1f1f1;
      border-radius: 50%;
      z-index: 1;
      transition: all .3s;
    }
    span {
      @include sc(.45rem, #fff);
      line-height: .6rem;
    }
    .transform-x {
      transform: translateX(1.3rem);
    }
  }

  .button-switch-bg {
    background-color: #4cd964;
  }

  .change-img {
    font-size: 0.55rem;
    color: #666;
  }

  .verify-code-wrap {
    display: flex;
  }

  .tip-wrap {
    display: flex;
    flex-direction: column;
    line-height: .5rem;
    align-items: flex-start;
    .login-tip {
      @include sc(0.5rem, red);
      padding: .4rem .6rem;
      display: block;
    }
  }

  .login-button {
    background-color: #4cd964;
    @include sc(.7rem, #fff);
    border-radius: .2rem;
    text-align: center;
    padding: .4rem 1rem;
    margin: .3rem .6rem;
  }

  .forgetPwd {
    @include sc(.6rem, #3b95e9);
    float: right;
    margin: .3rem .5rem;
  }

</style>

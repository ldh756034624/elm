<template>
  <div class="tip-container">

    <section class="tip-wrap">
      <div class="tip-icon-container">

        <span class="tip-inner-up"></span>
        <span class="tip-inner-down"></span>
      </div>

      <p class="tip-text">{{tipTitle}}</p>
      <div class="confirm-button" @click="closeTip">确认</div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AlertTip',
  props: ['tipTitle'],
  methods: {
    closeTip: function () {
      this.$emit('closeTip')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../style/mixin.scss';

  @keyframes shakeShow {
    0% {
      transform: scale(1);
    }

    35% {
      transform: scale(1.2);
    }

    70% {
      transform: scale(.8);
    }

    100% {
      transform: scale(1);
    }
  }

  .tip-container {
    animation: shakeShow .4s;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    .tip-wrap {
      position: absolute;
      width: 12rem;
      @include center;
      left: 50%;
      top: 50%;
      //@include wh(12rem, 8rem);
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      .tip-text {
        @include sc(.7rem, #333);
        margin-top: .5rem;
      }
      .confirm-button {
        @include sc(.9rem, #fff);
        background-color: #4cd964;
        @include wh(100%, 2rem);
        margin-top: .5rem;
        border-bottom-left-radius: .5rem;
        border-bottom-right-radius: .5rem;
        text-align: center;
        font-weight: bold;
        line-height: 2rem;
      }
      .tip-icon-container {
        margin-top: .5rem;
        @include wh(3rem, 3rem);
        border-radius: 50%;
        border: solid .15rem #f8cb86;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .tip-inner-up {
          @include wh(.1rem, 1.5rem);
          background-color: #f8cb86;

        }
        .tip-inner-down {
          background-color: #f8cb86;
          @include wh(.2rem, .2rem);
          border-radius: 50%;
          margin-top: .3rem;
        }
      }
    }
  }

</style>

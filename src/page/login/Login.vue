<template>
  <div>
    <head-top :goBack="true" :head-title="'密码登录'" :signUp="true"></head-top>

  </div>
</template>

<script>
import headTop from '../../components/header/Header'

export default {
  name: 'Login',
  components: {
    headTop
  }
}
</script>

<style scoped>

</style>

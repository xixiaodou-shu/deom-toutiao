<template>
  <div>
    <router-view />

    <van-tabbar route fixed placeholder>
      <van-tabbar-item replace to="/home" icon="home-o">้ฆ้กต</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">ๆ็</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style lang="less" scoped>
</style>
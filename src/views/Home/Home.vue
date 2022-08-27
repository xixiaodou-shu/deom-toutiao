<template>
  <div class="home-container">
    <!-- <van-nav-bar
      title="热点头条"
      :fixed="true"
    /> -->
    <!-- <van-nav-bar fixed placeholder> -->
    <van-nav-bar fixed >
      <template #left>
        <img src="@/assets/toutiao_logo.png" alt="logo" class="logo" />
      </template>
      <template #right>
        <van-icon
          name="search"
          size="18"
          color="white"
          @click="$router.push('/search')"
        />
      </template>
    </van-nav-bar>
    <!-- 频道列表 -->
    <van-tabs v-model="active" sticky offset-top="1.2267rem">
      <van-tab v-for="item in userChannel" :key="item.id" :title="item.name">
        <ArtList :channelId="item.id"></ArtList>
      </van-tab>
    </van-tabs>
  
  </div>
</template>

<script>
// import request from '../../utils/request'
// 按需导入API接口
import { getUserChannelAPI } from '../../API/homeAPI.js'
import ArtList from '../../components/ArtList/ArtList.vue'
export default {
  name: 'Home',
  components: {
    ArtList
  },
  data() {
    return {
      // 列表个数
      active: 1,
      // 用户频道列表数据
      userChannel: [],
      // 是否显示频道管理弹出层
      show: false,
      // 全部频道列表数据
      allChannel: []
    }
  },
  created() {
    this.initUserChannel()
    // this.initAllChannel()
  },
  methods: {
    // 初始用户频道列表
    async initUserChannel() {
      console.log("initUserChannel")
      // 发起GET请求获取文章的列表数据
      const { data: res } = await getUserChannelAPI()
      if (res.message === "OK") {
        this.userChannel = res.data.channels
        console.log("initUserChannel", this.userChannel)
      }
    }
    // ,
    // // 初始化全部频道列表
    // async initAllChannel() {
    //   console.log("initAllChannel")
    //   // 发起GET请求获取文章的列表数据
    //   const { data: res } = await getAllChannelAPI()
    //   if (res.message === "OK") {
    //     this.allChannel = res.data.channels
    //     console.log("allChannel", this.allChannel)
    //   }
    // },   
    // //  // 移除用户频道 item
    // onUserChannelClick() {

    // }
  }
}
</script>

<style lang="less" scoped>
.home-container{
  // 上 右 下 左
  padding:46px 0 50px 0;
  .van-nav-bar{
    background-color: #007bff;
  }
  // 覆盖组件样式不生效,用deep
  /deep/ .van-nav-bar__title{
    color: white;
  }
}

.logo {
  height: 80%;
}
/deep/ .van-tabs__wrap {
  padding-right: 36px;
  background-color: white;
}
.plus {
  position: fixed;
  top: 58px;
  right: 10px;
  z-index: 999;
}
.van-popup,
.popup-container {
  background-color: transparent;
  height: 100%;
  width: 100%;
}
.popup-container {
  display: flex;
  flex-direction: column;
}

.pop-body {
  flex: 1;
  overflow: scroll;
  padding: 8px;
  background-color: white;
}

.my-channel-box,
.more-channel-box {
  .channel-title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 28px;
    padding: 0 6px;
    .title-bold {
      font-weight: bold;
    }
    .title-gray {
      color: gray;
      font-size: 12px;
    }
  }
}

.btn-edit {
  border: 1px solid #a3a2a2;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
  border-radius: 6px;
  font-size: 12px;
}

.channel-item {
  font-size: 12px;
  text-align: center;
  line-height: 36px;
  background-color: #fafafa;
  margin: 6px;
}

.cross-badge {
  position: absolute;
  right: -3px;
  top: 0;
  border: none;
}

.sp-line {
  margin: 10px 0 20px 0;
}

</style>
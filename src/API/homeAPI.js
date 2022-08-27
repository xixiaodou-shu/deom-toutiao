import request from "../utils/request.js"

// 用户获取频道列表
export const getUserChannelAPI = () => {
  return request.get("/v1_0/user/channels")
}
// // 所有频道的列表
export const getAllChannelAPI = () => {
  return request.get("/v1_0/channels")
}

export const getArtListAPI = (id, time) => {
  return request.get("/v1_0/articles", {
    params: {
      channel_id: id,
      timestamp: time
    }
  })
}
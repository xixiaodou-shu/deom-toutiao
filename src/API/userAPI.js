import request from "../utils/request"

export const getUserInfoAPI = () => {
  return request.get("/v1_0/user")
}
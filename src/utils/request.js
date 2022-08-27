import axio from "axios"

// const request = axio.request({
const request = axio.create({
  // baseURL: 'https://www.escook.cn',
  baseURL: 'http://www.liulongbin.top:8000'
  // http://www.liulongbin.top:8000
  // changeOrigin: true
})

export default request
import request from '../utils/request.js'
export const getArticleListAPI = function(artId) {
  // return request.get('/v1_0/articles/', {
  //   params: {
  //     _page: _page,
  //     _limit: _limit
  //   }
  // })
  return request.get(`/v1_0/articles/${artId}`)
}
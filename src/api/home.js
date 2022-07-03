import request from '@/utils/request'
// 首页租房小组
export const getHomeGroup = () => {
  return request({
    url: '/home/groups'
    // params: area
  })
}

// 获取所有的列表 不传参的话就不用写 params
// export const getAllArticleList = () => {
//   return request({
//     url: 'channels'
//   })
// }
// 首页轮播图 无参数 GET请求
export const getSwiper = () => {
  return request({
    url: '/home/swiper'
    // params: area
  })
}

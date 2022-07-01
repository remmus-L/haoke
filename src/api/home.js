import request from '@/utils/request'
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

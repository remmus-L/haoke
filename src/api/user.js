import request from '@/utils/request'
// export const login = ({ username, password }) => {
//   return request({
//     method: 'POST',
//     url: '/user/login',
//     data: {
//       username,
//       password
//     }
//   })
// }

// 这个括号里写成data就可以了  因为data本来就是被{}包裹的  不用写成({data})
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username: data.username,
      password: data.password
    }
  })
}

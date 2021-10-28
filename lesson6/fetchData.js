import axios from 'axios';

// 接收回调函数的异步函数
export const fetchData = (fn) => {
  axios.get('https://mock.mengxuegu.com/mock/617a4cb2907e5a470176751c/testApi/').then((res) => {
    fn(res.data)
  })
}

// 直接返回promise的异步函数
export const fetchData1 = (fn) => {
  return axios.get('https://mock.mengxuegu.com/mock/617a4cb2907e5a470176751c/testApi1/')
}
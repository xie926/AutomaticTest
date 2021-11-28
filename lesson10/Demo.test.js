// 以前的写法
// import { fetchData } from "./demo";
// import axios from 'axios';
// jest.mock('axios');

// test('fetchData 测试', () => {
//   axios.get.mockResolvedValue({
//     data: "(function(){return '123'})()"
//   })
//   return fetchData().then(data => {
//     expect(eval(data)).toEqual('123')
//   })
// })

// 现在的写法
jest.mock('./Demo') // jest会自动去找__mock__里的demo.js(结果是undefind就重启一下)
// jest.unmock('./Demo')
import { fetchData/*, getNumber*/ } from "./Demo"; // 由于上面的写法，jest同样是找__mock__下的demo.js中的fetchData

const { getNumber } = jest.requireActual('./Demo');

test('fetchData 测试', () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
    // expect(eval(data.data)).toEqual('123')
  })
})
// fetchData是异步函数，不应该发送异步请求，因为如果太多请求，时间会长
// 本地模拟fetchData，对模拟的做一个测试
// jest模拟模块
// 在__mocks__中创建同名文件
test('getNumber 测试', () => {
  expect(getNumber()).toBe(123);
})


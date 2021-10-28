import { runCallBack, runCallBack2, createObject, getData } from "./Demo";
import axios from 'axios';
jest.mock('axios')

// test('测试 runCallBack', () => { // 无法通过，要想通过得修改原代码，return一个func
//   const func = () => {
//     return 'hello'
//   }
//   expect(runCallBack(func)).toBe('hello')
// })


test('测试 runCallBack', () => {
  const func = jest.fn(); // mock函数，捕获函数的调用，只能用jest.fn()来mock，用普通函数无法追溯
  runCallBack(func);
  expect(func).toBeCalled();
})

test('测试 runCallBack2 执行次数', () => {
  const func = jest.fn(); // mock函数，捕获函数的调用，只能用jest.fn()来mock，用普通函数无法追溯
  runCallBack2(func);
  runCallBack2(func);
  expect(func.mock.calls.length).toBe(2);
})

test('测试 runCallBack2 执行参数', () => {
  const func = jest.fn(); // mock函数，捕获函数的调用，只能用jest.fn()来mock，用普通函数无法追溯
  runCallBack2(func);
  expect(func.mock.calls[0]).toEqual(['abd']);
})

test('测试 runCallBack2 返回值', () => {
  // const func = jest.fn(() => '456'); // mock函数，捕获函数的调用，只能用jest.fn()来mock，用普通函数无法追溯
  const func = jest.fn();
  func.mockReturnValueOnce('xie');
  runCallBack2(func);
  runCallBack2(func);
  expect(func.mock.calls[0]).toEqual(['abd']); // 第一次调用参数是'abd'
  expect(func).toBeCalledWith(['abd']); // 每一次调用的时候参数都是'and'

  // console.log(func.mock)
})


test('测试 createObject', () => {
  const func = jest.fn();
  createObject(func);
  console.log(func.mock);
})

test.only('测试 getData', async() => {
  axios.get.mockResolvedValueOnce({data: 'hello'});
  axios.get.mockResolvedValueOnce({data: 'world'});
  await getData().then((data) => {
    expect(data).toBe('hello')
  })
  await getData().then((data) => {
    expect(data).toBe('world')
  })
})

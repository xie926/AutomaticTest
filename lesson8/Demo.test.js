import { runCallBack, runCallBack2, createObject, getData, forEach } from "./Demo";
import Users from "./user";
import axios from 'axios';
jest.mock('axios')

// test('测试 runCallBack', () => { // 无法通过，因为虽然func有返回值，但是runCallBack并没有return，所以undefind，要想通过得修改原代码，需要return一个func，但加一个return是破坏了原本只是想执行callBack的意思
//   const func = () => {
//     return 'hello'
//   }
//   expect(runCallBack(func)).toBe('hello')
// })


test('测试 runCallBack', () => {
  const func = jest.fn(); // mock函数，捕获函数的调用，只能用jest.fn()来mock，用普通函数无法追溯
  runCallBack(func);
  expect(func).toBeCalled();// toBeCalled是用来调用追溯的，普通函数无法进行追溯
})

test('测试 runCallBack 执行次数', () => {
  const func = jest.fn(); // mock函数，捕获函数的调用，只能用jest.fn()来mock，用普通函数无法追溯
  runCallBack(func);
  runCallBack(func);
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
  // func.mockReturnValueOnce('xie').mockReturnValueOnce('yan'); // 可以链式调用
  runCallBack2(func);
  runCallBack2(func);
  // expect(func.mock.calls[0]).toEqual(['abd']); // 第一次调用参数是'abd'
  expect(func).toBeCalledWith('abd'); // 每一次调用的时候参数都是'abd'

  // console.log(func.mock)
})


test('测试 createObject', () => {
  const func = jest.fn();
  createObject(func);
  console.log('测试 createObject', func.mock);
})

test('测试 getData', async() => {
  axios.get.mockResolvedValueOnce({data: 'hello'});
  axios.get.mockResolvedValueOnce({data: 'world'});
  await getData().then((data) => {
    expect(data).toBe('hello')
  })
  await getData().then((data) => {
    expect(data).toBe('world')
  })
})

test('forEach测试', () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

  console.log('forEach测试', mockCallback.mock)
})

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
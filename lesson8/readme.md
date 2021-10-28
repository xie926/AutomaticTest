# mock函数
- 捕获函数的调用以及返回结果，以及this和调用顺序
```js
{
  calls: [ [] ], //被调用的情况，内部的[]指的是callBack的参数
  instances: [ undefined ], // 实例this指向
  invocationCallOrder: [ 1 ], //  调用顺序
  results: [ { type: 'return', value: undefined } ] // 函数输出的结果
}
```
- 他可以自由设置返回结果
```js
// 1
jest.fn(() => '456')

// 2
const func = jest.fn();
func.mockReturnValueOnce('xie');

// 3
const func = jest.fn();
func.mockReturnValue('xie'); //等价于1中内容

// 4 完全等价于1中的写法
const func = jest.fn();
func.mockImplementation(() => {
  return '456'
});

// 5 与2类似，但比2强悍，因为可以有其他逻辑
const func = jest.fn();
func.mockImplementationOnce(() => {
  console.log('我比2强悍')
  return '456'
});

// 6
const func = jest.fn();
func.mockImplementation(() => {
  return this
});
//等价于
func.mockReturnThis();
```

- 改变内部函数的实现
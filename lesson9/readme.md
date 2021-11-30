## 行内的快照

- npm i prettier --save
这样就是可以写行内快照, jest.toMatchInlineSnapshot()
- 对于一些经常变化的数据，可以像以下形式书写
```js
test('测试 generateConfig 函数', () => {
  expect(generateConfig()).toMatchSnapshot({
    date: expect.any(Date) // example
  });
});
```
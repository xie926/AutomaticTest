import { generateConfig } from "./Demo";

test('测试 generateConfig 函数', () => {
  expect(generateConfig()).toEqual({
    server: 'http://localhost',
    port: 8000,
  })
});
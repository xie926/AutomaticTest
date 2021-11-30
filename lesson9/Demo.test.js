import { generateConfig, generateAnthorConfig } from "./Demo";

// test('测试 generateConfig 函数', () => {
//   expect(generateConfig()).toEqual({
//     server: 'http://localhost',
//     port: 8000,
//     domain: 'localhost' // 当我们修改测试用例的时候，导致这个测试不通过，然后就得去修改原有的配置文件，很麻烦，由此引出snapshot
//   })
// });

test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchSnapshot({
    date: expect.any(Date)
  });
});

test("测试 generateAnotherConfig 函数", () => {
  expect(generateAnthorConfig()).toMatchInlineSnapshot(`
    Object {
      "domain": "localhost",
      "port": 8000,
      "server": "http://localhost",
      "time": 20191,
    }
  `);
});

import addDivToBody from "./demo";
import $ from "jquery";
test('测试 addDivToBody', () => {
  addDivToBody();
  addDivToBody();
  expect($('body').find('div').length).toBe(2)
})

// node不具备dom
// jest在node环境下自己模拟了一套dom
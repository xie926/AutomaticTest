jest.mock('./util', 
  // 新写法
  // () => {
  //   const Util = jest.fn(() => {
  //     console.log('constructor -- ')
  //   });
  //   Util.prototype.a = jest.fn(() => {
  //     console.log('a -- ')
  //   });
  //   Util.prototype.b = jest.fn(() => {
  //     console.log('b -- ')
  //   });
  //   return Util;
  // }

) // 默认看到util就会放到第一行，所以以后在写单元测试的时候就放到第一行
// jest.mock 发现util是一个类，会自动把类的构造函数和方法变成jest.fn()
// 做以下转化
// const Util = jest.fn();
// Util.a = jest.fn();
// Util.b = jest.fn();
import Util from './util';
import demoFunction from "./demo";


test('测试 demoFunction', () => {
  demoFunction() // demo文件引入demoFunction，demoFunction的执行过程中他会去调用util，但由于是在demo.test.js中调用的，所以默认会指向mock的util;
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
})


// 因为util中的方法异常复杂，如果直接运行demoFunction，demoFunction肯定会创建一个真实的util实例，然后去执行实例中的a、b方法，那么a、b实际很复杂，这样真实的去执行a、b方法会
// 造成很大的性能消耗，另外，测试并不关心a、b方法执行的结果，我们只需要知道a、b方法执行过就行。他执行过我们也不需要知道他的结果，也不需要拿到它最终的内容是什么，没必要让它真实执行
// 于是，我们可以对这个类进行模拟，创造一个简单的util类，让这个简单util类执行就行。
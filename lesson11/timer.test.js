import timer from './timer';


beforeEach(() => {
  jest.useFakeTimers(); // 只写这个没用
})


// test('timer 测试', (done) => { // done可能导致错误，就是必须被正确调用，作为传参不掉用的话也会报错
//   timer(() => {
//     expect(1).toBe(1);
//     done();
//   })
// })

test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  // 方法一
  // jest.runAllTimers(); // 这个与useFakeTimers配套使用，可避免定时器执行的等待时间，语义为执行所有的timer测试
  // expect(fn).toHaveBeenCalledTimes(2);
  // 方法二
  // jest.runOnlyPendingTimers(); // 语义为执行当前处于队列中即将执行的timer测试，而不会执行没有被创建的那些timer
  // expect(fn).toHaveBeenCalledTimes(1);
  // 方法三
  jest.advanceTimersByTime(3000); // 时间快进多少（推荐使用）
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000); // 这个是在之前的基础上再快进3s，也就是快进了6s
  expect(fn).toHaveBeenCalledTimes(2);
})

test('timer1 测试', () => { // 如果出现多个advanceTimersByTime，即使不在同一个test内，也可能有相互影响，此时就要用到beforeEach生命周期函数
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000); // 时间快进多少（推荐使用）
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000); // 这个是在之前的基础上再快进3s，也就是快进了6s
  expect(fn).toHaveBeenCalledTimes(2);
})

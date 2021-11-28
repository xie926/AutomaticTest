export default (callBack) => {
  setTimeout(() => {
    callBack()

    setTimeout(() => { // 这个timer是为了引出jest.runOnlyPendingTimers()
      callBack()
    }, 3000)
    
  }, 3000) // 3s后才执行，那如果成千上万秒是不是就要等成千上万秒再等结果呢？有没有办法跨越这个等待时间呢？-> jest.useFakeTimers();
}
import Counter from "./Counter";

// const counter = new Counter(); // 不建议


describe('Counter 的测试代码', () => {
  let counter = null;
  console.log('Counter')
  beforeAll(() => { // 在所有测试用例被依次执行前被执行，在里面做一些初始准备
    console.log('beforeAll');
  })

  beforeEach(() => {// 在每个测试用例被依次执行前被执行
    console.log('beforeEach');
    counter = new Counter();
  })

  afterEach(() => {
    console.log('afterEach');
  })

  afterAll(() => {
    console.log('AfterAll')
  })

  describe('测试加法', () => {
    console.log('Counter 加法')
    beforeAll(() => { // 在所有测试用例被依次执行前被执行，在里面做一些初始准备
      console.log('测试加法，beforeAll');
    })
  
    beforeEach(() => {// 在每个测试用例被依次执行前被执行
      console.log('测试加法，beforeEach');
      counter = new Counter();
    })
  
    afterEach(() => {
      console.log('测试加法，afterEach');
    })
  
    afterAll(() => {
      console.log('测试加法，AfterAll')
    })

    test('测试 Counter 中的 addOne 的方法', () => {
      console.log('测试 Counter 中的 addOne 的方法')
      counter.addOne();
      expect(counter.number).toBe(1)
    })

    test('测试 Counter 中的 addTwo 的方法', () => {
      console.log('测试 Counter 中的 addTwo 的方法')
      counter.addTwo();
      expect(counter.number).toBe(2)
    })
  })

  describe('测试减法', () => {

    console.log('Counter 减法')

    beforeAll(() => { // 在所有测试用例被依次执行前被执行，在里面做一些初始准备
      console.log('测试减法，beforeAll');
    })
  
    beforeEach(() => {// 在每个测试用例被依次执行前被执行
      console.log('测试减法，beforeEach');
      counter = new Counter();
    })
  
    afterEach(() => {
      console.log('测试减法，afterEach');
    })
  
    afterAll(() => {
      console.log('测试减法，AfterAll')
    })

    test('测试 Counter 中的 minusOne 的方法', () => {
      console.log('测试 Counter 中的 minusOne 的方法')
      counter.minusOne();
      expect(counter.number).toBe(-1)
    })

    test('测试 Counter 中的 minusTwo 的方法', () => {
      console.log('测试 Counter 中的 minusTwo 的方法')
      counter.minusTwo();
      expect(counter.number).toBe(-2)
    })
  })
})

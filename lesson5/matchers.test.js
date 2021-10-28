test('toMatch', () => {
  const str = 'http://www.xie-yan.com';
  expect(str).toMatch(/xie-yan/);
})

test('toContain', () => {
  const arr = ['xie', 'yan', 'imooc'];
  const data = new Set(arr);
  expect(arr).toContain('xie')
})

const throwNewErrorFunc = () => {
  throw new Error('this is an error')
}

test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow(/this is an error/)
})
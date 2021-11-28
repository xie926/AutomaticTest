import { add, multi, minus} from './math';


test('测试加法 3+7', ()=>{
    expect(add(3, 7)).toBe(10);
})

test('测试减法 3-3', () => {
    expect(minus(3, 3)).toBe(0);
})

test('测试减法 3*3', () => {
    expect(multi(3, 3)).toBe(9);
})

// 单元测试 -> 模块测试
// 集成测试 -> 多模块测试
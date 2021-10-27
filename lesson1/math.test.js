// var result = add(3, 7)
// var expect = 10

// if(result !== 10){
//     throw new Error(`3 + 7 应该等于 ${expect}，但结果确实 ${result}` )
// }

// var result = minus(3, 3)
// var expect = 0

// if(result !== 0){
//     throw new Error(`3 - 3 应该等于 ${expect}，但结果确实 ${result}` )
// }

function expect(result){
    return{
        tobe: function(actual){
            if(result !== actual){
                throw new Error(`预期值与实际值不相等，预期${actual}，实际${result}`);
            }
        }
    }
}

function test(desc, fn){
    try{
        fn();
        console.log(`${desc} 通过测试`)
    }catch(e){
        console.log(`${desc} 没有通过测试`)
    }
}


test('测试加法 3+7', ()=>{
    expect(add(3, 7)).tobe(10);
})

test('测试减法 3-3', () => {
    expect(minus(3, 3)).tobe(0);
})

test('测试减法 3*3', () => {
    expect(multi(3, 3)).tobe(9);
})
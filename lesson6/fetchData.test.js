import { fetchData, fetchData1 } from './fetchData'

// 回调类型的
test('fetchData 返回结果为{ success: true }', (done) => {
  fetchData((data) => {
    expect(data).toEqual({success: true});
    done(); // 不加done，jest会认为这个测试用例已经结束了，因为fetchData能够正常运行，加了done以后会等回调函数执行完毕再结束
  })
})

// 返回promise类型的
// test('fetchData1 返回结果为{ success: true }', () => {
//   return fetchData1().then((res) => {
//     expect(res.data).toEqual({success: true})
//   })
// })

// test('fetchData1 返回结果为404', () => {
//   expect.assertions(1); // expect必须执行一次，如果要用catch，必须加上这一句话，因为如果接口有返回的值，那么压根不会走到catch这一步，导致我们的测试用例就会直接通过
//   return fetchData1().catch(e => {
//     expect(e.toString()).toMatch(/404/)
//     // expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// 写法3
// test('fetchData1 返回结果为{ success: true }', () => {
//   return expect(fetchData1()).resolves.toMatchObject({ // expect(fetchData1()).resolves拿到的是好大一个res，toMatchObject指的是那一大坨res包含toMatchObject的参数
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchData1 返回结果为404', () => {
//   return expect(fetchData1()).rejects.toThrow()
// })

// 写法4
// test('fetchData1 返回结果为{ success: true }', async() => {
//   await expect(fetchData1()).resolves.toMatchObject({ // expect(fetchData1()).resolves拿到的是好大一个res，toMatchObject指的是那一大坨res包含toMatchObject的参数
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchData1 返回结果为404', async() => {
//   await expect(fetchData1()).rejects.toThrow()
// })

// 写法5
// test('fetchData1 返回结果为{ success: true }', async() => {
//   const res = await fetchData1();
//   expect(res.data).toEqual({ success: true })
// })

test('fetchData1 返回结果为404', async() => {
  expect.assertions(1);
  try{ 
    await fetchData1();
  }catch(e){
    expect(e.toString()).toMatch(/404/)
  }
})

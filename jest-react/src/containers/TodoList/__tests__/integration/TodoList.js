import React from 'react';
import { mount, shallow } from 'enzyme';
import { findTestWrapper } from '../../../../utils/testUtils';
import { Provider } from 'react-redux';
import store from '../../../../store/createStore'
import TodoList from '../../index';

beforeEach(() => {
  jest.useFakeTimers();
})

it(`
  1.Header输入框输入内容
  2.点击回车
  3.列表展示用户的输入项
`, () => {
  const wrapper = mount(<Provider store={store}><TodoList/></Provider>);
  const inputEle = findTestWrapper(wrapper, 'header-input');
  const value = 'xieyan';
  inputEle.simulate('change', {
    target: {
      value: value
    }
  })
  inputEle.simulate('keyUp', {
    keyCode: 13
  })
  const listItems = findTestWrapper(wrapper, 'list-item');
  expect(listItems.length).toBe(1);
  expect(listItems.text()).toContain('xieyan');
})


// it(`
//   1.用户打开界面
//   2.页面应该展示接口返回的数据
//   setTimeout异步测试
// `, (done) => {
//   const wrapper = mount(<Provider store={store}><TodoList/></Provider>);
//   setTimeout(()=>{
//     wrapper.update()
//     console.log(wrapper.debug())
//     const listItem = findTestWrapper(wrapper, 'list-item')
//     console.log(listItem.length, 'listItem')
//     expect(listItem.length).toBe(1)
//     expect(listItem.text()).toContain('xieyan')
//     done()
//   },0)
// })

// it(`
//   1.用户打开界面
//   2.页面应该展示接口返回的数据
//   process.nextTick异步测试
// `, (done) => {
//   const wrapper = mount(<Provider store={store}><TodoList/></Provider>);
//   process.nextTick(()=>{
//     wrapper.update()
//     console.log(wrapper.debug())
//     const listItem = findTestWrapper(wrapper, 'list-item')
//     console.log(listItem.length, 'listItem')
//     expect(listItem.length).toBe(1)
//     expect(listItem.text()).toContain('xieyan')
//     done()
//   },0)
// })

it('用户打开界面,5s后展示接口返回的数据',(done)=>{
  const wrapper = mount(<Provider store={store}><TodoList/></Provider>)
  jest.runAllTimers()
  expect(setTimeout).toHaveBeenCalledTimes(1);
  process.nextTick(()=>{
    wrapper.update()
    const listItem = findTestWrapper(wrapper, 'list-item')
    console.log(listItem.length, 'listItem')
    expect(listItem.length).toBe(1)
    expect(listItem.text()).toContain('xieyan')
    done()
  })
})

it('用户打开界面,5s后展示接口返回的数据',(done)=>{
  const wrapper = mount(<Provider store={store}><TodoList/></Provider>)
  jest.advanceTimersByTime(4000);
  expect(setTimeout).toHaveBeenCalledTimes(1);
  process.nextTick(()=>{
    wrapper.update()
    const listItem = findTestWrapper(wrapper, 'list-item')
    console.log(listItem.length, 'listItem')
    expect(listItem.length).toBe(1)
    expect(listItem.text()).toContain('xieyan')
    done()
  })
})
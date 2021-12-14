import React from 'react';
import { mount, shallow } from 'enzyme';
import { findTestWrapper } from '../../../../utils/testUtils';
import { Provider } from 'react-redux';
import store from '../../../../store/createStore'
import TodoList from '../../index';
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
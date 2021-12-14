import React from 'react';
import { mount, shallow } from 'enzyme';
import { findTestWrapper } from '../../../utils/testUtils';
import { Provider } from 'react-redux';
import store from '../../../store/createStore'
import TodoList from '../index';
import axios from 'axios';

beforeEach(() => {
  axios.success = true
})

it('用户打开界面, 请求正常，展示接口返回的数据',(done)=>{
  const wrapper = mount(<Provider store={store}><TodoList/></Provider>)

  process.nextTick(()=>{
    wrapper.update()
    const listItem = findTestWrapper(wrapper, 'list-item')
    expect(listItem.length).toBe(1)
    done()
  })
})

it('用户打开界面, 请求不正常，正常展示页面，但页面无数据',(done)=>{
  axios.success = false;
  const wrapper = mount(<Provider store={store}><TodoList/></Provider>)

  process.nextTick(()=>{
    wrapper.update()
    const listItem = findTestWrapper(wrapper, 'list-item')
    expect(listItem.length).toBe(0)
    done()
  })
})
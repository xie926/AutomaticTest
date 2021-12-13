import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../index';

it('TodoList 组件初始化列表为空', () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper.state('undoList')).toEqual([]);
});

it('TodoList 应该给 Header 传递一个增加 undoList 的方法', () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find('Header');
  // expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
  expect(Header.prop('addUndoItem')).toBeTruthy();
})

it('当 addUndoItem 被执行时，undoList 应该新增内容', () => {
  const wrapper = shallow(<TodoList />);
  // const Header = wrapper.find('Header');
  // const addFunc = Header.prop('addUndoItem');
  // addFunc('学习React');
  // expect(wrapper.state('undoList').length).toBe(1);
  // expect(wrapper.state('undoList')[0]).toBe('学习React');
  const content = '学习React';
  const addFunc = wrapper.instance().addUndoItem;
  addFunc(content);
  expect(wrapper.state('undoList').length).toBe(1);
  expect(wrapper.state('undoList')[0]).toEqual({
    status: 'div',
    value: content
  });
})

it('TodoList 应该给 未完成列表UndoList 传递一个 list 数据 以及 deleteItem 方法 以及 changeStatus方法 以及 valueChange方法', () => {
  const wrapper = shallow(<TodoList />);
  const UndoList = wrapper.find('UndoList');
  expect(UndoList.prop('list')).toBeTruthy();
  expect(UndoList.prop('deleteItem')).toBeTruthy();
  expect(UndoList.prop('changeStatus')).toBeTruthy();
  expect(UndoList.prop('handleBlur')).toBeTruthy();
  expect(UndoList.prop('valueChange')).toBeTruthy();
})

it('当 deleteItem 被执行时，undoList 应该减少内容', () => {
  const wrapper = shallow(<TodoList />);
  const listData = [
    {
      status: 'div',
      value: '学习Jest'
    }, 
    {
      status: 'div',
      value: '学习TDD', 
    }, 
    {
      status: 'div',
      value: '学习单元测试'
    }, 
  ];
  wrapper.setState({
    undoList: listData
  })

  // const UndoList = wrapper.find('UndoList');
  // const deleteFunc = UndoList.prop('deleteItem');
  // deleteFunc(1);
  // 注释的这段代码其实像是集成测试，因为是引入了UndoList这个组件，且用了组件的方法

  wrapper.instance().deleteItem(1);
  expect(wrapper.state('undoList')).toEqual([listData[0], listData[2]]);
})

it('当 changeStatus 被执行时，undoList 数据项status被修改', () => {
  const wrapper = shallow(<TodoList />);
  const listData = [
    {
      status: 'div',
      value: '学习Jest'
    }, 
    {
      status: 'div',
      value: '学习TDD', 
    }, 
    {
      status: 'div',
      value: '学习单元测试'
    }, 
  ];
  wrapper.setState({
    undoList: listData
  })
  wrapper.instance().changeStatus(1);
  expect(wrapper.state('undoList')[1]).toEqual({
    ...listData[1],
    status: 'input'
  });
})

it('当 handleBlur 被执行时，undoList 数据项status被修改', () => {
  const wrapper = shallow(<TodoList />);
  const listData = [
    {
      status: 'div',
      value: '学习Jest'
    }, 
    {
      status: 'input',
      value: '学习TDD', 
    }, 
    {
      status: 'div',
      value: '学习单元测试'
    }, 
  ];
  wrapper.setState({
    undoList: listData
  })
  wrapper.instance().handleBlur(1);
  expect(wrapper.state('undoList')[1]).toEqual({
    ...listData[1],
    status: 'div'
  });
})

it('当 valueChange 被执行时，undoList 数据项value被修改', () => {
  const wrapper = shallow(<TodoList />);
  const listData = [
    {
      status: 'div',
      value: '学习Jest'
    }, 
    {
      status: 'input',
      value: '学习TDD', 
    }, 
    {
      status: 'div',
      value: '学习单元测试'
    }, 
  ];
  wrapper.setState({
    undoList: listData
  })
  wrapper.instance().valueChange(1, '学习T');
  expect(wrapper.state('undoList')[1]).toEqual({
    ...listData[1],
    value: '学习T'
  });
})
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
  const Header = wrapper.find('Header');
  const addFunc = Header.prop('addUndoItem');
  addFunc('学习React');
  expect(wrapper.state('undoList').length).toBe(1);
  expect(wrapper.state('undoList')[0]).toBe('学习React');
})

it('TodoList 应该给 未完成列表UndoList 传递一个 list 数据 以及 deleteItem 方法', () => {
  const wrapper = shallow(<TodoList />);
  const UndoList = wrapper.find('UndoList');
  expect(UndoList.prop('list')).toBeTruthy();
  expect(UndoList.prop('deleteItem')).toBeTruthy();
})

it('当 deleteItem 被执行时，undoList 应该减少内容', () => {
  const wrapper = shallow(<TodoList />);
  wrapper.setState({
    undoList: ['学习Jest', '学习TDD', '学习单元测试']
  })

  // const UndoList = wrapper.find('UndoList');
  // const deleteFunc = UndoList.prop('deleteItem');
  // deleteFunc(1);
  // 注释的这段代码其实像是集成测试，因为是引入了UndoList这个组件，且用了组件的方法

  wrapper.instance().deleteItem(1);
  expect(wrapper.state('undoList')).toEqual(['学习Jest', '学习单元测试']);
})
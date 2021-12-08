import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../index';
Enzyme.configure({ adapter: new Adapter() });

it('TodoList 组件初始化列表为空', () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper.state('undoList')).toEqual([]);
});

it('TodoList 应该给 Header 传递一个增加 undoList 的方法', () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find('Header');
  expect(Header.prop('addTodoItem')).toBe(wrapper.instance().addTodoItem)
})

it('当 Header 回车时，undoList 应该新增内容', () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find('Header');
  const addFunc = Header.prop('addUndoItem');
  addFunc('学习React');
  expect(wrapper.state('undoList').length).toBe(1);
  expect(wrapper.state('undoList')[0]).toBe('学习React');
})
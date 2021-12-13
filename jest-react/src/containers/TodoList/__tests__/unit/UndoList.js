import React from 'react';
import { shallow } from 'enzyme';
import UndoList from '../../components/UndoList';
import { findTestWrapper } from '../../../../utils/testUtils';

it('UndoList 渲染样式正常', () => {
  // 当组件样式不再频繁发生变化的时候，我们可以记录一个快照，当我们在未来修改，就会测试失败，提醒你要验证一下修改过后的样式是否符合预期
  const wrapper = shallow(<UndoList list={[]}/>);
  expect(wrapper).toMatchSnapshot();
});

it('未完成列表 当数据为空数组时 count 数目为 0， 列表无内容', () => {
  const wrapper = shallow(<UndoList list={[]}/>);
  const countEle = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(countEle.text()).toEqual("0");
  expect(listItems.length).toBe(0)
});

it('未完成列表 当数据有内容时 count 数目显示数据长度，列表不为空, 且存在删除按钮', () => {
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
  const wrapper = shallow(<UndoList list={listData}/>);
  const countEle = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "list-item");
  const deleteItems = findTestWrapper(wrapper, "delete-item");
  expect(countEle.text()).toEqual('3');
  expect(listItems.length).toBe(3);
  expect(deleteItems.length).toBe(3)
})

it('未完成列表 当数据有内容时，点击某个删除按钮，会调用删除方法', () => {
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
  const fn = jest.fn();
  const index = 1;
  const wrapper = shallow(<UndoList list={listData} deleteItem={fn}/>);
  const deleteItems = findTestWrapper(wrapper, "delete-item");
  deleteItems.at(index).simulate('click', {
    stopPropagation: () => {}
  });
  expect(fn).toHaveBeenLastCalledWith(index)
})

it('当某一项被点击时，触发执行，changeStatus 函数', () => {
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
  const fn = jest.fn();
  const index = 1;
  const wrapper = shallow(<UndoList list={listData} changeStatus={fn}/>);
  const listItems = findTestWrapper(wrapper, "list-item");
  listItems.at(index).simulate('click');
  expect(fn).toHaveBeenLastCalledWith(index)
})

it('当某一项status是input时，展示输入框', () => {
  const listData = [
    {
      status: 'input',
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
  const index = 1;
  const wrapper = shallow(<UndoList list={listData}/>);
  const inputItems = findTestWrapper(wrapper, "input");
  expect(inputItems.length).toBe(1);
})

it('当某一个输入框失去焦点时，触发执行 handleBlur 方法', () => {
  const listData = [
    {
      status: 'input',
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
  const fn = jest.fn();
  const wrapper = shallow(<UndoList list={listData} handleBlur={fn}/>);
  const inputElem = findTestWrapper(wrapper, "input");
  inputElem.simulate('blur');
  expect(fn).toHaveBeenLastCalledWith(0);
})

it('当某一个输入框变更时，触发执行 valueChange 方法', () => {
  const listData = [
    {
      status: 'input',
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
  const fn = jest.fn();
  const wrapper = shallow(<UndoList list={listData} valueChange={fn}/>);
  const inputElem = findTestWrapper(wrapper, "input");
  inputElem.simulate('change', {
    target: {
      value: '学习TDD'
    }
  });
  expect(fn).toHaveBeenLastCalledWith(0, '学习TDD');
})
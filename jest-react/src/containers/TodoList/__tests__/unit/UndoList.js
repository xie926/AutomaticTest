import React from 'react';
import { shallow } from 'enzyme';
import UndoList from '../../components/UndoList';
import { findTestWrapper } from '../../../../utils/testUtils';


it('未完成列表 当数据为空数组时 count 数目为 0， 列表无内容', () => {
  const wrapper = shallow(<UndoList list={[]}/>);
  const countEle = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(countEle.text()).toEqual("0");
  expect(listItems.length).toBe(0)
});

it('未完成列表 当数据有内容时 count 数目显示数据长度，列表不为空, 且存在删除按钮', () => {
  const listData = ['学习Jest', '学习TDD', '学习单元测试'];
  const wrapper = shallow(<UndoList list={listData}/>);
  const countEle = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "list-item");
  const deleteItems = findTestWrapper(wrapper, "delete-item");
  expect(countEle.text()).toEqual('3');
  expect(listItems.length).toBe(3);
  expect(deleteItems.length).toBe(3)
})

it('未完成列表 当数据有内容时，点击某个删除按钮，会调用删除方法', () => {
  const listData = ['学习Jest', '学习TDD', '学习单元测试'];
  const fn = jest.fn();
  const index = 1;
  const wrapper = shallow(<UndoList list={listData} deleteItem={fn}/>);
  const deleteItems = findTestWrapper(wrapper, "delete-item");
  deleteItems.at(index).simulate('click');
  expect(fn).toHaveBeenLastCalledWith(index)
})
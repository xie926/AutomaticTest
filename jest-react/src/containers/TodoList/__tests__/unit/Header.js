import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import { findTestWrapper } from '../../../../utils/testUtils';


it('Header 渲染样式正常', () => {
  // 当组件样式不再频繁发生变化的时候，我们可以记录一个快照，当我们在未来修改，就会测试失败，提醒你要验证一下修改过后的样式是否符合预期
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it('Header 组件应该包含一个 input 框', () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, 'input')
  expect(inputElem.length).toBe(1);
});

it('Header 组件 input 框内容，初始化应该为空', () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find("[data-test='input']");
  expect(inputElem.prop('value')).toEqual('');
});

it('Header 组件 input 框内容，当用户输入时，会跟随变化', () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, 'input')
  // expect(inputElem.prop('value')).toEqual('');
  inputElem.simulate('change', {
    target: {
      value: 'xieyan'
    }
  })

  // 写法1 这个倾向于在单元测试中来通过测试数据来验证props的正确性
  expect(wrapper.state('value')).toEqual('xieyan');

  // 写法2 这个倾向于在集成测试中，我们就不在关注数据的变化，而是更关注dom的展示
  const newInputElem = findTestWrapper(wrapper, 'input')
  expect(newInputElem.prop('value')).toEqual('xieyan');
});

it('Header 组件 input 框输入回车时，如果 input 无内容，无操作', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn}/>);
  const inputElem = findTestWrapper(wrapper, 'input')
  wrapper.setState({ value: ''});
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  expect(fn).not.toHaveBeenCalled();
})

it('Header 组件 input 框输入回车时，如果 input 有内容，函数应该被调用', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn}/>);
  const inputElem = findTestWrapper(wrapper, 'input')
  const userInput = '学习React';
  wrapper.setState({ value: userInput});
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenLastCalledWith(userInput);
  const newInputElem = findTestWrapper(wrapper, 'input');
  expect(newInputElem.prop('value')).toEqual('');
})

it('Header 组件 input 框输入回车时，如果 input 有内容，添加成功后， input框应当清空', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn}/>);
  const inputElem = findTestWrapper(wrapper, 'input')
  const userInput = '学习React';
  wrapper.setState({ value: userInput});
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  const newInputElem = findTestWrapper(wrapper, 'input')
  expect(newInputElem.prop('value')).toEqual('');
})
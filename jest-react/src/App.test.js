import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });

// import ReactDOM from 'react-dom';
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   const container = div.getElementsByClassName('App');
//   expect(container.length).toBe(1)
//   // console.log(container)
// });

it('render without crashing', () => {
  const wrapper = shallow(<App />); // 只关注App组件的渲染，他的子组件可能只是用一个小标签来代替 -> 渲染速度快 -> 适用于单元测试
  // console.log(wrapper.debug()); // 写在expect前，这样他就能把App组件出现的错误以字符串的形式在控制台打印出来
  // const container = wrapper.find('.App')
  expect(wrapper).toMatchSnapshot();
  const container = wrapper.find('[data-test="container"]') // find属性选择器，[data-test="container"]
  expect(container.length).toBe(1);
  expect(container.prop('title')).toBe('xie yan');

  expect(container).toExist();
  expect(container).toHaveProp('title', 'xie yan')
});

// shallow -> 浅渲染 -> 适用于单元测试
// mount -> 深渲染 -> 适用于集成测试
// 如果通过className来寻找需要测试的dom节点，会导致测试代码强耦合，假如我修改className的值，那么就会导致测试不通过，这是我们不希望的，所以我们通过自定义属性（data-xxx）进行查找dom节点，这样的话就可以将测试代码解耦
// jest-enzyme提供了更多的测试匹配器
// toMatchSnapshot匹配器可以用来比对dom节点内容
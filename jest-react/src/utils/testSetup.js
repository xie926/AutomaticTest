import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // 17版本的react会有问题
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

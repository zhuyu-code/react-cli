import React from 'react';
import ReactDom from 'react-dom';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
Enzyme.configure({ adapter: new Adapter() });

test("测试App组件",()=>{
    const wrapper=mount(<App/>);
    expect(wrapper).toMatchSnapshot();
    console.log(wrapper.find(".app"));
    console.log(wrapper.debug());
   expect(wrapper.find('.app')).toExist();
})
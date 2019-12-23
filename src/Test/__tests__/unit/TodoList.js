import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../index'
Enzyme.configure({ adapter: new Adapter() });
//test和it是一样的效果；
it("测试Header组件是不是只有一个input框",()=>{
   const wrapper=shallow(<Header/>);
   const inputItem=wrapper.find("[data-test='input']");
   expect(inputItem.length).toBe(1);
   console.log("测试APP组件成功");
})

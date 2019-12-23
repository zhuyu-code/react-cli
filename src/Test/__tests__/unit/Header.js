import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../Header/index'
Enzyme.configure({ adapter: new Adapter() });
//test和it是一样的效果；
it("测试Header组件是不是只有一个input框",()=>{
   const wrapper=shallow(<Header/>);
   const inputItem=wrapper.find("[data-test='input']");
   expect(inputItem.length).toBe(1);
   console.log("测试APP组件成功");
})

it("测试Header组件中，Input组件值为空",()=>{
    const wrapper=shallow(<Header/>);
    const inputItem=wrapper.find("[data-test='input']");
    expect(inputItem.prop('value')).toEqual('');
})

it("测试Header组件中，Input输入框能否跟着input输入框变化",()=>{
    const wrapper=shallow(<Header/>);
    const inputItem=wrapper.find("[data-test='input']");
    //模拟onChange事件，然后给target传入一个指定值，看是否input输入框的值会变化；
    const userSetValue="今天不想上班";
    inputItem.simulate('change',{
        target:{value:userSetValue}
    })
    expect(wrapper.state("inputValue")).toBe(userSetValue);
});

it("测试Header组件中，Input输入框无值的时候，输入enter函数不被调用",()=>{
    const fn=jest.fn();
    const wrapper=shallow(<Header addUndoItem={fn}/>);
    const inputItem=wrapper.find("[data-test='input']");
    wrapper.setState({
        inputValue:""
    })
    inputItem.simulate('keyUp',{
        keyCode:13
    });
    expect(fn).not.toHaveBeenCalled();
})
it("测试Header组件中，Input输入框有值的时候，输入enter函数被调用",()=>{
    const fn=jest.fn();
    const wrapper=shallow(<Header addUndoItem={fn}/>);
    const inputItem=wrapper.find("[data-test='input']");
    wrapper.setState({
        inputValue:"有值"
    })
    inputItem.simulate('keyUp',{
        keyCode:13
    });
    expect(fn).toHaveBeenCalled();
})
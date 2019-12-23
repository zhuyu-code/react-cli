import React, { Component } from 'react'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
    }
    render() {
        return (
            <div >
                <input
                data-test="input" 
                placeholder="请输入今日任务"
                value={this.state.inputValue} 
                onChange={this.handleChange.bind(this)} 
                onKeyUp={this.handleKeyUp.bind(this)}/>
            </div>
        )
    }


    handleChange(e){
        const value=e.target.value;
        this.setState({
            inputValue:value
        })
    }
    handleKeyUp(e){
        if(e.keyCode===13&&this.state.inputValue)
        this.props.addUndoItem(this.state.inputValue);
    }
}

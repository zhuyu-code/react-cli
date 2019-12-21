import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0
        }
    }
    render() {
        return (
            <div>
                zhuyu2
                <button onClick={this.handleAdd.bind(this)}>点击</button>
                <div>{this.state.id}</div>
            </div>
        )
    }
    handleAdd(){
        this.setState({
            id:this.state.id+1
        })
    }
}

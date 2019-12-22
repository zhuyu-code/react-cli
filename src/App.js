
import React, { Component } from 'react'
import logo from './logo.svg';
import TodoList from './component/TodoList'
import Redux from './component2/Redux.jsx';
import Container from './component3/Container.jsx';
import List from "./component3/List.jsx"
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="app" style={{textAlign:"center"}}>欢迎来到自由React2</h1>
                 <img src={logo} className="App-logo" alt="logo" style={{width:"800px",height:"600px",marginLeft:"200px"}}/>
                 <List/>
            </div>
        )
    }
}

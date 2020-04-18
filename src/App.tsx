
import React, { Component } from 'react'
import { hot } from 'react-hot-loader';
import logo from './logo.svg';
import './App.css';

 class App extends Component {
    render() {
        return (
            <div className="app">
                 <h1 >Welcome to React CVTE</h1>
                 
                 <img  src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}
export default hot(module)(App);
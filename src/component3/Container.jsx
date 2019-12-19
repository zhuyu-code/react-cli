import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import List from './List.jsx'
 class Container extends Component {
    render() {
        return  <List/>
    }
}
export default hot(module)(Container);
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import List from './List.jsx';
import List2 from './List2.jsx'
 class Container extends Component {
    render() {
        return  (
            <div>
                <List></List>
                <List2></List2>
            </div>
        )
    }
}
export default hot(module)(Container);
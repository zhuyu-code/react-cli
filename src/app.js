import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoList from './component/TodoList.jsx'
import Redux from './component2/Redux.jsx';
import store from './component2/store/index';
const App=()=>(
    <Provider store={store}>
        <Redux/>
    </Provider>
    );
ReactDOM.render(
  <App/>,
  document.getElementById("react-root")
)
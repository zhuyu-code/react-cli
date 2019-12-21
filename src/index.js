import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoList from './component/TodoList.jsx'
import Redux from './component2/Redux.jsx';
import store from './component2/store/index';
import Container from './component3/Container.jsx';
import List from "./component3/List.jsx"
const App=()=>(
    <Provider store={store}>
        <Redux/>
    </Provider>
    );

ReactDOM.render(
  <TodoList/>,
  document.getElementById("react-root")
)
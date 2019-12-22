import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './component2/store/index';
import App from './App';
const AppStore=()=>(
    <Provider store={store}>
        <App/>
    </Provider>
    );

ReactDOM.render(
  <AppStore/>,
  document.getElementById("react-root")
)
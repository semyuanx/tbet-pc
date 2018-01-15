import React from 'react';
import ReactDOM from 'react-dom';
import route from './route';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';


ReactDOM.render(
    <div>{ route }</div> ,
    document.getElementById("root"));
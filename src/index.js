import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import store from './store';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
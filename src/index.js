import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import store from './data/store';
import { Provider } from 'react-redux';


ReactDOM.render(

    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));


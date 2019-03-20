import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import store from './data/store';
import { Provider } from 'react-redux';


ReactDOM.render(

    <Provider store={store} >
        <App
            handlePlayer1={ () => store.dispatch({type: "score", player: 1})}
            handlePlayer2={ () => store.dispatch({type: "score", player: 2})}
            handleReset={ () => store.dispatch({type: "reset"})}
        />
    </Provider>, document.getElementById('root'));


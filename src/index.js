import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { createStore } from "redux";



const initial = {
    player1: 0,
    player2: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "player1Scores": return {...state, player1: state.player1 + 1};
        case "player2Scores": return {...state, player2: state.player2 + 1};
        case "reset": return initial;
        default: return state;
    }
};

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

// handlePlayer1(){

// }


const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <App
        player1Score={state.player1}
        player2Score={state.player2}
        handlePlayer1={ () => store.dispatch({type: "player1Scores"})}
        handlePlayer2={ () => store.dispatch({type: "player2Scores"})}
        handleReset={ () => store.dispatch({type: "reset"})}
    />, document.getElementById('root'));

};

store.subscribe(render);
render();



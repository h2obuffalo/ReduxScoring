import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reducer from './reducer.jsx';
import App from './App.jsx';
import { createStore } from "redux";
import initial from './data/initial'


const score = (state, {player}) => {
     if (player === 1)  {
        return{...state, player1: state.player1 + 1};
    } else if (player === 2) {
        return{...state, player2: state.player2 + 1};
    } else return null ;

}

const winner = (state, action) => {
  const p1 = state.player1;
  const p2 = state.player2;
  if (p1 >= 21 && p1 - p2 > 1) {
    return {...state, winner: 1}
  } else if (p2 >= 21 && p2 - p1 > 1) {
    return {...state, winner: 2}
  } else return {...state, action}

}

    const total = state => state.player1 + state.player2 ;
    const serve = state => (total(state) > 42) ? 2 : 5;

const serving = (state) => {

      return {...state, serving: (Math.floor((total(state)) / 5) % 2)};
};



const reducer = (state, action) => {
    switch (action.type) {
        case "score": return winner(serving(score(state, action)));
        case "reset": return initial;
        default: return {...state};
    }
};


const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <App
        player1Score={state.player1}
        player2Score={state.player2}
        handlePlayer1={ () => store.dispatch({type: "score", player: 1})}
        handlePlayer2={ () => store.dispatch({type: "score", player: 2})}
        handleReset={ () => store.dispatch({type: "reset"})}
        winner={state.winner}
        serving={state.serving}
    />, document.getElementById('root'));

};

store.subscribe(render);
render();



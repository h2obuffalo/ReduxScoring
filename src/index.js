import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { createStore } from "redux";



const initial = {
    player1: 0,
    player2: 0,
    serving: false,
};

const score = (state, action) => {
     if (action.player === "player1")  {
        return{...state, player1: state.player1 + 1};
    } else {
        return{...state, player2: state.player2 + 1}
    }
}

const serving = (state) => {
     ((Math.floor((state.player1 + state.player2) /5 )) % 2)
        return{...state, serving: !serving}

}

const reducer = (state, action) => {
    switch (action.type) {
        case "score": {
                    score(state, action);
                    serving(state);}
        case "reset": return initial;
        default: return state;
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
        handlePlayer1={ () => store.dispatch({type: "score", player: "player1"})}
        handlePlayer2={ () => store.dispatch({type: "score", player: "player2"})}
        handleReset={ () => store.dispatch({type: "reset"})}
        serving={state.serving}
    />, document.getElementById('root'));

};

store.subscribe(render);
render();



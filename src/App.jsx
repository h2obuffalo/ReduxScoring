import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({handlePlayer1, handlePlayer2, player1Score, player2Score, handleReset}) => (
    <React.Fragment>
        {/* header */}
        <header className="page-header">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row">
            <div className="col-xs-6">
                <p>Player 1 <span className="pull-right label label-success" disabled="true" >Serving</span></p>
                <p className="well">{/* player 1 score */}{player1Score}</p>
                <button className="btn btn-primary" onClick={handlePlayer1}>+</button>
            </div>

            <div className="col-xs-6">
                <p>Player 2 <span className="pull-right label label-success">Serving</span></p>
                <p className="well">{/* player 2 score */}{player2Score}</p>
                <button className="btn btn-primary" onClick={handlePlayer2}>+</button>
            </div>
        </div>

        { /* winner message */}
        <h2 className="jumbotron">Player {/* winning player here */} wins!</h2>

        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={handleReset} >Reset</button>
    </React.Fragment>
);

export default App;
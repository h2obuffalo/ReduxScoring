import React from 'react';
import './App.css';
import ScoreButton from './components/ScoreButton.jsx';
import Score from './components/Score.jsx';

const App = ({handlePlayer1, handlePlayer2, player1Score, player2Score, handleReset, serving, winner}) => (
    <React.Fragment>
        {/* header */}
        <header className="page-header">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row">
            <div className="col-xs-6">
                <p>Player 1 </p> {(serving) ? <span className="pull-right label label-success">Serving</span> : null}
                <Score playerScore={player1Score} />
                {!winner === 0 ? null :<ScoreButton winner={winner} handlePlayer={handlePlayer1} />}
            </div>

            <div className="col-xs-6">
                <p>Player 2 </p> {!(serving) ? <span className="pull-right label label-success">Serving</span> : null}
                <p className="well">{/* player 2 score */}{player2Score}</p>
                {!winner === 0 ? null :<ScoreButton winner={winner} handlePlayer={handlePlayer2} />}
            </div>
        </div>

        { /* winner message */}
        {(!winner === 0) ? null : <h2 className="jumbotron">Player {winner} wins!</h2>}

        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={handleReset} >Reset</button>
    </React.Fragment>
);

export default App;
import React from 'react';
import Score1 from './scorer/Score1';
import Score2 from './scorer/Score2';
import Winner from './winner/Winner';


// import Score from './components/Score.jsx';

const App = ({handlePlayer1, handlePlayer2, handleReset}) => (
    <React.Fragment>
        {/* header */}
        <header className="page-header">
            <h1>PongPing</h1>
        </header>
        {/* scores */}
        <div className="row">
          <Score1 handlePlayer={handlePlayer1} player="Player 1" />
          <Score2 handlePlayer={handlePlayer2} player="Player 2" />
        </div>
        { /* winner message */}
        <Winner />
        <hr />
        { /* reset button */}
        <button className="btn btn-danger" onClick={handleReset} >Reset</button>
    </React.Fragment>
);

export default App;
import React from 'react';
import Score1 from './scorer/Score1';
import Score2 from './scorer/Score2';
import Winner from './winner/index';
import Reset from './reset/index';


// import Score from './components/Score.jsx';

const App = () => (
    <React.Fragment>
        {/* header */}
        <header className="page-header">
            <h1>PongPing</h1>
        </header>
        {/* scores */}
        <div className="row">
          <Score1 player="Player 1" />
          <Score2 player="Player 2" />
        </div>
        { /* winner message */}
        <Winner />
        <hr />
        { /* reset button */}
        <Reset />
    </React.Fragment>
);

export default App;
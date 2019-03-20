import React from 'react';

const Scorer = ({ winner, handlePlayer, player, serving, playerScore }) =>

   <div className="col-xs-6">
        <p>{player}</p> {!serving ? null : <span className="pull-right label label-success">Serving</span>}
        <p className="well">{/* player 1 score */}{playerScore}</p>
        {!winner === 0 ? null : <button className="btn btn-primary" onClick={handlePlayer}>+</button>}
    </div>



export default Scorer;

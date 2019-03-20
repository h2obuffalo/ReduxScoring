import React from 'react';

export default const Winner = ({winner}) => winner === 0 ? null : <h2 className="jumbotron">Player {winner} wins!</h2>;

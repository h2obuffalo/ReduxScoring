import React from 'react';

const Winner = ({winner}) => winner === 0 ? null : <h2 className="jumbotron">Player {winner} wins!</h2>;


export default Winner;
import initial from './initial'


const score = (state, {player}) => {
     if (player === 1)  {
        return{...state, player1: state.player1 + 1};
    } else if (player === 2) {
        return{...state, player2: state.player2 + 1};
    } else return null ;

}

const winner = (state) => {
  const p1 = state.player1;
  const p2 = state.player2;
  if (p1 >= 21 && p1 - p2 > 1) {
    return {...state, winner: 1}
  } else if (p2 >= 21 && p2 - p1 > 1) {
    return {...state, winner: 2}
  } else return {...state}

}

const total = state => state.player1 + state.player2 ;
const serve = state => (total(state) >= 42) ? 2 : 5;

const serving = (state) => {

      return {...state, serving: (Math.floor((total(state)) / serve(state)) % 2)};
};

const reducer = (state, action) => {
    switch (action.type) {
        case "score": return winner(serving(score(state, action)));
        case "reset": return initial;
        default: return state;
    }
};

export default reducer;
import { connect } from 'react-redux';
import Scorer from './Scorer';

const mapStateToProps = state => {
    return {
    playerScore: state.player1,
    serving: state.serving === 0,
    winner: state.winner,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch({type: "score", player: 1}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);

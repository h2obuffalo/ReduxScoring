import { connect } from 'react-redux';
import Scorer from './Scorer';

const mapStateToProps = state => {
    return {
    playerScore: state.player2,
    serving: state.serving === 1,
    winner: state.winner,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch({type: "score", player: 2}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);

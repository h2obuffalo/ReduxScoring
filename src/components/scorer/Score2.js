import { connect } from 'react-redux';
import Scorer from './Scorer';
import { putScore } from '../../data/api';

const mapStateToProps = state => {
    return {
    playerScore: state.player2,
    serving: state.serving,
    winner: state.winner,
    player: state.name2,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch(putScore(2)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);

import { connect } from 'react-redux';
import Scorer from './Scorer';
import { putScore } from '../../data/api';

const mapStateToProps = state => {
    return {
    playerScore: state.player1,
    serving: !state.serving,
    winner: state.winner,
    player: state.name1,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch(putScore(1)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);

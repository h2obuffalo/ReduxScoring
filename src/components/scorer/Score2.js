import { connect } from 'react-redux';
import Scorer from './Scorer';
import { score } from '../../data/actions';

const mapStateToProps = state => {
    return {
    playerScore: state.player2,
    serving: state.serving === 2,
    winner: state.winner,
    player: state.name2,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch(score(2)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);

import { connect } from 'react-redux';
import Scorer from './Scorer';
import { score } from '../../data/actions';

const mapStateToProps = state => {
    return {
    playerScore: state.player1,
    serving: state.serving === 1,
    winner: state.winner,
    player: state.name1,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch(score(1)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);

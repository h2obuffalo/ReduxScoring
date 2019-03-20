import connect from 'react-redux';
import Scorer from './Scorer';

const mapStateToProps = state => {
    return {
    playerScore: state.player1,
    serving: serving,
    winner: winner,
    }
}

export default connect(mapStateToProps)(Scorer);
import connect from 'react-redux';
import Winner from './Winner';

const mapStateToProps = state => {
    return {
       winner: winner,
    }
}

export default connect(mapStateToProps)(Winner);

import { connect } from 'react-redux';
import Reset from './Reset';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
    handleReset: () => dispatch({type: "reset"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);



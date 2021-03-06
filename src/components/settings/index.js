import { connect } from 'react-redux';
import Settings from './Settings';
// import { settings as set } from '../../data/actions';
import { postGame } from '../../data/api';


const mapStateToProps = (state) => {
        return {
            name1:state.name1,
            name2:state.name2,
            winNo:state.winNo,
            serve:state.serve,
            submit:state.submit,
        };
};

const mapDispatchToProps = dispatch => {
    return {

        handleSave: (state) => {
            dispatch(postGame(state));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
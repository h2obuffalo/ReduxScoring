import { connect } from 'react-redux';
import Settings from './Settings';
import {set} from '../../data/actions';


const mapStateToProps = (state) => {
        return {
            name1:state.name1,
            name2:state.name2,
            winNo:state.winNo,
            serve:state.serve,
        };
};

const mapDispatchToProps = dispatch => {
    return {

        handleSave: (e, data) => {
            e.preventDefault();
            dispatch(set(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
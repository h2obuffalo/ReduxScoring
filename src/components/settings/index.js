import { connect } from 'react-redux';
import Settings from './Settings';
import { settings as set } from '../../data/actions';


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

        handleSave: (e, data) => {
            e.preventDefault();
            data.setState({submit: !data.state.submit});
            dispatch(set(data.state));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
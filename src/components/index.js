import { connect } from 'react-redux';
import App from './App';
// import { settings as set } from '../../data/actions';


const mapStateToProps = (state) => {
        return {
            name1:state.name1,
            name2:state.name2,
            winNo:state.winNo,
            serve:state.serve,
            submit:state.submit,
        };
};

export default connect(mapStateToProps)(App);
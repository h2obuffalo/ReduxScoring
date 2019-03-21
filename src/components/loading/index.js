import { connect } from 'react-redux';
import Loading from './Loading';

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => console.log("llll"),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
import { connect } from 'react-redux';
import Loading from './Loading';
import { getGame } from "../../data/api"

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
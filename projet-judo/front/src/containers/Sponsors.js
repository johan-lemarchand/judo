import { connect } from 'react-redux';
import Sponsors from '../components/Sponsors';

const mapStateToProps = (state) => ({
    list: state.sponsors.list,
    isLoaded : state.sponsors.isLoaded,
});

const mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(Sponsors);
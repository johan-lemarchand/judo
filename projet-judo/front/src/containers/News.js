import { connect } from 'react-redux';
import News from '../components/News';

const mapStateToProps = (state) => ({
    list: state.articles.list,
});

const mapStateToDispatch = [];

export default connect(mapStateToProps, mapStateToDispatch)(News);

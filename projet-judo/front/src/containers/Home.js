import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
    isLoading: state.calendar.isLoading,
    dateObject: state.calendar.dateObject,
    events: state.calendar.events,
    presIsLoaded: state.presentation.isLoaded,
    presInfo: state.presentation.info,
    articles : state.articles.list,
    articlesIsLoaded: state.articles.isLoad,
    sponsorsIsLoaded: state.sponsors.isLoaded,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import { connect } from 'react-redux';
import Events from '../components/Events';


const mapStateToProps = (state) => ({    
    coordinates: state.calendar.coordinates,
    zoom: state.calendar.zoom,  
    marker: state.calendar.marker,  
    eventInfos: state.calendar.eventInfos,
    isDisplay: state.calendar.display,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
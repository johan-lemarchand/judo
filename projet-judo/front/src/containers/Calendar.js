import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

import { displayMonth, displayYear, selectDay, displayEvent} from '../actions/calendar';



const mapStateToProps = ({calendar}) => ({    
    dateObject: calendar.dateObject,
    monthIsDisplayed : calendar.monthIsDisplayed, 
    yearIsDisplayed: calendar.yearIsDisplayed,
    events: calendar.events,
    eventInfos: calendar.eventInfos,     
});

const mapDispatchToProps = (dispatch) => ({
    showMonth: () => {
        dispatch(displayMonth())
    },
    showYear: () => {
        dispatch(displayYear())
    },
    handleDayClick: (month, year, day) => {
        dispatch(selectDay(month, year, day))
    },
    selectEvent: (date) => {
        dispatch(displayEvent(date))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
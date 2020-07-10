import moment from 'moment';
import { DISPLAY_MONTH, DISPLAY_YEAR, SELECT_MONTH, SELECT_YEAR, SELECT_DAY, DISPLAY_EVENT, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR, DISPLAY_EVENT_MAP } from '../actions/calendar';


moment.locale('fr');

const initialState = {
    dateObject: moment(),
    allmonths: moment.months(),
    monthIsDisplayed: false,
    yearIsDisplayed: false,
    eventInfos: {},
    events: [],
    isLoading: false,
    coordinates: [2.346715, 48.856805],
    zoom: 6,
    marker: false,
    display: false,
    
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case DISPLAY_MONTH:
            return {
                ...state,
                monthIsDisplayed: !state.monthIsDisplayed,
            };
        case DISPLAY_YEAR:
                return {
                    ...state,
                    yearIsDisplayed: !state.yearIsDisplayed,
                };
        case SELECT_MONTH:
            return {
                ...state,
                dateObject: state.dateObject.month(action.payload),
                monthIsDisplayed: !state.monthIsDisplayed,                
            };
        case SELECT_YEAR:
            return {
                ...state,
                dateObject: state.dateObject.year(action.payload),
                yearIsDisplayed: !state.yearIsDisplayed,
            };
        case SELECT_DAY:
        return {
            ...state,
            dayPick: action.payload,
        };
        case DISPLAY_EVENT:
                return {
                    ...state,
                    eventInfos: action.payload === undefined ? {} : action.payload,
                    adress: action.payload === undefined ? "paris+75015" : action.payload.place.replace(/ /gi, '+').replace(',',''),
                    zoom:  action.payload === undefined ? 6 : 12,
                    marker:  action.payload === undefined ? false : true,
                    display: action.payload === undefined ? false : true,
                };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: [...action.payload],
                error: false,
                isLoading: true,
            };
        case FETCH_EVENTS_ERROR:
            return {
                ...state,
                events: [],
                error: true,
            };
        case DISPLAY_EVENT_MAP:
            return {
                ...state,
                coordinates: action.payload,
            };
        default:
            return state;
    }
};




export const DISPLAY_MONTH = 'DISPLAY_MONTH';
export const DISPLAY_YEAR = 'DISPLAY_YEAR';
export const SELECT_MONTH = 'SELECT_MONTH';
export const SELECT_YEAR = 'SELECT_YEAR';
export const SELECT_DAY = 'SELECT_DAY';
export const DISPLAY_EVENT = 'DISPLAY_EVENT';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';
export const DISPLAY_EVENT_MAP = 'DISPLAY_EVENT_MAP'

export const displayMonth = () => ({
    type: DISPLAY_MONTH,
});
export const displayYear = () => ({
    type: DISPLAY_YEAR,
});
export const selectMonth = (payload) => ({
    type: SELECT_MONTH,
    payload,
});
export const selectYear = (payload) => ({
    type: SELECT_YEAR,
    payload,
});
export const selectDay = (payload) => ({
    type: SELECT_DAY,
    payload,
});
export const displayEvent = (payload) => ({
    type: DISPLAY_EVENT,
    payload
});
export const fetchEvents = () => ({
    type: FETCH_EVENTS,
  });
  
export const fetchEventsSuccess = (payload) => ({
type: FETCH_EVENTS_SUCCESS,
payload,
});

export const fetchRecipesError = () => ({
type: FETCH_EVENTS_ERROR,
});

export const displayEventMap = (payload) => ({
    type: DISPLAY_EVENT_MAP,
    payload
});
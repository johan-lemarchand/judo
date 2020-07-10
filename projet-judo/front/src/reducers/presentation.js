import {FETCH_PRESENTATION_SUCCESS} from '../actions/presentation';

const initialState = {
    info: '',
    isLoaded: false,
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case FETCH_PRESENTATION_SUCCESS:
            return {
                ...state,
                info: {...action.payload},
                isLoaded: !state.isLoaded,
            };
        default:
            return state;
    }
};

import {FETCH_SPONSORS_SUCCESS} from '../actions/sponsors';

const initialState = {
    list: [],
    isLoaded: false,
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case FETCH_SPONSORS_SUCCESS:
            return {
                ...state,
                list: [...action.payload],
                isLoaded: !state.isLoaded,
            };
        default:
            return state;
    }
};

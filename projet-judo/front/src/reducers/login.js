import { LOGIN_SUCCESS, LOGIN_ERROR, SETTINGS_CHANGE, SUBMIT_LOGOUT, DELETE_MESSAGE } from '../actions/login';

const initialState = {
    isLogged: false,
    loggedMessage:'',
    error: '',
    form: {
        email: '',
        password: '',
    },
    token: '',
    email: '',
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedMessage: 'Vous êtes connecté',
                isLogged : true,
                error: '',
                token: action.payload,
                email: action.email,
            };
        
        case LOGIN_ERROR:
            return {
                ...state,
                isLogged: false,
                error: 'Identifiants incorrects',
            };
        
        case SETTINGS_CHANGE:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload,
                },
                error: '',
            };
        case SUBMIT_LOGOUT: 
        return {
            ...state,
            form: {
                email: '',
                password: '',
            },
            token: '',
            isLogged: false,
            error: '',
            loggedMessage: '',
            email: '',
        };
        case DELETE_MESSAGE:
            return {
                state,
                loggedMessage: '',
            }
        default:
            return state;
    }
};
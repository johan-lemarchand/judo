export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const SETTINGS_CHANGE = 'SETTINGS_CHANGE';
export const CHECK_lOGIN = 'CHECK_LOGIN';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const submitLogin = () => ({
    type: SUBMIT_LOGIN,
});

export const loginSuccess = (payload, email) => ({
    type: LOGIN_SUCCESS,
    payload,
    email,
});

export const loginError = () => ({
    type: LOGIN_ERROR,
});

export const submitLogout = () => ({
    type: SUBMIT_LOGOUT,
});

export const logoutSuccess = (payload) => ({
    type: LOGOUT_SUCCESS,
    payload,
});

export const logoutError = () => ({
    type: LOGOUT_ERROR,
});

export const settingsChange = (payload) => ({
    type: SETTINGS_CHANGE,
    payload,
});

export const checkLogin = () => ({
    type: CHECK_lOGIN,
});

export const deleteMessage = () => ({
    type: DELETE_MESSAGE,
})
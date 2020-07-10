export const SUBMIT_MAIL = 'SUBMIT_MAIL';
export const MAIL_SUCCESS = 'MAIL_SUCCESS';
export const MAIL_ERROR = 'MAIL_ERROR';
export const MAIL_CHANGE = 'MAIL_CHANGE';

export const submitMail = () => ({
    type: SUBMIT_MAIL,
});
export const mailSuccess = () => ({
    type: MAIL_SUCCESS,
});
export const mailError = () => ({
    type: MAIL_ERROR,
});
export const mailChange = (payload) => ({
    type: MAIL_CHANGE,
    payload,
})
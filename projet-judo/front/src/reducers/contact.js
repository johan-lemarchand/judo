import { MAIL_CHANGE, MAIL_SUCCESS, MAIL_ERROR} from '../actions/contact';

const initialState = {
    form: {
        email: '',
        title: '',
        content: '',
    },
    message: '',
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case MAIL_CHANGE:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload,
                }
            }
        case MAIL_SUCCESS:
            return {
                ...state,
                message: 'Votre email a bien été envoyé',
                form: {
                    email: '',
                    title: '',
                    content: '',
                }
            }
        case MAIL_ERROR:
            return {
                ...state,
                message: 'Erreur lors de l\'envoie de l\'email',
            }
            default:
                return state;
    }
};


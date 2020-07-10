import axios from 'axios';
import { SUBMIT_MAIL, mailSuccess, mailError } from '../actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_MAIL:
            axios({
                url:'http://54.166.4.90/projet-judo/back/public/index.php/api/contact',
                method: 'post',
                withCredentials: false,
                data: {
                    email: store.getState().contact.form.email,
                    title: store.getState().contact.form.title,
                    content: store.getState().contact.form.content,
                }
            })
            .then((response) => {
                console.log('mail bien envoyé');
                store.dispatch(mailSuccess());
            })
            break;
            default:
                return next(action);
    }
};

export default contactMiddleware;
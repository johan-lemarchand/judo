import axios from 'axios';
import { SUBMIT_LOGIN, loginSuccess, loginError } from '../actions/login';

const loginMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_LOGIN:
            axios({
                url:'http://54.166.4.90/projet-judo/back/public/index.php/api/login_check',
                method: 'post',
                withCredentials: false,        
                data: {
                    username: store.getState().login.form.email,
                    password: store.getState().login.form.password,
                }                
            })
            .then((response) => {
                console.log('coucou', response.data);
                store.dispatch(loginSuccess(response.data.token, store.getState().login.form.email));
            })
            .catch((error) => {
                //console.log(error);
                store.dispatch(loginError());
            });
            break;
        default: 
        return next(action);    
    }
};

export default loginMiddleware;
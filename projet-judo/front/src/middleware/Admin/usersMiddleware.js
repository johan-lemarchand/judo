import { FETCH_USER, fetchUserSuccess } from '../../actions/Admin/users';
import axios from 'axios';

export default (store) => (next) => (action) => {

    switch(action.type) {

        case FETCH_USER:
            axios.get('http://54.166.4.90/projet-judo/back/public/index.php/api/users')
            .then((response) => {
                //console.log('ok', response)
                store.dispatch(fetchUserSuccess(response.data["hydra:member"]))
            })
            .catch((error) => {
                //console.log(error, 'erreur avec api')
            })
            break;

        default:
            next(action);
    }


  };
  
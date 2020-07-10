import axios from 'axios';
import { FETCH_PRESENTATION, fetchPresentationSuccess} from '../actions/presentation';

const presentationMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
      case FETCH_PRESENTATION:
          axios({
              url:'http://54.166.4.90/projet-judo/back/public/index.php/api/presentations',
              method: 'get',
              withCredentials: false,               
          })
          .then((response) => {
              //console.log('presentation', response);
              store.dispatch(fetchPresentationSuccess(response.data["hydra:member"]));
          })
          .catch((error) => {
              //console.log('erreur api presentation', error);
          });
          break;
      default: 
      return next(action);    
  }
};

export default presentationMiddleware; 


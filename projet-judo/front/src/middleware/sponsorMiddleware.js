import axios from 'axios';
import { FETCH_SPONSORS, fetchSponsorsSuccess} from '../actions/sponsors';

const sponsorMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
      case FETCH_SPONSORS:
          axios({
              url:'http://54.166.4.90/projet-judo/back/public/index.php/api/sponsors',
              method: 'get',
              withCredentials: false,               
          })
          .then((response) => {
              console.log('sponsors', response);
              store.dispatch(fetchSponsorsSuccess(response.data["hydra:member"]));
          })
          .catch((error) => {
              console.log('erreur api sponsors', error);
          });
          break;
      default: 
      return next(action);    
  }
};

export default sponsorMiddleware; 


import axios from 'axios';
import { FETCH_USERS, fetchUsersSuccess, fetchUsersError } from '../actions/presentation';

export default (store) => (next) => (action) => {
  // Je veux examiner le type de l'action
  // pour savoir si je la laisse passer
  // Ou si je l'intercepte pour lancer une requête ajax
  //console.log('Ais-je besoin de lancer une requete ?');
  switch (action.type) {
    case FETCH_USERS:
      // Je veux simuler une requête
      // Si elle réussit, je veux dispatcher
      // une action pour en informer mon reducer
      // et qu'il rajoute les datas dans le state
        // J'ai la réponse à ma requête.
        // Je veux donc dispatch une action de succes.
      axios.get('http://54.166.4.90/projet-judo/back/public/index.php/api/users')
      .then((response) => {
        store.dispatch(fetchUsersSuccess(response.data["hydra:member"]));
      })
      .catch((error) => {
        //console.log(error);
      });
      // Si elle échoue, je veux dispatcher une
      // action pour informer mon reducer et modifier
      // mon state
      break;
    default:
      next(action);
  }
};


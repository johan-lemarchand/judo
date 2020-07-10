import axios from 'axios';
import { FETCH_EVENTS, DISPLAY_EVENT, fetchEventsSuccess, fetchRecipesError, displayEventMap } from '../actions/calendar';

const calendarMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_EVENTS:
            axios.get('http://54.166.4.90/projet-judo/back/public/index.php/api/events')
            .then((response) => {
                //console.log('events', response.data['hydra:member']);
                store.dispatch(fetchEventsSuccess(response.data['hydra:member']));
            })
            .catch((error) => {
                //console.log('erreur lors de la connexion à l\'api');
                store.dispatch(fetchRecipesError());
            })
            break;
            case DISPLAY_EVENT:
            setTimeout(() => {
                axios.get(`https://api-adresse.data.gouv.fr/search/?q=${store.getState().calendar.adress}`)
                    .then((response) => {
                        //console.log('map', response.data.features[0].geometry.coordinates);
                        store.dispatch(displayEventMap(response.data.features[0].geometry.coordinates))
                    })
                    .catch((error) => {
                        //console.log('erreur map', error)
                    })
            }, 500);    
            
            
        default:
            next(action);
    }
};

export default calendarMiddleware;
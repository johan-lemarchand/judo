// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';
import usersMiddleware from '../middleware/Admin/usersMiddleware';
import articlesMiddleware from '../middleware/Admin/articlesMiddleware';
import calendarMiddleware from '../middleware/calendarMiddleware';
import presentationMiddleware from '../middleware/presentationMiddleware';
import sponsorMiddleware from  '../middleware/sponsorMiddleware';
import contactMiddleware from '../middleware/contactMiddlware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    loginMiddleware,
    usersMiddleware,
    articlesMiddleware,
    calendarMiddleware,
    presentationMiddleware,
    sponsorMiddleware,
    contactMiddleware,

    // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;

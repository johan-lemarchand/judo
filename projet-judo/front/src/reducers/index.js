import { combineReducers } from 'redux';
import calendar from './calendar';
import login from './login';

import users from './Admin/users';
import articles from './Admin/articles';
import presentation from './presentation';
import sponsors from './sponsors';
import contact from './contact';


export default combineReducers({
  calendar,
  login,
  users,
  articles,
  presentation,
  sponsors,
  contact,
});

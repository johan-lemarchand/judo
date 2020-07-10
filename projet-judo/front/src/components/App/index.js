// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Home from '../../containers/Home';
import Presentation from '../../containers/Presentation';
import News from '../../containers/News';
import Article from '../Article';
import Events from '../../containers/Events';
import Contact from '../../containers/Contact';
import Login from '../../containers/Login';
import Register from '../Register';
import Sponsors from '../Sponsors';
import PageNotFound from '../NotFound';

import './styles.css';

import Admin from '../Admin';
import Mentions from '../Mentions légales/mentions';
import ForgottenPassword from '../Login/ForgottenPassword';
import Developpeur from '../Presentation/Developpeur';

// == Composant
const App = ({ fetchUser, fetchEvents, fetchPresentation, fetchArticle, fetchPicture, fetchSponsors, email, users}) => {
  useEffect(fetchUser, []);
  useEffect(fetchEvents, []);
  useEffect(fetchPresentation, []);
  useEffect(fetchArticle, []);
  useEffect(fetchPicture, []);
  useEffect(fetchSponsors, []);

  const check = users.find(user => user.email == email);
  const verif = () => {if (check && check.role.name === 'Administrateur') {
    return  true;
  } else {
    return false;
  };}

  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      verif() === true ? <Component {...props} /> : <Redirect to='/connexion'/>
    )}/>
  )

   return (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/presentation" component={Presentation}/>
      <Route exact path="/actualite" component={News}/> 
      <Route exact path="/actualite/article" component={Article}/>
      <Route exact path="/evenements" component={Events}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/connexion" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/sponsors" component={Sponsors}/>
      <Route exact path="/forgotten-password" component={ForgottenPassword}/>
      <Route exact path="/mentions-legales" component={Mentions}/>
      <Route exact path="/developpeur" component={Developpeur}/>

      <PrivateRoute exact path="/admin" component={Admin} />
      <PrivateRoute exact path="/admin/categorie" component={Admin} />
      <PrivateRoute exact path="/admin/categorie/feminin" component={Admin} />
      <PrivateRoute exact path="/admin/categorie/masculin" component={Admin} />
      <PrivateRoute exact path="/admin/event" component={Admin} />
      <PrivateRoute exact path="/admin/article" component={Admin} />
      <PrivateRoute exact path="/admin/sponsors" component={Admin} />
      <PrivateRoute exact path="/admin/userlist" component={Admin} />
      <PrivateRoute exact path="/admin/user" component={Admin} />
      <PrivateRoute exact path="/admin/user/detail" component={Admin} />
      <PrivateRoute exact path="/admin/article/add" component={Admin} />
      <Route component={PageNotFound}/>
    </Switch>
  </div>
)};

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  fetchPresentation: PropTypes.func.isRequired,
  fetchArticle: PropTypes.func.isRequired,
}

// == Export
export default App;

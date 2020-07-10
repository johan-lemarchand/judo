import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';

import Header from '../../containers/Header';
import Footer from '../Footer';

import './style.scss';

const Login = ({ email, password, isLogged, loggedMessage, error, inputChange, handleLogin, handleLogout, deleteMessage }) => (

    <div className="login-container">
    <Header />
    <div className="login-box">
        <ul className="login-button">
        <div className="row">
          <li className="login-text login-border col"><Link color="inherit"  to="/register"><button className="button-header">Inscription</button></Link></li>
        </div>
        </ul>
        {error && <div className="alert alert-danger loginPage__alert" role="alert">
            {error}
        </div>}
        {loggedMessage && <div className="alert alert-success" role="alert">
            {loggedMessage}
            <Redirect to="/" />
        </div>}
        {!isLogged && <form className="loginPage__form" onSubmit={(evt) => { evt.preventDefault(); handleLogin();}}>

            <div className="user-box">
                <input type="email"
                    className="form-control"
                    id="InputEmail"
                    name="email"
                    value={email}
                    onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }} />
                <label htmlFor="InputEmail">Email</label>
            </div>
            <div className="user-box">
                <input type="password"
                    className="form-control"
                    id="InputPassword"
                    name="password"
                    value={password}
                    onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }} />
                <label htmlFor="InputPassword">Mot de passe</label>
            </div>

            <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Se Connecter</button>
                <br/>
					<br/>
                    <Link to="/forgotten-password" className="passwordlost">Mot de passe oublié ?</Link>

        </form>}
    </div>
    <Footer />
    </div>
);

Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
    loggedMessage: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
}

export default Login;
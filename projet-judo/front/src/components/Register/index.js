import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Header from '../../containers/Header';
import Footer from '../Footer';

import './style.scss';

// relier le component à redux (container, actions, reducer...)

const Register = ({ email, password, firstname, lastname, isLogged, loggedMessage, error, inputChange, handleLogin, handleLogout }) => (
    <div className="login-container">
    <Header />
    <div className="login-box">
        {error && <div className="alert alert-danger loginPage__alert" role="alert">
            {error}
        </div>}
        {loggedMessage && <div className="alert alert-success" role="alert">
            {loggedMessage}
        </div>}
        {!isLogged && <form className="loginPage__form" onSubmit={(evt) => { evt.preventDefault(); handleLogin() }}>
            <div class="row">
                <div className="user-box">                    
                    <input type="text"
                        className="form-control"
                        id="InputFirstName"
                        name="firstname"
                        value={firstname}
                        onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }} />
                    <label htmlFor="InputFirstName">Nom</label>
                </div>
					<div className="user-box">                  
                        <input type="text"
                            className="form-control"
                            id="InputLastName"
                            name="lastname"
                            value={lastname}
                            onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }} />
                        <label htmlFor="InputFirstName">Prénom</label>
					</div>
            </div>

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
            <div className="user-box">
                <input type="password"
                    className="form-control"
                    id="InputPassword"
                    name="password"
                    value={password}
                    onChange={(evt) => { inputChange({ [evt.target.name]: evt.target.value }) }} />
                <label htmlFor="InputPassword">Confirmation du mot de passe</label>
            </div>

            <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               Confirmer</button>
                <br/>
					<br/>
					<Link color="inherit" className="passwordlost" to="/connexion">Vous avez déjà un compte ?</Link>

        </form>}
        {isLogged && <button type="button" className="btn btn-primary" onClick={handleLogout}>Se Déconnecter</button>}

    </div>
    <Footer />
    </div>
);

/*Register.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
    loggedMessage: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
}*/

export default Register;
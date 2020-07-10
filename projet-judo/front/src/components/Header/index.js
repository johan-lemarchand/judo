import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";

//import ffjudo from "./logo-ffjudo.png";
import "./style.scss";
import initMenu from "./navbar.js";
import initLogo from "./logo.js";
import logo from "./logo.png";


const Header = ({isLogged, handleLogout, email, users}) => {
  useEffect ( () => {initLogo();initMenu();} );
  const check = users.find(user => user.email == email);
  const controlCheck = '';
  const verif = () => {if (check && check.role.name === 'Administrateur') {
    return  true;
  } else {
    return false;
  };}
  //check === !undefined  && check.role.name == 'Administrateur' ? true : false;
  
  console.log('email',verif());
  return ( 
  <header className="header">
    <div className="header__top">
    <Link to="/">
      <img className="header__top__logo" src={logo} />
    </Link>
      <div className="menuContainer">
        {" "}
        <span className="menuTitle">menu</span>
        <div className="menu">
          <ul className="meun_ul">
            <li>
              {" "}
              <NavLink className="nav-link" exact to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/presentation">
                Présentation
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/actualite">
                Actualité
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/evenements">
                Evénements
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className='456'>
              {" "}
              {isLogged ? <div className="nav-link" onClick={handleLogout}>Déconnexion</div> : <NavLink className="nav-link" to="/connexion">
                Connexion
              </NavLink>}
            </li>
            {verif() && <li className='123'>
              {" "}
               <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>}
          </ul>

        </div>
      </div>
      
      <div className="body_logo">
        <div className="view">
          <div className="mat">
            <a><img src="https://vgy.me/raR1xG.png"/></a>
            <a><img src="https://vgy.me/eek83g.png"/></a>
            <a><img src="https://vgy.me/kpVjd0.png"/></a>
            <a><img src="https://vgy.me/wT4qTx.png"/></a>
          </div>
        </div>
      </div>     
    </div>
  </header>
  )
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}

export default Header;

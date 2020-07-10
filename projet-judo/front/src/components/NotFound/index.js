import React from "react";
import './style.css';
import {Link} from 'react-router-dom';


export default () => (
    <div className="container-error">
        <div class="face">
        <div class="band">
            <div class="red"></div>
            <div class="white"></div>
            <div class="blue"></div>
        </div>
        <div class="eyes"></div>
        <div class="dimples"></div>
            <div class="mouth"></div>
        </div>

        <h1 className="title-error">Oops! Page non trouvée</h1>
        <div class="btn-error">
            <Link className="link-error" to="/">
                Retourner à la page d'accueil
            </Link>
        </div>
    </div>
);
import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../containers/Header';
import Footer from '../Footer';


import Avatar1 from "./Avatar1.png";
import Avatar2 from "./Avatar2.png";
import Avatar3 from "./Avatar3.png";
import Avatar4 from "./Avatar4.png";

import './style.scss';


const Developpeur = () => {
    return (
    <div>
        <Header/>
        <div className="container">
            <div className="presentation__member__container__scroll__list__card">
            <aside className="profile-card">

                <header className="header_presentation">
        
                    <img src={Avatar1}/>

                    <h1>Lemarchand Johan</h1>
                    <br />
                    <h2>johan.lm@hotmail.fr</h2>
                    
                </header>

                <div className="profile-bio">
                    <h3>Product Owner/Lead Dev Back</h3>
                    <ul>
                        <li>Porteur et responsable du projet </li>
                        <li>Prise de décision lors de conflits</li>
                        <li>Réaliser les choix techniques en back</li>
                    </ul>
                </div>

            </aside>
        </div>
            <div className="presentation__member__container__scroll__list__card">
            <aside className="profile-card">

                <header className="header_presentation">
        
                    <img src={Avatar2}/>

                    <h1>Coajou Benjamin</h1>
                    <br />
                    <h2>coajou.benjamin@gmail.com</h2>
                    
                </header>

                <div className="profile-bio">
                    <h3>Lead Dev Front</h3>
                    <ul>
                        <li>Réaliser les choix techniques en front</li>
                    </ul>
                </div>

            </aside>
        </div>
            <div className="presentation__member__container__scroll__list__card">
            <aside className="profile-card">

                <header className="header_presentation">
        
                    <img src={Avatar3}/>

                    <h1>Serbin Freddy</h1>
                    <br />
                    <h2>freddyserbin@gmail.com</h2>
                    
                </header>

                <div className="profile-bio">
                    <h3>Git Master/Dev Front</h3>
                    <ul>
                        <li>Responsable des pulls et des merges sur master</li>
                    </ul>
                </div>

            </aside>
        </div>
            <div className="presentation__member__container__scroll__list__card">
        <aside className="profile-card">

            <header className="header_presentation">
      
                <img src={Avatar4}/>

                <h1>Guechi Cyril</h1>
                <br />
                <h2>cyrilguechi71@gmail.com</h2>
                
            </header>

            <div className="profile-bio">
                 <h3>Scrum Master/Dev Back</h3>
                 <ul>
                     <li>Responsable du trello</li>
                     <li>Répartition des tâches</li>
                </ul>
            </div>

        </aside>
    </div>
    
    </div>
      <Footer/>
    </div>
    );
}



export default Developpeur;
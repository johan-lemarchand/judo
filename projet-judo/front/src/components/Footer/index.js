import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';

import "./style.scss";
import initRaindrop from "./raindrop.js";

const Footer = () => {
    useEffect ( () => {initRaindrop();} );
    return ( 
    <div className="page-wrapper">

        <div id="waterdrop">
       </div>
        <footer>
            <div className="footer-top">
                <div className="pt-exebar"></div>
                <div className="footer-container">
                    <div className="row-footer">
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-col-3">
                            <div className="widget footer_widget">
                                <h5 className="footer-title">Adresse</h5>
                                <div className="gem-contacts">
                                    <div className="gem-contacts-item gem-contacts-address">Club de judo :
                                    <br /> 25 rue d'oclock , 95000 Paris.
                                </div>
                                    <div className="gem-contacts-item gem-contacts-phone">
                                        <i className="fa fa-phone" aria-hidden="true"></i> Téléphone:
                                    <a href=""> 01 02 03 04 05 </a>
                                    </div>
                                  
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                            <div className="row-footer">
                                <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="widget footer_widget">
                                        <h5 className="footer-title">Dernières Actualités</h5>
                                        <ul className="posts  styled">
                                            <li className="clearfix gem-pp-posts">
                                                <div className="gem-pp-posts-text">
                                                    <div className="gem-pp-posts-item">
                                                        <a href="#">title</a>
                                                    </div>
                                                    <div className="gem-pp-posts-date">Content</div>
                                                </div>
                                            </li>
                                            <li className="clearfix gem-pp-posts">
                                                <div className="gem-pp-posts-text">
                                                    <div className="gem-pp-posts-item">
                                                        <a href="#">title</a>
                                                    </div>
                                                    <div className="gem-pp-posts-date">Content</div>
                                                </div>
                                            </li>
                                            <li className="clearfix gem-pp-posts">
                                                <div className="gem-pp-posts-text">
                                                    <div className="gem-pp-posts-item">
                                                        <a href="">title</a>
                                                    </div>
                                                    <div className="gem-pp-posts-date">Content</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="widget">
                                        <h5 className="footer-title">Contact</h5>
                                        <div className="textwidget">
                                            <div role="form" className="wpcf7" id="wpcf7-f4-o1" lang="en-FR" dir="ltr">
                                                <form method="post" className="wpcf7-form" noValidate="novalidate">
                                                    <div className="contact-form-footer">
                                                        <p>
                                                            <span className="wpcf7-form-control-wrap your-first-name">
                                                                <input type="email" name="email"  size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Votre email" />
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span className="wpcf7-form-control-wrap your-first-name">
                                                                <input type="text" name="title"  size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Votre titre" />
                                                            </span>
                                                        </p>
                                                       
                                                        <p>
                                                            <span className="wpcf7-form-control-wrap your-message">
                                                                <textarea name="content" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Votre message"></textarea>
                                                            </span>
                                                        </p>
                                                        <div>
                                                            <input type="submit" value="Envoyer" className="wpcf7-form-control wpcf7-submit" />
                                                            <span className="ajax-loader"></span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
                            <div className="widget widget_gallery gallery-grid-6">
                                <h5 className="footer-title">Notre galerie photos</h5>
                                <ul className="magnific-image">
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="magnific-anchor">
                                            <img src="https://www.judosavoie.com/wp-content/uploads/2019/02/IMAGE-JUDO-PROJECTION.jpg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="row-footer">
                        <div className="col-md-3">
                            <div className="footer-site-info">O'judo 2020 
                            <a href="#" target="_blank"> </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                                <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                                    
                                    <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27">
                                        <Link className="nav-link" to="/contact">Page de contact</Link>
                                    </li>
                                    <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28">
                                        <Link className="nav-link" to="/mentions-legales">Mentions légales</Link>
                                    </li>
                                    <li id="menu-item-29" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29">                                     
                                        <Link className="nav-link"  to="/developpeur">Nos développeurs</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-3">
                            <div id="footer-socials">
                                <div className="socials inline-inside socials-colored">
                                    <a href="#" title="Facebook" className="socials-item">
                                        <i className="fab fa-facebook-f facebook"></i>
                                    </a>
                                    <a href="#" title="Twitter" className="socials-item">
                                        <i className="fab fa-twitter twitter"></i>
                                    </a>
                                    <a href="#" title="Instagram" className="socials-item">
                                        <i className="fab fa-instagram instagram"></i>
                                    </a>
                                    <a href="#" title="Telegram" className="socials-item">
                                        <i className="fab fa-telegram telegram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
    
    

    )};

export default Footer;

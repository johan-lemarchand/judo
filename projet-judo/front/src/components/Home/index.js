import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {Link} from 'react-router-dom';

import Calendar from "../../containers/Calendar";
import Header from '../../containers/Header';
import Footer from "../Footer";
import Sponsors from "../../containers/Sponsors";

import "./style.scss";

const Home = ({ isLoading, events, dateObject, presIsLoaded, presInfo, articles, articlesIsLoaded, sponsorsIsLoaded }) => {
  const today = dateObject.format();
  const allEvents = events.map((evt) => moment(evt.date).format());
  allEvents.push(today);
  allEvents.sort();
  const i = allEvents.indexOf(today);
  const r = allEvents[i + 1];
  const show = events.find((e) => moment(e.date).format() == r);


  const articlesList = articles.slice(- 4, articles.length);

  return (
    <div>
      <Header />
      {isLoading && presIsLoaded && articlesIsLoaded && sponsorsIsLoaded? <div className="home-page">
         <div className="up">

          <div className="presandarticle">

            <div className="blog-card spring-fever">
            <Link className="nav-link" to="/presentation">
              <div className="title-content">
                <h3>Notre club</h3>
                <hr />
                <div className="intro">{presInfo[0].title}</div>
              </div>
              <div className="card-info">
                {presInfo[0].content}
              </div>
            </Link>  
            </div>




            <div className="wrap_articles">
              <div className="articles-title-div">
                <h2>Les derniers articles</h2>
              </div>
              
              <div className="articles-content-div">
                {articlesList.map((article) => (
                  <Link key={article.id} to="/actualite"><div className="tile">

                    <img src="http://54.166.4.90/projet-judo/back/public/uploads/articles/images-2-5eaa8a6d8b1b7821556176.jpg" />
                    <div className="text">
                      <h1>{article.title}</h1>
                      <h2 className="animate-text">{moment(article.createdAt).format('D MMMM YYYY')}</h2>
                      <p className="animate-text">{article.content.substring(0, 120) + '...'}</p>
                    </div>  
  
                </div></Link>))}
              </div>
              
            </div>



          </div>


          <div className="eventsandnext">
            <div className="wrap_events">
              <div className="calendarContainer">
                <Calendar />
              </div>
            </div>

            <div className="organizerContainer">
              <div className="demo-card-image mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand"></div>
              </div>
              <div className="demo-card-event mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                  <h4>
                    Prochain événement:<br />
                    {moment(show.date).format('MMMM D, YYYY') + ','}<br />
                    {show.content}

                  </h4>
                </div>
              </div>
            </div>

          </div>
        <Sponsors />

        </div>
      </div> : 
        <div className="d-flex justify-content-center home__spinner">
        <div className="spinner-border home__spinner__border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> }
      
      
      <Footer />
    </div>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
  dateObject: PropTypes.object.isRequired,
  presIsLoaded: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
  articlesIsLoaded: PropTypes.bool.isRequired,
};

export default Home;



















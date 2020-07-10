import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NewsCard1 from './NewsCard1';
import NewsCard2 from './NewsCard2';

import Header from '../../containers/Header';
import Footer from '../Footer';

import './style.scss';
import './../Footer/raindrop';
import initNews from './article.js';


const News = ({list, content}) => {
  const filteredList1 = list.filter(card => (card.id %2 == 0 && card.id < 5));
  const filteredList2 = list.filter(card => (card.id %2 !== 0 && card.id < 5));
  console.log('content', content);
  useEffect ( () => { initNews()();} );
    return ( 
<div>
  <Header/>
  <div className="body_news">

    <div className="news-container">
      <div className="card-column column-0">
      {
      filteredList2.map((card) => (
        <NewsCard1 key={card.id} {...card} />
      ))
      }   
      </div>
      <div className="card-column column-1">
      {
      filteredList1.map((card) => (
        <NewsCard2 key={card.id} {...card} />
      ))
      }  
      </div>
    </div>

    <div id="cover" className="cover"></div>
      <div id="open-content" className="open-content">
        <a href="#" id="close-content" className="close-content"><span className="x-1"></span><span className="x-2"></span></a>
        <img id="open-content-image" src="" />
        <div className="text" id="open-content-text"></div>
      </div>
  </div>
  <div className="center">
    <div className="pagination">
      <a href="#">&laquo;</a>
      <a href="#" className="active">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
  <Footer/>
</div>
    );
  }
  
News.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
};

export default News;
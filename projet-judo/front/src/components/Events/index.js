import React from "react";
import PropTypes from "prop-types";
import moment from 'moment'
import { Map, Marker, TileLayer } from "react-leaflet";

import Header from '../../containers/Header';
import Footer from "../Footer";
import Calendar from "../../containers/Calendar";
import "./style.scss";




const Events = ({ zoom, coordinates, marker, eventInfos, isDisplay }) => {
  

  return (
  <div>
    <Header />


    <div className="event-container">
      <div className="event-calendar-table">
        <Calendar />
      </div>


     { isDisplay ? <div className="card-event-info">
              <div className="demo-card-image mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand"></div>
              </div>
              <div className="demo-card-event mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                  <h4>
                    Evénement: {eventInfos.title}<br />
                    {moment(eventInfos.date).format('D MMM YYYY')}<br/>
                    {eventInfos.place}<br />
                    {eventInfos.content}

                  </h4>
                </div>
              </div>
            </div> : ""}





      <Map center={[coordinates[1], coordinates[0]]} zoom={zoom}>
        <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
        contributors' />
        {marker ? <Marker position={[coordinates[1], coordinates[0]]}/> : ""}
      </Map>

    </div>


    <Footer />
  </div>
)};

Events.propTypes = {
  zoom: PropTypes.number.isRequired,
  coordinates: PropTypes.array.isRequired,
  marker: PropTypes.bool.isRequired,

};
export default Events;

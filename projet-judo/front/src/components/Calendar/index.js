import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';
import {v4 as uuid} from 'uuid';
import { MdEvent } from "react-icons/md";
import  {Link} from 'react-router-dom';

import Months from '../../containers/Months';
import Years from '../../containers/Years';

import './style.scss';

const Calendar = ({ dateObject, monthIsDisplayed, showMonth, yearIsDisplayed, showYear, handleDayClick, events, selectEvent, eventInfos }) => {

    moment.locale('fr');

    // mois
    const month = () => (dateObject.format("MMMM"));

    // année
    const year = () => (dateObject.format("Y"));

    // nom des jours de la semaine
    const weekDayName = (
        moment.weekdaysShort());

    // premier jour du mois
    const firstDayOfMonth = () => (
        moment(dateObject).startOf('month').format('d')
    );

    // zone de vide pour le début du mois
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<td key={i * 100} className="calendar-day empty" >{""}</td>);
    };

    // jour actuel
    const currentDay = () => (dateObject.format('D'));

    // nombre de jours dans le mois actuel
    const daysInMonth = [];
    for (let day = 1; day <= dateObject.daysInMonth(); day++) {
        let today = day == currentDay() ? "today" : "";
        let selectedDay = dateObject.format(`MM-${day}-${year()}`);
        let allEvent = events.map((evt) => (moment(evt.date).format('MM-D-YYYY')));
        let findEvent = allEvent.find(evt => evt == selectedDay);
        let eventInfos = events.find(evt => moment(evt.date).format('MM-D-YYYY') == selectedDay);
        let nextEvent = () => (selectedDay == findEvent ? <MdEvent /> : "");
        daysInMonth.push(
            <td key={day} className={`calendar-day ${today}`} onClick={() => { handleDayClick(selectedDay), selectEvent(eventInfos) }} ><span>{nextEvent()}</span> {day}</td>,
        );
    };

    // structure du calendrier (semaine)
    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });


    const allDaysInMonth = rows.map((day) => (
        <tr key={uuid()} className="calendar-table-body-row">{day}</tr> // probleme de key
    ));

    return (
        <div>
            <div className="calendar-container" >
                <div className="calendar-header1" >
                    <div className="calendar-header-title">
                        <div className="calendar-header-title-text">
                            <div className="calendar-month-year">
                                <span className="calendar-month-hover" onClick={showMonth} > {month()} </span>
                                <span className="calendar-year-hover" onClick={showYear}> {year()} </span>
                            </div>
                            <span className="calendar-today">{moment().format('dddd DD MMMM')}</span>
                        </div>
                    </div>
                </div>
                {monthIsDisplayed && <Months />}
                {yearIsDisplayed && <Years />}
                <div className="calendar-content1" >
                    <table className="calendar-table1" >
                        <thead className="calendar-table-header">
                            <tr className="calendar-table-header-row">
                                {
                                    weekDayName.map(day => (
                                        <th key={day} className="calendar-table-header-col" > {day} </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody className="calendar-table-body">
                            {allDaysInMonth}
                        </tbody>
                    </table>
                </div>
            </div>
            {eventInfos ? <Link to="/evenements"><div className="calendar-footer">
            <div className="calendar-footer-title">
                <h4 className="calendar-footer-title-text">{eventInfos.title}</h4>
                <p className="calendar-footer-text" >{eventInfos.place}</p>
                <p className="calendar-footer-text" >{eventInfos.content}</p>
                </div>
            </div></Link>
                : <div className="calendar-footer">
                    <div className="calendar-footer-title">
                        <h4 className="calendar-footer-title-text">Aucun événement à ce jour</h4>
                    </div>
                </div>}
        </div>
    )
};

Calendar.propTypes = {
    dateObject: Proptypes.object.isRequired,
    monthIsDisplayed: Proptypes.bool.isRequired,
    showMonth: Proptypes.func.isRequired,
    yearIsDisplayed: Proptypes.bool.isRequired,
    showYear: Proptypes.func.isRequired,
    handleDayClick: Proptypes.func.isRequired,
    events: Proptypes.array.isRequired,
    selectEvent: Proptypes.func.isRequired,
    eventInfos: Proptypes.object.isRequired,

};


export default Calendar;
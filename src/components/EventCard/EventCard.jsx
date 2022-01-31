import React from 'react';
import editIcon from "../../assets/images/edit-icon.svg";
import binIcon from "../../assets/images/bin-icon.svg";
import "./EventCard.scss";

const EventCard = (props) => {
   const { eventName, series, date, time, location, URL } = props;

   return (
      <div className="eventCard">
         <h5 className='eventCard-title'>{eventName}</h5>
         <p className="eventCard-series">{series}</p>
         <p className="eventCard-time">{date}</p>
         <p className="eventCard-time">{time}</p>
         <p className="eventCard-location">{location}</p>
         <p className="eventCard-URL">{URL}</p>
         <div className="eventCard__icons">
            <img className="eventCard-icon" src={editIcon} alt="edit button" />
            <img className="eventCard-icon" src={binIcon} alt="bin button" />
         </div>
      </div>
   )
}

export default EventCard

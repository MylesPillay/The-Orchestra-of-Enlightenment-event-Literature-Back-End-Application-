import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.scss";
import eventsHomeIcon from "../../assets/images/carbon-home.svg";
import eventsListIcon from "../../assets/images/calendar-icon.svg";
import bandMemberIcon from "../../assets/images/music-note-icon.svg";

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/" style={({ isActive }) => ({
                backgroundColor: isActive ? '#f8f8f8' : 'transparent',
                borderRight: isActive ? '2px solid #f97850' : 'none'
            })}><img className="nav__icon" src={eventsHomeIcon} alt="event icon"  /></NavLink>
            <NavLink to="/events" style={({ isActive }) => ({
                backgroundColor: isActive ? '#f8f8f8' : 'transparent',
                borderRight: isActive ? '2px solid #f97850' : 'none'
            })}><img className="nav__icon" src={eventsListIcon} alt="event list icon" /></NavLink>
            <NavLink to="/orchestra" style={({ isActive }) => ({
                backgroundColor: isActive ? '#f8f8f8' : 'transparent',
                borderRight: isActive ? '2px solid #f97850' : 'none'
            })}><img className="nav__icon" src={bandMemberIcon} alt="orchestra icon" /></NavLink>
            
        </nav >
    )
}

export default Nav;
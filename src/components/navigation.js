import { NavLink } from 'react-router-dom';
import React from 'react';

import './navigation.css';

function Navigation() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="./">Software Journeys</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>        
    );    
}

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/palmoIcon.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <Link to="/" id="logo-btn"> {/* Enlace a la página de inicio */}
                    <img src={logo} alt="logo de PALMO" />
                    <p>PALMO</p>
                </Link>
            </div>
            <div className="navButtons">
                <button className="navBar-btn" id="services-btn">Service</button>
                <Link to="/projects" className="navBar-btn" id="projects-btn">Projects</Link>
                <button className="navBar-btn" id="hire-us-btn">Hire Us</button>
            </div>
        </nav>
    );
}

export default Navbar;

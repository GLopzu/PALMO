import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="navbar-btn" id="logo-btn">Logo</button>
      <button className="navbar-btn" id="services-btn">Service</button>
      <button className="navbar-btn" id="projects-btn">Projects</button>
      <button className="navbar-btn" id="hire-us-btn">Hire Us</button>
    </nav>
  );
}

export default Navbar;
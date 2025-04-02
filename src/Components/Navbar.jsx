import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={"/images/nordvale-logo.png"} alt="horse icon" className="navbar-logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/horses">Horses</Link></li>
        <li><Link to="/lessons">Lessons</Link></li>
        <li><Link to="/bills">Bills</Link></li>
        <li><Link to="/horse-store">Horse Store</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

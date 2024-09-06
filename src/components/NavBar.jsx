import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/src/assets/images/cat.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Productpage">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li className="dropdown">
          <span className="dropdown-title">Menu</span>
          <ul className="dropdown-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Productpage">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

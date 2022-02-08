import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
    return ( 
        <div className="list">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="admin">Admin</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="notfound">Not Found</Link></li>
        </ul>
      </div>
     );
}
 
export default NavBar;
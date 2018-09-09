import React from 'react';
import * as logo from '../svg/logo.svg';

function Navbar() {
  return(
    <nav id="navbar">
      <ul className="container">
        <li id="navbar-logo">
          <a href="/">
            <img src={logo} alt="treehacks small logo"/>
            <span className="logo-text-tree">tree</span>
            <span className="logo-text-hacks">hacks</span>
          </a>
        </li>
        <li className="navbar-item"><a href="#home">home</a></li>
        <li className="navbar-item"><a href="#verticals">verticals</a></li>
        <li className="navbar-item"><a href="#about">about</a></li>
        <li className="navbar-item"><a href="#faq">faq</a></li>
        <li className="navbar-item"><a href="#sponsors">sponsors</a></li>
        <a href=""><li id="navbar-apply">apply now!</li></a>
      </ul>
    </nav>
  );
}

export default Navbar;
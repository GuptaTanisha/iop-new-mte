import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
        <p><a href="/">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="/contact">Contact Us</a></p>
          <p><a href="/home">Get Started</a></p>
          <p><a href="https://iop-evcs.netlify.app/">Become a host</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p><Link to="/signin">Sign in</Link></p>
        <p><Link to="/register">Register</Link></p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="/">Home</a></p>
            <p><a href="#wgpt3">About</a></p>
            <p><a href="/contact">Contact Us</a></p>
            <p><a href="/home">Get Started</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p><button onClick={handleClick} type="button">Register</button></p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

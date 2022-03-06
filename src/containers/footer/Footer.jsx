import React from 'react';
import './footer.css';
import { useNavigate } from "react-router-dom";

const Footer = () => {

    let navigate = useNavigate();
  const redirect = () => {
    navigate('/home')
  }
  return (
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p onClick={redirect}>Get Started</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        {/* <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p> */}
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>
  </div>
    )
};

export default Footer;

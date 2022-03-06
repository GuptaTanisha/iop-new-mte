import React from 'react';
import './cta.css';
import { useNavigate } from 'react-router-dom';
const CTA = () => {
  let navigate = useNavigate();
  const redirect = () => {
    navigate('/contact')
  }
  return(
    <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p> While we’re good with smoke signals, there are simpler ways for us to get in touch and answer your queries.</p>
      <h3>Feel free to ask any query. Our team will contact you ASAP!</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button onClick={redirect} type="button">Contact Us</button>
    </div>
  </div>
   )
};

export default CTA;

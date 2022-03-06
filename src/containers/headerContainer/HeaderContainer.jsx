import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import { useNavigate } from "react-router-dom";

const HeaderContainer = () => {
    let navigate = useNavigate();
  const redirect = () => {
    navigate('/home')
  }
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">India&apos;s Largest EV Charging Network</h1>
      <p>Find electric vehicle charging station near you, book a slot, digitally pay for charging car.</p>

      <div className="gpt3__header-content__input">
        <button onClick={redirect} type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  )
  };

export default HeaderContainer;

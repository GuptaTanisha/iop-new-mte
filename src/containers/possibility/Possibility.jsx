import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>You might be thinking about what a hosting of EV charging stations can do for your business, right? 
      But let me tell you that EVs are the future! As we know that petrol and diesel prices are only Electric 
      cars are undoubtedly an answer to a number of mobility and fuel related challenges that India is facing today.
       As we all know that petrol and diesel prices are hiked to 80.43 rupees/ltr and 80.53 rupees/ltr respectively, 
       which makes us at least think once that EV vehicles are worth buying.</p>
    </div>
  </div>
);

export default Possibility;

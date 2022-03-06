import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What are we doing?" text="Our network consists of both car chargers and bike chargers. Find smart public EV chargers at parking places such as office spaces, shopping malls, residential apartments, restaurant, hotels etc." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">MAKING THE WORLD CLEANER AND GREENER</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Better For Our Planet" text="One of the biggest advantages of driving EVs is the impact on our environment. " />
      <Feature title="Less noise" text="EVs are much quieter than petrol and diesel vehicles." />
      <Feature title="Better driving" text="EVs have more responsive acceleration and regenerative braking when easing off the accelerator." />
    </div>
  </div>
);

export default WhatGPT3;

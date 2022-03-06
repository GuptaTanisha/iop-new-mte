import React,{useEffect,useState} from 'react';
import CTA from '../components/cta/CTA';
import Navbar from '../components/navbar/Navbar';
import { Footer, Possibility, Features, WhatGPT3, HeaderContainer } from '../containers';
import './Startscreen.css';

const Startscreen = () => {
    return (
<div className="App">
    <div className="gradient__bg">
      <Navbar />
      <HeaderContainer />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Footer />
  </div>
    )
}

export default Startscreen;
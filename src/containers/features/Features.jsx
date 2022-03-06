import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'ELECTRIC VEHICLE SUPPLY EQUIPMENT (EVSE)',
    text: 'It refers to the supply of electricity  to an electric vehicle (EV), commonly called “charging stations” or “charging docks”. In simple terms, an EVSE is a wall mounted box that supplies electric energy for the recharging of electric vehicle batteries.',
  },
  {
    title: 'CHARGING PROTOCOLS',
    text: 'The Electric Vehicle Charging Protocol allows the use of a single inductive charger by multiple EV Charging Protocols define the type of Connector that goes into vehicle inlet, max power and voltage for the connection, communication protocols, and type of the communication link.',
  },
  {
    title: 'What is Ac Charging?',
    text: 'AC(Alternating current) charging is the most common charging method for electric vehicles with a plug. When plugging an electric vehicle into a normal charge point, the power gets converted inside the vehicle, then moves into the car battery. Charging speeds depend on the output power of the chargepoint as well as the convertor’s capabilities to convert the power to DC.',
  },
  {
    title: 'What is Dc Charging?',
    text: 'DC(Direct Current) charging can transform alternating current (AC) to direct current (DC) itself, then it bypasses the onboard charger of an electric car and sends this current directly to the battery.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container textContainer">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

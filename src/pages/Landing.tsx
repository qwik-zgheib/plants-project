import React from 'react';
import '../styles/Landing.component.css';

const Landing: React.FC = () => {
  return (
    <div className="img">
      <p>Welcome to PlantsAPI</p>
      <div>
        <p>
          Discover the fascinating world of plants with our application. Immerse yourself in natural beauty and learn how to care for your plants
          effective way.
        </p>
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default Landing;

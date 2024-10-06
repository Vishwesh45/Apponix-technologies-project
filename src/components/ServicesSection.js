import React from 'react';
import { Link } from 'react-router-dom';
import './HomeServicesSection.css';

const ServicesSection = () => {
  return (
    <div className="homepage-services-section" id="homepage-services">
      <h1>Our Services</h1>
      <br />
      <div className="homepage-service-cards">
        <div className="homepage-service-card">
          <h3>App Development</h3>
          <p>Custom mobile applications to enhance user engagement.</p>
        </div>
        <div className="homepage-service-card">
          <h3>Software Development</h3>
          <p>Robust software solutions to streamline your operations.</p>
        </div>
        <div className="homepage-service-card">
          <h3>Web Development</h3>
          <p>Responsive websites to elevate your online presence.</p>
        </div>
       
      </div>
      <Link to="/services" className="homepage-cta-button">
        Know More
      </Link>
    </div>
  );
};

export default ServicesSection;

import React from 'react';
import { Link } from 'react-router-dom';
import ServicesSection from './ServicesSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDollarSign, faUsers, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons'; 
import './HeroSection.css';

const HeroSection = () => {
  const heroStyle = {
    height: '90vh',
    backgroundImage: 'url("/images/app3.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
  };

  const aboutStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 20px',
    textAlign: 'left',
  };

  const textColumnStyle = {
    flex: '1',
    padding: '20px',
  };

  const imageColumnStyle = {
    flex: '1',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const whyChooseUsStyle = {
    padding: '40px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };

  const iconStyle = {
    fontSize: '2.5rem', 
    marginBottom: '15px',
  };

  const cardStyle = {
    flex: '1 0 40%',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center', 
  };

  const quoteStyle = {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    margin: '40px 0 20px 0',
    color: ' #167bb1', // Blue color
    lineHeight: '1.6',
    textAlign: 'center',
    padding: '10px 20px',
    borderLeft: '4px solid #f0a500',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };
  
  

  const ctaContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0', // Add some margin for spacing
  };

  const consultSentenceStyle = {
    marginBottom: '20px', // Space between the sentence and the button
    fontSize: '1.2rem', // Slightly larger font for emphasis
  };

  const ctaButtonStyle = {
    padding: '10px 20px',
    backgroundColor: ' #167bb1',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem', // Adjust font size for better visibility
  };
  const welcomeTextStyle = {
    marginTop: '10vh', // Move text slightly down
    fontSize: '2.5rem', // Increased font size
  };
  const subTextStyle = {
    marginTop:'10px',
    fontSize: '1.2rem',
  };
  

  return (
    <div>
      <div style={heroStyle}>
      <h1 className="fade-in-up" style={welcomeTextStyle}>
          Welcome to Apponix Technologies
        </h1>
        <p className="fade-in-up-delay" style={subTextStyle}>
          Your partner in app, software, and web development.
        </p>
      </div>

      <div style={aboutStyle} id="about">
        <div style={textColumnStyle}>
          <h1>About Us</h1> <br />
          <p>
            At Apponix Technologies, we believe in harnessing the power of technology to transform ideas into reality.
            Our expert team specializes in app, software, and web development, ensuring that every project is executed with
            precision and creativity. We pride ourselves on our innovative solutions that cater to various industries,
            helping our clients stay ahead in an ever-evolving digital landscape. Our commitment to excellence drives us
            to constantly improve and adapt, making us a reliable partner for all your development needs.
          </p>
          <p>
            Our collaborative approach and dedication to client satisfaction allow us to understand your unique
            requirements, resulting in tailored solutions that deliver real value. Whether you are a startup
            looking to launch your first product or an established business aiming to optimize your digital presence,
            Agonix Technologies is here to help.
          </p>
          <br /><br /><br />
          <Link to="/about" className="cta-button" style={{ textDecoration: 'none', marginTop: '20px' }}>
            Know More
          </Link>
        </div>
        <div style={imageColumnStyle}>
          <img src="/images/app2.jpg" alt="About Us" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <ServicesSection />

      <div style={whyChooseUsStyle} id="why-choose-us">
        <h1>Why Choose Us</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', flexWrap: 'wrap' }}>
          
          {/* Quality Services */}
          <div style={cardStyle}>
            <FontAwesomeIcon icon={faStar} style={{ ...iconStyle, color: '#FFD700' }} />
            <h3>Quality Services</h3>
            <p>We ensure that all our services are delivered with the highest quality, meeting international standards and client expectations.</p>
          </div>

          {/* Affordable Prices */}
          <div style={cardStyle}>
            <FontAwesomeIcon icon={faDollarSign} style={{ ...iconStyle, color: '#28a745' }} />
            <h3>Affordable Prices</h3>
            <p>Our pricing models are designed to be competitive while providing the best value for our clients' investment.</p>
          </div>

          {/* Experienced Team */}
          <div style={cardStyle}>
            <FontAwesomeIcon icon={faUsers} style={{ ...iconStyle, color: '#007bff' }} />
            <h3>Experienced Team</h3>
            <p>Our team consists of industry experts with years of experience, ensuring that your project is in capable hands.</p>
          </div>

          {/* Timely Delivery */}
          <div style={cardStyle}>
            <FontAwesomeIcon icon={faClock} style={{ ...iconStyle, color: '#17a2b8' }} />
            <h3>Timely Delivery</h3>
            <p>We value your time and guarantee that all projects are delivered on or before the deadline.</p>
          </div>

          {/* Client Satisfaction */}
          <div style={cardStyle}>
            <FontAwesomeIcon icon={faThumbsUp} style={{ ...iconStyle, color: '#6f42c1' }} />
            <h3>Client Satisfaction</h3>
            <p>Your satisfaction is our priority, and we work closely with you to ensure your expectations are not just met but exceeded.</p>
          </div>
        </div>
      </div>

      {/* New Quote and CTA Section */}
      <div style={ctaContainerStyle}>
        <div style={quoteStyle}>
        "Technology is best when it brings people together." – Matt Mullenweg
        </div><br/>
        <div style={consultSentenceStyle}>
          Ready to take your next project to the next level? Book or consult with us today!
        </div>
        <Link to="/contact" style={ctaButtonStyle}>
          Contact Us
        </Link><br/>
      </div>
    </div>
  );
};

export default HeroSection;

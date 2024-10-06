import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left section with company details */}
        <div className="footer-left">
          <h2>Apponix Technologies</h2>
          <p>
            Rajajinagar, Bangalore (Head Office) <br />
            Apponix Technologies Private Limited <br />
            #306, 10th Main, 46th Cross, <br />
            4th Block Rajajinagar, <br />
            Bangalore - 560010 <br />
            <br />
            Phone: <a href="tel:+918050580888">+91-8050580888</a> <br />
            Email: <a href="mailto:info@apponix.com">info@apponix.com</a>
          </p>
        </div>

        {/* Middle section with logo placeholder */}
        <div className="footer-middle">
          {/* Placeholder for logo, you can replace with actual logo */}
          <img
            src="/images/logo.jpg"
            alt="Apponix Logo"
            style={{ width: '120px', height: 'auto' }}
          />
        </div>

        {/* Right section with follow us and social media links */}
        <div className="footer-right">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/apponix" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/apponix" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/apponix" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/apponix_technologies" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/apponix/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal links section */}
      <div className="footer-bottom">
        <ul className="footer-links-horizontal">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <p>© {new Date().getFullYear()} Apponix Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

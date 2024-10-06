// src/components/Contact.js

import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">We’d love to hear from you! Fill out the form below or email us directly.</p>

      {/* Contact Form */}
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Phone Number" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {/* Underline after the form */}
      <div className="underline"></div>

      {/* Get in Touch Section */}
      <div className="get-in-touch">
        <h3 className="get-in-touch-heading">Get in Touch</h3>
        <div className="contact-content">
          <img src="/images/getin.jpg" alt="Get in Touch" className="contact-image" />
          <div className="contact-details">
            <div className="contact-method">
              <a href="tel:+91-8050580888" className="contact-link"><FaPhoneAlt />+91-8050580888</a>
            </div>
            <div className="contact-method">
              <a href="https://wa.me/+91-8050580888" target="_blank" rel="noopener noreferrer" className="contact-link"><FaWhatsapp /> +91-8050580888</a>
            </div>
            <div className="contact-method">
              <a href="mailto:info@apponix.com" className="contact-link"><FaEnvelope /> info@apponix.com</a>
            </div>
            <div className="contact-method">
              <a href="https://www.instagram.com/apponixacademy" target="_blank" rel="noopener noreferrer" className="contact-link"><FaInstagram /> @apponixacademy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <h3 className="location-heading">Our Location</h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.741720232493!2d77.5556395!3d12.9883645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8cacdde0c3%3A0xe2047cf1c6daffee!2sApponix%20Academy!5e0!3m2!1sen!2sin!4v1727452759374!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
};

export default Contact;

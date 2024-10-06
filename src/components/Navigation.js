import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navigation.css'; // Create a separate CSS file for styling

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="web-design" smooth={true} duration={500}>Web Design</Link>
        </li>
        <li>
          <Link to="app-development" smooth={true} duration={500}>App Development</Link>
        </li>
        <li>
          <Link to="software-development" smooth={true} duration={500}>Software Development</Link>
        </li>
        <li>
            <Link to="content-marketing" smooth={true} duration={500}>Content Marketing</Link>
          </li>
          <li>
            <Link to="content-creation" smooth={true} duration={500}>Content Creation</Link>
          </li>
          <li>
            <Link to="graphic-design" smooth={true} duration={500}>Graphic Design</Link>
          </li>
       
      </ul>
    </nav>
  );
};

export default Navigation;

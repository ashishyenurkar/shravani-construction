'use client'
import React from 'react';
import './Footer.css'; // Import CSS file for styling
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-logo">
        <img className='' src="./sc_logo.jpeg" alt="Company Logo" />
      </div>
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Office No.106, Aditya Vardhan Heights,<br/>Vadgaon Chowck Maval, Talegaon Dabhade, MH 410507</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-social-icons">
          <a href="#"><FacebookOutlinedIcon/></a>
          <a href="#"><EmailIcon/></a>
          <a href="#"><InstagramIcon/></a>
        </div>
      </div>
     
      <p className="footer-copyright">&copy; 2024 Shravani Construction. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

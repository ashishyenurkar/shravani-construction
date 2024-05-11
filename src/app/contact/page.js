import React from 'react';
import './ContactUs.css'; // Import your CSS file
import Header from '../header/page';
import Footer from '../Footer/page';

function ContactUs() {
  return (
    <>
    <Header/>
    <div className="contact-us-container">

    <div className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
   
      <div className="contact-info">
       
        <div className="address">
          <h2>Our Address</h2>
          <p>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
       
      </div>
   
    </div>
    <div className="google-map">
          {/* Include Google Maps iframe here */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0211632098987!2d-73.98138448459269!3d40.73061087023739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b251d4e793%3A0xf421865d08d18f64!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1634684641613!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    <Footer/>
    </>
  );
}

export default ContactUs;

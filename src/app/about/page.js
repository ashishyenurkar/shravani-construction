import React from 'react';
import './AboutUs.css'; // Import your CSS file
import Header from '../header/page';
import Footer from '../Footer/page';
import Image from 'next/image';


function AboutUs() {
  return (
    <>
    <Header/>
    <div className="about-us-container">
      <div className="owner-info">
        <Image  src="https://businessingmag.com/cms/wp-content/uploads/2017/12/small-business-must-have-tools.jpg" alt="Owner" className="owner-image" />
        <div className="owner-details">
          <h2>John Doe</h2>
          <p>Founder & CEO</p>
        </div>
      </div>
      <div className="company-info">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada felis nec justo dictum, at fermentum mi facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed volutpat nisl ac magna eleifend, non ultricies turpis placerat.</p>
        <p>Nulla facilisi. Mauris pretium orci et felis ultrices, ut ultrices libero aliquet. Duis fermentum tristique orci, vel pulvinar nunc placerat ut. Quisque dapibus orci et erat tincidunt, sed dapibus magna euismod. Aliquam euismod sem sed mauris efficitur, nec venenatis est scelerisque.</p>
        <p>Aenean vestibulum tellus non lacinia tempor. Integer nec urna ut elit tincidunt lacinia vel vel purus. Curabitur eget magna sed velit finibus laoreet.</p>
        <div className="address">
          <h2>Our Address</h2>
          <p>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;

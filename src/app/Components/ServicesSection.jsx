import React from 'react';
import './ServicesSection.css'; // Import CSS file for styling
import Image from 'next/image';

function ServicesSection() {
  return (
    <div className="servicSection">
       <h2 className="section-heading">Our Services</h2>
    <div className="services-section">
     
      <div className="service">
        <Image  src="https://cdn.wallpapersafari.com/81/52/HZTyQw.jpg" alt="Service 1" />
        <div className="serviceContent">
        <h3>Service 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
       
      </div>
      <div className="service">
        <Image  src="https://getwallpapers.com/wallpaper/full/b/0/b/745699-amazing-construction-wallpapers-2048x2048-windows.jpg" alt="Service 2" />
        <div className="serviceContent">
        <h3>Service 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="service">
        <Image  src="https://jslconstruction.co.uk/wp-content/uploads/2020/08/FB_Image _1597754800758.jpg" alt="Service 3" />
        <div className="serviceContent">
        <h3>Service 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="service">
        <Image  src="https://tentsllc.com/wp-content/uploads/2020/03/720x600-web-Image -construction.jpg" alt="Service 4" />
        <div className="serviceContent">
        <h3>Service 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ServicesSection;

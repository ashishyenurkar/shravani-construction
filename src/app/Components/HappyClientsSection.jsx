import React from 'react';
import './HappyClientsSection.css'; // Import CSS file for styling
import Image from 'next/image';

function HappyClientsSection() {
  return (
    <div className="happy-clients-section">
      <h2 className="section-heading">Our Happy Clients</h2>
      <div className="client-logos">
        <Image  src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg" alt="Client Logo 1" />
        <Image  src="https://graphicsfamily.com/wp-content/uploads/2020/07/How-to-Make-Finance-Company-Logo-in-Photoshop-2048x1152.jpg" alt="Client Logo 2" />
        <Image  src="https://graphicsfamily.com/wp-content/uploads/2020/08/Company-Logo-Design-Template.jpg" alt="Client Logo 3" />
        {/* Add more client logos as needed */}
      </div>
    </div>
  );
}

export default HappyClientsSection;

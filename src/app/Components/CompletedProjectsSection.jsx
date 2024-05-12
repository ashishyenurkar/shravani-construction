import React from 'react';
import './CompletedProjectsSection.css'; // Import CSS file for styling
import Image from 'next/image';

function CompletedProjectsSection() {
  return (
    <div className="completed-projects-section">
      <h2 className="section-heading">Our Completed Projects</h2>
      <marquee className="project-scroll" behavior="scroll" direction="left" scrollamount="5">
        <div className="project">
          <Image src="https://ktgy.com/wp-content/uploads/2017/10/The-Theo-2.jpg" alt="Project 1" />
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <Image  src="http://nemanigroup.in/images/banner/projects.png" alt="Project 2" />
          <p>Description of Project 2</p>
        </div>
        <div className="project">
          <Image  src="https://www.dptconstructionca.com/app/uploads/2015/01/1A12.jpg" alt="Project 3" />
          <p>Description of Project 3</p>
        </div>
        {/* Add more projects as needed */}
      </marquee>
    </div>
  );
}

export default CompletedProjectsSection;

import React from 'react';
import './ExpertTeamSection.css'; // Import CSS file for styling
import Image from 'next/image';

function ExpertTeamSection() {
  return (
    <div className="expert-team-section">
      <h2 className="section-heading">Our Expert Team</h2>
      <div className="team-members">
        <div className="team-member">
          <Image  src="https://Image .freepik.com/premium-photo/working-as-civil-engineer_891336-4561.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Project Manager</p>
        </div>
        <div className="team-member">
          <Image  src="https://thumbs.dreamstime.com/b/portrait-civil-engineer-serious-working-inspection-construction-house-project-architect-use-bim-ar-technology-digital-274533043.jpg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Architect</p>
        </div>
        <div className="team-member">
          <Image  src="https://thumbs.dreamstime.com/z/professional-civil-engineer-working-documents-drawings-office-caucasian-architect-studying-floor-plan-serious-confident-175071125.jpg" alt="Team Member 3" />
          <h3>Mike Johnson</h3>
          <p>Construction Engineer</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
}

export default ExpertTeamSection;

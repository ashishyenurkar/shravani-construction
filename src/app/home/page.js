import React from 'react'
import SliderBanner from '../Components/SliderBanner';
import ServicesSection from '../Components/ServicesSection';
import CompletedProjectsSection from '../Components/CompletedProjectsSection';
import ExpertTeamSection from '../Components/ExpertTeamSection';
import HappyClientsSection from '../Components/HappyClientsSection';

function Home_page() {
  return (
    <div>
      <SliderBanner/>
      <ServicesSection/>
      <CompletedProjectsSection/>
      <ExpertTeamSection/>
      <HappyClientsSection/>
    </div>
  )
}

export default Home_page;
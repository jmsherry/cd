import React from 'react';

// Import Components
import Jumbotron from './../../components/Jumbotron/Jumbotron';
import AboutUs from './../../components/AboutUs/AboutUs';
import Steps from './../../components/Steps/Steps';
import Testimonials from './../../components/Testimonials/Testimonials';

export default function HomePage() {
  return (
    <div>
      <Jumbotron />
      <AboutUs />
      <Steps />
      <Testimonials />
    </div>
  );
}

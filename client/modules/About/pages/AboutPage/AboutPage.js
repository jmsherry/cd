import React from 'react';

// Import Components
import Blurb from './components/Blurb/Blurb';
import ImgDivider from './../../../../components/ImgDivider/ImgDivider';
import Values from './components/Values/Values';

export default function AboutPage() {
  return (
    <div>
      <Blurb />
      <ImgDivider />
      <Values />
    </div>
  );
}

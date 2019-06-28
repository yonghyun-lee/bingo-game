import React from 'react';
import LandingHeader from "../LandingHeader/LandingHeader";
import LandingPlayer from "../LandingPlayer/LandingPlayer";
import './LandingTemplate.scss';

const LandingTemplate = (props) => {
  return (
    <div className="LandingTemplate">
      <LandingHeader/>
      <LandingPlayer/>
    </div>
  );
};

export default LandingTemplate;

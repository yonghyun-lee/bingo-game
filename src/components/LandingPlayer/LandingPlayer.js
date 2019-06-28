import React from 'react';
import './LandingPlayer.scss'
import {Link} from "react-router-dom";

const LandingPlayer = () => (
  <div className="LandingPlayer">
    <Link to="/play/1">1 player</Link>
    <Link to="/play/2">2 player</Link>
  </div>
);

export default LandingPlayer;

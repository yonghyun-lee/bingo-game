import React from 'react';
import './LandingPlayer.scss'
import {Link} from "react-router-dom";

const LandingPlayer = () => (
  <div className="LandingPlayer">
    <Link to="/one">1 player</Link>
    <Link to="/two">2 player</Link>
  </div>
);

export default LandingPlayer;

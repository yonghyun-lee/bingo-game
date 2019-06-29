import React, {Component} from 'react';
import LandingHeader from "../LandingHeader/LandingHeader";
import LandingPlayer from "../LandingPlayer/LandingPlayer";
import './LandingTemplate.scss';
import {GameActions} from "../../store/actionCreators";

class LandingTemplate extends Component {

  componentWillMount() {
    GameActions.gameInit();
  }


  render() {
    return (
      <div className="LandingTemplate">
        <LandingHeader/>
        <LandingPlayer/>
      </div>
    );
  }
}

export default LandingTemplate;

import React from 'react';
import './PlayTemplate.scss';
import BingoHeader from "../PlayHeader/BingoHeader";
import OnePlayerGame from "../OnePlayerGame/OnePlayerGame";

const PlayTemplate = (props) => {
  return (
    <div className="PlayTemplate">
      <BingoHeader player={props.playerNum}/>
      <OnePlayerGame/>
    </div>
  );
};

export default PlayTemplate;
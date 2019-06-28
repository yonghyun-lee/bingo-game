import React from 'react';
import './PlayTemplate.scss';
import BingoHeader from "../BingoHeader/BingoHeader";

const PlayTemplate = (props) => {
  return (
    <div className="PlayTemplate">
      <BingoHeader player={props.playerNum}/>
    </div>
  );
};

export default PlayTemplate;